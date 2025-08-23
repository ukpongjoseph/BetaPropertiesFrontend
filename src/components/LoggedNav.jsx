import React, {useState} from 'react'
import betaLogo from '../assets/BH.png'
import { SquareMenu } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import bedroomPlus from '../assets/bedroomPlus.png'
import bedroomMinus from '../assets/bedroomMinus.png'
import {useAuthContext} from '../hooks/useAuthContext'
import downCaret from '../assets/Vector.png'
import axios from 'axios'

const NavHero = () => {
    const nav = useNavigate()
    const {user, logOut,token, setSearchData, setIsfound} = useAuthContext()
    const links = ["Home", "Properties", "About Us", "Blog", "Contact Us"]
    const [deskLogOut, setDeskLogOut] = useState(false)
    const switchLog = () => {
        setDeskLogOut(deskLogOut?false:true)
    }
    const [activeLink, setActiveLink] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const switchOpen = () => {
        setIsOpen(isOpen === true? false : true)
    }
    const [count, setCount] = useState(0)
    const incCount = () => {
        setCount(count + 1)
    }
    const decCount = () => {
        if(count > 0)setCount(count - 1)
    }
    const exit = () => {
        logOut()
        nav('/signIn')
    }
    const [formData, setFormData] = useState({
        city : "",
        propertyType : ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let params = {}
            if(formData.city)params.city = formData.city
            if(formData.propertyType)params.propertyType = formData.propertyType
            if(count > 1)params.noOfBedrooms = count
            const response = await axios.get(
                `https://betaproperties.onrender.com/api/v1/properties/search`,
                {headers: {Authorization: `Bearer ${token}`}, params},
            )
            if(response.status === 200){
                setFormData({
                    city : "",
                    propertyType : ""
                })
                setCount(0)
                setSearchData(response.data.properties)
                setIsfound(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div id='hero' className='w-[100%] min-h-[500px] pb-7 text-sm'>
        <div className='w-[95%] md:w-11/12 container mx-auto'>
            {/* Nav section */}
            <div className='flex justify-between py-2'>
                {/* logo */}
                <div className='overlay'></div>
                <div className='flex gap-2 my-auto'>
                    <div className='w-11 h-11 bg-[rgba(61,153,112,1)] rounded-full flex items-center justify-center'>
                        <span><img src={betaLogo} alt="" /></span>
                    </div>
                    <p className='md:text-xl text-white my-auto'>BetaHouse</p>
                </div>
                {/* Nav Links */}
                <div className='md:flex hidden gap-2 my-auto text-white'>
                    {
                        links.map((link, index) => {
                            return <a style={{
                                borderBottom: activeLink === index ? "2px solid white" : "none"
                            }} onClick={()=>setActiveLink(index)} key={index} href="#">{link}</a>
                        })
                    }
                </div>
                {/* sign up/in */}
                <div className='md:flex hidden gap-3 text-white relative'>
                    <div className='w-12 h-12 rounded-full overflow-hidden'>
                        <span className='w-[100] h-[100] rounded-full'><img className='w-[100%] h-[100%]' src={user && user.profilePicture} alt="" /></span>
                    </div>
                    <div className='my-auto flex gap-1'>
                        <p className='my-auto'>{user && user.firstName} {user && user.lastName}</p>
                        <span onClick={switchLog} className='my-auto'><img src={downCaret} alt="" /></span>
                    </div>
                    {
                        deskLogOut && <button onClick={exit} className='rounded-md px-3 py-1 bg-white text-[rgba(3,90,51,1)] hover:bg-[rgba(3,90,51,1)] hover:text-white absolute right-0 top-10'>Log Out</button>
                    }
                </div>
                <button onClick={switchOpen} className='md:hidden text-white'><SquareMenu /></button>
            </div>
            {
                isOpen && <div className='flex flex-col text-white gap-2 absolute top-15 left-[30px] z-1 bg-[rgba(3,90,51,1)] w-[80%] mx-auto rounded-md px-2 py-3 text-center'>
                    <div className='flex flex-col gap-1'>
                        <a className='cursor-not-allowed' href="#">Home</a>
                        <a className='cursor-not-allowed' href="#">Properties</a>
                        <a className='cursor-not-allowed' href="#">About Us</a>
                        <a className='cursor-not-allowed' href="#">Blog</a>
                        <a className='cursor-not-allowed' href="#">Contact Us</a>
                    </div>
                    <div className='flex flex-col gap-1 mx-auto'>
                        <div className='w-12 h-12 rounded-full overflow-hidden mx-auto'>
                            <span className='w-[100] h-[100] rounded-full'><img className='w-[100%] h-[100%]' src={user && user.profilePicture} alt="" /></span>
                        </div>
                        <div className='my-auto flex flex-col gap-1'>
                            <p className='my-auto'>{user && user.firstName} {user && user.lastName}</p>
                            <button onClick={exit} className='rounded-md px-3 py-1 bg-white text-[rgba(3,90,51,1)] hover:bg-[rgba(3,90,51,1)] hover:text-white'>Log Out</button>
                        </div>
                    </div>
                </div>
            }
            {/* hero section */}
            <div>
                {/* hero text */}
                <div className='text-white flex flex-col gap-4 text-center mt-20 pb-10'>
                    <h1 className='font-bold text-[27px] md:text-5xl lg:text-6xl'>Browse Our Properties</h1>
                    <p className='md:w-[60%] mx-auto lg:w-[40%] lg:text-lg'>Find your perfect home among our curated properties. Start browsing now!</p>
                </div>
                {/* form part */}
                <form onSubmit={handleSubmit} className='flex flex-row p-3 underlay rounded-md my-10 text-sm lg:w-[80%] mx-auto mb-5'>
                    <div className='flex flex-col md:flex-row rounded-md bg-white px-1 md:px-7 md:w-[75%] justify-between py-2'>
                        {/* location */}
                        <div className='flex flex-col p-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-200'>
                            <label htmlFor="city">LOCATION</label>
                            <input  type="text" placeholder='e.g Gbagada' name='city' id='city' value={formData.city} onChange={handleChange}/>
                        </div>
                        {/* property type */}
                        <div className='flex flex-col p-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-200'>
                            <label htmlFor="propertyType">PROPERTY TYPE</label>
                            <input type="text" id='propertyType' name='propertyType' placeholder='e.g Sale or Rent' value={formData.propertyType} onChange={handleChange}/>
                        </div>
                        {/* bedroom */}
                        <div className='flex flex-col p-1'>
                            <label htmlFor="bedroom">BEDROOM</label>
                            <div className='flex gap-2'>
                                <span onClick={incCount}><img src={bedroomPlus} alt="" /></span>
                                <p>{count}</p>
                                <span onClick={decCount}><img src={bedroomMinus} alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex md:w-[25%] hidden'>
                        <button className='bg-[rgba(61,153,112,1)] text-white md:px-3 py-2 rounded-md md:w-[100%]'>Find Property</button>
                    </div>
                    <button id='propButton' className='block md:hidden bg-[rgba(61,153,112,1)] text-white'>Find Property</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NavHero