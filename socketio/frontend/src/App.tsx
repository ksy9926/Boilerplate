import "./App.css";
import io from "socket.io-client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:8080");

    socket.emit("connected", "hihihi");

    socket.on("entrance-message", (data) => {
      console.log(data);
    });
  }, []);

  return <div>df</div>;
}

export default App;
