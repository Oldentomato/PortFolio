import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const dispatch = useDispatch();
    const [togglename, settogglename] = useState("toggle");

    const NavStyle={
        position: "fixed",
        top: "0",
        left: "0",
        width: "150%",
        padding: "40px 80px",
        display: "flex",
        zIndex : 10,
        
    }


    // const NavBtn = () =>{
    //     return (
    //         <div style={BtnStyle}>
    //             <Link to="Create" style={{color:"#fff"}}>Create</Link>
    //             <Link to="Category" style={{color:"#fff"}}>Category</Link>
    //             <Link to="/" style={{color:"#fff"}}>StartPage</Link>
    //         </div>
    //     )
    // }


    const OnClickToggle = () =>{
        if(togglename === "toggle"){
            settogglename("toggleactive");
            dispatch({type: "action"});
        }
        else{
            settogglename("toggle");
            dispatch({type: "notaction"})
        }


    }
    return (
        <div style={NavStyle}>
            <header className="NavBarHeader">LABORATORY</header>
            {/* {NavBtn()} */}
            <button className={togglename} onClick={OnClickToggle}>
                {togglename === "toggle" ? <FontAwesomeIcon color="#fff" size="3x" icon={faBars} />:
                                    <FontAwesomeIcon color="#fff" size="4x" icon={faXmark} />
                }
            </button>
        </div>
    )
}
export default NavBar
