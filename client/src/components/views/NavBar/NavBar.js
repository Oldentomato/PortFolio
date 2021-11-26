import React from 'react'

function NavBar() {

    const style={
        position: "fixed",
        top: "0",
        left: "0",
        width: "150%",
        padding: "40px 80px",
        display: "flex",
        zIndex : 10,
        
    }
    return (
        <div style={style}>
            <header className="NavBarHeader">LABORATORY</header>
        </div>
    )
}

export default NavBar
