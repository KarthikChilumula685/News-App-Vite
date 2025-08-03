import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/home/Hero'
import BreakingNews from '../components/home/BreakingNews'

const Home = () => {
  return (
    <>
    <NavBar />
    <div>
      <Hero />
      <BreakingNews />
    </div>
    </>
  )
}

export default Home
