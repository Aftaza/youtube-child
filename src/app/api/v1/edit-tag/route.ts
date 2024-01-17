import prisma from "@/libs/prisma"

export async function POST(request: Request){
    const { id, name } = await request.json()

    const updateTag = await prisma.tags.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: name,
        },
    })

    if (!updateTag) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, message: "Successfully updated tag"})
}