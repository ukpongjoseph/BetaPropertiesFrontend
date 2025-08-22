import React, {useState} from 'react'
import BetaLogo from '../assets/BH.png'
import AuthImg from '../assets/authImage.png'
import { Link, useNavigate } from 'react-router-dom'
import googleLogo from '../assets/googleLogo.png'
import axios from 'axios'

const SignUp = () => {
  const nav = useNavigate()
  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })
  const [errors, setErrors] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })
  // state to monitor checkbox
  const [checked, setChecked] = useState(false)
  // function to monitor checkbox
  const handleCheck = () => {
    setChecked(checked === true? false : true)
  }
  const handleChange = async (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name] : value})
    setErrors({...errors, [name] : ""})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newError = {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      confirmPassword : ""
    }
    let hasError = false
    if(!formData.firstName){
      hasError = true
      newError.firstName = "Please provide your firstname"
    }
    if(!formData.lastName){
      hasError = true
      newError.lastName = "Please provide your lastname"
    }
    if(formData.firstName.length < 6){
      hasError = true
      newError.firstName = "min character length is 6"
    }
    if(formData.lastName.length < 6){
      hasError = true
      newError.lastName = "min character length is 6"
    }
    if(!formData.email || !formData.email.includes("@")){
      hasError = true
      newError.email = "Invalid email address"
    }
    if(!formData.password){
      hasError = true
      newError.password = "please provide your password"
    }
    if(!formData.confirmPassword){
      hasError = true
      newError.confirmPassword = "please confirm your password"
    }
    if(formData.password !== formData.confirmPassword){
      hasError = true
      newError.password = "password Mismatch"
    }
    if(formData.password.length < 6){
      hasError = true
      newError.password = "minimum password length is 6"
    }
    if(formData.confirmPassword.length < 6){
      hasError = true
      newError.confirmPassword = "minimum password length is 6"
    }
    if(hasError || !checked){
      setErrors(newError)
    }
    else{
      try {
        const response = await axios.post(
          `https://betaproperties.onrender.com/api/v1/auth/user/register`,
          {...formData}
        )
        setFormData({
          firstName : "",
          lastName : "",
          email : "",
          password : "",
          confirmPassword : ""
        })
        setChecked(false)
        if(response.status === 201){
          nav("/signIn")
        }
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

        {/* form div */}

        <div className='md:w-[50%] min-h-[500px] flex flex-col justify-center py-3'>
          <div className='flex flex-col gap-1 w-[90%] mx-auto'>
          <h1 className='font-bold text-xl'>Join our community of home seekers and explore the possibilities that awaits</h1>
          <p className='text-[12px] pb-3'>Lets get started by filling out the information below</p>
          <form onSubmit={handleSubmit} className='text-sm lg:text-md flex flex-col gap-2'>
            {/* firstname and lastname */}
            <div className='flex gap-3 w-[100%]'>
              {/* firstname */}
              <div className='flex flex-col gap-1 w-[47%]'>
                <label htmlFor="firstName">First Name</label>
                <input className='py-1 px-2 border border-gray-300 rounded-md' type="text" name="firstName" id="firstName" placeholder='Enter Name' value={formData.firstName} onChange={handleChange}/>
                {errors.firstName && <p className='text-[10px] text-red-600'>{errors.firstName}</p>}
              </div>
              {/* lastname */}
              <div className='flex flex-col gap-1 w-[47%]'>
                <label htmlFor="lastName">Last Name</label>
                <input className='py-1 px-2 border border-gray-300 rounded-md' type="text" name="lastName" id="lastName" placeholder='Enter Name' value={formData.lastName}  onChange={handleChange}/>
                {errors.lastName && <p className='text-[10px] text-red-600'>{errors.lastName}</p>}
              </div>
            </div>
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
            {/* confirm password */}
            <div className='flex flex-col gap-1'>
              <label htmlFor="confirmPasssword">Confirm password</label>
              <input className='py-1 px-2 border border-gray-300 rounded-md' type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm your password' value={formData.confirmPassword}  onChange={handleChange}/>
              {errors.confirmPassword && <p className='text-[10px] text-red-600'>{errors.confirmPassword}</p>}
            </div>
            {/* checkbox */}
            <div className='flex gap-2 py-2'>
              <input onClick={handleCheck} className='accent-[rgba(61,153,112,1)]' type="checkbox" name="checked" id="checked" />
              <label className='text-[12px]' htmlFor="checked">I agree to <span className='text-[rgba(61,153,112,1)]'>Terms of Service</span> and <span className='text-[rgba(61,153,112,1)]'>Privacy Policies</span></label>
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
            {/* sign in */}
            <div className='flex gap-2 justify-center text-[12px] pt-2'>
              <p>Already have an account ?</p>
              <Link className='text-[rgba(61,153,112,1)]' to='/signIn'>Sign in</Link>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp