import React from 'react'
import { toast } from 'react-hot-toast';
import BodyTag from './bodyTag';
import axios from 'axios'
import App from 'next/app';


const Tag = async () => {
    const getTags = await axios.get('http://localhost:3000/api/v1/get-tags')
    const tags = getTags.data.data
    return (
        <div className='flex flex-col gap-3 w-full'>
            <h3 className='text-2xl font-semibold'>Tag Lists</h3>
            <BodyTag tags={tags}/>
        </div>
    )
}

export default Tag