const mongoose = require("mongoose");
const Message = require("../models/Message");
const User = require("../models/User");

exports.getMessages = async (req, res) => {
  const { id } = req.params;
  const messages = await Message.find({ chatroom: id });
  const result = [];
  const promises = messages.map(async (message) => {
    const userFind = await User.findOne({ _id: message.user });
    const payload = {
      message: message.message,
      name: userFind.name,
      userId: message.user,
    };
    result.push(payload);
  });
  await Promise.all(promises);

  res.json(result);
};
