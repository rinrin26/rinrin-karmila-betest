const express = require("express");
const accountController = require("../controllers/accountController");

const router = express.Router();

router.post("/create", accountController.createAccount);
router.get("/accounts", accountController.getAccounts);
router.get("/:accountId", accountController.getAccountByID);
router.put("/:accountId", accountController.updateAccount);
router.delete("/:accountId", accountController.deleteAccount);

module.exports = router;