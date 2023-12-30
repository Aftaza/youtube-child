import React from 'react'

const Slider = () => {
    return (
        <div className='flex flex-row gap-2 w-full'>
            <div className='flex justify-center items-center bg-[#212121] p-1.5 min-w-10 rounded-xl hover:bg-[#3e3e3e] cursor-pointer'>
                <h3 className='text-sm font-bold'>All</h3>
            </div>
            <div className='flex justify-center items-center bg-[#212121] p-1.5 min-w-10 rounded-xl hover:bg-[#3e3e3e] cursor-pointer'>
                <h3 className='text-sm font-bold'>Mix</h3>
            </div>
            <div className='flex justify-center items-center bg-[#212121] p-1.5 min-w-10 rounded-xl hover:bg-[#3e3e3e] cursor-pointer'>
                <h3 className='text-sm font-bold'>Islamic</h3>
            </div>
        </div>
    )
}

export default Slider