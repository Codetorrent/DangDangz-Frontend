import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Dog from "./../Main/Dog";

function DogRotate() {
    const DogRef = useRef(null);

    useFrame(() => {
        DogRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={DogRef}>
            <Dog />
        </mesh>
    );
}

export default DogRotate;
