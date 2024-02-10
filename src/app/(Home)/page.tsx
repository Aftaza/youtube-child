import { Sidebar } from '@/components/sidebar'
import Slider from '@/components/slider'
import Image from 'next/image'
import Link from 'next/link'
import thumbnail from '@/app/assets/img/thumbnail.png'
import thumb from '@/app/assets/img/thumb2.png'
import axios from 'axios'
import { countViews, dateVideo, shuffleArray } from '@/libs/tools'

export default async function Home() {
    const videosApi = (await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/get-videos`)).data.data
    const videos = shuffleArray(videosApi)
    return (
        <>
            <Sidebar />
            <div className='w-full sm:w-[92%] mt-16 sm:ml-24 flex flex-col gap-2'>
                <Slider />
                {/* Card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center sm:items-start w-[95%]'>
                    {videos.slice(0, 15).map( ( video: any, index: any) => {
                        return (
                            <Link key={index} href={`/video/${video.id}`} className='mt-3 bg-black'>
                                <div className="max-w-sm overflow-hidden shadow-lg">
                                    <div className='w-full overflow-hidden p-1 rounded-xl'>
                                        <Image src={video.thumbnail} alt='thumbnail' width={640} height={480} />
                                    </div>
                                    <div className="px-1 pt-4">
                                        <div className="font-bold text-xl mb-2">{video.title}</div>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='flex items-center w-8 h-8 rounded-full overflow-hidden'>
                                            <Image src={video.channel.avatar} alt='Channel logo' width={88} height={88} />
                                        </div>
                                        <div className="flex flex-col px-2">
                                            <span className='text-gray-400'>{video.channel.name}</span>
                                            <span className='text-gray-400'>{countViews(video.views)} x ditonton • {dateVideo(video.published)}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
