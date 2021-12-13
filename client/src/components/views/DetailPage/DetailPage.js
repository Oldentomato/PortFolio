import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function DetailPage() {
    const BoardID = useParams();
    const [title,settitle] = useState("")
    const [content,setcontent] = useState("")

    useEffect(()=>{

    },[])
    return (
        <div>
            <h2 style={{color:"#fff"}}>{BoardID.BoardID}</h2>
        </div>
    )
}

export default DetailPage
