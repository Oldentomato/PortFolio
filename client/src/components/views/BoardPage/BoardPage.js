import React from 'react'
import {Link} from "react-router-dom"

function BoardPage() {
    return (
        <div className="box">
            <span style={{"--i" : 1}}><Link to="/Boards/JavaScript" ><img src={process.env.PUBLIC_URL + '/categoryicons/JSIcon.png'} alt="Javascript"/></Link></span>
            <span style={{"--i" : 2}}><Link to="/Boards/React" ><img src={process.env.PUBLIC_URL + '/categoryicons/ReactIcon.png'} alt="React"/></Link></span>
            <span style={{"--i" : 3}}><Link to="/Boards/Unity" ><img src={process.env.PUBLIC_URL + '/categoryicons/UnityIcon.png'} alt="Unity"/></Link></span>
            <span style={{"--i" : 4}}><Link to="/Boards/Etc" ><img src={process.env.PUBLIC_URL + '/categoryicons/JSIcon.png'} alt="Etc"/></Link></span>
            <span style={{"--i" : 5}}><Link to="/Boards/JavaScript" ><img src={process.env.PUBLIC_URL + '/categoryicons/JSIcon.png'} alt="Javascript"/></Link></span>
           
        </div>
    )
}

export default BoardPage
