import prisma from "@/libs/prisma"

export async function GET(request: any){
    const tag = await prisma.tags.findMany()

    if (!tag) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, data: tag})
}