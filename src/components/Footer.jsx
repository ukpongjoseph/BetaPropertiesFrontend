import React from 'react'
import betaLogo from '../assets/BH.png'
import location from '../assets/locationIcon.png'
import phone from '../assets/phoneIcon.png'
import message from '../assets/messageIcon.png'

const Footer = () => {
  return (
    <div className='w-[100%] bg-[rgba(3,90,51,1)] text-white py-5 text-[14px] lg:text-lg'>
        {/* upper */}
        <div className='w-[100%] border-b-1 border-gray-400 py-5'>
            <div className='w-[95%] md:w-11/12 container mx-auto text-center md:text-start flex flex-col md:flex-row gap-6 md:gap-3 justify-between'>
                {/* first div */}
                <div className='flex flex-col gap-3 md:w-[35%]'>
                    {/* beta logo */}
                    <div className='flex gap-2 mx-auto md:mx-0'>
                        <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[rgba(61,153,112,1)]'>
                            <span><img src={betaLogo} alt="" /></span>
                        </div>
                        <p className='my-auto text-lg lg:text-2xl'>BetaHouse</p>
                    </div>
                    {/* text */}
                    <p>Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</p>
                    {/* contact lines */}
                    <div className='flex flex-col gap-2 mx-auto md:mx-0'>
                        <div className='flex gap-2'>
                            <span className='my-auto'><img src={location} alt="" /></span>
                            <p>95 Tinubu Estate, Lekki, Lagos</p>
                        </div>
                        <div className='flex gap-2'>
                            <span className='my-auto'><img src={phone} alt="" /></span>
                            <p>+234 675 8935 675</p>
                        </div>
                        <div className='flex gap-2'>
                            <span className='my-auto'><img src={message} alt="" /></span>
                            <p>support@rentbetahouse.com</p>
                        </div>
                    </div>
                </div>
            {/* second div */}
            <div className='flex flex-col md:flex-row gap-8 md:gap-4 md:w-[60%] md:justify-between'>
                {/* quick */}
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-lg'>Quick Links</h1>
                    <a href="#">Home</a>
                    <a href="#">Properties</a>
                    <a href="#">About</a>
                    <a href="#">Contact us</a>
                    <a href="#">Blog</a>
                </div>
                {/* More */}
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-lg'>More</h1>
                    <a href="#">Agents</a>
                    <a href="#">Affordable Houses</a>
                    <a href="#">FAQ's</a>
                </div>
                {/* Popular */}
                <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-lg'>Popular Search</h1>
                    <a href="#">Apartment for sale</a>
                    <a href="#">Apartment for rent</a>
                    <a href="#">3 bedroom flat</a>
                    <a href="#">Bungalow</a>
                </div>
            </div>
        </div>
        </div>
        {/* lower */}
        <div className='flex flex-col md:flex-row w-[95%] md:w-10/12 mx-auto container py-3 text-center md:text-start md:justify-between'>
            <p>Copyright 2023 Betahouse | Designed by Michael.fig, Coded by Aniekan Joseph</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer