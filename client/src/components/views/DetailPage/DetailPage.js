import React,{useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {Button} from 'antd'

function DetailPage() {
    const BoardID = useParams();
    const [title, settitle] = useState("")
    const [splitcontent, setsplitcontent] = useState([])
    const [isready, setisready] = useState(false)


    const renderContent = splitcontent.map((content,index)=>{
        if(index % 2 === 0){
            return(
                <pre key={index} style={{color:"#fff", fontSize:'20px',textAlign:"left",marginTop:"50px", marginLeft:'60px', marginRight:'40px'}}>
                    {content}
                </pre>
            )
        }
        else{
            return(
                <pre key={index}>
                    <code style={{marginLeft:'60px'}}>
                        {content}
                    </code>
                </pre>

            )
        }

    })

    useEffect(()=>{
        axios.post('/api/board/getpost',BoardID)
        .then(response=>{
            if(response.data.success){
                settitle(response.data.board.title)
                setsplitcontent(response.data.board.content.split('~'))
                setisready(true)
            }
            else
                alert("게시물을 가져오는데 문제가 발생했습니다")
        })
        
    },[])

    if(isready){     
        return (
            <div style={{position:"relative", display:"block"}}>
                <div style={{position:"relative"}}>
                    <h1 style={{color:"#fff", fontSize:'30px', textAlign:"center",marginTop:"150px"}}>{title}</h1>
                    {renderContent}
                </div>
                <div>
                    <Button size="large" style={{marginLeft:'60px', marginBottom:'20px'}}><Link to={{pathname:`/Modify/${BoardID.BoardID}`}}>Modify</Link></Button>
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
