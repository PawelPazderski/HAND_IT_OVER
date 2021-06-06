import React from 'react'
import HomeThreeColumns from '../HomeThreeColumns'
import HomeHeader from '../HomeHeader'
import HomeAbout from '../HomeAboutUs'
import HomeSteps from '../HomeSteps'
import HomeWhoWeHelp from '../HomeWhoWeHelp'
import HomeContact from '../HomeContact'



const Home = () => {
  

    return (
    <>
        <div className="home-container">
            <HomeHeader />
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAbout />
            <HomeWhoWeHelp />
            <HomeContact />
           
        </div>
        
    </>)
}
    
export default Home