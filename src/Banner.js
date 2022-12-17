import React, { useEffect, useState } from 'react'
import axios from './axios'
import {IMAGEBASEURL, requests} from './requests';
import "./Banner.css"
const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setBanner(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []) 
    // console.log(banner);

    const truncate=(str, n)=>{
        return str?.length>n ? str.substr(0,n-1)+"...." : str;
    }
  return (
    <header className="banner" style={{ backgroundSize:"cover", backgroundImage:`url(${IMAGEBASEURL}/${banner?.backdrop_path})`, backgroundPosition:"fit" }}>
        <div className="banner-content">
            <h1 className="banner-title">{banner?.title || banner?.name || banner?.original_title}</h1>
            <div className="banner-button-content">
                <button className="banner-button">PLAY</button>
                <button className="banner-button">MY LIST</button>
            </div>
            <h1 className="banner-description">{truncate(banner?.overview, 150)}</h1>
        </div>
        <div className="banner-fade-bottom" />
    </header>
  )
}

export default Banner