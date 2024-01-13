"use server"
import axios from "axios"

const youtubeApi = async (arg: string) => {
    const KEY = process.env.GOOGLE_APIS_KEY as string

    const apiVid = axios.create({
        baseURL: "https://youtube.googleapis.com/youtube/v3/",
        params: {
            part: 'snippet',
            id: arg,
            key: KEY,
        }
    })
    const apiVid2 = axios.create({
        baseURL: "https://youtube.googleapis.com/youtube/v3/",
        params: {
            part: 'statistics',
            id: arg,
            key: KEY,
        }
    })
    const responseVid = await apiVid.get('/videos')
    const responseVid2 = await apiVid2.get('/videos')
    const dataVid = responseVid.data.items[0].snippet
    const statsVid = responseVid2.data.items[0].statistics
    const apiChan = axios.create({
        baseURL: "https://youtube.googleapis.com/youtube/v3/",
        params: {
            part: 'snippet',
            id: dataVid.channelId as string,
            key: KEY,
        }
    })
    const responseChan = await apiChan.get('/channels')
    const dataChan = responseChan.data.items[0].snippet

    const dataApi = {
        video: {
            title: dataVid.title,
            description: dataVid.description,
            published: dataVid.publishedAt,
            thumbnails: dataVid.thumbnails.standard,
            views: statsVid.viewCount,
            likes: statsVid.likeCount
        },
        channel: {
            name: dataChan.title,
            avatar: dataChan.thumbnails.medium
        }
    }
    return dataApi
}

export default youtubeApi