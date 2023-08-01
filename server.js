// import dotenv
require("dotenv").config();

// setup mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log("mongoose connection error: ", err.message);
});

mongoose.connection.once("open", () => {
  console.log("mongoo db connected");
});
// Bring the models
require("./models/User");
require("./models/ChatRoom");
require("./models/Message");

const app = require("./app");
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log("App listen on port: ", PORT);
});

const io = require("socket.io")(server, {
  allowEIO3: true,
  cors: {
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const jwt = require("jwt-then");

const Message = mongoose.model("Message");
const User = mongoose.model("User");

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.query.token;
    // verify token
    const payload = await jwt.verify(token, process.env.SECRET);
    socket.userId = payload.id;

    next();
  } catch (error) {}
});

io.on("connection", (socket) => {
  console.log("Connected: " + socket.userId);

  socket.on("disconnect", () => {
    console.log("Disconnected from: " + socket.userId);
  });

  socket.on("joinRoom", ({ roomID }) => {
    socket.join(roomID);
    console.log(`User join room: ${roomID}`);
  });
  socket.on("leaveRoom", ({ roomID }) => {
    socket.leave(roomID);
    console.log(`User has been left room: ${roomID}`);
  });
  socket.on("chatroomMessage", async ({ roomID, message }) => {
    if (message.trim().length > 0) {
      const user = await User.findOne({ _id: socket.userId });
      const messages = new Message({
        chatroom: roomID,
        user: socket.userId,
        message,
      });
      io.to(roomID).emit("newMessage", {
        message,
        name: user.name,
        userId: socket.userId,
      });
      await messages.save();
    }
  });
});
