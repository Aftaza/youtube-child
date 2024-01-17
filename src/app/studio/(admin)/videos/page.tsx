import React from 'react'
import BodyVid from './bodyVid'
import axios from 'axios'


const VideosAdmin = async() => {
    const videos = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/get-videos`)

    return (
        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-2xl font-semibold'>Video Lists</h3>
            <BodyVid videos={videos.data.data} />
        </div>
    )
}

export default VideosAdmin