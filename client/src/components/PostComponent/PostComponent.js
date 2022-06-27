import React,{useState,useEffect} from 'react';
import DropZone from 'react-dropzone'
import UploadImage from '../UploadImage/UploadImage'
import {PlusOutlined} from '@ant-design/icons'
import {Button, Form, Input, Typography, Select} from 'antd'
import axios from 'axios'

const {TextArea} = Input;
const {Title} = Typography;
const {Option} = Select;

function CreateImageComponent(UploadCount,FilePath,ImgPosCount,SetImageOrder, SetCount){
    var Component = []
    if(ImgPosCount === 0){
        return (<p style={{color:"#fff"}}>No Image Position</p>)
    }
    else if(UploadCount !== ImgPosCount){
        return (<p style={{color:"#fff"}}>Not Equal PositionCount And UploadCount</p>)
    }
    else{
        for(var i=0;i<UploadCount;i++){
            Component.push(<UploadImage key={i} FilePath={FilePath[i]} ImgCount={UploadCount} SetOrder={SetImageOrder} SetImgCount={SetCount}/>)
        }
        return Component
        
    }

}

function PostComponent(props) {
    const [title, settitle] = useState(props.page==="Modify" ? props.title : "")
    const [content, setcontent] = useState(props.page==="Modify" ? props.content : "")
    const [type, settype] = useState(props.page==="Modify" ? props.type : "")
    const [isImage, setisImage] = useState(false)
    const [File, setFile] = useState([])
    const [ImgPosCount, setImgPosCount] = useState(0)
    const [UploadImgCount, setUploadImgCount] = useState(0)

    const UploadCountHandler = (count) =>{
        setUploadImgCount(count - 1)
        if(UploadImgCount === 0)
            setisImage(false)
    }

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
        var pos = content.indexOf('^')
        
        while(pos !== -1){
            codecount++;
            pos = content.indexOf('^',pos + 1)
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
        if(UploadImgCount === 0)
            setisImage(false)
    }


    const codeInputTabHandler = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setcontent(content + '\t');
            
        }
    }

    const OnDelete = (path) =>{
        setFile(File.filter((arr)=> arr.filepath !== path))
    }

    const SetImageOrder = (path, value) =>{
        setFile(File.map((arr)=>(
            arr.filepath === path ? {...arr, fileorder : value} : arr
        ))
        )
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
            const file = {
                filepath: response.data.filePath,
                fileorder: 0
            }
            if(response.data.success){
                setFile(File.concat(file))
                // setfilePath(FilePath.concat(response.data.filePath))
                setisImage(true)
                setUploadImgCount(UploadImgCount + 1)
                // setFileOrder(FileOrder.concat(0))
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
            type: type,
            file: File
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
        <div style={{maxWidth:"1000px",margin:"auto", paddingBottom:"40px",marginTop:"100px"}}>
        <div style={{textAlign:"center",marginBotton:"2rem"}}>
            <Title level={2} style={{color:"#fff", fontWeight:"300",fontSize:"3.5em", margin:"30px"}}>{props.page==="Create" ? "WRITE POST" : "MODIFY POST"}</Title>
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
            {isImage && CreateImageComponent(UploadImgCount,File,ImgPosCount,SetImageOrder,UploadCountHandler,OnDelete)}
            
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
            style={{height:"400px"}} onChange={contenthandler} value={content}/>
            <br/>
            <div style={{marginTop:"20px"}}>
                <Button type="primary" size="large" onClick={onSubmit} style={{marginRight: "10px"}}>Submit</Button>
                <Button size="large" onClick={BackPage} style={{marginRight: "10px"}}>Back</Button>
                {props.page === "Modify" && <Button type="danger" onClick={props.deletefunc}>Delete</Button>}
                <Select defaultValue={type === "" ? "Category" : type} style={{width:120,marginLeft:"20px"}} onChange={CategoryHandler}>
                    <Option value="JavaScript">JavaScript</Option>
                    <Option value="Python">Python</Option>
                    <Option value="React">React</Option>
                    <Option value="DeepLearning">DeepLearning</Option>
                    <Option value="Other">Other</Option>
                </Select>
            </div>


        </Form>
    </div>
  );
}

export default PostComponent;
