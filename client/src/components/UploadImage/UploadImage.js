import React,{useState} from 'react'
import {Select} from 'antd'

const {Option} = Select;

function SetOptions(count){
    var obj = []
    for(var i=1;i<=count;i++){
        obj.push(<Option key={i} value={`${i}`}>{i}</Option>)
    }
    return obj
}

function UploadImage({FilePath,ImgCount}) {

    const [order, setorder] = useState(0)

    const ImageSelectHandler = (value) =>{
        setorder(value)
    }


    return (
        <div>
            <div>
                <img src={`http://localhost:5000/${FilePath}`}></img>
            </div>
            <div>
                <Select defaultValue="ImageOrder"style={{width:120}} onChange={ImageSelectHandler}>
                    {SetOptions(ImgCount)}
                </Select>
            </div> 
        </div>

    )
}

export default UploadImage
