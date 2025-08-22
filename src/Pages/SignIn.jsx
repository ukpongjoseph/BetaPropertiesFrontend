import React, {useState} from 'react'
import BetaLogo from '../assets/BH.png'
import { Link, useNavigate } from 'react-router-dom'
import googleLogo from '../assets/googleLogo.png'
import axios from 'axios'
import {useAuthContext} from "../hooks/useAuthContext"

const SignIn = () => {
  const nav = useNavigate()
  const {Login} = useAuthContext()
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(checked === true? false : true)
  }
  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })
  const [errors, setErrors] = useState({
    email : "",
    password : ""
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name] : value})
    setErrors({...errors, [name] : ""})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newError = {
      email : "",
      password : ""
    }
    let hasError = false
    if(!formData.email.includes("@")){
      hasError = true
      newError.email = "Invalid email address"
    }
    if(!formData.email){
      hasError = true
      newError.email = "please provide your email address"
    }
    if(!formData.password){
      hasError = true
      newError.password = "please provide your password"
    }
    if(formData.password.length < 6){
      hasError = true
      newError.password = "minimum password length is 6"
    }
    if(hasError){
      setErrors(newError)
    }
    else{
      try {
        const response = await axios.post(
          `https://betaproperties.onrender.com/api/v1/auth/user/login`,
          {...formData}
        )
        if(response.status === 200){
          Login(response.data)
          nav('/Home')
        }
        setFormData({
          email : "",
          password : ""
        })
        setChecked(false)
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div className='w-[95%] md:w-11/12 mx-auto container flex justify-center items-center min-h-[100vh]'>
      {/* parent div */}

      <div className='flex flex-col md:flex-row-reverse lg:w-[70%] w-[100%] shadow-2xl my-10 lg:mt-0'>
        {/* image div */}

        <div id='auth' className='min-h-[500px] w-[100%] md:w-[50%]'>
          {/* beta logo and text */}
          <div className='flex gap-2 relative top-[30px] left-[20px] w-[60%]'>
            <div className='h-11 w-11 bg-[rgba(61,153,112,1)] rounded-full flex justify-center items-center'>
              <span><img src={BetaLogo} alt="" /></span>
            </div>
            <h1 className='my-auto text-xl text-white'>BetaHouse</h1>
          </div>
        </div>

        {/* form */}

        <div className='md:w-[50%] min-h-[500px] flex flex-col justify-center py-3'>
          <div className='flex flex-col gap-1 w-[90%] md:w-[80%] mx-auto'>
            <h1 className='font-bold text-xl'>Welcome Back to BetaHouse!</h1>
            <p className='text-[12px] pb-3'>Lets get started by filling out the information below</p>
            <form onSubmit={handleSubmit} className='text-sm lg:text-md flex flex-col gap-2'>
              {/* email */}
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input className='py-1 px-2 border border-gray-300 rounded-md' type="email" placeholder='Enter your Email' id='email' name='email' value={formData.email} onChange={handleChange}/>
                {errors.email && <p className='text-[10px] text-red-600'>{errors.email}</p>}
              </div>
              {/* password */}
              <div className='flex flex-col gap-1'>
                <label htmlFor="password">Password</label>
                <input className='py-1 px-2 border border-gray-300 rounded-md' type="password" name="password" id="password" placeholder='Enter your password' value={formData.password} onChange={handleChange}/>
                {errors.password && <p className='text-[10px] text-red-600'>{errors.password}</p>}
              </div>
              {/* checkbox and forgot password */}
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <input onClick={handleCheck} className='accent-[rgba(61,153,112,1)]' type="checkbox" name="checked" id="checked" />
                  <label htmlFor="checked">Remember Me</label>
                </div>
                <p className='text-red-600'>Forgot Password</p>
              </div>
              {/* button */}
              <button className='w-[99%] mx-auto text-white bg-[rgba(61,153,112,1)] rounded-md py-1'>Sign up</button>
              {/* or */}
              <div className='flex gap-1 w-[100%] py-1'>
                <hr className='flex-grow my-auto text-gray-200' />
                <span className='my-auto'>or</span>
                <hr  className='flex-grow my-auto text-gray-200'/>
              </div>
              {/* google */}
              <button className='flex gap-2 justify-center border rounded-md border-gray-200 py-2'>
                <span><img src={googleLogo} alt="" /></span>
                <p>Continue with Google</p>
              </button>
              {/* new user */}
              <div className='flex gap-2 justify-center'>
                <p>New User?</p>
                <Link className='text-[rgba(61,153,112,1)]' to='/signUp'>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn