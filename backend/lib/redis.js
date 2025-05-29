import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// Add error handling for Redis connection
redis.on("error", (err) => {
  console.error("[Redis] Connection error:", err);
});
