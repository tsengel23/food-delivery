import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://admin:iwEuo6f17Dq2hoal@cluster0.8k3n9aj.mongodb.net/?appName=Cluster0"
  );
};
