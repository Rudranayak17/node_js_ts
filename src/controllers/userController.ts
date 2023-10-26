import { NextFunction, Request, Response } from "express";

export const getUser=(req:Request,res:Response,next:NextFunction)=>{
    const users:Array<string>=["A", "B", "C", "D", ]
    res.json({users})
}