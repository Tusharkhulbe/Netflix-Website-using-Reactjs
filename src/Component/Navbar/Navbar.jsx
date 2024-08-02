import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg';
import bell_icon  from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
// import { getmovie } from '../TitleCards/moviefilter';

import { logout } from '../../firebase';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {

 
   
  
  
  const navRef=useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  })
  return (
    <div ref={navRef} className='navbar'>
     <div className="navbar-left">
     {/* <img src={logo} alt="" /> */}
     {/* <div className="navbar">
      <div className="navbar-left"> */}
   <img src={logo} alt="" />
   <ul className='leftbar'>
  
<Link className='link' to={"/"}>Home</Link>
<Link className='link' to={"/new"}>New And Popular</Link>


   </ul>
      {/* </div>
     </div> */}
     
     </div>
      
      <div className="navbar-right">
       
        
       <div className="navbar-profile">
       <img src={profile_img} alt="" className='profile icons' />
       <img src={caret_icon}  className='icons'alt="" />
       <div className="dropdown">
        <p onClick={()=>{logout()}}>Sign out for Netflix</p>
       </div>
       </div>
       <p></p>
      </div>
      </div>
  )
}
