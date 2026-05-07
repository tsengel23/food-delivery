import "dotenv/config";

// Бүх environment variable-уудыг нэг газраас ашиглана
// .env файлаас уншиж, type-safe байдлаар export хийнэ
export const config = {
  port: process.env.PORT || 4000,
  mongodbUri: process.env.MONGODB_URI || "",
  jwt: {
    secret: process.env.JWT_SECRET || "fallback-secret",
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  },
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
};

// Заавал байх ёстой variable-уудыг шалгана
const required = ["MONGODB_URI", "JWT_SECRET"];
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
}
