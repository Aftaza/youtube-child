"use client"
import { XMarkIcon } from "@heroicons/react/24/outline"
import axios from "axios"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"
import { z } from "zod"

const newTagForm = z.object({
    tag: z
        .string({required_error: "Name tag is required"})
        .max(100, {message: "Name tag must be under 100 characters"})
})

type NewTagForm = z.infer<typeof newTagForm>

export const NewTagModal = ({modalActive, setModalActive}: {modalActive: any, setModalActive: any}) => {
    const [formErr, setFormErr] = useState<z.ZodFormattedError<
        NewTagForm,
        string
    > | null>(null)
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const loading = toast.loading("Saving...")
        const formData = new FormData(e.target as HTMLFormElement)
        const formValues = {
            tag: formData.get("tag")
        }
        try{
            const parseFormValue = newTagForm.safeParse(formValues)
            if(!parseFormValue.success){
                const err = parseFormValue.error.format()
                console.log(err)
                setFormErr(err)
                return
            }else{
                setFormErr(null)
            }
            console.log("formData", parseFormValue.data)
            axios.post("/api/v1/add-tag", { name: parseFormValue.data.tag}, {headers: {'Content-Type': 'application/json'}})
            .then( (res): any => {
                console.log(res.data)
                if (res.data.status == 200){
                    toast.success("Success Saved", {
                        id: loading
                    })
                    window.location.reload()
                }else{
                    toast.error("Error Saving", {
                        id: loading
                    })
                }
            })
            .catch( (err): any => {
                console.log(err)
                toast.error("Error API", {
                    id: loading
                })
            })
        }catch (err){
            console.log(err)
        }
    }
    return (
        <div className={`${modalActive ? "visible opacity-100" : "invisible opacity-0"} justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out duration-700`}>
            <div className="relative w-5/12 my-5 mx-auto max-w-3xl">
                {/* Modal Content */}
                <div className="relative rounded-lg shadow bg-[#212121]">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-[#414141]">
                        <h3 className="text-xl font-semibold text-white">
                            Add New Tag Videos
                        </h3>
                        <button id="close" type="button" onClick={setModalActive} className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-[#414141] hover:text-white">
                            <XMarkIcon className="h-5" />
                            <span className="sr-only">close button</span>
                        </button>
                    </div>
                    {/* Modal Body */}
                    <div className="p-4 md:p-5">
                        <form action="#" onSubmit={handleSubmit} method="post" className="flex flex-col justify-between items-center gap-3">
                            <input type="text" className="p-2 bg-[#414141] rounded-lg w-full focus:border focus:border-gray-500 focus:outline-none" name="tag" placeholder="Name Tag" autoComplete="off" required/>
                            {
                                formErr?.tag && (
                                    <>
                                        {formErr?.tag?._errors.map((err) => (
                                            <p key={err} className='text-sm text-red-500'>
                                                {err}
                                            </p>
                                        ))}
                                    </>
                                )
                            }
                            <div className="flex justify-end items-end">
                                <button type="submit" className="bg-green-500 rounded-md hover:bg-green-600 p-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}