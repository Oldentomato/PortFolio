import React from 'react'
import {Link} from "react-router-dom"

function CategoryPage() {
    return (
        <div className="box">
            <span style={{"--i" : 1}}><Link to="JavaScript" ><img src={process.env.PUBLIC_URL + '/categoryicons/JSIcon.png'} alt="Javascript"/></Link></span>
            <span style={{"--i" : 2}}><Link to="React" ><img src={process.env.PUBLIC_URL + '/categoryicons/ReactIcon.png'} alt="React"/></Link></span>
            <span style={{"--i" : 3}}><Link to="Unity" ><img src={process.env.PUBLIC_URL + '/categoryicons/UnityIcon.png'} alt="Unity"/></Link></span>
            <span style={{"--i" : 4}}><Link to="Python" ><img src={process.env.PUBLIC_URL + '/categoryicons/PythonIcon.png'} alt="Python"/></Link></span>
            <span style={{"--i" : 5}}><Link to="JavaScript" ><img src={process.env.PUBLIC_URL + '/categoryicons/JSIcon.png'} alt="Javascript"/></Link></span>
           
        </div>
    )
}

export default CategoryPage
