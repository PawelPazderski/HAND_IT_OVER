import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import app from "../../firebase"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const NavTop = () => {
    // const [myUser, setMyUser] = useState(loggedUser)
    const [activeUser, setActiveUser] = useState(null)


    useEffect(()=> {
        const auth = getAuth(app);
            const test = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    // const uid = user.uid;
                    setActiveUser(user.email)
                } else {
                    // User is signed out

                    setActiveUser(null)
                }
            });
        
        return() => test()

    },[activeUser])

    const logOut = () => {
        signOut(getAuth(app)).then(() => {
            // Sign-out successful.
            console.log("Signed out")
            }).catch((error) => {
            // An error happened.
            console.log(error)
            });
    }

    return (
    <>
        <div className="navtop-container">
            <ul>
                <li className="navtop-list-item">
                    { (activeUser != null) && <h6 style={{paddingTop: "32px"}} className="welcome-top">Cześć, {activeUser}!</h6>}
                </li>
                <li className="navtop-list-item">
                    { (activeUser === null) 
                    ? 
                    <Link className="navtop-link" to="/login">Zaloguj</Link>
                    :
                    <Link className="navtop-link" to="/hand-over">Oddaj rzeczy</Link>
                    }
                </li>
                <li className="navtop-list-item">
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