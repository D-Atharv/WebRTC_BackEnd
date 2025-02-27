import { Server as SocketIOServer } from 'socket.io';
import http from 'http';

export function initializeSocketIO(server: http.Server): SocketIOServer {
    const io = new SocketIOServer(server);

    io.on('connection', (socket) => {
        console.log('user/server connected');


        socket.emit('message', 'Hello from the server!');
    });


    return io;
}
