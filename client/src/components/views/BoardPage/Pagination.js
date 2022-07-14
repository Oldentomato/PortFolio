import React from 'react'

function Pagination({postsPerPage, totalPost, paginate}) {
    const PageNumbers = []
    for(let i =1; i<= Math.ceil(totalPost / postsPerPage); i++){
        PageNumbers.push(i)
    }
    return(
        <div className="PageList">
            <nav>
                <ul>
                    {PageNumbers.map((number)=>(
                        <li key={number} className="pageNumber">
                            <a onClick ={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>


    )
    
}

export default Pagination