import express, { Request, Response } from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello worldssssss</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log('user disconnected !')
  });
});
server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
