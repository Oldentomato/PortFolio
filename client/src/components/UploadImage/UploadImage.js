import React from 'react'
import {Select,Button} from 'antd'

const {Option} = Select;

function SetOptions(count){
    var obj = []
    for(var i=1;i<=count;i++){
        obj.push(<Option key={i} value={`${i}`}>{i}번째</Option>)
    }
    return obj
}

function UploadImage(props) {


    const ImageSelectHandler = (value) =>{
        props.GetOrder(value)
    }


    return (
        <div style={{position:'relative'}}>
            <div>
                <img src={`http://localhost:5000/${props.FilePath}`}></img>
            </div>
            <div>
                <Select defaultValue="ImageOrder"style={{width:120}} onChange={ImageSelectHandler}>
                    {SetOptions(props.ImgCount)}
                </Select>
                <Button style={{marginLeft:'10px'}} type="danger">Delete</Button>
            </div> 
        </div>

    )
}

export default UploadImage
