import React from 'react'

import "./decorationheading.scss"



const Heading = ({title, title2}) => {

    return (
    <>
        <div className="heading-container">
           <h1 className="heading-title">{title}</h1>
           {title2 && <h1 className="heading-title">{title2}</h1>}
           <div className="decoration-item"></div>
        </div>
    </>)
}
    
export default Heading