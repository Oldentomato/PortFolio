import React,{useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {Button} from 'antd'

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
            <div style={{position:"absolute", display:"block"}}>
                <div style={{position:"relative"}}>
                    <h1 style={{color:"#fff", fontSize:'30px', textAlign:"center",marginTop:"150px", marginLeft:'20px', marginRight:'20px'}}>{File.title}</h1>
                    <pre style={{color:"#fff", fontSize:'20px',textAlign:"left",marginTop:"50px", marginLeft:'40px', marginRight:'40px'}}>{File.content}</pre>
                </div>
                <div>
                    <Button size="large" style={{marginLeft:'40px'}}><Link to={{pathname:`/Modify/${BoardID.BoardID}`}}>Modify</Link></Button>
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
