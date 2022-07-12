import React, {useState, useEffect} from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import HomeWhoWeHelpList from '../HomeWhoWeHelpList'
import HomePagination from '../../../components/Pagination/HomePagination'

import app from "../../../firebase"
import { getDatabase, ref, child, get } from "firebase/database";


import './whowehelp.scss'

const HomeWhoWeHelp = () => {
    const [ fundations, setFundations ] = useState([])
    const [ organizations, setOrganizations ] = useState([])
    const [ local, setLocal ] = useState([])
    const [ currentList, setCurrentList ] = useState("fundations")

    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage] = useState(3)

    useEffect(() => {
        const dbRef = ref(getDatabase(app));
            get(child(dbRef, `whowehelp`)).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                const db = snapshot.val()
                setFundations(db[0].fundations)
                setLocal(db[1].local)
                setOrganizations(db[2].organizations)
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
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
                    <button className={currentList==="fundations" ? "button-active" : null} onClick={() => {
                        setCurrentPage(1)
                        setCurrentList("fundations")
                        }}>Fundacjom</button>
                    <button className={currentList==="organizations" ? "button-active" : null} onClick={() => {
                        setCurrentPage(1)
                        setCurrentList("organizations")
                        }}>Organizacjom<br/> pozarządowym</button>
                    <button className={currentList==="local" ? "button-active" : null} onClick={() => {
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
                currentList={currentList}
            />
        </div>
    </>)
}
    
export default HomeWhoWeHelp