"use client"
import { Capitalize } from '@/libs/tools'
import axios from 'axios'
import React, { FormEvent } from 'react'
import toast from 'react-hot-toast'

const FormDetail = ({vidDetail, tags}: {vidDetail: any, tags: any}) => {
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const loading = toast.loading("Saving...")
        const formData = new FormData(e.target as HTMLFormElement)
        const tagId = formData.get("tag")
        if (tagId == null) {
            toast.error("Tag must been choose", {id: loading})
            return
        }
        axios.post("/api/v1/edit-video", {vidId: vidDetail.data.id, tagId: tagId, oldTag: vidDetail.data.tag.id}, {headers: {'Content-Type': 'application/json'}})
        .then( (res: any) => {
            if (res.data.status == 200){
                toast.success(res.data.message, {id: loading})
            }else{
                toast.error(res.data.message, {id: loading})
            }
        })
        .catch( (err: any) => {
            console.log(err)
            toast.error("API Error", {id: loading})
        })
    }

    return (
        <form action="" onSubmit={handleSubmit} method='post' className='flex flex-col gap-2 mt-3 w-full'>
            <h2 className='font-semibold'>Update Tag</h2>
            <select name="tag" defaultValue={'0'} className='bg-[#616161] text-white rounded-lg text-sm focus:outline-none py-1 px-2 cursor-pointer' required>
                <option value="0" disabled>{Capitalize(vidDetail?.data.tag?.name)}</option>
                {tags.data?.map( (tag: any, index: any) => {
                    if (tag.id != parseInt(vidDetail?.data.tag?.id)) {
                        return (
                            <option key={index} value={tag.id}>{Capitalize(tag.name)}</option>
                        )
                    }
                })}
            </select>
            <div className='flex justify-end'>
                <button type='submit' className='bg-green-500 py-1 px-3 rounded-lg hover:bg-green-600 transition ease-in-out duration-300'>Update</button>
            </div>
        </form>
    )
}

export default FormDetail