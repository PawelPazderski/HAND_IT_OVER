import React, {useState, useEffect} from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import HomeWhoWeHelpList from '../HomeWhoWeHelpList'
import HomePagination from '../../../components/Pagination/HomePagination'
import {Link} from 'react-router-dom';

import HomeListElement from '../../../components/HomeListElement'

// import 'bootstrap/dist/css/bootstrap.min.css';
import './whowehelp.scss'
// import { HashLink } from 'react-router-hash-link';

const MENU_URL_fundations = "http://localhost:3001/fundations";
const MENU_URL_local = "http://localhost:3001/local";
const MENU_URL_organizations = "http://localhost:3001/organizations";

const HomeWhoWeHelp = () => {
    const [ fundations, setFundations ] = useState([])
    const [ organizations, setOrganizations ] = useState([])
    const [ local, setLocal ] = useState([])
    const [ currentList, setCurrentList ] = useState("fundations")
    // const [ totalItems, setTotalItems ] = useState(0)

    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage] = useState(3)

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

    //Fundations
    const indexOfLastFundation = currentPage * itemPerPage
    const indexOfFirstFundation = indexOfLastFundation - itemPerPage
    const currentFundations = fundations.slice(indexOfFirstFundation, indexOfLastFundation)

    //Organizations
    const indexOfLastOrganization = currentPage * itemPerPage
    const indexOfFirstOrganization = indexOfLastOrganization - itemPerPage
    const currentOrganizations = organizations.slice(indexOfFirstOrganization, indexOfLastOrganization)

    //Local
    const indexOfLastLocal = currentPage * itemPerPage
    const indexOfFirstLocal = indexOfLastLocal - itemPerPage
    const currentLocals = local.slice(indexOfFirstLocal, indexOfLastLocal)

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    const getList = () => {
        if ((currentList === "fundations") && fundations.length && fundations.length > 3) {
            return fundations.length
        }
        else if ((currentList === "organizations") && organizations.length && organizations.length > 3) {
            return organizations.length
        }
        else if ((currentList === "local") && local.length && local.length > 3) {
            return local.length
        }
        else return 0
    }

    return (
    <>
        <div id="komu-pomagamy" className="whowehelp-container">
            <DecorationHeading title="Komu pomagamy?" />
                <div className="organization-buttons">
                    <button onClick={() => {
                        setCurrentPage(1)
                        setCurrentList("fundations")
                        }}>Fundacjom</button>
                    <button onClick={() => {
                        setCurrentPage(1)
                        setCurrentList("organizations")
                        }}>Organizacjom<br/> pozarządowym</button>
                    <button onClick={() => {
                        setCurrentPage(1)
                        setCurrentList("local")
                        }}>Lokalnym<br/> zbiórkom</button>
                </div>
            
            {(currentList === "fundations" && fundations.length) && <h3>{fundations[0].description}</h3>}
            {(currentList === "organizations" && organizations.length) && <h3>{organizations[0].description}</h3>}
            {(currentList === "local" && local.length) && <h3>{local[0].description}</h3>}
            
            <HomeWhoWeHelpList 
                currentList={currentList} 
                fundations={currentFundations} 
                organizations={currentOrganizations} 
                local={currentLocals} 
            />
            <HomePagination 
                itemPerPage={itemPerPage}
                totalItems={getList()}
                paginate={paginate}
            />
        </div>
    </>)
}
    
export default HomeWhoWeHelp