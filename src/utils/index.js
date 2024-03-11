const mongoose = require('mongoose')

mongoose.set("strictQuery", true);

const connect = (uri) => {
  mongoose
    .connect(uri, {})
    .then((res) => console.warn("\r\n🔗服务器连接成功🏅️\r\n"))
    .catch((err) => console.error("\r\n服务器连接☹失败️\r\n", err));
};

const connectDB = () =>
  connect(
    "mongodb://127.0.0.1:27017/didiStudio?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2&replicaSet=rs0"
  );

const run = (data, message = "成功", status = 200) => {
  return {
    data,
    message,
    status,
  };
};
module.exports = {
  connectDB,
  run
}
