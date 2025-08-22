import React, {useEffect, useState} from 'react'
import pagLeft from '../assets/paginationLeft.png'
import pagRight from '../assets/paginationRight.png'
import filter from '../assets/filterIcon.png'
import arrowDown from '../assets/iconamoon_arrow-down-2.png'
import Props from './Props'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'

const LoggedProperties = () => {
    const {token, isFound, searchData} = useAuthContext()
    const [data, setData] = useState([])
    useEffect(()=>{
        const getProperties = async () => {
            const response = await axios.get(
                `https://betaproperties.onrender.com/api/v1/properties/all`,
                {headers: {
                    Authorization: `Bearer ${token}`
                }}
            )
            setData(response.data.properties)
        }
        getProperties()
    }, [token])
    const pageArray = []
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 9
    const lastIndex = currentPage * postPerPage
    const firstIndex = lastIndex - postPerPage
    const maxPageNo = Math.ceil(data.length / postPerPage)
    for(let i = 0; i < maxPageNo; i++){
        pageArray.push(i + 1)
    }
    const properties = data.slice(firstIndex, lastIndex)
    const foundProperties = searchData.slice(firstIndex, lastIndex)
    const nextPage = () => {
        if(currentPage === maxPageNo){
            setCurrentPage(currentPage)
        }
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }else{
            setCurrentPage(1)
        }
    }
  return (
        <div className='w-[95%] md:w-11/12 container mx-auto py-5 lg:py-10 text-[12px] md:text-md lg:text-[14px]'>
        {/* result and filters */}
        <div className='flex md:justify-between md:flex-row flex-col gap-2'>
            {/* filter */}
            <div className='flex gap-2 lg:gap-3 my-auto'>
                <div className='flex gap-2 lg:gap-3'>
                    <span className='cursor-not-allowed'><img src={filter} alt="" /></span>
                    <p>More Filter</p>
                </div>
               {!isFound &&  <p>Showing {firstIndex + 1} - {lastIndex < data.length? lastIndex : data.length} of {data.length} results</p>}
               {isFound &&  <p>Showing {firstIndex + 1} - {lastIndex < searchData.length? lastIndex : searchData.length} of {searchData.length} results</p>}
            </div>
            {/* sort */}
            <div className='flex gap-2'>
                <p className='my-auto'>Sort by :</p>
                <div className='flex gap-1 cursor-not-allowed'>
                    <p className='my-auto'>Default</p>
                    <span><img src={arrowDown} alt="" /></span>
                </div>
            </div>
        </div>
        {/* properties */}
            {
                            !isFound && <div className='grid gap-3 grid-cols-1 md:grid-cols-3 py-3'>
                        {
                            properties.map((house, index) => {
                                return <Props key={index} {...house} />
                            })
                        }
                    </div>
            }
            {
                isFound && <div className='grid gap-3 grid-cols-1 md:grid-cols-3 py-3'>
                            {
                                foundProperties.map((house, index) => {
                                    return <Props key={index} {...house} />
                                })
                            }
                        </div>
            }
        {/* pagination */}
        <div className='flex justify-center gap-2'>
            <span style={{
                cursor : currentPage === 1 ? "none" : "" 
            }} onClick={prevPage}><img src={pagLeft} alt="" /></span>
            {
                pageArray.map((page, index) => {
                    return <button key={index} onClick={()=>setCurrentPage(page)} style={{
                        backgroundColor : currentPage === page ? "rgba(61,153,112,1)" : "white",
                        color : currentPage === page ? "white" : "black"
                    }} className='px-2 text-lg my-auto text-[12px]'>{page}</button>
                })
            }
            <span style={{
                cursor : currentPage === maxPageNo ? "none" : ""
            }} onClick={nextPage}><img src={pagRight} alt="" /></span>
        </div>
    </div>
  )
}

export default LoggedProperties