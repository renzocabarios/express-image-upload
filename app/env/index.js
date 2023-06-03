import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT || 9000,
  MONGO_CON:
    process.env.MONGO_CON ||
    "mongodb://localhost:27017/sample?directConnection=true",
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || "",
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || "",
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || "",
};

export default ENV;
