
import './Home.css';
import { Navbar } from '../../Component/Navbar/Navbar';
import hero_banner from '../../../public/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Component/TitleCards/TitleCards';
import Footer from '../../Component/footer/Footer';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate= useNavigate();
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties toa secret ancient order,a young man living
            in modern Instanbul embarks on a quest to save the city from the immortal
            enemy</p>
           
          <div className="hero-btns">
            <button className='btn' onClick={()=>{navigate('/new')}}><img src={play_icon} alt="" />Play</button> 
           {/* <button className='btn dark-btn'><img src={info_icon} alt="" />Play</button> */}

         </div> 
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top pics for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>


  )
}

export default Home;