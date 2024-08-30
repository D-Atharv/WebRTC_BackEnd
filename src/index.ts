import express, { Request, Response } from 'express';
import http from 'http';
import cors from "cors";
import { initializeSocketIO } from './sockets/socket.io';
import { socketIOMiddleware } from './middlewares/socket_middleware';

const PORT = 8000;

const app = express();
const server = http.createServer(app);

const io = initializeSocketIO(server);

app.use(cors({
    origin: "http://localhost:3000" //frontend URL
}));
// Use Socket.IO middleware
app.use(socketIOMiddleware(io));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express.js!');
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

