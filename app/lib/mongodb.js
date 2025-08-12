import mongoose from "mongoose";

let isConnected = false; // global connection state

export async function connectDB() {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env.local");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "testdb", // change as needed
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}
