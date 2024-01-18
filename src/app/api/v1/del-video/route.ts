import prisma from "@/libs/prisma"

export async function DELETE(request: Request){
    const {id, channel, tag} = await request.json()

    if (tag?.count > 0 && channel?.count > 0) {
        const channelUpdate = await prisma.channels.update({
            where: {
                id: parseInt(channel.id),
            },
            data: {
                count: parseInt(channel.count) - 1
            }
        })
        const tagUpdate = await prisma.tags.update({
            where: {
                id: parseInt(tag.id),
            },
            data: {
                count: parseInt(tag.count) - 1
            }
        })
        if (!tagUpdate || !channelUpdate){
            return Response.json({status: 500, message: "Error update channel and tag"})
        }
    }

    const cekChannel = await prisma.channels.findUnique({
        where:{
            id: parseInt(channel.id)
        }
    })

    const deleteVideo = await prisma.videos.delete({
        where: {
            id: id
        }
    })

    if (cekChannel.count < 1){
        const deleteChannel = await prisma.channels.deleteMany({
            where: {
                count: 0
            }
        })
    }


    if (!deleteVideo) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, message: "Successfully deleted video"})
}