const userInfoService = require("../services/userInfoService");

class UserInfoController {
  async createUserInfo(req, res) {
    try {
      const payload = {
        fullName: req.body.fullName,
        emailAddress: req.body.emailAddress,
      };
      const userInfo = userInfoService.createUserInfo(payload);

      res.status(201).json(userInfo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async getUser(req, res) {
    try {
      const user = await userInfoService.getUser(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async updateUser(req, res) {
    try {
      const user = await userInfoService.updateUser(
        req.params.userId,
        req.body
      );
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await userInfoService.deleteUser(req.params.userId);
      if (!user) {
        return res.status(404).json({ error: "user not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserInfoController();