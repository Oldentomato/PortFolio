import React from 'react'
import {useLocation} from 'react-router-dom'
import axios from "axios"
import PostComponent from '../../PostComponent/PostComponent'


function ModifyPage() {
    const location = useLocation()
    const BoardID = location.state.id
    
    const DeletePost = (e) =>{
        let data = {
            BoardID: BoardID
        }
        if(window.confirm("정말로 게시물을 삭제하시겠습니까?")){
            e.preventDefault();
            axios.post('/api/modify/deletepost',data)
            .then(response=>{
                if(response.data.success){
                    alert("게시물이 삭제되었습니다")
                    window.location.replace('/Category')
                }else{
                    alert("게시물 삭제에 문제가 발생했습니다")
                }
            })
        }
    }


    return (
        <>
            <PostComponent
                page="Modify"
                deletefunc={DeletePost}
                title={location.state.title}
                content={location.state.content}
                type={location.state.type}
            />
        </>
    )
}

export default ModifyPage
