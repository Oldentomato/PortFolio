import React from 'react'
import {useProgress, Html} from '@react-three/drei'

function LoadingPage() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

export default LoadingPage
