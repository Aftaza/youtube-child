import { InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const NewVideos = () => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-2xl font-semibold'>Add New Video</h3>
            <div className='flex flex-col gap-2 p-2 bg-[#212121] w-full rounded-lg px-2'>
                <div className='flex items-center gap-2'>
                    <InformationCircleIcon className='h-5' />
                    <span className='text-sm font-sans'>Please Fill Youtube Url</span>
                </div>
                <form action="" className='flex items-center justify-center gap-4 w-full px-5 py-2'>
                    <input type="text" id='url' placeholder='https://www.youtube.com/watch?v=0RH_RarRDNo' className='w-[70%] py-1 rounded-lg bg-[#616161] text-white focus:outline-none px-2'/>
                    <button type='button' className='ml-10 bg-green-500 hover:bg-green-600 transition ease-in-out duration-300 w-[10%] rounded-lg py-1'>Submit</button>
                </form>
            </div>
            <div className='flex items-center gap-3 w-full bg-[#212121] rounded-lg px-3 py-4 '>
                <div className='w-[35%] h-full'>
                    <iframe src="https://www.youtube.com/embed/0RH_RarRDNo" title="NUSSA : SONG COMPILATION VOL. 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className='flex flex-col items-start w-[65%] h-full'>
                    <h1 className='text-xl font-semibold'>NUSSA : SONG COMPILATION VOL. 1</h1>
                    <h2 className='text-lg'>NussaOfficial</h2>
                    <h3 className='text-sm'>181 jt views • 4 tahun yang lalu</h3>
                    <form action="" className='flex flex-col gap-2 mt-3 w-full'>
                        <select name="tag" id="tag" className='bg-[#616161] text-white rounded-lg text-sm focus:outline-none py-1 px-2 cursor-pointer'>
                            <option value="choose" selected disabled>Choose Tag</option>
                            <option value="Musik">Musik</option>
                            <option value="Edukasi">Edukasi</option>
                        </select>
                        <div className='flex justify-end'>
                            <button className='bg-blue-500 py-1 px-3 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300'>Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewVideos