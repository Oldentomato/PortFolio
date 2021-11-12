import React,{Suspense} from "react"
import {Canvas} from "react-three-fiber"
import {Html, useGLTFLoader, OrbitControls} from "drei"
import {Section} from "../../section"


function Model(){
    const gltf = useGLTFLoader("/Object/scene.gltf",true);
    return <primitive object={gltf.scene} dispose={null}/>;
}

const HTMLContent = () => {
    return (
        <Section factor={1.5} offset={1}>
            <group position={[0,250,0]}>
            <mesh position={[0,-35,0]} scale={[50,50,50]}>
                <Model/>
            </mesh>
        <Html fullscrenn>
            <div className='container'>
                <h1 className='title' style={{color:"#fff"}}>Hello</h1>
            </div>
        </Html>
        </group>
        </Section>


    )
}




function LandingPage(){
    return(
        <div id="world">
            <Canvas colorManagement camera={{position:[0,0,120], fov:70}}>
                <OrbitControls/>
                <Suspense fallback={null}>
                    <HTMLContent/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default LandingPage