import React from 'react'
import { HashLink } from 'react-router-hash-link';


const NavBottom = () => {
  

    return (
    <>
        <div className="navbottom-container">
           <ul>
               <li>
                   <HashLink className="navbottom-link" to="/#">Start</HashLink>
               </li>
               <li>
                   <HashLink className="navbottom-link" to="/#o-co-chodzi">O co chodzi?</HashLink>
               </li>
               <li>
                   <HashLink className="navbottom-link" to="/#o-nas">O nas</HashLink>
               </li>
               <li>
                   <HashLink className="navbottom-link" to="/#komu-pomagamy">Fundacje i organizacje</HashLink>
               </li>
               <li>
                   <HashLink className="navbottom-link" to="/#kontakt">Kontakt</HashLink>
               </li>
           </ul>

        </div>
    </>)
}
    
export default NavBottom