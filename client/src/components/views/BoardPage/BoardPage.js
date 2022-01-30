import React,{useEffect,useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

function BoardPage() {
    const Category = useParams();
    const [File, setFile] = useState([]);
    const body = {
        type: Category.CatID
    }
    
    

    const renderContent = File.map((file,index)=>{
        return (
            <Link key={index} to={`${file._id}`} style={{textAlign:'left', marginLeft:'80px', borderColor:'rgb(0,0,0)'}}>
                <h2 style={{color:'#fff'}}>{index+1}  {file.title}</h2>
                <h2 style={{color:'#fff',marginLeft:'10px'}}>{moment(file.createdAt).format("MMM Do YY")}</h2>
            </Link>
        )
    })

    useEffect(()=>{
        //req내용이 있으면 무조건 post로 전달해야한다
        axios.post('/api/board/readboard',body)
        .then(response=>{
            if(response.data.success)
                setFile(response.data.board)
            else
                alert('컨텐트를 가져오는데 실패했습니다')
        })
 
    },[Category.CatID])

    return (
        <div className="BoardPage">
            <div className="Content">
                <h2 style={{color:'#fff', marginTop:"50px",fontSize:'70px', textAlign:'center'}}>{Category.CatID}</h2>
                {renderContent}
            </div>
            


        </div>
    )
}

export default BoardPage
