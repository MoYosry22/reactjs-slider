import './App.css';
import React, { useState, useEffect } from 'react';
import video1 from './assets/videos/asteroids.mp4'
import video2 from './assets/videos/Alien surface.mp4'
import video3 from './assets/videos/planet earth.mp4'
import video4 from './assets/videos/planet hot.mp4'
import video5 from './assets/videos/space hole.mp4'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [videos, setVideos] = useState([
    { src: video1, type: "video/mp4" }, 
    { src: video2, type: "video/mp4" },
    { src: video3, type: "video/mp4" },
    { src: video4, type: "video/mp4" },
    { src: video5, type: "video/mp4" },
  ]);
  const [manual, setManual] = useState(0);
  useEffect(() => {
    Slidernav(manual);
  }, [manual]);
  useEffect(() => {
    const interval = setInterval(() => {
      setManual((manual) => (manual + 1) % 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const Slidernav = (manual) => {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
  }

  return (
    <>
      <section className="home">
        {videos.map((video, index) => (
            <video  className={`video-slide ${index === manual ? "active" : ""}`} key={index} autoPlay loop muted >
              <source src={video.src} type={video.type} />
            </video>
        ))}

        <div className="content active">
          <h1>Planet <span>Earth</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ipsa earum culpa quis ipsam quasi magni nihil iste voluptate esse?
            Aliquid consequuntur repellat sint dolore aut error numquam, temporibus quibusdam!</p>
          <a href="#">Read More..</a>
        </div>
        <div className="content">
          <h1>Planet <span>Earth</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ipsa earum culpa quis ipsam quasi magni nihil iste voluptate esse?
            Aliquid consequuntur repellat sint dolore aut error numquam, temporibus quibusdam!</p>
          <a href="#">Read More..</a>
        </div>
        <div className="content">
          <h1>Planet <span>Earth</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ipsa earum culpa quis ipsam quasi magni nihil iste voluptate esse?
            Aliquid consequuntur repellat sint dolore aut error numquam, temporibus quibusdam!</p>
          <a href="#">Read More..</a>
        </div>
        <div className="content">
          <h1>Planet <span>Earth</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ipsa earum culpa quis ipsam quasi magni nihil iste voluptate esse?
            Aliquid consequuntur repellat sint dolore aut error numquam, temporibus quibusdam!</p>
          <a href="#">Read More..</a>
        </div>
        <div className="content">
          <h1>Planet <span>Earth</span></h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ipsa earum culpa quis ipsam quasi magni nihil iste voluptate esse?
            Aliquid consequuntur repellat sint dolore aut error numquam, temporibus quibusdam!</p>
          <a href="#">Read More..</a>
        </div>
        <div className="icons">
          <a href="#"><i className="fa fa-facebook-f"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>

        <div className="slider-navigation">
          <div className="nav-btn active" onClick={() => setManual(0)}></div>
          <div className="nav-btn" onClick={() => setManual(1)}></div>
          <div className="nav-btn" onClick={() => setManual(2)}></div>
          <div className="nav-btn" onClick={() => setManual(3)}></div>
          <div className="nav-btn" onClick={() => setManual(4)}></div>
        </div>

      </section>

    </>
  );
}

export default App;
