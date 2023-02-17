import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function SignUp() {
  const formSchema = Yup.object().shape({
    FirstName: Yup.string()
      .required('FirstName is mendatory'),
      NumberOfEmploy: Yup.string()
      .required('Number Of Employ is mendatory'),
      SelectCategory: Yup.string()
      .required('Select Category is mendatory'),
      EmailAddress: Yup.string()
      .required('Email Address is mendatory'),
      Password: Yup.string()
      .required('Password is mendatory')
  .matches(/[a-z]+/, "One lowercase character")
  .matches(/[A-Z]+/, "One uppercase character")
  .matches(/[@$!%*#?&]+/, "One special character")
  .matches(/\d+/, "One number")
  .min(8, "Must be 8 characters or more")
  ,
      ConfirmPassword: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('Password')], 'Passwords does not match'),
  })
  const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);
    const [array,setArray]=useState([])

  const onSubmit=(e)=>{
       setArray([...array,e])
    }
  console.log(array)

  return (
    <>
<div className="h-screen flex">
  <div className="hidden w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center sm:flex">
    <div className="flex flex-col items-center">
      <h1 className="text-white font-bold text-4xl font-sans">Confluence</h1>
      <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
      <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 ">Read More</button>
    </div>
  </div>
  <div className="flex w-full justify-center items-center bg-white sm:w-1/2">
    <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign Up</h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Please fill in this form to create an account!</p>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="text" name="FirstName" id="" placeholder="First Name" {...register("FirstName", { required: true })}/>
      </div>
        {errors.FirstName && <span className="text-red-600 flex pl-4">{errors.FirstName?.message}</span>}

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="text" name="EmailAddress" id="" placeholder="Email Address" {...register("EmailAddress", { required: true })}/>
      </div>
        {errors.EmailAddress && <span className="text-red-600 flex pl-4">{errors.EmailAddress?.message}</span>}

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="number" name="NumberOfEmploy" id="" placeholder="Number of Employ" {...register("NumberOfEmploy", { required: true })}/>
      </div>
        {errors.NumberOfEmploy && <span className="text-red-600 flex pl-4">{errors.NumberOfEmploy?.message}</span>}

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <select className="pl-2 outline-none border-none w-full" type="number" name="SelectCategory" id="" placeholder="Select Category" {...register("SelectCategory", { required: true })}>
    
    <option value="" disabled selected>Choose here</option>
    <option value="Playing">Playing</option>
    <option value="Shoping">Shoping</option>
    <option value="Entertainment">Entertainment</option>
    <option value="Technology">Technology</option>
    <option value="Music">Music</option>
    <option value="Public Event">Public Event</option>
  </select>
  
      </div>
        {errors.SelectCategory && <span className="text-red-600 flex pl-4">{errors.SelectCategory?.message}</span>}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password" name="Password" id="" placeholder="Password" {...register("Password", { required: true })}/>
      </div>
        {errors.Password && <span className="text-red-600 flex pl-4">{errors.Password?.message}</span>}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password" name="ConfirmPassword" id="" placeholder="Confirm Password" {...register("ConfirmPassword", { required: true })}/>
      </div>
      {errors.ConfirmPassword && <span className="text-red-600 flex pl-4">{errors.ConfirmPassword?.message}</span>}
      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" >SignUp</button>
    </form>
  </div>
</div>
</>
  )
}
