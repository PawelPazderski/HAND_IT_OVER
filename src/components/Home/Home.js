import React from 'react'
import HomeThreeColumns from '../HomeThreeColumns'
import HomeHeader from '../HomeHeader'
import HomeAbout from '../HomeAboutUs'
import HomeSteps from '../HomeSteps'


const Home = () => {
  

    return (
    <>
        <div className="home-container">
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAbout />
        </div>
        
    </>)
}
    
export default Home