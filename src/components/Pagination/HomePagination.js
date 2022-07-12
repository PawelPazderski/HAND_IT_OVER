import React, { useState, useEffect } from 'react'
import './pagination.scss'

const HomePagination = ( {itemPerPage, totalItems, paginate, currentList} ) => {
    const items = []
    const [ active, setActive ]  = useState(1)

    useEffect(()=>{
        setActive(1)
    }, [currentList])

    for(let number = 1; number<=Math.ceil(totalItems / itemPerPage); number++){
            items.push(
                <li key={number} className={ active === number ? "home-page-item active-page" : "home-page-item"}>
                        <a onClick={(e)=>{
                            e.preventDefault()
                            
                            paginate(number)
                            setActive(number)
                        }} 
                            href="!#" 
                            className="page-link" >
                            {number}
                        </a>
                    </li>
            )
    }

    return (
        <div className="home-pagination-container">
            <ul className="home-pagination">{items}</ul>
        </div>
    )
}

export default HomePagination;
