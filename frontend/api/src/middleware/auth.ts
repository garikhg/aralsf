import {Request, Response, NextFunction} from 'express';import jwt from 'jsonwebtoken';const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';if (!jwtSecret) {    throw new Error("JWT_SECRET is not defined in the environment variables");}export interface AuthRequest extends Request {    user?: {        id: string;        role: string;    }}const auth = (req: AuthRequest, res: Response, next: NextFunction) => {    //  const token = req.headers.authorization;    const token = req.header('Authorization')?.split(' ')[1];    if (!token) return res.status(401).json({message: 'No token, authorization denied'});    try {        const decoded = jwt.verify(token, jwtSecret) as { id: string, role: string };        req.user = decoded;        next();    } catch (err) {        return res.status(401).json({message: 'Token is not valid'});    }}export default auth;