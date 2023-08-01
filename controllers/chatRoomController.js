const mongoose = require("mongoose");
const ChatRoom = require("../models/ChatRoom");

exports.createChatRoom = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Chat Room Name can only contain alphabets";

  const chatroomExist = await ChatRoom.findOne({ name });

  if (chatroomExist) throw "Chat room already exist!";

  const chatroom = new ChatRoom({
    name,
  });

  await chatroom.save();

  res.json({
    message: "Chat room created...",
  });
};

exports.getAllChatRooms = async (req, res) => {
  const chatrooms = await ChatRoom.find({});

  res.json(chatrooms);
};
