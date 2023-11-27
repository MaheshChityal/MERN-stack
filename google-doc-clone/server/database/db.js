import mongoose from "mongoose";

const Connection = async (
  username = "chityalmahesh",
  password = "mahesh123"
) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.c6rtgvh.mongodb.net/google-docs-clone?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL);
    console.log("db conneted successfully");
  } catch (error) {
    console.log("Error while connecting with db", error);
  }
};

export default Connection;
