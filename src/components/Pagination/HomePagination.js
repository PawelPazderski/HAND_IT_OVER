import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

import './pagination.scss'

const HomePagination = ( {itemPerPage, totalItems, paginate} ) => {
    const items = []
    let active = 1

    for(let number = 1; number<=Math.ceil(totalItems / itemPerPage); number++){
            items.push(
                <li key={number} className={ active === number ? "home-page-item active" : "home-page-item"}>
                        <a onClick={(e)=>{
                            e.preventDefault()
                            paginate(number)}} href="!#" className="page-link" >
                            {number}
                        </a>
                    </li>
            )
    }

    return (
        <div>
            <ul className="home-pagination">{items}</ul>
        </div>
    )
}

export default HomePagination
