"use client"
import React from 'react';
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

                <div className='hidden sm:flex items-center'>
                    <form action="" className='flex w-[600px] items-center bg-[#313131] border border-gray-700 rounded-xl'>
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

export const HeaderStudio = async({user}: {user: any}) => {
    return (
        <nav className='fixed top-0 w-full'>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href="/studio" className='flex items-center space-x-1'>
                    <Image src={youtubeIcon} alt='youtube icon' className='h-8 w-8 ' />
                    <h1 className='font-bold text-xl'>Studio</h1>
                </Link>
                <div className='flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
                    <h3 className='mr-3 font-sans'>Hey {user?.name as string}</h3>
                    <button type='button' className='flex text-sm transition-all ease-in-out duration-300 bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-600' id='user-menu-button' aria-expanded='false' data-dropdown-toggle='user-dropdown' data-dropdown-placement='bottom'>
                        <span className='sr-only'>open user menu</span>
                        <Image src={user?.image as string} alt='user icon' width={32} height={32} className='h-8 w-8 rounded-full' />
                    </button>
                    <div className='z-50 hidden my-4 text-base list-none divide-y divide-gray-600 bg-gray-700 rounded-lg shadow'>
                        <div className='px-4 py-3'>
                            <span className='block text-sm text-white'>{user?.email as string}</span>
                        </div>
                        <ul className='py-2' aria-label='user-menu-button'>
                            <li>
                                <Link href="/studio/profile" className='block py-4 px-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white'>Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}