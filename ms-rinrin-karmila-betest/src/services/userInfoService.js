const UserInfo = require('../models/userInfoModel');
const { v4: uuidv4 } = require("uuid");
const cache = require('./cacheService');

class UserInfoService {
    async createUserInfo(dataUser) {
        const { nanoid } = await import("nanoid");
        dataUser.registrationNumber = uuidv4();
        dataUser.accountNumber = nanoid();
        dataUser.userId = nanoid();

        console.log(`UserInfoservicessssss ${dataUser}`);

        const userInfo = new UserInfo(dataUser);
        const savedUserInfo = await userInfo.save();
        // cache.saveUserInfoToCache(savedUserInfo.userId, savedUserInfo);
        
        console.log(`UserInfoservicessssss ${userInfo}`);
        return await savedUserInfo;
    }

  async getUserByID(userId) {
    return await UserInfo.findById(userId);
  }

  async updateUser(userId, dataUser) {
    return await UserInfo.findOneAndUpdate(userId, dataUser, {
      new: true,
    });
  }

  async deleteUser(userId) {
    return await userInfo.findOneAndDelete(userId);
  }
}

module.exports = new UserInfoService();