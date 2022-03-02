import React,{useState} from 'react'
import {Select,Button} from 'antd'
import axios from 'axios'

const {Option} = Select;

function SetOptions(count){
    var obj = []
    for(var i=1;i<=count;i++){
        obj.push(<Option key={i} value={`${i}`}>{i}번째</Option>)
    }
    return obj
}

function UploadImage(props) {

    const [loading, setloading] = useState(false)
    const LocalURI = 'http://localhost:5000/'
    const ImageSelectHandler = (value) =>{
        props.SetOrder(props.FilePath, Number(value))
    }


    const DeleteBtnHandler = (e) =>{
        if(window.confirm('사진을 삭제하시겠습니까?')){
            e.preventDefault()
            setloading(true)
            axios.post('api/modify/deleteImg',{FilePath: props.FilePath})
            .then(response=>{
                if(response.data.success){
                    props.SetImgCount(props.ImgCount)
                    props.SetDelete(props.FilePath)
                    setloading(false)
                    alert('사진삭제가 완료되었습니다')
                }
                else{
                    alert('사진 삭제에 문제가 발생했습니다')
                }
            })
        }

    }

    if(loading){
        return(
            <p style={{color:'#fff'}}>loading</p>
        )
    }else{
        return (
            <div style={{position:'relative'}}>
                <div>
                    <img src={LocalURI+props.FilePath}></img>
                </div>
                <div>
                    <Select defaultValue="ImageOrder"style={{width:120}} onChange={ImageSelectHandler}>
                        {SetOptions(props.ImgCount)}
                    </Select>
                    <Button style={{marginLeft:'10px'}} type="danger" onClick={DeleteBtnHandler}>Delete</Button>
                </div> 
            </div>
    
        )
    }


}

export default UploadImage
