import React from 'react'
import {Link} from 'react-router-dom';


const NavTop = () => {
  

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
               
           </ul>

        </div>
    </>)
}
    
export default NavTop