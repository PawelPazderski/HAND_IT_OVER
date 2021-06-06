import React, {useState, useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';



const Pagination = ( {itemPerPage, totalItems}) => {

    // const [ totalItems, setTotalItems ] = useState(0)
    // const [ pageNumbers, setPageNumbers ] = useState([])

    // useEffect(()=>{
    //     setTotalItems(()=>{
    //         if (currentList==="fundations"){
    //             return totalItems = fundations.length
    //         } else if (currentList==="organizations"){
    //             return totalItems = organizations.length
    //         } else if (currentList==="local") {
    //             return totalItems = local.length
    //         }
    //     })

        // for(let i = 1; i<=Math.ceil(totalItems / itemPerPage); i++){
        //     pageNumbers.push(i)
    // }

    // }, [currentList] )

    


    return (
        <>
            <ul>
                <h2>dupa</h2>
                {/* {pageNumbers.map(number => {
                    <li key={number}>
                        <a href="!#">
                            {number}
                        </a>
                    </li>
                })} */}
            </ul>
             
        </>
    )
}

export default HomeWhoWeHelpPagination
