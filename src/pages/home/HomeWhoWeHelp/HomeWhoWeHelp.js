import React, {useState, useEffect} from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import './whowehelp.scss'
// import { HashLink } from 'react-router-hash-link';


const HomeWhoWeHelp = () => {
    const [ fundations, setFundations ] = useState([])
    const [organizations, setOrganizations ] = useState([])
    const [local, setLocal ] = useState([])



    return (
    <>
        <div id="komu-pomagamy" className="whowehelp-container">
            <Heading title="Komu pomagamy?" />
        
        </div>
    </>)
}
    
export default HomeWhoWeHelp