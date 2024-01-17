import prisma from "@/libs/prisma"
import { NextRequest } from "next/server"

export async function GET(request: NextRequest){
    const id = request.nextUrl.searchParams.get('id')
    var tag: any = null
    
    if (id != null) {
        const tagId = parseInt(id)
        tag = await prisma.tags.findUnique({
            where: {
                id: tagId,
            }
        })
    }else{
        tag = await prisma.tags.findMany()
    }

    if (!tag) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, data: tag})
}