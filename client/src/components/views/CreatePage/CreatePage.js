import React,{useState, useEffect} from 'react'
import {Button, Form, Input, Typography, Select} from "antd"
import axios from "axios"

const {TextArea} = Input;
const {Title} = Typography;
const {Option} = Select;

function CreatePage() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [type, settype] = useState("")

    const titlehandler = (e) =>{
        settitle(e.currentTarget.value)
    }

    const contenthandler = (e) => {
        setcontent(e.currentTarget.value)
    }

    const BackPage = () =>{
        window.history.back()
    }

    const CategoryHandler = (value) => {
        settype(value)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            content: content,
            type: type
        }
        if(title === "" || content === "" || type === ""){
            alert("내용들을 모두 입력하십시오")
        }
        else{
            axios.post('/api/board/createcontent',data).then(response=>{
                if(response.data.success){
                    alert("글쓰기가 완료되었습니다")
                    window.location.replace("/Category")
                }   
                else{
                    alert("업로드에 문제가 발생했습니다")
                }
    
            })
        }

    }

    return (
        <div style={{maxWidth:"700px",margin:"7rem auto"}}>
            <div style={{textAlign:"center",marginBotton:"2rem"}}>
                <Title level={2} style={{color:"#fff", fontWeight:"300",fontSize:"3.5em", margin:"50px"}}>WRITE POST</Title>
            </div>

            <Form> 
                <h2 style={{color:"#fff", marginBottom:"15px"}}>
                    Title
                </h2>
                <Input style={{width:"100%", height:"30px"}} onChange={titlehandler} value={title}/>
                <br/>
                <h2 style={{color:"#fff", marginBottom:"15px", marginTop:"20px"}}>
                    Content
                </h2>
                <TextArea style={{width:"100%", height:"200px"}} onChange={contenthandler} value={content}/>
                <br/>
                <div style={{marginTop:"20px"}}>
                    <Button type="primary" size="large" onClick={onSubmit} style={{marginRight: "10px"}}>Submit</Button>
                    <Button size="large" onClick={BackPage} style={{marginRight: "10px"}}>Back</Button>
                    <Select defaultValue="Category" style={{width:120}} onChange={CategoryHandler}>
                        <Option value="JavaScript">JavaScript</Option>
                        <Option value="Python">Python</Option>
                        <Option value="React">React</Option>
                        <Option value="Unity">Unity</Option>
                    </Select>
                </div>
            </Form>
        </div>

    )
}

export default CreatePage
