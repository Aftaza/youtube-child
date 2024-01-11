import axios from "axios"

const KEY = process.env.GOOGLE_APIS_KEY as string

type Args = {
    vidId: string
}

const youtubeApi = async (arg:Args) => {
    const apiVid = axios.create({
        baseURL: "https://youtube.googleapis.com/youtube/v3/",
        params: {
            part: 'snippet',
            id: arg.vidId,
            key: KEY,
        }
    })
    const responseVid = await apiVid.get('/videos')
    const dataVid = responseVid.data.items[0].snippet

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
        video: dataVid,
        channel: dataChan
    }
    return dataApi
}

export default youtubeApi