import React from 'react'

import './homelistelement.scss'

const HomeListElement = ({type, name, goal, products}) => {
  

    return (
    <>
        <table className="home-list-table">
            <tr className="home-list-element">
                    <th>
                        <h1>{type} "{name}"</h1>
                        <h4>{goal}</h4>
                    </th>
                    <th>
                        <h4>{products}</h4>
                    </th>
                </tr>
        </table>
        
        
    </>)
}
    
export default HomeListElement