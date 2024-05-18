    const Account = require("../modelS/accountModel");
    const { v4: uuidv4 } = require("uuid");
    const mongoose = require("mongoose");


    class AccountService {
    async createAccount(accountData){
        const { nanoid } = await import("nanoid");
        accountData.userId = nanoid();
        accountData.accountId = uuidv4();

        const account = new Account(accountData);
        console.log(`accountservicessssss ${account}`);
        return await account.save();
    }

    async getAccounts(){
        const accounts = await Account.find();
        console.log(`all ${accounts}`)
        return accounts;
    }

    async getAccountByID(accountId){
        try {
          console.log(`accService getAccountId ${accountId}`);

          const account = await Account.findOne({ accountId });

          console.log(`accService getAccountId db ${account}`);

          return account;
        } catch (error) {
          console.error("Error in getAccountByID:", error);
          throw error;
        }
    }

    async updateAccount(accountId,accountData){
        console.log(`accService updateAccount  ${accountId} , ${accountData}`);
        return await Account.findOneAndUpdate( { accountId: accountId },accountData, {new: true});
    }

    async deleteAccount(accountId){
        try {
        console.log(`accService deleteAccount ${accountId}`);
  
          const deletedAccount = await Account.findOneAndDelete({ accountId });
            console.log(`accService deletedAccount ${deletedAccount}`);

         
          if (!deletedAccount) {
            throw new Error("Account not found");
          }

          return deletedAccount;
        } catch (error) {
   
          console.error("Error in deleteAccount:", error);
          throw error;
        }
    }
    }

    module.exports = new AccountService();