import React from 'react'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    function Message(e) {
        e.target.value = ''
    }
    return (
        <>
            <div className="flex h-screen items-center justify-center text-sm">
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='font-bold text-3xl'>Contact Us</h1><br />
                    
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Enter your name'
                        className='w-100 px-3 border py-1 outline-none'
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                    <br />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email'
                        className='w-100 px-3 border py-1  outline-none'
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    <br />

                    <label htmlFor="message">Message</label>
                    <textarea className='border p-2 font-light' rows="4" name="message" id="message" onClick={(e) => Message(e)}
                        {...register("message", { required: true })}
                        placeholder='Type your message...'
                    ></textarea>
                    {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                    <br />

                    <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Contact