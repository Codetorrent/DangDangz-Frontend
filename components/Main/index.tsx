// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";
// // import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import React, { useEffect } from "react";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const Main = () => {
//     let canvas: HTMLCanvasElement;
//     let model: THREE.Group;

//     useEffect(() => {
//         canvas = document.getElementById("canvas") as HTMLCanvasElement;

//         const sizes = { width: innerWidth, height: innerHeight };
//         // scene
//         const scene: THREE.Scene = new THREE.Scene();

//         // camera
//         const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
//             75,
//             sizes.width / sizes.height,
//             0.1,
//             1000
//         );
//         camera.position.set(0, 0, 1);

//         // render
//         const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
//             canvas: canvas,
//             antialias: true,
//         });

//         renderer.setSize(sizes.width, sizes.height);
//         renderer.setPixelRatio(window.devicePixelRatio);

//         // 큐브 예제
//         // const geometry = new THREE.BoxGeometry(1, 1, 1)
//         // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
//         // const cube = new THREE.Mesh(geometry, material)
//         // scene.add(cube)

//         // 3D 모델 가져오기
//         const gltfLoader = new GLTFLoader();

//         gltfLoader.load("./../../public/models/skatedog.gltf", (gltf) => {
//             model = gltf.scene;
//             model.scale.set(1.3, 1.3, 1.3);
//             model.rotation.y = -Math.PI / 3;
//             scene.add(model);
//         });

//         // 밝기
//         const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//         scene.add(ambientLight);

//         const pointLight = new THREE.PointLight(0xffffff, 2, 100);
//         scene.add(pointLight);

//         // 애니메이션
//         const tick = () => {
//             requestAnimationFrame(tick);

//             renderer.render(scene, camera);
//             requestAnimationFrame(tick);
//         };
//         tick();

//         window.addEventListener("resize", () => {
//             sizes.width = window.innerWidth;
//             sizes.height = window.innerHeight;
//             camera.aspect = sizes.width / sizes.height;
//             camera.updateProjectionMatrix();
//             renderer.setSize(sizes.width, sizes.height);
//             renderer.setPixelRatio(window.devicePixelRatio);
//         });
//     }, []);

//     return (
//         <>
//             <canvas id="canvas"></canvas>
//             <div className="mainContent"></div>
//         </>
//     );
// };

// export default Main;

// {
//     /* <Canvas id="canvas" style={{ width: 300, height: 300 }}></Canvas>; */
// }

// import React, { useEffect, useRef } from "react";
// import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";

// function Main() {
//     const canvasRef = useRef<HTMLCanvasElement>(null);

//     useEffect(() => {
//         const scene = new THREE.Scene();

//         const renderer = new THREE.WebGLRenderer({
//             canvas: canvasRef.current!,
//         });

//         const camera = new THREE.PerspectiveCamera(30, 1);
//         camera.position.set(0, 0, 10);

//         const loader = new GLTFLoader();
//         loader.load("/public/shiba/scene.gltf", function (gltf: GLTF) {
//             scene.add(gltf.scene);
//             renderer.render(scene, camera);
//         });
//     }, []);

//     return <canvas ref={canvasRef} />;
// }

// export default Main;

// import React, { useRef, Suspense } from "react";
// import * as THREE from "three";
// import { useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// // npx gltfjsx scene.gltf로 생성(아래 링크 유튭 참조!)
// function Model(props: any) {
//     const { nodes, materials }: any = useGLTF("/public/models/skatedog.gltf"); // 동작만 확인했기 때문에 일단 any로 둠
//     return (
//         <group {...props} dispose={null}>
//             <group rotation={[-Math.PI / 2, 0, 0]}>
//                 <group rotation={[Math.PI / 2, 0, 0]}>
//                     <mesh
//                         geometry={nodes.mesh_all1_Texture1_0.geometry}
//                         material={materials.Texture1}
//                     />
//                 </group>
//             </group>
//         </group>
//     );
// }

// function Main() {
//     const object3d = useRef<THREE.Object3D>(null!);
//     useFrame((state, delta) => (object3d.current.rotation.y += 0.005));
//     return (
//         // object3D: 빈 지역 공간
//         <object3D ref={object3d}>
//             <OrbitControls />
//             <Suspense fallback={null}>
//                 <Model />
//             </Suspense>
//         </object3D>
//     );
// }

