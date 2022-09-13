import React,{useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const dispatch = useDispatch();
    const location = useLocation();
    const [togglename, settogglename] = useState("toggle");
    const [locate, setlocate] = useState("");
    const [navitoggle, setnavitoggle] = useState("nonavigation");

    const NavStyle={
        position: "fixed",
        top: "0",
        left: "0",
        width: "150%",
        padding: "20px 80px",
        display: "flex",
        zIndex : 10,
        
    }

    useEffect(()=>{
        if(location.pathname.indexOf("Category")!== -1 | location.pathname.indexOf("Create")!== -1 |
        location.pathname.indexOf("Modify")!== -1){
            setlocate("blog");
            settogglename("blogtoggle");
            setnavitoggle("navigation");
            dispatch({type: "notaction"})
        }
        else{
            setlocate("main");
            settogglename("toggle");
            setnavitoggle("nonavigation");
            dispatch({type: "notaction"})
        }

    },[location])



    const OnClickToggle = () =>{
        if(locate === "main"){
            if(togglename === "toggle"){
                settogglename("toggleactive");
                dispatch({type: "action"});
            }
            else{
                settogglename("toggle");
                dispatch({type: "notaction"})
            }
        }

    }
    return (
        <div style={NavStyle}>
            <header className="NavBarHeader">PORTFOLIO</header>
            {/* {NavBtn()} */}
            <button className={togglename} onClick={OnClickToggle}>
                {togglename === "toggle" ? <FontAwesomeIcon color="#fff" size="3x" icon={faBars} />:
                                    <FontAwesomeIcon color="#fff" size="4x" icon={faXmark} />
                }
            </button>
            <div className={navitoggle}>
                    <ul>
                        <li>
                            <Link to="Create" style={{fontSize:"20px"}}>Write Post</Link>
                        </li>
                        <li>
                            <Link to="Category" style={{fontSize:"20px"}}>Category</Link>
                        </li>
                        <li>
                            <Link to="/" style={{fontSize:"20px"}}>MainPage</Link>
                        </li>
                    </ul>


            </div>
        </div>
    )
}
export default NavBar
