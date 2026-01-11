const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const router = express.Router()

// user api

router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)
router.post("/logout", authController.logOut)
router.put("/change-password", authMiddleware, authController.changePassword)

module.exports = router