// export default Main;

// import React, { useEffect, useRef, useState } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import * as THREE from "three";
// import { Container, Header, BodyModel, Footer } from "./styles";

// const MainPage: React.FC = () => {
//     const refBody = useRef<HTMLDivElement>(null); // initialState
//     const [loading, setLoading] = useState<boolean>(false); // initialState
//     const [renderer, setRenderer] = useState<any>();
//     const [_camera, setCamera] = useState<any>();
//     const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0)); // initialState x, y, z
//     // initialState
//     const [initialCameraPosition] = useState(
//         new THREE.Vector3(
//             20 * Math.sin(0.2 * Math.PI),
//             10,
//             20 * Math.cos(0.2 * Math.PI)
//         )
//     );
//     const [scene] = useState(new THREE.Scene()); // initialState
//     const [_controls, setControls] = useState<any>();

//     const easeOutCirc = (x: number) => {
//         return Math.sqrt(x - Math.pow(-1, 4));
//     };

//     useEffect(() => {
//         const { current: container } = refBody;

//         if (container && !renderer) {
//             const scW = container.clientWidth;
//             const scH = container.clientHeight;

//             const renderer = new THREE.WebGLRenderer({
//                 // parameters
//                 antialias: true,
//                 alpha: true,
//             });
//             renderer.setPixelRatio(window.devicePixelRatio); // value
//             renderer.setSize(scW, scH); // width, height
//             renderer.outputEncoding = THREE.sRGBEncoding;
//             container.appendChild(renderer.domElement); // node
//             setRenderer(renderer); // value

//             const scale = scH * 0.08 + 4;
//             const camera = new THREE.OrthographicCamera(
//                 // left, right, top, bottom, near, far
//                 -scale,
//                 scale,
//                 scale,
//                 -scale / 2,
//                 0.01,
//                 50000
//             );
//             camera.position.copy(initialCameraPosition);
//             camera.lookAt(target);
//             setCamera(camera);

//             const ambientLight = new THREE.AmbientLight(0xcccccc, 1); // color, intensity
//             scene.add(ambientLight);

//             const controls = new OrbitControls(camera, renderer.domElement);
//             controls.autoRotate = true;
//             controls.target = target;
//             setControls(controls);

//             // const loader = new GLTFLoader();
//             // loader.load("./scene.gltf", (gltf) => {
//             //     scene.add(gltf.scene);
//             //     animate();
//             //     setLoading(false);
//             // });
//             // loadGLTFModle(scene, glbPath: '/public/models/scene.gltf', options: {
//             //     receiveShadow: false,
//             //     castShadow: false,
//             // }).than(onfulfilled: () => {
//             //     animate()
//             // })

//             let req: any = null;
//             let frame = 0;

//             const animate = () => {
//                 req = requestAnimationFrame(animate); // callback
//                 frame = frame < 100 ? frame + 1 : frame;

//                 if (frame < 100) {
//                     const p = initialCameraPosition;
//                     const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

//                     camera.position.y = 10;
//                     camera.position.x =
//                         p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
//                     camera.position.x =
//                         p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
//                     camera.lookAt(target);
//                 } else {
//                     controls.update();
//                 }

//                 renderer.render(scene, camera);
//             };
//         }

//         return () => {};
//     }, []);
//     return (
//         <div>
//             <Container>
//                 <Header>
//                     <h1>
//                         <span>Happy Halloween !!!</span>
//                     </h1>
//                 </Header>
//                 <BodyModel ref={refBody}>
//                     {loading && <p>loading ...</p>}
//                 </BodyModel>
//                 <Footer>--Created by Saul Vo</Footer>
//             </Container>
//         </div>
//     );
// };

// export default MainPage;

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { styled } from "styled-components";
import Wallet from "./Wallet";
import DogRotate from "./DogRotate";

function MainPage() {
    return (
        <Container>
            <Canvas
                className="canvas"
                style={{ width: "100%", height: "60vh" }}
            >
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

export default MainPage;

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
