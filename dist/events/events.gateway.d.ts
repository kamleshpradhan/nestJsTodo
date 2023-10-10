import { Server, Socket } from "socket.io";
export declare class EventsGateway {
    server: Server;
    handleConnection(client: any): void;
    handleRooms(data: string, client: Socket): void;
    handleMessage(data: string, client: Socket): void;
    handleJoinRoom(data: string, client: Socket): Promise<void>;
    handleDisconnect(client: any): void;
}
