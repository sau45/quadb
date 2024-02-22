import React, { useEffect, useState } from 'react';
import FetchApi from '../utility/FetchApi';
import ShowCard from '../component/showcard/ShowCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowData } from '../redux/ShowSlice';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const handleButton = (item) => {
    // localStorage.setItem('showData', JSON.stringify(item));

    dispatch(setShowData(item));
    navigate("/summary");


  }


  useEffect(() => {
    const fetchData = async () => {
      const response = await FetchApi();
      setData(response);
    };
    fetchData();
  }, []);


  return (
    <div className='md:pr-4 md:pl-20 md:pt-4 pt-4  '>
      <div className='flex flex-wrap p-4 items-center justify-center  pt-14 '>
        {data?.map((item, i) => (
          <div>
            <ShowCard item={item} i={i} />
            <div className='flex justify-center p-8 '>

              <button className='bg-blue-500 pt-2 pr-8 pl-8 pb-2 rounded-xl shadow-md font-[700] text-black' onClick={() => handleButton(item)} >View Summary</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
