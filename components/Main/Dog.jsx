/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 dog.glb
Author: HeyNinety (https://sketchfab.com/HeyNinety)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dog-c1d790c39dcf4ba2a9a47b4c0dc8836b
Title: Dog
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
    const { nodes, materials } = useGLTF("/dog.glb");
    return (
        <group {...props} dispose={null} scale={2}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.849}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-0.3, 0.09, 0]} scale={0.526}>
                        <mesh
                            geometry={nodes.Object_4.geometry}
                            material={materials.fur_light}
                        />
                        <mesh
                            geometry={nodes.Object_5.geometry}
                            material={materials.eye1}
                        />
                        <mesh
                            geometry={nodes.Object_6.geometry}
                            material={materials.eye2}
                        />
                        <mesh
                            geometry={nodes.Object_7.geometry}
                            material={materials.fur_dark}
                        />
                        <mesh
                            geometry={nodes.Object_8.geometry}
                            material={materials.tongue}
                        />
                        <mesh
                            geometry={nodes.Object_9.geometry}
                            material={materials.outline}
                        />
                    </group>
                    <group position={[0.096, -0.649, 0]}>
                        <mesh
                            geometry={nodes.Object_15.geometry}
                            material={materials.griptape}
                        />
                        <mesh
                            geometry={nodes.Object_16.geometry}
                            material={materials.wood}
                        />
                        <mesh
                            geometry={nodes.Object_17.geometry}
                            material={materials.metal}
                        />
                        <mesh
                            geometry={nodes.Object_18.geometry}
                            material={materials.wheel}
                        />
                        <mesh
                            geometry={nodes.Object_19.geometry}
                            material={materials["wheel.001"]}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Object_11.geometry}
                        material={materials.outline}
                        position={[-0.3, 0.09, 0]}
                        scale={0.526}
                    />
                    <mesh
                        geometry={nodes.Object_13.geometry}
                        material={materials.outline}
                        position={[-0.709, -0.057, 0]}
                    />
                    <mesh
                        geometry={nodes.Object_21.geometry}
                        material={materials.material_0}
                        position={[0.096, -0.649, 0]}
                    />
                    <mesh
                        geometry={nodes.Object_23.geometry}
                        material={materials["outline.001"]}
                        position={[0.096, -0.649, 0]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/dog.glb");
