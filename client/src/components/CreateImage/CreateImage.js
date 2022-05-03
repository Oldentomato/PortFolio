import React from 'react';
import DropZone from 'react-dropzone'
import UploadImage from '../UploadImage/UploadImage'
import {PlusOutlined} from '@ant-design/icons'

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

function CreateImage() {
  return (<>
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
                {isImage && CreateImageComponent(UploadImgCount,FilePath,ImgPosCount,SetImageOrder,UploadCountHandler)}
      
  </>);
}

export default CreateImage;
