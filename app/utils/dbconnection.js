import mongoose from "mongoose";

export default async function dbconnection() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.URI);
  console.log("Connected to DB");
}
