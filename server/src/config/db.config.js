import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoDBURI = process.env.MONGODB_URI;

    if (!mongoDBURI) {
      throw new Error('MONGODB_URI is not defined in your .env file');
    }

    // Mongoose 9.x handles connection options automatically
    const conn = await mongoose.connect(mongoDBURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
