import '../public/Home.css'
import animationData from "../assets/web.json";
import Lottie from "lottie-react";
import bg from '../assets/bg2.mp4'
import { useEffect } from 'react';

export default function Home()
{
    return(
      
        <div className="HomeHero">
          <div className="Home">
            <div className="home-left">
                <div className="home-super">Get a Website That Converts Visitors into Customers</div>
                <div className="home-sub">Let us build you a high-converting, mobile-friendly website that turns visitors into paying customers – fast. </div>
                <div className="btns">
                    <button className='btn1'>Get a Quote</button>
                    <button className='btn2'>See Our Work</button>
                </div>
            </div>
            <div className="home-right">
            <Lottie animationData={animationData} loop={true} className='home-animation'/>
            </div>
        </div>
        </div>
          
    )
}