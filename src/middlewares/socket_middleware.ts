import { Request, Response, NextFunction } from 'express';
import { Server as SocketIOServer } from 'socket.io';

export function socketIOMiddleware(io: SocketIOServer) {
    return (req: Request, resp: Response, next: NextFunction) => {
        if (resp.locals.io) {
            console.log(resp.locals);
            console.log('socket.io already running');
        } else {
            resp.locals.io = io;
        }
        next();
    };
}
