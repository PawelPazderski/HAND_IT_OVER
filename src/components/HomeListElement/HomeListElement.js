import React from 'react'

import './homelistelement.scss'

const HomeListElement = ({id,type, name, goal, products}) => {
  

    return (
    <>
        <table className="home-list-table">
            <tbody>
                <tr className="home-list-element">
                        <th>
                            <h1>{id}. {type} "{name}"</h1>
                            <h4>{goal}</h4>
                        </th>
                        <th>
                            <h4>{products}</h4>
                        </th>
                </tr>
            </tbody>
        </table>
        
        
    </>)
}
    
export default HomeListElement