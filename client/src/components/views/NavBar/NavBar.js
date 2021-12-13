import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

    const NavStyle={
        position: "fixed",
        top: "0",
        left: "0",
        width: "150%",
        padding: "40px 80px",
        display: "flex",
        zIndex : 10,
        
    }

    const BtnStyle={
        position: "relative",
        left: "50%",
    }

    const NavBtn = () =>{
        return (
            <div style={BtnStyle}>
                <Link to="Create" style={{color:"#fff"}}>Create</Link>
                <Link to="Category" style={{color:"#fff"}}>Category</Link>
            </div>
        )
    }
    return (
        <div style={NavStyle}>
            <header className="NavBarHeader">LABORATORY</header>
            {NavBtn()}
        </div>
    )
}

export default NavBar
