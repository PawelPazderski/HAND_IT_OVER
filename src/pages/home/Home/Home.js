import React from 'react'
import HomeThreeColumns from '../HomeThreeColumns'
import HomeHeader from '../HomeHeader'
import HomeAbout from '../HomeAboutUs'
import HomeSteps from '../HomeSteps'
import HomeWhoWeHelp from '../HomeWhoWeHelp'
import HomeContact from '../HomeContact'

import firebase from '../../../fire'

import "firebase/auth";
import "firebase/firestore";

// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//         var uid = user.uid;
//         console.log(user.email)

//         const loggedUser = { ...user }
//         // console.log(loggedUser)
//         // ...
//     } else {
//         const loggedUser = null
//       // User is signed out
//       // ...
//     }
//   });

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
    </>
    )
}
    
export default Home