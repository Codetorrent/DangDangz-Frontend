import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { styled } from "styled-components";
import Wallet from "../components/Main/Wallet";
import DogRotate from "../components/Main/DogRotate";

function Three() {
    return (
        <Container>
            <Canvas className="canvas">
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <DogRotate />
                </Suspense>
            </Canvas>
            <Wallet />
        </Container>
    );
}

export default Three;

const Container = styled.div`
    position: relative;

    width: 100vw;
    height: 100%;

    color: #fff;
    text-align: center;

    /* background-image: url(./../../public/banner/upper-banner.png); */
    /* background-position: center; */

    /* background-color: #f1f1f1; */
`;
