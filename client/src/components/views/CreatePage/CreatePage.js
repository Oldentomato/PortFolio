import React,{useState,useEffect} from 'react'
import {Button, Form, Input, Typography, Select} from "antd"
import axios from "axios"
import DropZone from 'react-dropzone'
import UploadImage from '../../UploadImage/UploadImage'
import {PlusOutlined} from '@ant-design/icons'

const {TextArea} = Input;
const {Title} = Typography;
const {Option} = Select;

function CreateImageComponent(UploadCount,FilePath,ImgPosCount,SetImageOrder){
    var Component = []
    if(ImgPosCount === 0){
        return (<p style={{color:"#fff"}}>No Image Position</p>)
    }
    else if(UploadCount !== ImgPosCount){
        return (<p style={{color:"#fff"}}>Not Equal PositionCount And UploadCount</p>)
    }
    else{
        for(var i=0;i<UploadCount;i++){
            Component.push(<UploadImage key={i} FilePath={FilePath[i]} ImgCount={UploadCount} GetOrder={SetImageOrder}/>)
        }
        return Component
        
    }

}

function CreatePage() {
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const [type, settype] = useState("")
    const [isImage, setisImage] = useState(false)
    const [FilePath, setfilePath] = useState([])
    const [FileOrder, setFileOrder] = useState([])
    const [ImgPosCount, setImgPosCount] = useState(0)
    const [UploadImgCount, setUploadImgCount] = useState(0)

    const titlehandler = (e) =>{
        settitle(e.currentTarget.value)
    }

    const CheckImageRule = () =>{//배열마다 번호지정이 되었는지 체크해야하는 부분 추가해야함
        if(ImgPosCount === UploadImgCount)
            return true
        else
            return false
    }

    const CheckSentence = () => {
        var codecount = 0;
        var pos = content.indexOf('~')
        
        while(pos !== -1){
            codecount++;
            pos = content.indexOf('~',pos + 1)
        }

        if(codecount % 2 === 0){
            
            return true
        }
        else{
            return false
        }
    }

    const CheckImgCount = () =>{
        var imgcount = 0;
        var img = content.indexOf('&')
        while(img !== -1){
            imgcount++;
            img = content.indexOf('&',img +1)
        }
        setImgPosCount(imgcount)
    }


    const codeInputTabHandler = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            //setcontent(content + '\t');
            
        }
    }

    const SetImageOrder = (num) =>{
        // console.log(text)
        setFileOrder([...FileOrder,num])//배열 값 추가법
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

    const onDrop = (files) =>{
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file",files[0])
        
        axios.post('/api/board/uploadimg',formData,config)
        .then(response=>{
            if(response.data.success){
                setfilePath([...FilePath,response.data.filePath])
                setisImage(true)
                setUploadImgCount(UploadImgCount + 1)
                setFileOrder([...FileOrder,0])
            }else{
                alert('사진 업로드에 문제가 발생했습니다')
            }
        })
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
        else if(!CheckSentence() || !CheckImageRule()){
            alert('문법이 틀렸습니다')
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

    useEffect(()=>{
        CheckImgCount()
    },[content])

    return (
        <div style={{maxWidth:"700px",margin:"auto", marginBottom:"20px"}}>
            <div style={{textAlign:"center",marginBotton:"2rem"}}>
                <Title level={2} style={{color:"#fff", fontWeight:"300",fontSize:"3.5em", margin:"50px"}}>WRITE POST</Title>
            </div>

            <Form> 
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <DropZone
                    onDrop={onDrop}
                    multiple={false}
                    maxSize={800000000}
                >
                    {({getRootProps, getInputProps})=>(
                        <div style={{width:'300px', height:'240px', border:'1px solid lightgray',display:'flex', alignItems:'center', justifyContent:'center'}}
                            {...getRootProps()}>
                                <input {...getInputProps()}/>
                                <PlusOutlined style={{fontSize: '3rem', color:'#fff'}}/>
                        </div>
                    )}
                </DropZone>

                </div>

                <h3 style={{color:'#fff'}}>이미지 미리보기</h3>
                {isImage && CreateImageComponent(UploadImgCount,FilePath,ImgPosCount,SetImageOrder)}
                
                <h2 style={{color:"#fff", marginBottom:"15px"}}>
                    Title
                </h2>
                <Input style={{width:"100%", height:"30px"}} onChange={titlehandler} value={title}/>
                <br/>
                <h2 style={{color:"#fff", marginBottom:"15px", marginTop:"20px"}}>
                    Content
                </h2>
                <TextArea
                onKeyDown={codeInputTabHandler} 
                style={{width:"100%", height:"200px"}} onChange={contenthandler} value={content}/>
                <br/>
                <div style={{marginTop:"20px"}}>
                    <Button type="primary" size="large" onClick={onSubmit} style={{marginRight: "10px"}}>Submit</Button>
                    <Button size="large" onClick={BackPage} style={{marginRight: "10px"}}>Back</Button>
                    <Select defaultValue="Category" style={{width:120}} onChange={CategoryHandler}>
                        <Option value="JavaScript">JavaScript</Option>
                        <Option value="Python">Python</Option>
                        <Option value="React">React</Option>
                        <Option value="Unity">Unity</Option>
                        <Option value="Other">Other</Option>
                    </Select>
                </div>


            </Form>
        </div>

    )
}

export default CreatePage
