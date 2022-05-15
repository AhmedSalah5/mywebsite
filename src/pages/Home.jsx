import React from 'react'
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub ,FaTwitter } from "react-icons/fa";


function Home() {
  return (
    <div className='home'>
        <div class="text">
            <div class="image">
                <img src="images/avatar1.png" alt="" />
            </div>
            <h1>I am Ahmed Salah</h1>
            <h4>Frontend Web Developer</h4>
            <div class="social-links">
                <a href="/" target="_blank" class="facebook">
                    <FaFacebook />
                </a>
                <a href="/" target="_blank" class="twitter">
                    <FaTwitter />
                </a>
                <a href="/" target="_blank" class="youtube">
                    <FaYoutube />
                </a>
                <a href="/" target="_blank" class="linkedin">
                    <FaLinkedin />
                </a>
                <a href="/" target="_blank" class="github">
                    <FaGithub />
                </a>                 
            </div>                
        </div>
    </div>
  )
}

export default Home