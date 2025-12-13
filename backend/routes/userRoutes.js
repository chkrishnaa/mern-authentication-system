const express = require("express");
const userRouter = express.Router();
const { getUserData } = require("../controllers/userController");
const userAuth = require("../middlewares/userAuth");

userRouter.get("/data", userAuth, getUserData);

module.exports = userRouter;