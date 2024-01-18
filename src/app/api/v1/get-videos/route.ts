import { NextRequest } from "next/server"
import prisma from "@/libs/prisma"

export async function GET(request: NextRequest){
    const id = request.nextUrl.searchParams.get('id')
    var allVideos: any = null

    if (id != null) {
        const vidId = parseInt(id)
        allVideos = await prisma.videos.findUnique({
            where: {
                id: vidId,
            },
            include:{
                channel: true,
                tag: true
            }
        })
    }else{
        allVideos = await prisma.videos.findMany({
            include:{
                channel: true,
                tag: true
            }
        })
    }

    if (!allVideos) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, data: allVideos})
}