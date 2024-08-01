import React from 'react';
import HomeBG from '../assets/HomeBG.mp4';
import Header from '../components/Header';
import '../styling/Home.css';

export default function Home() {
  return (
    <div className="Home video-background">
      TAHMEDS A BENGALI BITCH
      <video loop muted autoPlay playsInline id="background-video">
        <source src={HomeBG} type="video/mp4" />
        {/* Add fallback content here, such as an image or text */}
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <Header />
      </div>
    </div>
  );
}
