import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    // Handle connection event
    console.log("Socket is connected");
  }

  @SubscribeMessage("getRooms")
  handleRooms(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    // Handle received message
    this.server.emit("getRooms","Available rooms are 23,24,25"); // Broadcast the message to all connected clients
  }

  @SubscribeMessage("message")
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    // Handle received message
    console.log(data);
    this.server.emit("message","Hello"); // Broadcast the message to all connected clients
  }

  @SubscribeMessage("joinRoom")
  async handleJoinRoom(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    // Handle received message
    this.server.socketsJoin(`${data['room']}`)
    console.log(await this.server.fetchSockets());
    console.log(data["room"]);
    if(data['room'] == 'room1'){
    this.server.in(`${data['room']}`).emit("message","Joined Some rooms");
    }else{
      this.server.in(`${data['room']}`).emit("message","Joined different room");
    } 
    console.log(data);
    // this.server.emit("message",`${data['room']}`); // Broadcast the message to all connected clients
  }

  handleDisconnect(client: any) {
    // Handle disconnection event
    this.server.emit("Server is disconnected");
    console.log("disconnected");
  }
}
