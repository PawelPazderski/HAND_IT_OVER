import React, {useState, useEffect} from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import './whowehelp.scss'
// import { HashLink } from 'react-router-hash-link';

const MENU_URL_fundations = "http://localhost:3001/fundations";
const MENU_URL_local = "http://localhost:3001/local";
const MENU_URL_organizations = "http://localhost:3001/organizations";

const HomeWhoWeHelp = () => {
    const [ fundations, setFundations ] = useState([])
    const [ organizations, setOrganizations ] = useState([])
    const [ local, setLocal ] = useState([])
    const [current, setCurrent] = useState("fundations")

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
                <button>Fundacjom</button>
                <button>Organizacjom pozarządowym</button>
                <button>Lokalnym zbiórkom</button>
            </div>
        
        </div>
    </>)
}
    
export default HomeWhoWeHelp