import { 
    HomeIcon,
    FireIcon, 
    SignalIcon,
    ArchiveBoxArrowDownIcon,
    ClockIcon,
} from '@heroicons/react/24/outline'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='fixed left-0 top-11 bg-black p-1 w-[6%]'>
            <div className='h-fit w-full flex flex-col items-center text-white pt-2'>
                <div className='flex flex-col justify-center cursor-pointer items-center hover:bg-[#313131] w-[90%] rounded-xl h-20'>
                    <HomeIcon className='h-6' />
                    <h4 className='text-[10px]'>
                        Home
                    </h4>
                </div>
                <div className='flex flex-col justify-center cursor-pointer items-center hover:bg-[#313131] w-[90%] rounded-xl h-20'>
                    <FireIcon className='h-6' />
                    <h4 className='text-[10px]'>
                        Explore
                    </h4>
                </div>
                <div className='flex flex-col justify-center cursor-pointer items-center hover:bg-[#313131] w-[90%] rounded-xl h-20'>
                    <SignalIcon className='h-6' />
                    <h4 className='text-[10px]'>
                        Subscribe
                    </h4>
                </div>
                <div className='flex flex-col justify-center cursor-pointer items-center hover:bg-[#313131] w-[90%] rounded-xl h-20'>
                    <ArchiveBoxArrowDownIcon className='h-6' />
                    <h4 className='text-[10px]'>
                        Library
                    </h4>
                </div>
                <div className='flex flex-col justify-center cursor-pointer items-center hover:bg-[#313131] w-[90%] rounded-xl h-20'>
                    <ClockIcon className='h-6' />
                    <h4 className='text-[10px]'>
                        History
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Sidebar