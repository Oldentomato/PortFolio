import React,{Suspense} from "react"
import {Canvas} from "react-three-fiber"
import {Html, useGLTFLoader, OrbitControls, Plane} from "drei"
import {Section} from "../../section"


function Model(){
    const gltf = useGLTFLoader("/Object/test.gltf",true);
    return <primitive object={gltf.scene} dispose={null}/>;
}

const HTMLContent = () => {
    return (
        <Section factor={1.5} offset={1}>
            <group position={[0,250,0]}>
            <mesh castShadow receiveShadow position={[0,80,0]} scale={[100,100,100]}>
                <Model/>
            </mesh>

  
        </group>
        </Section>


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
            <Canvas colorManagement camera={{position:[0,0,170], fov:70}}>
                <OrbitControls enableZoom={false} />
                <Lights/>
                <Plane scale={[100,10,10]} rotation={[0,0,0]}/>
                <Suspense fallback={null}>
                    <HTMLContent/>
                    <Html position={[0,0,0]}>
                        <div style={{background:"rgb(0,0,0,0.5)"}}>
                            <h2 style={{color:"#fff",right:"50vw"}}>Test</h2>
                        </div>
                        
                    </Html>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default LandingPage