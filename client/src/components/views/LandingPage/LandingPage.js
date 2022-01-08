import React,{Suspense, useState} from "react"
import {Canvas,useFrame,useLoader} from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Html, OrbitControls, Stars, useScroll} from "@react-three/drei"
import {Section} from "../../section"



function Model(){
    const gltf = useLoader(GLTFLoader,"/Object/test.gltf");
    const scroll = useScroll()
    // useFrame((state,delta)=>{
    //     const offset = 1 - scroll.offset
    //     state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    //     state.camera.lookAt(0,0,0)
    // })
    return <primitive object={gltf.scene} dispose={null}/>;
}

const HTMLModel = () => {
    const [Deskhover, setDesk] = useState(false)
    const OnHoverDesk = () => {
        if(Deskhover)
            alert("hovered")
    }

    return (
        <Section factor={1.5} offset={1}>
            <group position={[0,250,0]}>
            <mesh onPointerOver={()=> setDesk(true)} onPointerOut={() => setDesk(false)} castShadow receiveShadow position={[0,80,0]} scale={[100,100,100]}>
                <Model/>
                {Deskhover && <HTMLContent Text="hover" x={0} y={0} z={0}/>}
            </mesh>
        </group>
        </Section>


    )
}

const HTMLContent = ({Text,x,y,z}) =>{
    
    return(
        <Html position={[x,y,z]}>
        <div style={{background:"rgb(0,0,0,0.5)"}}>
            <h2 style={{color:"#fff",right:"50vw", width:'8vw', textAlign:'center'}}>{Text}</h2>
            
        </div>
      
        </Html>
    )
}

const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        {/* <directionalLight position={[10, 10, 5]} intensity={1} /> */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        {/* <spotLight intensity={1} position={[10, 0, 0]} castShadow /> */}
      </>
    );
  };




function LandingPage(){
    return(
        <div id="world">
          
            <Canvas colorManagement camera={{position:[10,20,170], fov:70}}>
                {/* <OrbitControls enableZoom={false} /> */}
                <Lights/>
                <Stars radius={150} depth={50} count={4000} factor={8} saturation={0} fade />
                {/* <Plane scale={[100,10,10]} rotation={[0,0,0]}/> */}
                <Suspense fallback={null}>
                    <HTMLModel/>
                </Suspense>
            </Canvas>
           
        </div>

    )
}

export default LandingPage