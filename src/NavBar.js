import React, { useEffect, useState } from 'react'
import "./App.css"

export const NavBar = () => {
    const [navBlur, setNavblur]=useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            setNavblur(true)
        } else setNavblur(false);
      });
    }, [])
    
  return (
    <div className={`${navBlur ? "nav nav-bar-black" : "nav"}`}>
        <img 
            className="nav-logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="Netflix"
        />
        <img 
            className="nav-avatar" 
            src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"
            alt="User"
        />
    </div>
  )
}

