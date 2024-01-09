import { Sidebar } from '@/components/sidebar'
import Slider from '@/components/slider'
import Image from 'next/image'
import Link from 'next/link'
import thumbnail from '@/app/assets/img/thumbnail.png'
import thumb from '@/app/assets/img/thumb2.png'

export default function Home() {
    return (
        <>
            <Sidebar />
            <div className='w-[92%] mt-16 ml-24 flex flex-col gap-2'>
                <Slider />
                {/* Card */}
                <div className='grid grid-cols-3 gap-3 items-start w-[95%]'>
                    <Link href="/" className='mt-3'>
                        <div className="max-w-sm overflow-hidden shadow-lg">
                            <Image src={thumbnail} alt='thumbnail' className='w-full rounded-xl' />
                            <div className="px-1 pt-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            </div>

                            <div className=" flex flex-col px-2">
                                <span className='text-gray-400'>Namamu</span>
                                <span className='text-gray-400'>100 rb x ditonton • 1 bulan yang lalu</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className='mt-3'>
                        <div className="max-w-sm overflow-hidden shadow-lg">
                            <Image src={thumb} alt='thumbnail' className='w-full rounded-xl' />
                            <div className="px-1 pt-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            </div>

                            <div className=" flex flex-col px-2">
                                <span className='text-gray-400'>Namamu</span>
                                <span className='text-gray-400'>100 rb x ditonton • 1 bulan yang lalu</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className='mt-3'>
                        <div className="max-w-sm overflow-hidden shadow-lg">
                            <Image src={thumbnail} alt='thumbnail' className='w-full rounded-xl' />
                            <div className="px-1 pt-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            </div>

                            <div className=" flex flex-col px-2">
                                <span className='text-gray-400'>Namamu</span>
                                <span className='text-gray-400'>100 rb x ditonton • 1 bulan yang lalu</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className='mt-3'>
                        <div className="max-w-sm overflow-hidden shadow-lg">
                            <Image src={thumb} alt='thumbnail' className='w-full rounded-xl' />
                            <div className="px-1 pt-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            </div>

                            <div className=" flex flex-col px-2">
                                <span className='text-gray-400'>Namamu</span>
                                <span className='text-gray-400'>100 rb x ditonton • 1 bulan yang lalu</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className='mt-3'>
                        <div className="max-w-sm overflow-hidden shadow-lg">
                            <Image src={thumbnail} alt='thumbnail' className='w-full rounded-xl' />
                            <div className="px-1 pt-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            </div>

                            <div className=" flex flex-col px-2">
                                <span className='text-gray-400'>Namamu</span>
                                <span className='text-gray-400'>100 rb x ditonton • 1 bulan yang lalu</span>
                            </div>
                        </div>
                    </Link>
                    <Link href="/" className='mt-3'>
                        <div className="max-w-sm overflow-hidden shadow-lg">
                            <Image src={thumb} alt='thumbnail' className='w-full rounded-xl' />
                            <div className="px-1 pt-4">
                                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            </div>

                            <div className=" flex flex-col px-2">
                                <span className='text-gray-400'>Namamu</span>
                                <span className='text-gray-400'>100 rb x ditonton • 1 bulan yang lalu</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
