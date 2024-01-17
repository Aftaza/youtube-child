import { NextRequest } from "next/server"
import prisma from "@/libs/prisma"

export async function GET(request: NextRequest){

    const allVideos = await prisma.videos.findMany({
        include:{
            channel: true,
            tag: true
        }
    })

    if (!allVideos) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, data: allVideos})
}