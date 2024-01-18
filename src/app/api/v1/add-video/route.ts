import prisma from "@/libs/prisma"

export async function POST(request : any){
    const { 
        url,
        title,
        desc,
        view,
        like,
        thumbnail,
        published,
        tag_id,
        channel
    } = await request.json()

    var channelId: number = 0

    const cekChanel = await prisma.channels.findUnique({
        where: {
            name: channel.name
        }
    })

    const cekVideo = await prisma.videos.findUnique({
        where:{
            url_yt: `www.youtube.com/wacth?v=${url}`
        }
    })

    const cekTag = await prisma.tags.findUnique({
        where: {
            id: parseInt(tag_id)
        }
    })

    if (cekVideo){
        return Response.json({status: 500, message: "This video is already in the database"})
    }

    if (!cekChanel){
        const createChannel = await prisma.channels.create({
            data: {
                name: channel.name,
                avatar: channel.avatar.url,
                count: 1
            }
        })
        if (!createChannel){
            return Response.json({status: 500, message: "Error creating channel"})
        }
        channelId = createChannel.id
    }else{
        channelId = cekChanel.id
        const updateChannel = await prisma.channels.update({
            where: {
                id: channelId,
            },
            data: {
                count: cekChanel.count + 1,
            }
        })
        if (!updateChannel){
            return Response.json({status: 500, message: "Error update channel"})
        }
    }

    if (!cekTag){
        return Response.json({status: 500, message: "Tags not found"})
    }else{
        const updateTag = await prisma.tags.update({
            where: {
                id: parseInt(tag_id)
            },
            data: {
                count: cekTag.count + 1
            }
        })
        if (!updateTag){
            return Response.json({status: 500, message: "Error update tag"})
        }
    }

    const dataVid = {
        url_yt: `www.youtube.com/wacth?v=${url}`,
        title: title,
        description: desc,
        views: parseInt(view),
        likes: parseInt(like),
        thumbnail: thumbnail,
        published: published,
        tag_id: parseInt(tag_id),
        channel_id: channelId
    }

    const createVideo = await prisma.videos.create({
        data: dataVid
    })

    if (!createVideo) return Response.json({ status: 500, message: "Something went wrong"})
    else return Response.json({status: 200, message: "Successfully created new video"})
}