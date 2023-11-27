import { Server } from "socket.io";
import Connection from "./database/db.js";
import { getDocument ,updateDocument} from "./controller/documentcontroller.js";

const PORT = 9000;


const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:5174",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-document", async(documentID) => {
    const document = await getDocument(documentID);
    socket.join(documentID);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentID).emit("receive-changes", delta);
    });

    socket.on('save-document',async data =>{
      await updateDocument(documentID ,data)
    })
  });
  
  // console.log("connected");
});

Connection();