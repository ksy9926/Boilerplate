import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// const io = require("socket.io");
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world!");
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("UserConnected", socket.id);

  socket.on("connected", (cookie) => {
    console.log("connected OK!!!");
    socket.emit("entrance-message", "i received your message!");
  });

  socket.on("disconnect", () => {
    console.log("UserDisconnected");
  });

  socket.on("chat-message", (msg) => {
    console.log("mesage: ", msg);
  });
});

server.listen(8080, () => {
  console.log("Server opened");
});
