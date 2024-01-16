"use client"
import prisma from '@/libs/prisma'
import { Capitalize, countViews, dateVideo } from '@/libs/tools'
import youtubeApi from '@/libs/youtubeApi'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { z } from 'zod'

const formSchema = z.object({
    url: z
        .string({ required_error: "Url is required" })
        .min(12, { message: "Url must be more than 12 characters" })
        .startsWith("https://www.youtube.com/", { message: "Url must include youtube domain" })
        .trim()
})

type FormSchema = z.infer<typeof formSchema>

const getVideo = async (url: string) => {
    const urlParams = new URLSearchParams(new URL(url).search)
    const vidArg: string = urlParams.get("v") as string
    
    const vidApi = await youtubeApi(vidArg)
    const data = {
        id: vidArg,
        api: vidApi
    }
    return data
}

const NewVideos = () => {
    const tags = useRef({})
    const [formErr, setFormErr] = useState<z.ZodFormattedError<
            FormSchema,
            string
        > | null>(null)
    
    const [active, setActive] = useState(false)
    const [vidData, setVidData] = useState({})

    const handleChange = (e: ChangeEvent) => {
        e.preventDefault()
        setActive(false)
    }

    const handleSubmit = async (e : FormEvent) => {
        e.preventDefault()
        
        const tagny = await axios.get('/api/v1/get-tags')
        tags.current = tagny.data
        const formData = new FormData(e.target as HTMLFormElement)
        
        const formValues = {
            url: formData.get("url")
        }
        try{
            const parseFormValue = formSchema.safeParse(formValues)

            if(!parseFormValue.success){
                const err = parseFormValue.error.format()
                console.log(err)
                setFormErr(err)
                return
            }else{
                setFormErr(null)
            }
            console.log("formData", parseFormValue.data)
            
            const vidDetail = await getVideo(parseFormValue.data.url)
            console.log(vidDetail)
            setVidData(vidDetail)
            setActive(!active)
        }catch (error){
            console.log(error)
        }

    }

    return (
        <div className={`flex flex-col gap-3 w-full `}>
            <h3 className='text-2xl font-semibold'>Add New Video</h3>
            <div className='flex flex-col gap-2 p-2 bg-[#212121] w-full rounded-lg px-2'>
                <div className='flex items-center gap-2'>
                    <InformationCircleIcon className='h-5' />
                    <span className='text-sm font-sans'>Please Fill Youtube Url</span>
                </div>
                <form action="" method="post" onSubmit={handleSubmit} className='flex items-center justify-center gap-4 w-full px-5 py-2 transition-all ease-in-out duration-500'>
                    <div className='flex flex-col items-start gap-2 w-full'>
                        <input type="text" name='url' onChange={handleChange} placeholder='https://www.youtube.com/watch?v=0RH_RarRDNo' className='w-[70%] py-1 rounded-lg bg-[#616161] text-white focus:outline-none px-2'/>
                        {
                            formErr?.url && (
                                <>
                                    {formErr?.url?._errors.map((err) => (
                                        <p key={err} className='text-sm text-red-500'>
                                            {err}
                                        </p>
                                    ))}
                                </>
                            )
                        }
                    </div>
                    <button type='submit' className='ml-10 bg-green-500 hover:bg-green-600 transition ease-in-out duration-300 w-[10%] rounded-lg py-1'>Submit</button>
                </form>
            </div>
            <div className={`flex items-center gap-3 w-full bg-[#212121] rounded-lg px-3 py-4 transition-all ease-in-out duration-1000 ${active ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className='w-[35%] h-full'>
                    <iframe src={`https://www.youtube.com/embed/${vidData?.id}`} title={vidData?.api?.video?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className='flex flex-col items-start w-[65%] h-full'>
                    <h1 className='text-xl font-semibold'>{vidData?.api?.video?.title}</h1>
                    <h2 className='text-lg'>{vidData?.api?.channel?.name}</h2>
                    <h3 className='text-sm'>{active ? countViews(vidData?.api?.video?.views) : ""} views • {active ? dateVideo(vidData?.api?.video?.published) : ""}</h3>
                    <form action="" className='flex flex-col gap-2 mt-3 w-full'>
                        <select name="tag" id="tag" defaultValue={'0'} className='bg-[#616161] text-white rounded-lg text-sm focus:outline-none py-1 px-2 cursor-pointer'>
                            <option value="0" disabled>Choose Tag</option>
                            {tags.current?.data?.map( (tag: any, index: any) => {
                                return (
                                    <option key={index} value={tag.id}>{Capitalize(tag.name)}</option>
                                )
                            })}
                        </select>
                        <div className='flex justify-end'>
                            <button className='bg-blue-500 py-1 px-3 rounded-lg hover:bg-blue-600 transition ease-in-out duration-300'>Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewVideos