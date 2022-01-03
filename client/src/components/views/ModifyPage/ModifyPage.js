import React,{useState,useEffect} from 'react'
import {Button, Form, Input, Typography} from "antd"
import {useParams} from 'react-router-dom'
import axios from "axios"

const {TextArea} = Input;
const {Title} = Typography;

function ModifyPage() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")

    const BoardID = useParams()

    const CheckSentence = () => {
        var count = 0;
        var pos = content.indexOf('~')
        while(pos !== -1){
            count++;
            pos = content.indexOf('~',pos + 1)
        }
        if(count % 2 === 0){
            return true
        }
        else{
            return false
        }
    }
    //https://velog.io/@qusehdgns/React-textarea-Tab-%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B8%B0
    //참고사이트
    const codeInputTabHandler = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            //setcontent(content + '\t');
            
        }
    }

    const ClickTxtAreaHandler = (e) =>{
        console.log(e)
    }

    const titlehandler = (e) =>{
        settitle(e.currentTarget.value)
    }

    const contenthandler = (e) => {
        setcontent(e.currentTarget.value)
    }

    const BackPage = () =>{
        window.history.back()
    }

    const DeletePost = (e) =>{
        if(window.confirm("정말로 게시물을 삭제하시겠습니까?")){
            e.preventDefault();
            axios.post('/api/board/deletepost',BoardID)
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

    const onSubmit = () => {
        const variable = {
            BoardID: BoardID.BoardID,
            title: title,
            content: content
        }
        if(CheckSentence()){
            axios.post('/api/board/modifypost',variable)
            .then(response=>{
                if(response.data.success){
                    alert("내용수정이 완료되었습니다")
                    window.location.replace('/Category')
                }else{
                    alert("내용수정에 문제가 발생했습니다")
                }
            })
        }else{
            alert("문법이 틀렸습니다")
        }
 
    }

    useEffect(()=>{
        axios.post('/api/board/getpost',BoardID)
        .then(response=>{
            if(response.data.success){
                settitle(response.data.board.title)
                setcontent(response.data.board.content)
            }else{
                alert("게시물을 가져오는데 실패했습니다.")
            }
        })
    },[])

    return (
        <div style={{maxWidth:"700px",margin:"7rem auto"}}>
            <div style={{textAlign:"center",marginBotton:"2rem"}}>
                <Title level={2} style={{color:"#fff", fontWeight:"300",fontSize:"3.5em", margin:"50px"}}>MODIFY POST</Title>
            </div>

            <Form> 
                <h2 style={{color:"#fff", marginBottom:"15px"}}>
                    Title
                </h2>
                <Input style={{width:"100%", height:"30px"}} onChange={titlehandler} value={title} />
                <br/>
                <h2 style={{color:"#fff", marginBottom:"15px", marginTop:"20px"}}>
                    Content
                </h2>
                <TextArea 
                onKeyDown={codeInputTabHandler}
                onSelect ={ClickTxtAreaHandler}
                style={{width:"100%", height:"200px"}} onChange={contenthandler} value={content} />
                <br/>
                <div style={{marginTop:"20px"}}>
                    <Button type="primary" size="large" onClick={onSubmit} style={{marginRight: "10px"}}>Modify</Button>
                    <Button size="large" onClick={BackPage} style={{marginRight: "10px"}}>Back</Button>
                    <Button type="danger" onClick={DeletePost}>Delete</Button>
                </div>
            </Form>
        </div>

    )
}

export default ModifyPage
