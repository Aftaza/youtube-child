import { PencilSquareIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const BodyVid = ({videos}: {videos: any}) => {

    return (
        <>
            <div className='flex justify-end items-center gap-2'>
                <form action="#" method="post" className='h-full'>
                    <input type="text" placeholder='Search . . .' className='p-2 rounded-lg bg-[#212121] text-white text-sm focus:outline-none focus:border focus:border-gray-500'/>
                </form>
                <Link href='videos/add' className='flex items-center bg-green-500 p-2 rounded-lg text-sm hover:bg-green-600'>
                    <PlusIcon className='h-5' />
                    Tambah
                </Link>
            </div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-gray-400'>
                    <thead className='text-xs uppercase bg-[#171717] text-gray-400 text-center'>
                        <tr>
                            <th scope='col' className='px-1 py-3'>
                                No
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Title
                            </th>
                            <th scope='col' className='px-4 py-3'>
                                Channel
                            </th>
                            <th scope='col' className='px-4 py-3'>
                                Views
                            </th>
                            <th scope='col' className='px-1 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.map( (video: any, index: any) => {
                            return (
                                <tr key={index} className='border-b border-gray-700 hover:bg-[#515151] text-white'>
                                    <th scope='row' className='py-2 font-medium'>
                                        {index+1}
                                    </th>
                                    <th className='py-2 whitespace-nowrap text-left'>
                                        {video.title}
                                    </th>
                                    <td className='py-2 text-left'>
                                        {video.channel.name}
                                    </td>
                                    <td className='py-2'>
                                        {video.views}
                                    </td>
                                    <td className='py-2 px-0 flex items-center justify-center gap-2'>
                                        <button type='button' className='flex items-center bg-green-500 hover:bg-green-600 px-2 py-2 rounded-lg'>
                                            <PencilSquareIcon className='h-5' />
                                        </button>
                                        <button type='button' className='flex items-center bg-red-500 hover:bg-red-600 px-2 py-2 rounded-lg'>
                                            <TrashIcon className='h-5' />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BodyVid