import React from 'react';
import {Typography} from 'antd'

const {Title} = Typography
const {Text} = Typography

function ActivitiesPage() {

  return <div style={{positon:'absolute',justifyContent:'center', alignItems:'center', display:'flex', marginTop:'10%'}}>
    <div style={{position:'relative',width:'1000px', height:'100%', paddingBottom:'40px'}}>
        <Title level={1} style={{color:'#fff', marginLeft:'20px'}}>About Me</Title>
        <hr/>
        <br/>
        <div style={{marginLeft:'20px'}}>
            <Title level={2} style={{color:'#fff'}}>My Tech</Title>
            <img src={"https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=Node.js&logoColor=black"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=black"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=Unity&logoColor=white"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=black"}/>
            <img style={{marginLeft:'10px'}} src={"https://img.shields.io/badge/CSharp-239128?style=for-the-badge&logo=CSharp&logoColor=black"}/>
            <img style={{marginLeft:'10px',marginTop:'10px'}} src={"https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=Tensorflow&logoColor=black"}/>

        </div>
        <br />
        <div style={{marginLeft:'20px'}}>
            <Title level={2} style={{color:'#fff'}}>Activities</Title>

            <Title level={3} style={{color:'#fff'}}>2016</Title>
            <hr/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>GIGDC 고등부 동상 수상</Text>
            <br/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>AppJam 참여</Text>

            <Title level={3} style={{color:'#fff'}}>2021</Title>
            <hr/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>OCT 망막 개선 프로젝트 참여</Text>
            <br/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>GIGDC 일반부 참여</Text>
            <br/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>폭스러닝 딥레이서 행사 참여</Text>

            <Title level={3} style={{color:'#fff'}}>2022</Title>
            <hr/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>한이음 프로젝트 참여</Text>
            <br/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>춘계 학술대회 우수논문상 수상</Text>
            <br/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>소프트웨어야 놀자 멘토링 참여</Text>
            <br/>
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>2022 K-해커톤 참여</Text>
            <br/>
        </div>
        
    </div>
  </div>;
}

export default ActivitiesPage;
