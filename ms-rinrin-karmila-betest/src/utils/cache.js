const redis = require("redis");

// Buat klien Redis
const redisClient = redis.createClient({ host: redisHost, port: redisPort });


// Tangani koneksi Redis
redisClient.on("error", function (err) {
  console.error("Error Redis: ", err);
});
