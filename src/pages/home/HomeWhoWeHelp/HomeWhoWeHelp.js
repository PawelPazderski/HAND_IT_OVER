import React, {useState, useEffect} from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import HomeListElement from '../../../components/HomeListElement'


import './whowehelp.scss'
// import { HashLink } from 'react-router-hash-link';

const MENU_URL_fundations = "http://localhost:3001/fundations";
const MENU_URL_local = "http://localhost:3001/local";
const MENU_URL_organizations = "http://localhost:3001/organizations";

const HomeWhoWeHelp = () => {
    const [ fundations, setFundations ] = useState([])
    const [ organizations, setOrganizations ] = useState([])
    const [ local, setLocal ] = useState([])
    const [ current, setCurrent ] = useState("fundations")

    useEffect(() => {
        fetch(MENU_URL_fundations)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Błąd")
            } )
            .then(fundations => setFundations(fundations))
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        fetch(MENU_URL_organizations)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Błąd")
            } )
            .then(organizations => setOrganizations(organizations))
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        fetch(MENU_URL_local)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error("Błąd")
            } )
            .then(local => setLocal(local))
            .catch(err => console.log(err))
    },[])


    return (
    <>
        <div id="komu-pomagamy" className="whowehelp-container">
            <DecorationHeading title="Komu pomagamy?" />
            <div className="organization-buttons">
                <button onClick={() => setCurrent("fundations")}>Fundacjom</button>
                <button onClick={() => setCurrent("organizations")}>Organizacjom pozarządowym</button>
                <button onClick={() => setCurrent("local")}>Lokalnym zbiórkom</button>
            </div>
            
            {(current === "fundations" && fundations.length) && <h3>{fundations[0].description}</h3>}
            {(current === "organizations" && organizations.length) && <h3>{organizations[0].description}</h3>}
            {(current === "local" && local.length) && <h3>{local[0].description}</h3>}
            
            <ul>
                {current === "fundations" && fundations.map((el,i) => <li key={i}><HomeListElement type={el.type} name={el.name} goal={el.goal} products={el.products} /></li>)}
                {current === "organizations" && organizations.map((el,i) => <li key={i}><HomeListElement type={el.type} name={el.name} goal={el.goal} products={el.products} /></li>)}
                {current === "local" && local.map((el,i) => <li key={i}><HomeListElement type={el.type} name={el.name} goal={el.goal} products={el.products} /></li>)}
            </ul>
        
        </div>
    </>)
}
    
export default HomeWhoWeHelp