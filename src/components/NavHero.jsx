import React, {useState} from 'react'
import betaLogo from '../assets/BH.png'
import { SquareMenu } from 'lucide-react'
import { Link } from 'react-router-dom'
import bedroomPlus from '../assets/bedroomPlus.png'
import bedroomMinus from '../assets/bedroomMinus.png'

const NavHero = () => {
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
  return (
    <div id='hero' className='w-[100vw] min-h-[500px] pb-7'>
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
                {/* cursor type ensures users can't interact until sign up or sign in */}
                <div className='md:flex hidden gap-2 my-auto text-white'>
                    <a className='cursor-not-allowed' href="#">Home</a>
                    <a className='cursor-not-allowed' href="#">Properties</a>
                    <a className='cursor-not-allowed' href="#">About Us</a>
                    <a className='cursor-not-allowed' href="#">Blog</a>
                    <a className='cursor-not-allowed' href="#">Contact Us</a>
                </div>
                {/* sign up/in */}
                <div className='md:flex hidden gap-3 text-white'>
                    <Link to='/signIn'><button className='px-3 rounded-md border border-white py-2'>Sign In</button></Link>
                    <Link to='/signUp'><button className='bg-[rgba(61,153,112,1)] px-3 rounded-md py-2'>Sign Up</button></Link>
                </div>
                <button onClick={switchOpen} className='md:hidden text-white'><SquareMenu /></button>
            </div>
            {
                isOpen && <div className='flex flex-col text-white gap-2 absolute top-15 left-[10%] z-1 bg-[rgba(3,90,51,1)] w-[80%] mx-auto rounded-md px-2 py-3 text-center'>
                    <div className='flex flex-col gap-1'>
                        <a className='cursor-not-allowed' href="#">Home</a>
                        <a className='cursor-not-allowed' href="#">Properties</a>
                        <a className='cursor-not-allowed' href="#">About Us</a>
                        <a className='cursor-not-allowed' href="#">Blog</a>
                        <a className='cursor-not-allowed' href="#">Contact Us</a>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <Link to='/signIn'><button className='px-6 py-1 rounded-md border border-white'>Sign In</button></Link>
                        <Link to='/signUp'><button className='bg-[rgba(61,153,112,1)] px-6 py-1 rounded-md'>Sign Up</button></Link>
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
                <div className='flex flex-col md:flex-row p-3 underlay rounded-md my-10 text-sm lg:w-[80%] mx-auto mb-5'>
                    <div className='flex flex-col md:flex-row md:rounded-md bg-white px-1 md:px-7 md:w-[75%] justify-between py-2'>
                        {/* location */}
                        <div className='flex flex-col p-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-200'>
                            <label htmlFor="location">LOCATION</label>
                            <input  type="text" placeholder='e.g Gbagada'/>
                        </div>
                        {/* property type */}
                        <div className='flex flex-col p-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-200'>
                            <label htmlFor="type">PROPERTY TYPE</label>
                            <input type="text" placeholder='e.g Duplex, Bedroom Flat'/>
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
                        <button disabled={true} className='bg-[rgba(61,153,112,1)] text-white md:px-3 py-2 rounded-md md:w-[100%] cursor-not-allowed'>Find Property</button>
                    </div>
                    <button id='propButton' className='block md:hidden bg-[rgba(61,153,112,1)] text-white py-3'>Find Property</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavHero