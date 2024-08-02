import React, { useEffect, useRef, useState } from 'react'
import '../Component/TitleCards/TitleCards.css'
import cards_data from '../../src/assets/cards/Cards_data'
import { Link, useNavigate } from 'react-router-dom'

export default function New({title,category}) {
    const [apiData,setApiData]=useState([])
    const cardsRef=useRef();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdhNzgzNWM1ZDQ4NzVkMDRjZDZhZTZlZTRkMTBkYyIsInN1YiI6IjY2NTFlNzMzYjkxY2RhMzU5YTk5YTgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ka4zZs4EBKjl_gTvOCfCFRkbXMX_fwBuYn9oHOxjHxc'
      }
    };
    
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
  })
  
  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  
  }
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel)
  })
    return (
      <div className={'title-cards'}>
        <h1> New And Popular</h1>
       <div  style={{height:'100%', display:'flex',flexDirection:'row'}}className="card-list" ref={cardsRef}>
       {apiData.map((card,index)=>{
        <h2>{title?title:"Popular on Netflix"}</h2>
         return(
         <Link  to={`/player/${card.id}`}className="card" key={index}>
          <img  style={{margin:'15px'}}src={`https://image.tmdb.org/t/p/w780`+card.backdrop_path}  alt="" />
          <br/>
          <div style={{textAlign:'center'}}>
          <p style={{position:'relative',left:'4%',margin:'20px'}}>{card.original_title}</p>
          <button style={{backgroundColor:'red',color:'white',fontSize:'17px'  }}>Watch Now</button>
     
          </div>
       
          
         </Link>
         )
           })}
          
        
       </div>
  
      </div>
    )
}
