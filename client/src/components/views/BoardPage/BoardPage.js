import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function BoardPage() {
    const Category = useParams();
    const [Content, setContent] = useState([]);
    const body = {
        type: Category.CatID
    }
    
    

    const renderContent = Content.map((file,index)=>{
        return (
            <div className="Content">
                <h2 style={{color:'#fff'}}>{file.title}</h2>
            </div>
        )
    })

    useEffect(()=>{
        //req내용이 있으면 무조건 post로 전달해야한다
        axios.post('/api/board/readboard',body)
        .then(response=>{
            if(response.data.success)
                setContent(response.data.board)
            else
                alert('컨텐트를 가져오는데 실패했습니다')
        })
 
    },[])

    return (
        <div style={{
            zIndex: 10
        }}>
            <h2 style={{color:'#fff'}}>{Category.CatID}</h2>
            {renderContent}

        </div>
    )
}

export default BoardPage
