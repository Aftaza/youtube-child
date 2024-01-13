import prisma from "@/libs/prisma"

export async function POST(request: any){
    const {name} = await request.json();
    const data = {
        name: name as string,
        count: 0
    }

    const createTag = await prisma.tags.create({data: data})

    if (!createTag) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, message: "Successfully created new tag"})
}