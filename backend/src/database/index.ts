import { connect } from "mongoose";

export const connectToDatabase = async () => {
  await connect(
    "mongodb://admin:iwEuo6f17Dq2hoal@ac-7yibc2u-shard-00-00.8k3n9aj.mongodb.net:27017,ac-7yibc2u-shard-00-01.8k3n9aj.mongodb.net:27017,ac-7yibc2u-shard-00-02.8k3n9aj.mongodb.net:27017/?authSource=admin&tls=true&appName=Cluster0"
  );
};
