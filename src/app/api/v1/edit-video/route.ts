import prisma from "@/libs/prisma"

export async function POST(request: Request){
    const {vidId, tagId, oldTag} = await request.json()

    const selOldTag = await prisma.tags.findUnique({
        where: {
            id: parseInt(oldTag)
        }
    })

    const selNewTag = await prisma.tags.findUnique({
        where: {
            id: parseInt(tagId)
        }
    })

    const updateOldTag = await prisma.tags.update({
        where: {
            id: parseInt(oldTag)
        },
        data: {
            count: selOldTag.count - 1
        }
    })

    const updateNewTag = await prisma.tags.update({
        where: {
            id: parseInt(tagId)
        },
        data: {
            count: selNewTag.count + 1
        }
    })

    const updateVid = await prisma.videos.update({
        where: {
            id: vidId,
        },
        data: {
            tag_id: parseInt(tagId)
        }
    })

    if (!updateVid || !selNewTag || !selOldTag || !updateNewTag || !updateOldTag) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, message: "Successfully updated tag Video"})
}