import React from 'react';
import {Typography} from 'antd'

const {Title} = Typography
const {Text} = Typography

function ActivitiesPage() {

  return <div style={{positon:'absolute',justifyContent:'center', alignItems:'center', display:'flex', marginTop:'10%'}}>
    <div style={{position:'relative',width:'1000px', height:'500px'}}>
        <Title level={1} style={{color:'#fff', marginLeft:'20px'}}>My Work</Title>
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
            {/* <svg width="250" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>AssemblyScript</title><path d="M0 0v24h24V0h-9.225c0 1.406-1.04 2.813-2.756 2.813A2.766 2.766 0 019.234 0zm18.204 10.947c.707 0 1.314.137 1.82.412.517.264.96.717 1.33 1.361l-1.726 1.108c-.19-.338-.395-.58-.617-.728a1.422 1.422 0 00-.807-.222c-.327 0-.586.09-.776.27a.896.896 0 00-.285.68c0 .337.106.596.317.775.222.17.57.36 1.045.57l.554.238c.474.2.891.411 1.25.633.37.21.675.453.918.728.253.264.443.57.57.918.137.337.206.738.206 1.203a3 3 0 01-.285 1.33c-.18.38-.433.701-.76.965a3.419 3.419 0 01-1.171.601c-.443.127-.929.19-1.456.19a5.31 5.31 0 01-1.41-.174 4.624 4.624 0 01-1.139-.475 3.922 3.922 0 01-.886-.712 4.48 4.48 0 01-.602-.902L16.1 18.67c.242.39.527.712.855.966.337.253.78.38 1.33.38.463 0 .827-.1 1.091-.301.275-.211.412-.475.412-.792 0-.38-.143-.664-.428-.854-.285-.19-.68-.396-1.187-.618l-.554-.237a8.12 8.12 0 01-1.092-.554 3.64 3.64 0 01-.839-.696 2.887 2.887 0 01-.538-.903 3.375 3.375 0 01-.19-1.187c0-.411.074-.796.222-1.155a2.91 2.91 0 01.649-.934c.285-.264.628-.47 1.029-.617.4-.148.849-.222 1.345-.222zm-8.796.032h.19l4.922 10.858h-2.327l-.506-1.219H7.318l-.506 1.219H4.675zm.063 3.988a22.21 22.21 0 01-.206.697l-.205.649a6.979 6.979 0 01-.222.585l-.776 1.868h2.834l-.776-1.868a15.492 15.492 0 01-.237-.633 23.741 23.741 0 01-.412-1.298z"/></svg> */}

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
            <Text style={{color:'#fff', fontSize:'20px', margin:'10px'}}>춘계 학술대회 참여(딥러닝)</Text>
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
