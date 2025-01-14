import type { NextApiRequest, NextApiResponse } from 'next'
import { getGPT4Response } from "./services/apiService";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest,res: NextApiResponse){
    if(req.method === 'GET'){
        
    }
    if(req.method === 'POST'){
        const {type, text} = req.body;
        const response = await getGPT4Response(text);
        return res.status(200).send(response);
    }
}
