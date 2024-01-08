import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {
    ArrowRightEndOnRectangleIcon,
    UserIcon,
} from "@heroicons/react/24/outline"

const Dropdown = ({user}: {user: any}) => {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <div className='inline-flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse'>
            <h3 className='mr-3 font-sans'>Hey {user?.name as string}</h3>
            <div className='relative'>
                <button type='button' onClick={handleClick} className={`flex text-sm transition-all ease-in-out duration-300 bg-gray-800 rounded-full md:me-0 ${isActive ? "ring-2 ring-gray-600" : ""}`}>
                    <span className='sr-only'>open user menu</span>
                    <Image src={user?.image as string} alt='user icon' width={32} height={32} className='h-8 w-8 rounded-full' />
                </button>
                <div className={`absolute ${isActive ? "absolute" : "hidden"} right-0 z-10 w-56 mt-4 origin-top-right bg-gray-950 border border-gray-500 rounded-md shadow-lg`}>
                    <div className="p-2">
                        <Link href="/studio/profile" className='flex gap-2 px-4 py-2 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white'>
                            <UserIcon className='h-5' />
                            Profile
                        </Link>
                        <Link href="/api/auth/signout" className='flex gap-2 px-4 py-2 text-sm text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white'>
                            <ArrowRightEndOnRectangleIcon className='h-5' />
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown