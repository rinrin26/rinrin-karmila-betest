const express = require("express");

const userInfoController = require("../controllers/userInfoController");

const router = express.Router();

router.post("/create", userInfoController.createUserInfo);
router.get("/:userId", userInfoController.getUser);
router.put("/:userId", userInfoController.updateUser);
router.delete("/:userId", userInfoController.deleteUser);


module.exports = router;
