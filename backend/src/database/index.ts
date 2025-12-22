import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://admin:kvZnug7quTuf2qzW@cluster0.paobt6h.mongodb.net/?appName=Cluster0"
  );
};
