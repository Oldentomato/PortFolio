import React,{useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from "axios"
import PostComponent from '../../PostComponent/PostComponent'


function ModifyPage() {
    const location = useLocation()
    const BoardID = location.state.id
    const [loading, setloading] = useState(false)
    
    const DeletePost = (e) =>{
        setloading(true)
        let imgcount = location.state.img.length
        if(window.confirm("정말로 게시물을 삭제하시겠습니까?")){
            e.preventDefault();
            //사진삭제기능 넣어야함, 로딩도
            for(var i=0;i<imgcount;i++){
                axios.post('api/modify/deleteImg',{FilePath: location.state.img})
                .then(response=>{
                    if(!response.data.success){
                        alert("사진 삭제에 문제가 발생했습니다")
                        window.history.back()
                    }
                })
            }
            
            axios.post('/api/modify/deletepost',{BoardID: BoardID})
            .then(response=>{
                if(response.data.success){
                    alert("게시물이 삭제되었습니다")
                    window.location.replace('/Category')
                }else{
                    alert("게시물 삭제에 문제가 발생했습니다")
                }
                setloading(false)
            })
        }
    }

    if(!loading){
        return (
            <>
                <PostComponent
                    page="Modify"
                    deletefunc={DeletePost}
                    title={location.state.title}
                    content={location.state.content}
                    type={location.state.type}
                    id = {BoardID}
                />
            </>
        )
    }else{
        return(
            <div>
                Loading
            </div>
        )
    }

}

export default ModifyPage
