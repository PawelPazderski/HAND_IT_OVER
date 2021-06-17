import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import firebase from '../../fire'

import "firebase/auth";
import "firebase/firestore";


const NavTop = () => {
    // const [myUser, setMyUser] = useState(loggedUser)
    const [activeUser, setActiveUser] = useState(null)

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            setActiveUser(user.email)
            // ...
        } else {
          // User is signed out
          setActiveUser(null)
        }
    });

    const logOut = () => {
        firebase.auth().signOut()
    }


    return (
    <>
        <div className="navtop-container">
            <ul>
                <li>
                    { (activeUser != null) && <h6 style={{paddingTop: "32px"}} className="welcome-top">Cześć, {activeUser}!</h6>}
                </li>
                <li>
                    { (activeUser === null) 
                    ? 
                    <Link className="navtop-link" to="/login">Zaloguj</Link>
                    :
                    <Link className="navtop-link" to="/hand-over">Oddaj rzeczy</Link>
                    }
                </li>
                <li>
                    { (activeUser === null) 
                    ? 
                    <Link className="navtop-link" to="/register">Załóż konto</Link>
                    :
                    <Link className="navtop-link" to="/logout" onClick={logOut}>Wyloguj</Link>
                    }
                </li>
            </ul>
        </div>
    </>)
}
    
export default NavTop