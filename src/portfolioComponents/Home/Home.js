import React from 'react'
import './Home.css'
import Navbar from './Navbar';
import Profile from './Porfile'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='home-container' id='home'>
        <Navbar></Navbar>
        <Profile></Profile>
        <Footer></Footer>
    </div>
  )
}
