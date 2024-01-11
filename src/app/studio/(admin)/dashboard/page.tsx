import { PlayPauseIcon, HashtagIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AppAdmin = async () => {
    return (
        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-2xl font-semibold'>Dashboard</h3>
            <div className='flex items-center justify-between px-2 gap-4 '>
                <div className='flex items-center justify-between bg-[#212121] w-[50%] rounded-lg p-1 hover:scale-105 transition-all duration-500 ease-in-out'>
                    <div className="flex flex-col justify-between gap-5 items-center pl-4">
                        <h2 className='text-xl font-semibold'>Videos</h2>
                        <h2 className='text-3xl font-bold mr-5'>100</h2>
                    </div>
                    <PlayPauseIcon className='h-32' />
                </div>
                <div className='flex items-center justify-between bg-[#212121] w-[50%] rounded-lg p-1 hover:scale-105 transition-all duration-500 ease-in-out'>
                    <div className="flex flex-col justify-between gap-5 items-center pl-4">
                        <h2 className='text-xl font-semibold'>Tags</h2>
                        <h2 className='text-3xl font-bold mr-5'>50</h2>
                    </div>
                    <HashtagIcon className='h-32' />
                </div>
            </div>
            <div className='flex flex-col gap-3 w-full bg-[#212121] rounded-lg p-2'>
                <h3 className='text-xl font-semibold'>Video Tags Chart</h3>
            </div>
        </div>
    )
}

export default AppAdmin