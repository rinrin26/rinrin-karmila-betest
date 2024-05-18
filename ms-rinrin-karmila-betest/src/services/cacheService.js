const redis = require("redis");
const { redisHost, redisPort } = require("../../config");
const client = redis.createClient({ host: redisHost, port: redisPort });

client.on("error", (err) => {
  console.error("Redis error:", err);
});

class Cache{
    async saveUserInfoToCache  (userId, data)  {
        client.setex(userId, 3600, JSON.stringify(data)); 
    };

    async get (key) {
        try {
          const data = await promisify(client.get).bind(client)(key);
          return data;
        } catch (err) {
          console.error("Error getting data from Redis:", err);
          throw err;
        }
    }

    async set(key, value)  {
        try {
            await promisify(client.setex).bind(client)(key,value);
            return true;
        } catch (err) {
            console.error("Error setting data in Redis:", err);
            throw err;
        }
    }
}


module.exports = new Cache();