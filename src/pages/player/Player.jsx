import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { Link, useParams } from 'react-router-dom';
const Player= () => {
  const {id}=useParams();
  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjdhNzgzNWM1ZDQ4NzVkMDRjZDZhZTZlZTRkMTBkYyIsInN1YiI6IjY2NTFlNzMzYjkxY2RhMzU5YTk5YTgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ka4zZs4EBKjl_gTvOCfCFRkbXMX_fwBuYn9oHOxjHxc'
    }
  };
  
 useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results[0]))
  .catch(err => console.error(err));
 })
  return (
    <div className='player'>
     <Link to={`http://localhost:5173/`}><img src={back_arrow_icon} alt="" /></Link>
     <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
     title='trailer' frameBorder='0' allowFullScreen></iframe>
     <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
    
     </div>
    </div>
  )
}


export default Player;