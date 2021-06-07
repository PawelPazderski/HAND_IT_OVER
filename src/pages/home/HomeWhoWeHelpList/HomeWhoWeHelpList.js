import React, {useState, useEffect} from 'react'
import HomeListElement from '../../../components/HomeListElement'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeWhoWeHelp/whowehelp.scss'

const HomeWhoWeHelpList = ({currentList, fundations, organizations, local }) => {


    return (
        <>
            <ul>
                {((currentList === "fundations") && fundations ) && fundations.map((el,i) => <li key={i}><HomeListElement id={el.id} type={el.type} name={el.name} goal={el.goal} products={el.products} /></li>)}
                {((currentList === "organizations") && organizations ) && organizations.map((el,i) => <li key={i}><HomeListElement id={el.id} type={el.type} name={el.name} goal={el.goal} products={el.products} /></li>)}
                {((currentList === "local") && local ) && local.map((el,i) => <li key={i}><HomeListElement id={el.id} type={el.type} name={el.name} goal={el.goal} products={el.products} /></li>)}
            </ul>
        </>
    )
}

export default HomeWhoWeHelpList