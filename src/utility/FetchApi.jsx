import React from 'react'
import axios from 'axios';

const FetchApi = async () => {

    const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
    // console.log(response)
    return response?.data;
}

export default FetchApi

