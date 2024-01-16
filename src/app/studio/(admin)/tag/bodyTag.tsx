"use client"
import { PencilSquareIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Capitalize } from '@/libs/tools'
import { useState } from 'react'
import { NewTagModal } from '@/components/modals'

const BodyTag = ({tags}: {tags:any}) => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <div className='flex justify-end items-center gap-2'>
                <form action="#" method="post" className='h-full'>
                    <input type="text" placeholder='Search . . .' className='p-2 rounded-lg bg-[#212121] text-white text-sm focus:outline-none focus:border focus:border-gray-500'/>
                </form>
                <button onClick={() => setModalActive(true)} className='flex items-center bg-green-500 p-2 rounded-lg text-sm hover:bg-green-600'>
                    <PlusIcon className='h-5' />
                    Tambah
                </button>
            </div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-gray-400'>
                    <thead className='text-xs uppercase bg-[#171717] text-gray-400 text-center'>
                        <tr>
                            <th scope='col' className='px-1 py-3'>
                                No
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Name
                            </th>
                            <th scope='col' className='px-4 py-3'>
                                Count
                            </th>
                            <th scope='col' className='px-1 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tags.map( (tag: any, index: any) => {
                            return (
                                <tr key={index} className='border-b border-gray-700 hover:bg-[#515151] text-white'>
                                    <th scope='row' className='py-2 font-medium'>
                                        {index + 1}
                                    </th>
                                    <th className='py-2 whitespace-nowrap text-left'>
                                        {Capitalize(tag.name)}
                                    </th>
                                    <td className='py-2 text-center'>
                                        {tag.count}
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
            <NewTagModal modalActive={modalActive === true} setModalActive={() => setModalActive(false)} />
        </>
    )
}

export default BodyTag