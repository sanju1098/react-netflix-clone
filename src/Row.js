import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'
import { IMAGEBASEURL } from "./requests"

export const Row = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]) 
    // console.log(movies);

  return ( 
    <div className="row">
        <h2>{title}</h2>
        <div className='row-posters'>
            {movies.map(movie=>(
                <img 
                    key={movie.id}
                    className={`row-poster ${isLargeRow && "row-poster-large"}`}
                    src={`${IMAGEBASEURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.original_title}
                />
            ))}
        </div>
    </div>
  )
}
