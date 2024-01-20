// src/App.jsx
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import im1 from './assets/header.jpg'
import bg1 from './assets/bg-1.jpg'
import parimg from './assets/header4.jpg'
import selfie from './assets/selfie.jpg'
import culture from './assets/culture.jpg'
import event from './assets/event.jpg'
import stay from './assets/stay.jpg'

const Home = () => {
  const [navbarBg, setNavbarBg] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 50) {
        setNavbarBg('white');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <nav style={{ backgroundColor: navbarBg }}>
        <div className="navbar-container">
          <div className="logo">Bali Travel Time</div>
          <div className="nav-items">
            <a href="">Destination</a>
            <a href="">Gallery</a>
            <a href="">Discover</a>
            <a href="">News</a>
          </div>
        </div>
      </nav>
      <div className="hero-section">
        <img src={im1} alt='' />
        <div className="hero-content">
          <h1>GREAT
ART
OF
BALI</h1>
          <p>Telusuri Keindahan Bali Yang
Belum Pernah Anda Temui Sebelumnya</p>
          <button className="orange-button">See Our Vacation</button>
        </div>
      </div>
    </div>
  );
};

// src/App.jsx
// ... (previous code)

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="upper-section">
      <img src={bg1} alt='' />
        <div className="header">
          <h2>Bali Travel Time</h2>
        </div>
        <div className="info">
          <p>
          Bavel merupakan singkatan dari Bali Travel Time merupakan website yang bertujuan mengenalkan pesona keindahan Bali mulai dari Wisata dan 
          </p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="card1">
          <img src="https://chipper-sunshine-cbf3ea.netlify.app/img/About/035-trekking.png" alt="Card 1" />
          <p>ADVENTURE<br/>
Dapatkan pengalaman berpetualang yang belum pernah anda rasakan sebelumnya hanya di Bali</p>
        </div>
        <div className="card1">
          <img src="https://chipper-sunshine-cbf3ea.netlify.app/img/About/028-book.png" alt="Card 2" />
          <p>GUIDE<br/>
Kami memberikan info - info seputar Bali mulai dari event dan destinasi terbaik</p>
        </div>
        <div className="card1">
          <img src="https://chipper-sunshine-cbf3ea.netlify.app/img/About/024-tent.png" alt="Card 3" />
          <p>STAY<br/>
Anda tidak perlu kawatir akan menetap dimana karna kami menyediakan tiket Hotel terbaik</p>
        </div>
      </div>
      <div className="parallax">
        <div className="parallax-content">Bali Island</div>
      </div>
    </div>
  );
};

// ... (export and other components)
const Paralax= ()=>{
  return(
    <div className='plx-cn'>
      <img src={parimg} alt='' />
      <h1>BALI ISLAND</h1>
    </div>
  )
}


const Promotion = () => {
  return(
    <div className="promotion-section" id="container2">
        <h2>Discover Bali</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="discover-cards">
          <div className="discover-card" id="destination">
            <img src={selfie} alt="Destination" />
            <h3>Destination</h3>
            <p className="infoo">Kunjungi destinasi wisata yang belum pernah anda temui sebelumnya</p>
          </div>
          <div className="discover-card" id="culture">
            <img src={culture} alt="Culture" />
            <h3>Culture</h3>
            <p className="infoo">Selain pemandangan yang indah bali juga memiliki budaya yang mengesankan</p>
          </div>
          <div className="discover-card" id="event">
            <img src={event} alt="Event" />
            <h3>Event</h3>
            <p className="infoo">Ikuti dan ketahui event - event menarik yang berlangsung di Bali</p>
          </div>
          <div className="discover-card" id="stay">
            <img src={stay} alt="Stay" />
            <h3>Where to Stay</h3>
            <p className="infoo">Temukan tempat penginapan terbaik dengan harga yang relatif murah</p>
          </div>
        </div>
      </div>
  )

};

const App = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Home />
      <Delivery />
      <Paralax />
      <Promotion />
    </div>
  )
};

export default App;
