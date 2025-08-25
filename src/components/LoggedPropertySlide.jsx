import React, {useRef} from 'react'
import arrLeft from '../assets/arrowLeft.png'
import arrRight from '../assets/arrowRight.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propLocat from '../assets/locationIcon.png'
import { useAuthContext } from '../hooks/useAuthContext'


const LoggedPropertySlide = () => {
  const {data} = useAuthContext()
    const house = useRef(null)
    const house1 = useRef(null)
    const house2 = useRef(null)
    const handleNext = () => {
      house.current.slickNext()
    }
    const handleNext1 = () => {
      house1.current.slickNext()
    }
    const handleNext2 = () => {
        house2.current.slickNext()
    }
    const handlePrev = () => {
      house.current.slickPrev()
    }
    const handlePrev1 = () => {
      house1.current.slickPrev()
    }
    const handlePrev2 = () => {
      house2.current.slickPrev()
    }
    const Slides = data.splice(1,8)
 var slideSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='w-[95%] md:w-11/12 container mx-auto relative pb-5'>
        <h1 className='font-bold text-2xl lg:text-3xl text-center py-7'>Discover Our Popular Properties</h1>

        {/* Laptop */}

        <div className='hidden lg:block'>
          <button onClick={handlePrev} className='z-1 absolute left-[0px] bottom-[40%]'><img className='w-[25px]' src={arrLeft} alt="" /></button>
          <button onClick={handleNext} className='z-1 absolute right-[0px] bottom-[40%]'><img className='w-[25px]' src={arrRight} alt="" /></button>
          <div>
            <Slider {...slideSettings} ref={house}>
              {
                Slides.map((property, index) => {
                  return (
                    <div key={index} className="slider-container hidden lg:block">
                      <div>
                        <div className='imgOverlay w-[5%]'></div>
                        <span><img className='w-[100%] h-[300px]' src={property.propertyImage} alt="" /></span>
                        <div className='absolute bottom-[20px] px-3 z-1 text-white text-sm flex flex-col gap-2'>
                          <h1 className='font-bold text-lg'>{property.propertyName}</h1>
                          <p className='font-bold'>₦{property.price}</p>
                          <div className='flex gap-1'>
                            <p className='border-white border-r-1 pr-1'>{property.noOfBedrooms} Bed</p>
                            <p className='border-white border-r-1 pr-1'>{property.noOfBathrooms} Bath</p>
                            <p>720 sq ft</p>
                          </div>
                          <div className='flex gap-1'>
                            <span><img src={propLocat} alt="" /></span>
                            <p>{property.town}, {property.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>

        {/* Mobile */}
        <div className='block md:hidden'>
          <button onClick={handlePrev1} className='z-1 absolute left-[0px] bottom-[40%]'><img className='w-[25px]' src={arrLeft} alt="" /></button>
          <button onClick={handleNext1} className='z-1 absolute right-[0px] bottom-[40%]'><img className='w-[25px]' src={arrRight} alt="" /></button>
          <div>
            <Slider {...settings} ref={house1}>
              {
                Slides.map((property, index) => {
                  return (
                    <div key={index} className="slider-container hidden lg:block">
                      <div>
                        <div className='imgOverlay w-[50%]'></div>
                        <span><img className='w-[100%] h-[300px]' src={property.propertyImage} alt="" /></span>
                        <div className='absolute bottom-[20px] px-3 z-1 text-white text-sm flex flex-col gap-2'>
                          <h1 className='font-bold text-lg'>{property.propertyName}</h1>
                          <p className='font-bold'>₦{property.price}</p>
                          <div className='flex gap-1'>
                            <p className='border-white border-r-1 pr-1'>{property.noOfBedrooms} Bed</p>
                            <p className='border-white border-r-1 pr-1'>{property.noOfBathrooms} Bath</p>
                            <p>720 sq ft</p>
                          </div>
                          <div className='flex gap-1'>
                            <span><img src={propLocat} alt="" /></span>
                            <p>{property.town}, {property.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
        {/* Tablet */}
        <div className='hidden md:block lg:hidden'>
          <button onClick={handlePrev2} className='z-1 absolute left-[0px] bottom-[40%]'><img className='w-[25px]' src={arrLeft} alt="" /></button>
          <button onClick={handleNext2} className='z-1 absolute right-[0px] bottom-[40%]'><img className='w-[25px]' src={arrRight} alt="" /></button>
          <div>
            <Slider {...setting} ref={house2}>
              {
                Slides.map((property, index) => {
                  return (
                    <div key={index} className="slider-container hidden lg:block">
                      <div>
                        <div className='imgOverlay w-[10%]'></div>
                        <span><img className='w-[100%] h-[300px]' src={property.propertyImage} alt="" /></span>
                        <div className='absolute bottom-[20px] px-3 z-1 text-white text-sm flex flex-col gap-2'>
                          <h1 className='font-bold text-lg'>{property.propertyName}</h1>
                          <p className='font-bold'>₦{property.price}</p>
                          <div className='flex gap-1'>
                            <p className='border-white border-r-1 pr-1'>{property.noOfBedrooms} Bed</p>
                            <p className='border-white border-r-1 pr-1'>{property.noOfBathrooms} Bath</p>
                            <p>720 sq ft</p>
                          </div>
                          <div className='flex gap-1'>
                            <span><img src={propLocat} alt="" /></span>
                            <p>{property.town}, {property.city}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>
    </div>
  )
}

export default LoggedPropertySlide