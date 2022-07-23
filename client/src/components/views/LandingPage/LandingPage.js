import React,{Suspense, useState, useRef} from "react"
import {Canvas,useFrame,useLoader} from "@react-three/fiber"
import {useSpring,a} from "@react-spring/three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Html, OrbitControls, useScroll, Sky,PerspectiveCamera, softShadows} from "@react-three/drei"
import {Section} from "../../section"

softShadows();
function ModelDesk(){
    const gltf = useLoader(GLTFLoader,"/Object/scene.glb");
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    // const [active, setActive] = useState(false);
    const props = useSpring({
        scale: [8,8,8]
        // scale: hovered ? [2, 2, 2] : [5, 5, 5]
        // color: hovered ? "hotpink" : "gray"
      });
    const onClick = () => {
        // window.location.href = "/Activities"
    }

    useFrame(() => {
        // if(!hovered){
        //     meshRef.current.rotation.y += 0.001
        // }
        // meshRef.current.rotation.y += 0.01
      });
    // const scroll = useScroll()
    return(
        <a.mesh ref={meshRef} onPointerOver={()=> setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onClick} 
        scale={props.scale} castShadow receiveShadow position={[0,0,0]}>
                <primitive object={gltf.scene} dispose={null}/>
                <meshPhysicalMaterial
                    attach='material'
                    color={"#61DBFB"}
                />
            {/* {hovered && <HTMLContent Text="활동내역 보기" fontsize="30px" x={-35} y={70} z={0}/>} */}
        </a.mesh>

    ) 
}


const HTMLModel = () => {
    return (
        <Section factor={1} offset={1}>
            <group position={[260,-20.5,300]}>
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
        <ambientLight intensity={0.4} />
        {/* Diretion light */}
        {/* <directionalLight position={[10, 10, 5]} intensity={5} /> */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={4}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={0.3} position={[0, 15, 10]} castShadow />
        {/* <spotLight intensity={1} position={[0, 40, 0]} castShadow /> */}
      </>
    );
  };




function LandingPage(){
    return(
        <div id="world">
          
            <Canvas colorManagement shadows>
            <OrbitControls
                makeDefault
                autoRotate
                autoRotateSpeed={0.3}
                maxPolarAngle={Math.PI / 2.3}
                minPolarAngle={Math.PI / 2.3}
                enableZoom={false}
                enablePan={false}
            />
            <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]}>
                <spotLight position={[0, 50, 0]} angle={0.15} penumbra={1} intensity={10} castShadow shadow-mapSize={[2048, 2048]} />
            </PerspectiveCamera>
                <Lights/>
                <Sky
                    distance={450000}
                    sunPosition={[5, 1, 8]}
                    inclination={0}
                    azimuth={0.25}
                />
                {/* <Stars radius={150} depth={50} count={4000} factor={8} saturation={0} fade /> */}
                <Suspense fallback={null}>
                    <HTMLModel/>
                </Suspense>
            </Canvas>
           
        </div>

    )
}

export default LandingPage