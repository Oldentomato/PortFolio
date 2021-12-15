import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function DetailPage() {
    const BoardID = useParams();
    const [File, setFile] = useState("")


    useEffect(()=>{
        axios.post('/api/board/getpost',BoardID)
        .then(response=>{
            if(response.data.success){
                setFile(response.data.board)
            }
            else
                alert("게시물을 가져오는데 문제가 발생했습니다")
        })
    },[])

    if(File){     
        return (
            <div style={{position:"absolute", display:"flex"}}>
                <div style={{position:"relative"}}>
                    <h1 style={{color:"#fff", fontSize:'30px', textAlign:"center",marginTop:"150px"}}>{File.title}</h1>
                    <p style={{color:"#fff", fontSize:'20px',textAlign:"center",marginLeft:"200px", marginRight:"200px",marginTop:"50px"}}>{File.content}</p>
                </div>
               
                
            </div>
        )
    }
    else{
        return(
            <div>
                Loading
            </div>
        )
    }

}

export default DetailPage
