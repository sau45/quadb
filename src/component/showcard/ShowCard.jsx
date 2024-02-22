import React, { useEffect, useState } from 'react'
import Lazyloader from '../../utility/Lazyloader'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNotVisibleButton, setShowData } from '../../redux/ShowSlice';



const ShowCard = ({ item, i }) => {
  


    return (
        <div key={i} className='flex w-80 flex-col shadow-lg shadow-gray-300 rounded-lg    ' >
            <div className=' p-4 w-80 mix-blend-color-burn object-contain'>
                <Lazyloader className="h-96 w-80 rounded-md" src={(item?.show?.image?.original) ? (item?.show?.image?.original) : "https://demofree.sirv.com/nope-not-here.jpg"} />
            </div>
            <div className='pl-4 pr-4 pb-8'>
                <p className='font-bold'>{item?.show?.name}</p>
                <div className="flex justify-between">
                    <p>Rating:{" "}{(item?.show?.rating?.average) ? (item?.show?.rating?.average) : "not available!"}</p>
                    <p>Language:{" "}{item?.show?.language}</p>
                </div>
                <div>
                    <p>Genres:{" "}{item?.show?.genres?.map((genre, index) => (
                        <span key={index} className="mr-2">{genre}</span>
                    ))}</p>
                    <p>Release Date :{" "}{(item?.show?.premiered) ? (item?.show?.premiered) : "not available !"}</p>
                </div>


            </div>
        </div>
    )
}

export default ShowCard
