const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.send("Hello, express");
});

app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(app.get("port"), () => {
  console.log(
    app.get("port"),
    "번 포트에서 실행중"
  );
});
