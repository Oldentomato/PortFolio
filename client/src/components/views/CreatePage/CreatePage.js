import React,{useState, useEffect} from 'react'
import {Button, Form, Input, Typography} from 'antd'

const {TextArea} = Input;
const {Title} = Typography;

function CreatePage() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")

    const titlehandler = (e) =>{
        settitle(e.currentTarget.value)
    }

    const contenthandler = (e) => {
        setcontent(e.currentTarget.value)
    }

    const onSubmit = () => {

    }
    useEffect(()=>{
        
    })

    return (
        <div style={{maxWidth:"700px",margin:"8rem auto"}}>
            <div  style={{textAlign:"center",marginBotton:"2rem"}}>
                <Title level={2} style={{color:"#fff", fontWeight:"300",fontSize:"3.5em"}}>WRITE POST</Title>
            </div>

            <Form > 
                <h2 style={{color:"#fff"}}>
                    Title
                </h2>
                <Input onChange={titlehandler} value={title}/>
                <br/>
                <h2 style={{color:"#fff"}}>
                    Content
                </h2>
                <TextArea onChange={contenthandler} value={content}/>
                <br/>
                <Button type="primary" size="large" onClick={onSubmit}>Submit</Button>

            </Form>
        </div>
    )
}

export default CreatePage
