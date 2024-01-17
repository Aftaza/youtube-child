import prisma from "@/libs/prisma"

export async function DELETE(request: Request){
    const {id} = await request.json()
    const deleteTag = await prisma.tags.delete({
        where:{
            id: parseInt(id),
        },
    })

    if (!deleteTag) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, message: "Successfully deleted tag"})
}