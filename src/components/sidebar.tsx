"use client"
import { 
    HomeIcon,
    FireIcon, 
    SignalIcon,
    ArchiveBoxArrowDownIcon,
    ClockIcon,
    Squares2X2Icon,
    VideoCameraIcon,
    TagIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Sidebar = () => {
    return (
        <aside className='hidden sm:block fixed left-0 top-11 bg-black p-1 w-[6%]'>
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
        </aside>
    )
}

export const SidebarStudio = () => {
    const route = usePathname()
    return (
        <aside className='fixed w-[17%] top-0 left-0 z-40 h-screen pt-16 bg-[#101010] border-gray-700' aria-label='sidebar'>
            <div className='h-full flex flex-col justify-between px-3 overflow-y-auto'>
                <ul className='space-y-2 font-medium'>
                    <li>
                        <Link href="/studio/dashboard" className={`flex items-center p-2 gap-1 rounded-lg text-gray-300 hover:font-bold hover:bg-[#212121] ${route == "/studio/dashboard" ? "bg-[#212121] " : ""}`}> 
                            <Squares2X2Icon className='h-5' />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/studio/videos" className={`flex items-center p-2 gap-1 rounded-lg text-gray-300 hover:font-bold hover:bg-[#212121] ${route == "/studio/videos" ? "bg-[#212121] " : ""}`}> 
                            <VideoCameraIcon className='h-5' />
                            Videos
                        </Link>
                    </li>
                    <li>
                        <Link href="/studio/tag" className={`flex items-center p-2 gap-1 rounded-lg text-gray-300 hover:font-bold hover:bg-[#212121] ${route == "/studio/tag" ? "bg-[#212121] " : ""}`}> 
                            <TagIcon className='h-5' />
                            Tag
                        </Link>
                    </li>
                </ul>
                <h3 className='text-sm mb-3 font-sans'>☕ Made by Aftaza - V 1.0</h3>
            </div>
        </aside>
    )
}