import React from 'react'
import propLocat from '../assets/propertyLocat.png'
import bedroom from '../assets/propertyBedroom.png'
import bathroom from '../assets/propertyBathroom.png'
import negotiate from '../assets/negotiate.png'
import share from '../assets/shareIcon.png'
import love from '../assets/loveIcon.png'
import gps from '../assets/propertyGPS.png'
import vid from '../assets/propertyVideo.png'
import Img from '../assets/propertyImg.png'


const Props = ({propertyName, town, city, price, noOfBedrooms, noOfBathrooms, propertyType, propertyImage}) => {
  return (
    <div className='flex flex-col h-[300px] lg:h-[400px] overflow-hidden rounded-md shadow-2xl'>
        <div>
            {/* upper */}
            <div className='h-[150px] lg:h-[200px] relative'>
                <span><img className='h-[100%] w-[100%]' src={propertyImage} alt="" /></span>
                {/* type and featured */}
                <div className='flex justify-between text-white px-3 gap-4'>
                    <p className='font-bold bg-[rgba(61,153,112,1)] px-5 py-2 rounded-md absolute top-[14px] left-[7px]'>Featured</p>
                    <p className='font-bold bg-[rgba(211,211,211,0.7)] px-5 py-2 rounded-md absolute top-[14px] right-[7px]'>For {propertyType}</p>
                </div>
                {/* GPS, video, frame */}
                <div className='flex gap-2 absolute bottom-[14px] right-[7px]'>
                    <span><img src={gps} alt="" /></span>
                    <span><img src={vid} alt="" /></span>
                    <span><img src={Img} alt="" /></span>
                </div>
            </div>
            {/* lower */}
            <div className='h-[150px] lg:h-[200px] w-[95%] mx-auto py-2 md:px-2 px-4'>
                {/* name, location, bedroom and bathromm */}
                <div className='py-2'>
                    <h1 className='font-bold text-lg lg:text-2xl'>{propertyName}</h1>
                    {/* location town and city */}
                    <div className='flex gap-2 py-2 lg:py-3'>
                        <span><img src={propLocat} alt="" /></span>
                        <p>{town}, {city}</p>
                    </div>
                    {/* bedroom and bathroom */}
                    <div className='w-[80%] md:w-[100%] lg:w-[80%] flex justify-between gap-2'>
                        {/* bedrooms */}
                        <div className='flex gap-1'>
                            <span><img src={bedroom} alt="" /></span>
                            <p>{noOfBedrooms} Bedrooms</p>
                        </div>
                        {/* bathrooms */}
                        <div className='flex gap-1'>
  <                         span><img src={bathroom} alt="" /></span>
                            <p>{noOfBathrooms} Bathrooms</p>
                        </div>
                    </div>
                </div>
                {/* price */}
                <div className='flex justify-between border-t-2 border-gray-200 py-3 lg:py-6'>
                    <p className='w-[70%] font-bold text-md md:text-[15px] lg:text-xl'>₦{price}{propertyType === "Rent" ? "/1 Year" : ""}</p>
                    <div className='flex justify-between gap-3 w-[30%]'>
                        <span><img src={negotiate} alt="" /></span>
                        <span><img src={share} alt="" /></span>
                        <span><img src={love} alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Props