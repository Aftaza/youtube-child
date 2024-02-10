"use client"
import React, {useState} from 'react';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    MicrophoneIcon,
    BellIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import youtubeIcon from "@/../public/youtube.svg";
import Image from 'next/image';
import Link from 'next/link';
import Dropdown from './dropdown';

export const Header = () => {
    return (
        <nav className='fixed top-0 z-10 w-full'>
            <div className="flex justify-between items-center w-full h-10 sm:h-5 px-2 sm:px-6 py-4 sm:py-7 bg-black text-white">
                <div className='flex items-center cursor-pointer'>
                    <Bars3Icon className="h-7 mr-4 hidden sm:block" />
                    <Link href="/" className='flex items-center'>
                        <Image priority src={youtubeIcon} alt='Youtube Icon' className='h-5 w-5 mr-0 sm:h-10 sm:w-10' />
                        <h1 className='text-md sm:text-xl font-bold'>Youtube</h1>
                    </Link>
                </div>

                <div className='hidden md:flex items-center'>
                    <form action="" className='flex w-[400px] lg:w-[600px] items-center bg-[#313131] border border-gray-700 rounded-xl'>
                        <input 
                            type="text" 
                            name="search" 
                            id="searchBox" 
                            placeholder='Search' 
                            className='bg-black p-3 flex-1 h-10 rounded-l-xl focus:outline-none'
                        />
                        <button className='h-10 w-16 flex items-center justify-center'>
                            <MagnifyingGlassIcon className="h-5" />
                        </button>
                    </form>
                    <button className='bg-[#313131] h-10 w-10 ml-4 rounded-full flex justify-center items-center'>
                        <MicrophoneIcon className='h-5' />
                    </button>
                </div>

                <div className='flex items-center gap-3'>
                    <BellIcon className="h-6 cursor-pointer" />
                    <button className='h-10 w-16 flex sm:hidden items-center justify-center'>
                            <MagnifyingGlassIcon className="h-5" />
                    </button>
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>

            </div>
        </nav>
    )
}

export const HeaderStudio = ({user}: {user: any}) => {

    return (
        <nav className='fixed top-0 z-50 w-full'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href="/studio" className='flex items-center space-x-1'>
                    <Image src={youtubeIcon} alt='youtube icon' className='h-8 w-8 ' />
                    <h1 className='font-bold text-xl'>Studio</h1>
                </Link>
                <Dropdown user={user} />
            </div>
        </nav>
    )
}