const accountService = require("../services/accountService")
const mongoose = require("mongoose");


class AccountController{
    async createAccount(req, res){
        try{
            const payload = {
              userName: req.body.userName,
              password: req.body.password
            };
            const account = await accountService.createAccount(payload);
           
            res.status(201).json(account)
       
        }catch(error){
            res.status(400).json({error:error.message});
        }
    };
    async getAccounts(req, res){
        const accounts = await accountService.getAccounts;
        res.json(accounts);
    }
    async getAccountByID(req, res){
         try {
            const accountId = req.params.accountId;
           const account = await accountService.getAccountByID(accountId);
            console.log(`getaccountByid ${account}`);
            console.log(`params ${req.params.accountId}`);
           if (!account) {
             return res.status(404).json({ error: "Account not found" });
           }
           res.json(account);
         } catch (error) {
           res.status(400).json({ error: error.message });
         }
    };
    async updateAccount(req, res) {
        try {
        const payload = {
            userName: req.body.userName,
            password:req.body.password
        }
        const account = await accountService.updateAccount(
          req.params.accountId,
          payload
        );
        if (!account) {
            return res.status(404).json({ error: 'Account not found' });
        }
        res.json(account);
        } catch (error) {
        res.status(400).json({ error: error.message });
        }
    }

  async deleteAccount(req, res) {
    try {
      const account = await accountService.deleteAccount(req.params.accountId);
      if (!account) {
        return res.status(404).json({ error: 'Account not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

}
module.exports = new AccountController();