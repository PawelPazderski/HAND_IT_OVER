import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import firebase from '../../fire'

import "firebase/auth";
import "firebase/firestore";


const NavTop = () => {
    // const [myUser, setMyUser] = useState(loggedUser)
    const [test, setTest] = useState(null)

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            console.log(user)
            console.log(user.email)
            setTest(user.email)
            // ...
        } else {
          // User is signed out
          setTest(null)
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
                    <Link className="navtop-link" to="/login">Zaloguj</Link>
                </li>
                <li>
                    <Link className="navtop-link" to="/register">Załóż konto</Link>
                </li>
                <li>
                    <Link className="navtop-link" to="/logout" onClick={logOut}>Wyloguj</Link>
                </li>
            </ul>

        </div>
    </>)
}
    
export default NavTop