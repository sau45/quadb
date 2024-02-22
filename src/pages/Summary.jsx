import React, { useEffect, useState } from 'react'
import ShowCard from '../component/showcard/ShowCard'
import { useDispatch, useSelector } from 'react-redux'
import { setShowData } from '../redux/ShowSlice';


const Summary = () => {
    const showData = useSelector((state) => state.data.showdata);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     const storedData = localStorage.getItem('showData');
    //     if (storedData) {
    //         dispatch(setShowData(JSON.parse(storedData)));
    //     }
    // }, [dispatch]);







    return (
        <div className='flex flex-col md:flex-row  pt-24 pr-8 pl-8 items-center justify-center '>
            <ShowCard item={showData} i={showData?.show?.id} />
            <div className='flex flex-col gap-8 text-[30px] p-8 shadow-lg shadow-gray-400 rounded-3xl justify-around md:m-4'>
                <p className='font-bold text-center'>{showData?.show?.name}</p>
                <p className='text-[25px] '>{showData?.show?.summary}</p>

                <div className='flex flex-col md:flex-row sm:flex-row justify-between gap-8 md:gap-0'>
                    <div className='text-[20px]'>
                        <p>Show Name : {" "}<span className='text-[15px]'>{showData?.show?.name}</span></p>
                        <p>Type:{" "}<span className='text-[15px]'>{showData?.show?.type}</span></p>
                        <p>Language:{" "} <span className='text-[15px]'>{showData?.show?.language}</span></p>
                    </div>
                    <div className='text-[20px]'>
                        <p>Rating : {" "}<span className='text-[15px]'>{showData?.show?.rating?.average}</span></p>
                        <p>Status:{" "}<span className='text-[15px]'>{showData?.show?.status}</span></p>
                        <p>Runtime:{" "} <span className='text-[15px]'>{showData?.show?.runtime}</span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Summary
