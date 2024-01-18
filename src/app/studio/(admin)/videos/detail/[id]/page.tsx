import { Capitalize, countViews, dateVideo, getYtId } from '@/libs/tools'
import axios from 'axios'
import React from 'react'
import FormDetail from './form'

const DetailVid = async ({ params: { id } }: {params: any}) => {
    const vidApi = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/get-videos?id=${id}`)
    const vidDetail = vidApi.data
    const tagsApi = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/get-tags`)
    const tags = tagsApi.data

    if (vidDetail.status != 200){
        return (
            <div className='flex justify-center items-center w-full'>
                <h3 className='text-3xl font-bold text-[#212121] '>Data Not Found</h3>
            </div>
        )
    }
    
    return (
        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-2xl font-semibold'>Details Video</h3>
            <div className={`flex items-center gap-3 w-full bg-[#212121] rounded-lg px-3 py-4`}>
                <div className='w-[35%] h-full'>
                    <iframe src={`https://www.youtube.com/embed/${getYtId(`https://${vidDetail?.data.url_yt}`)}`} title={vidDetail?.data.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className='flex flex-col items-start w-[65%] h-full'>
                    <h1 className='text-xl font-semibold'>{vidDetail?.data.title}</h1>
                    <h2 className='text-lg'>{vidDetail?.data.channel?.name}</h2>
                    <h3 className='text-sm'>{countViews(vidDetail?.data.views)} views • {dateVideo(vidDetail?.data.published)}</h3>
                    <FormDetail vidDetail={vidDetail} tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default DetailVid