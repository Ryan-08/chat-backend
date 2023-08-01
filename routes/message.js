const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandler");
const messageController = require("../controllers/messageController");

const auth = require("../middlewares/auth");

router.get("/:id", catchErrors(messageController.getMessages));

module.exports = router;
