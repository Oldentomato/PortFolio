import React,{Suspense, useState, useRef} from "react"
import {Canvas,useFrame,useLoader} from "@react-three/fiber"
import {useSpring,a} from "@react-spring/three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {Html, OrbitControls, Stars, useScroll} from "@react-three/drei"
import {Section} from "../../section"


function ModelDesk(){
    const gltf = useLoader(GLTFLoader,"/Object/scene.glb");
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    // const [active, setActive] = useState(false);
    const props = useSpring({
        scale: hovered ? [2, 2, 2] : [1, 1, 1]
        // color: hovered ? "hotpink" : "gray"
      });
    const onClick = () => {
        window.location.href = "/Activities"
    }

    useFrame(() => {
        if(!hovered){
            meshRef.current.rotation.y += 0.01
        }

      });
    // const scroll = useScroll()
    return(
        <>
        <a.mesh ref={meshRef} onPointerOver={()=> setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onClick} 
        scale={props.scale} castShadow receiveShadow position={[0,80,0]}>
                <primitive object={gltf.scene} dispose={null}/>
        </a.mesh>
        {hovered && <HTMLContent Text="활동내역 보기" fontsize="30px" x={-35} y={70} z={0}/>}
        </>
    ) 
}

// function ModelTest(){
//     const obj = useLoader(OBJLoader,".Object/")
//     return <primitive object={obj} />
// }

const HTMLModel = () => {
    return (
        <Section factor={1.5} offset={1}>
            <group position={[0,250,0]}>
                <ModelDesk />
            </group>
        </Section>

    )
   
}

const HTMLContent = ({Text,fontsize,x,y,z}) =>{
    
    return(
        <Html position={[x,y,z]}>
        <div>
            <h2 style={{color:"#fff",fontSize: fontsize, width:'15vw', textAlign:'center', margin:'30px', marginTop:'40px'}}>{Text}</h2>
  
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
          position={[10, 10, 0]}
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
          
            <Canvas colorManagement camera={{position:[10,100,100], fov:75}}>
                <OrbitControls enableZoom={false} />
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