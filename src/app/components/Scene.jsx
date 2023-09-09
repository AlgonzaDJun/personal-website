// import useSpline from "@splinetool/r3f-spline";
// import { OrthographicCamera } from "@react-three/drei";

// export default function Scene({ ...props }) {
//   const { nodes, materials } = useSpline(
//     "https://prod.spline.design/7F8rkyLYHVlUx44t/scene.splinecode"
//   );
//   return (
//     <>
//       {/* <color attach="background" args={["#74757a"]} /> */}
//       <group {...props} dispose={null}>
//         <mesh
//           name="Cube"
//           geometry={nodes.Cube.geometry}
//           material={materials["Cube Material"]}
//           castShadow
//           receiveShadow
//           position={[34.31, -8.86, -53.73]}
//           rotation={[Math.PI / 2, 0, -Math.PI / 2]}
//           scale={[1, 1, 0.24]}
//         />
//         <group
//           name="Tea"
//           position={[124.66, 159.81, -269.63]}
//           rotation={[0, 0.18, 0]}
//           scale={0.31}
//         >
//           <group name="tea" position={[-9.18, 99.28, 3.21]}>
//             <mesh
//               name="Merged Geometry"
//               geometry={nodes["Merged Geometry"].geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[13.9, 63.17, 5.69]}
//             />
//             <mesh
//               name="Cylinder 3"
//               geometry={nodes["Cylinder 3"].geometry}
//               material={materials.orange_waves}
//               castShadow
//               receiveShadow
//               position={[30.46, 29, -7.46]}
//               rotation={[0, -0.05, 0]}
//               scale={1}
//             />
//             <mesh
//               name="Cylinder 2"
//               geometry={nodes["Cylinder 2"].geometry}
//               material={materials.orange_waves}
//               castShadow
//               receiveShadow
//               position={[28.96, 29, -13.38]}
//               rotation={[0, 0.22, 0]}
//               scale={1}
//             />
//             <mesh
//               name="Cylinder"
//               geometry={nodes.Cylinder.geometry}
//               material={materials.orange_waves}
//               castShadow
//               receiveShadow
//               position={[25.77, 29, -12.32]}
//               rotation={[0, 1.26, 0]}
//               scale={1}
//             />
//             <mesh
//               name="Cube 3"
//               geometry={nodes["Cube 3"].geometry}
//               material={materials.line}
//               castShadow
//               receiveShadow
//               position={[-3.42, 91.45, 3.3]}
//               rotation={[0, -0.04, 0]}
//               scale={0.1}
//             />
//             <mesh
//               name="Cube 4"
//               geometry={nodes["Cube 4"].geometry}
//               material={materials.wite}
//               castShadow
//               receiveShadow
//               position={[-73.3, -94.95, 47.9]}
//               rotation={[-1.58, -0.12, 1.62]}
//               scale={[1.71, 0.89, 0.89]}
//             />
//             <mesh
//               name="Cube 2"
//               geometry={nodes["Cube 2"].geometry}
//               material={materials.wite}
//               castShadow
//               receiveShadow
//               position={[9.05, 28.28, 4.95]}
//               rotation={[-1.11, 1.34, 1.1]}
//               scale={0.89}
//             />
//           </group>
//           <group
//             name="cup of tea"
//             position={[16.84, 77.84, 0.97]}
//             rotation={[0, -0.1, 0]}
//             scale={1.7}
//           >
//             <mesh
//               name="Torus"
//               geometry={nodes.Torus.geometry}
//               material={materials.blue}
//               castShadow
//               receiveShadow
//               position={[-41.47, 4.52, 26.01]}
//               rotation={[0, 0.61, Math.PI]}
//               scale={0.3}
//             />
//             <mesh
//               name="Merged Geometry1"
//               geometry={nodes["Merged Geometry1"].geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[15.17, 14.04, 39.43]}
//               rotation={[0, 0.1, 0]}
//               scale={0.59}
//             />
//             <mesh
//               name="Ellipse 2"
//               geometry={nodes["Ellipse 2"].geometry}
//               material={materials.pink_2}
//               castShadow
//               receiveShadow
//               position={[40.32, 0.51, 27.23]}
//               rotation={[0.01, 0.99, -0.01]}
//               scale={0.84}
//             />
//             <mesh
//               name="Ellipse"
//               geometry={nodes.Ellipse.geometry}
//               material={materials.pink_2}
//               castShadow
//               receiveShadow
//               position={[-9.18, 0.14, 46.36]}
//               rotation={[0.01, -0.13, 0]}
//               scale={0.82}
//             />
//             <mesh
//               name="Cube 21"
//               geometry={nodes["Cube 21"].geometry}
//               material={materials.orange}
//               castShadow
//               receiveShadow
//               position={[-0.97, 0.4, -0.96]}
//               rotation={[-Math.PI / 2, 0, 0]}
//               scale={[1, 1, 0.68]}
//             />
//             <mesh
//               name="Cube1"
//               geometry={nodes.Cube1.geometry}
//               material={materials.blue}
//               castShadow
//               receiveShadow
//               position={[0, -5.88, 0]}
//             />
//           </group>
//         </group>
//         <group
//           name="Lamp Blue"
//           position={[-324.01, 0, -171.25]}
//           rotation={[0, -0.71, 0]}
//           scale={1}
//         >
//           <mesh
//             name="Sphere"
//             geometry={nodes.Sphere.geometry}
//             material={materials.light}
//             castShadow
//             receiveShadow
//             position={[67.03, 340.45, 1.4]}
//             rotation={[Math.PI / 2, 0.87, -Math.PI / 2]}
//             scale={0.53}
//           />
//           <mesh
//             name="Cube 6"
//             geometry={nodes["Cube 6"].geometry}
//             material={materials["Cube 6 Material"]}
//             castShadow
//             receiveShadow
//             position={[63.94, 342.92, 0.46]}
//             rotation={[0, 0, -0.7]}
//             scale={0.53}
//           />
//           <mesh
//             name="Cube 5"
//             geometry={nodes["Cube 5"].geometry}
//             material={materials.lamp}
//             castShadow
//             receiveShadow
//             position={[-0.37, 84.3, 0.45]}
//             rotation={[0, 0, 0]}
//             scale={0.53}
//           />
//           <mesh
//             name="Cylinder1"
//             geometry={nodes.Cylinder1.geometry}
//             material={materials.lamp}
//             castShadow
//             receiveShadow
//             position={[2.04, 8.02, 0.61]}
//             rotation={[0, 0, 0]}
//             scale={0.53}
//           />
//         </group>
//         <group
//           name="officechair"
//           position={[223, 142.19, -134.89]}
//           rotation={[-Math.PI, 0.33, -Math.PI]}
//           scale={0.51}
//         >
//           <mesh
//             name="seat"
//             geometry={nodes.seat.geometry}
//             material={nodes.seat.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="cover under seat"
//             geometry={nodes["cover under seat"].geometry}
//             material={nodes["cover under seat"].material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="back"
//             geometry={nodes.back.geometry}
//             material={nodes.back.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="back top"
//             geometry={nodes["back top"].geometry}
//             material={nodes["back top"].material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <group
//             name="armrest left"
//             position={[115.92, -15.79, -4.24]}
//             scale={0.08}
//           >
//             <mesh
//               name="armrest_cilinder_side_L"
//               geometry={nodes.armrest_cilinder_side_L.geometry}
//               material={nodes.armrest_cilinder_side_L.material}
//               castShadow
//               receiveShadow
//               position={[-1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_L"
//               geometry={nodes.armrest_L.geometry}
//               material={nodes.armrest_L.material}
//               castShadow
//               receiveShadow
//               position={[-1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_Cylinder_L"
//               geometry={nodes.armrest_Cylinder_L.geometry}
//               material={nodes.armrest_Cylinder_L.material}
//               castShadow
//               receiveShadow
//               position={[-1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_Cylinder_cover_up_L"
//               geometry={nodes.armrest_Cylinder_cover_up_L.geometry}
//               material={nodes.armrest_Cylinder_cover_up_L.material}
//               castShadow
//               receiveShadow
//               position={[-1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_Cylinder_cover_down_L"
//               geometry={nodes.armrest_Cylinder_cover_down_L.geometry}
//               material={nodes.armrest_Cylinder_cover_down_L.material}
//               castShadow
//               receiveShadow
//               position={[-1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//           </group>
//           <group
//             name="armrest right"
//             position={[-120.04, -15.79, -4.24]}
//             scale={0.08}
//           >
//             <mesh
//               name="armrest_cilinder_side_R"
//               geometry={nodes.armrest_cilinder_side_R.geometry}
//               material={nodes.armrest_cilinder_side_R.material}
//               castShadow
//               receiveShadow
//               position={[1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_R"
//               geometry={nodes.armrest_R.geometry}
//               material={nodes.armrest_R.material}
//               castShadow
//               receiveShadow
//               position={[1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_Cylinder_R"
//               geometry={nodes.armrest_Cylinder_R.geometry}
//               material={nodes.armrest_Cylinder_R.material}
//               castShadow
//               receiveShadow
//               position={[1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_Cylinder_cover_up_R"
//               geometry={nodes.armrest_Cylinder_cover_up_R.geometry}
//               material={nodes.armrest_Cylinder_cover_up_R.material}
//               castShadow
//               receiveShadow
//               position={[1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//             <mesh
//               name="armrest_Cylinder_cover_down_R"
//               geometry={nodes.armrest_Cylinder_cover_down_R.geometry}
//               material={nodes.armrest_Cylinder_cover_down_R.material}
//               castShadow
//               receiveShadow
//               position={[1447.01, -2096.91, -379.44]}
//               scale={63.64}
//             />
//           </group>
//           <mesh
//             name="Cylinder_in"
//             geometry={nodes.Cylinder_in.geometry}
//             material={nodes.Cylinder_in.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="Cylinder_out"
//             geometry={nodes.Cylinder_out.geometry}
//             material={nodes.Cylinder_out.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="Cylinder_cover"
//             geometry={nodes.Cylinder_cover.geometry}
//             material={nodes.Cylinder_cover.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="sphere"
//             geometry={nodes.sphere.geometry}
//             material={nodes.sphere.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <mesh
//             name="Cylinder_down"
//             geometry={nodes.Cylinder_down.geometry}
//             material={nodes.Cylinder_down.material}
//             castShadow
//             receiveShadow
//             position={[-2.06, -186.76, -35.17]}
//             scale={5.19}
//           />
//           <group name="chair legs" position={[0, -232.94, 0]} scale={0.08}>
//             <mesh
//               name="chair_leg"
//               geometry={nodes.chair_leg.geometry}
//               material={nodes.chair_leg.material}
//               castShadow
//               receiveShadow
//               position={[-25.29, 566.41, -431.4]}
//               scale={63.64}
//             />
//             <mesh
//               name="chair_leg1"
//               geometry={nodes.chair_leg1.geometry}
//               material={nodes.chair_leg1.material}
//               castShadow
//               receiveShadow
//               position={[-25.29, 566.41, -431.4]}
//               scale={63.64}
//             />
//             <mesh
//               name="chair_leg2"
//               geometry={nodes.chair_leg2.geometry}
//               material={nodes.chair_leg2.material}
//               castShadow
//               receiveShadow
//               position={[-25.29, 566.41, -431.4]}
//               scale={63.64}
//             />
//             <mesh
//               name="chair_leg3"
//               geometry={nodes.chair_leg3.geometry}
//               material={nodes.chair_leg3.material}
//               castShadow
//               receiveShadow
//               position={[-25.29, 566.41, -431.4]}
//               scale={63.64}
//             />
//             <mesh
//               name="chair_leg4"
//               geometry={nodes.chair_leg4.geometry}
//               material={nodes.chair_leg4.material}
//               castShadow
//               receiveShadow
//               position={[-25.29, 566.41, -431.4]}
//               scale={63.64}
//             />
//             <group name="wheels" position={[0, -115.38, 0]}>
//               <mesh
//                 name="wheel"
//                 geometry={nodes.wheel.geometry}
//                 material={nodes.wheel.material}
//                 castShadow
//                 receiveShadow
//                 position={[-25.29, 681.79, -431.4]}
//                 scale={63.64}
//               />
//               <mesh
//                 name="wheel1"
//                 geometry={nodes.wheel1.geometry}
//                 material={nodes.wheel1.material}
//                 castShadow
//                 receiveShadow
//                 position={[-25.29, 681.79, -431.4]}
//                 scale={63.64}
//               />
//               <mesh
//                 name="wheel2"
//                 geometry={nodes.wheel2.geometry}
//                 material={nodes.wheel2.material}
//                 castShadow
//                 receiveShadow
//                 position={[-25.29, 681.79, -431.4]}
//                 scale={63.64}
//               />
//               <mesh
//                 name="wheel3"
//                 geometry={nodes.wheel3.geometry}
//                 material={nodes.wheel3.material}
//                 castShadow
//                 receiveShadow
//                 position={[-25.29, 681.79, -431.4]}
//                 scale={63.64}
//               />
//               <mesh
//                 name="wheel4"
//                 geometry={nodes.wheel4.geometry}
//                 material={nodes.wheel4.material}
//                 castShadow
//                 receiveShadow
//                 position={[-25.29, 681.79, -431.4]}
//                 scale={63.64}
//               />
//             </group>
//           </group>
//           <group name="lever" position={[-53.16, -109.28, -22.02]} scale={0.08}>
//             <mesh
//               name="lever1"
//               geometry={nodes.lever1.geometry}
//               material={nodes.lever1.material}
//               castShadow
//               receiveShadow
//               position={[626.68, -950.2, -161.36]}
//               scale={63.64}
//             />
//             <mesh
//               name="lever_top"
//               geometry={nodes.lever_top.geometry}
//               material={nodes.lever_top.material}
//               castShadow
//               receiveShadow
//               position={[626.68, -950.2, -161.36]}
//               scale={63.64}
//             />
//           </group>
//         </group>
//         <mesh
//           name="my name"
//           geometry={nodes["my name"].geometry}
//           material={materials["my name Material"]}
//           castShadow
//           receiveShadow
//           position={[426.72, 164.67, -245.96]}
//           rotation={[-1.57, 0, 1.61]}
//           scale={1}
//         />
//         <group
//           name="Picture"
//           position={[-439.91, 386.13, 122.13]}
//           rotation={[0, 1.56, 0]}
//           scale={[0.65, 0.65, 1.93]}
//         >
//           <mesh
//             name="Rectangle 2"
//             geometry={nodes["Rectangle 2"].geometry}
//             material={materials.white}
//             castShadow
//             receiveShadow
//             position={[-0.21, 0.99, 18.42]}
//           />
//           <mesh
//             name="Triangle"
//             geometry={nodes.Triangle.geometry}
//             material={materials["purple-2"]}
//             castShadow
//             receiveShadow
//             position={[12.57, -34.06, 20.33]}
//             rotation={[0, 0, -Math.PI / 9]}
//             scale={1.06}
//           />
//           <mesh
//             name="Rectangle 21"
//             geometry={nodes["Rectangle 21"].geometry}
//             material={materials.purple}
//             castShadow
//             receiveShadow
//             position={[1.27, 24.12, 19.36]}
//             rotation={[0, 0, 0.87]}
//             scale={1}
//           />
//           <mesh
//             name="Ellipse1"
//             geometry={nodes.Ellipse1.geometry}
//             material={materials.yellow}
//             castShadow
//             receiveShadow
//             position={[-11.67, 28.21, 19.79]}
//           />
//           <mesh
//             name="Cube 22"
//             geometry={nodes["Cube 22"].geometry}
//             material={materials.red}
//             castShadow
//             receiveShadow
//             position={[0, 0, 10.28]}
//             rotation={[0, Math.PI / 2, 0]}
//             scale={1}
//           />
//         </group>
//         <group
//           name="Window Magic"
//           position={[100.45, 389.14, -427.28]}
//           scale={[0.85, 0.78, 0.78]}
//         >
//           <mesh
//             name="Cube 66"
//             geometry={nodes["Cube 66"].geometry}
//             material={materials.window}
//             position={[14.07, -111.49, -0.22]}
//             rotation={[0, 0, Math.PI]}
//             scale={[0.82, 0.7, 1.17]}
//           />
//           <mesh
//             name="Cube 65"
//             geometry={nodes["Cube 65"].geometry}
//             material={materials.window}
//             position={[134.32, -1.92, -7.19]}
//             rotation={[0, 0, Math.PI / 2]}
//             scale={[0.66, 0.7, 0.72]}
//           />
//           <mesh
//             name="Cube 64"
//             geometry={nodes["Cube 64"].geometry}
//             material={materials.window}
//             position={[-103.82, -1.92, -7.57]}
//             rotation={[0, 0, Math.PI / 2]}
//             scale={[0.66, 0.7, 0.72]}
//           />
//           <mesh
//             name="Cube 63"
//             geometry={nodes["Cube 63"].geometry}
//             material={materials.window}
//             position={[12.7, 101.6, -6.83]}
//             scale={[0.78, 0.7, 1.08]}
//           />
//           <mesh
//             name="Cube 32"
//             geometry={nodes["Cube 32"].geometry}
//             material={materials.window}
//             castShadow
//             receiveShadow
//             position={[94.3, 8.82, -12.5]}
//             rotation={[-Math.PI / 2, 1.41, -Math.PI / 2]}
//             scale={[0.14, 0.14, 0.34]}
//           />
//           <mesh
//             name="Cube 31"
//             geometry={nodes["Cube 31"].geometry}
//             material={materials.window}
//             castShadow
//             receiveShadow
//             position={[-2.95, 68.59, -12.5]}
//             rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//             scale={[0.14, 0.14, 0.23]}
//           />
//         </group>
//         <mesh
//           name="Boolean"
//           geometry={nodes.Boolean.geometry}
//           material={nodes.Boolean.material}
//           castShadow
//           receiveShadow
//           position={[31.78, 249.51, -427.01]}
//           scale={[1.02, 1, 1]}
//         />
//         <group name="Cabinet Book" position={[-272.85, -0.58, -353.75]}>
//           <mesh
//             name="Cube 93"
//             geometry={nodes["Cube 93"].geometry}
//             material={materials["wood-red-light"]}
//             castShadow
//             receiveShadow
//             position={[-16.31, 103.26, 39.2]}
//             rotation={[-Math.PI / 2, 0, 1.95]}
//             scale={1.73}
//           />
//           <mesh
//             name="Pyramid"
//             geometry={nodes.Pyramid.geometry}
//             material={materials["blue-2-dark"]}
//             castShadow
//             receiveShadow
//             position={[44.21, 186.99, 37.38]}
//             rotation={[-Math.PI, 1.22, -Math.PI]}
//             scale={1.73}
//           />
//           <group
//             name="books"
//             position={[-6.2, 253.76, 34.43]}
//             rotation={[0, Math.PI / 2, 0]}
//             scale={1.73}
//           >
//             <mesh
//               name="Cube 7"
//               geometry={nodes["Cube 7"].geometry}
//               material={materials["Untitled Material"]}
//               castShadow
//               receiveShadow
//               position={[1.38, -8.91, 34.48]}
//               rotation={[Math.PI / 2, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 33"
//               geometry={nodes["Cube 33"].geometry}
//               material={materials.pink}
//               castShadow
//               receiveShadow
//               position={[1.3, -5.33, 23.72]}
//               rotation={[Math.PI / 3, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 61"
//               geometry={nodes["Cube 61"].geometry}
//               material={materials["wall-livingroom"]}
//               castShadow
//               receiveShadow
//               position={[0.17, -5.88, 14.26]}
//               rotation={[1.13, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 8"
//               geometry={nodes["Cube 8"].geometry}
//               material={materials["yellow-light"]}
//               castShadow
//               receiveShadow
//               position={[0.3, -2.86, 6.2]}
//               rotation={[0.8, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 51"
//               geometry={nodes["Cube 51"].geometry}
//               material={materials["yellow-light"]}
//               castShadow
//               receiveShadow
//               position={[0.3, -0.97, -24.22]}
//               rotation={[0, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 81"
//               geometry={nodes["Cube 81"].geometry}
//               material={materials["Untitled Material"]}
//               castShadow
//               receiveShadow
//               position={[1.8, -1, -2.93]}
//               rotation={[0.32, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 41"
//               geometry={nodes["Cube 41"].geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[1.8, 0, -28.49]}
//               rotation={[0, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 82"
//               geometry={nodes["Cube 82"].geometry}
//               material={materials.grey}
//               castShadow
//               receiveShadow
//               position={[0.3, -2.83, -8.28]}
//               rotation={[0.4, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 23"
//               geometry={nodes["Cube 23"].geometry}
//               material={materials.grey}
//               castShadow
//               receiveShadow
//               position={[0.3, -2.57, -32.43]}
//               rotation={[0, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube 83"
//               geometry={nodes["Cube 83"].geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[0, -1.1, -17.47]}
//               rotation={[-0.05, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//             <mesh
//               name="Cube2"
//               geometry={nodes.Cube2.geometry}
//               material={materials.purple}
//               castShadow
//               receiveShadow
//               position={[-0.76, 0.57, -39.97]}
//               rotation={[0, -Math.PI / 2, 0]}
//               scale={0.14}
//             />
//           </group>
//           <group
//             name="cd"
//             position={[-57.95, 184.23, 43.94]}
//             rotation={[0, Math.PI / 2, 0]}
//             scale={0.25}
//           >
//             <mesh
//               name="Merged Geometry2"
//               geometry={nodes["Merged Geometry2"].geometry}
//               material={materials.pink}
//               castShadow
//               receiveShadow
//               position={[8.71, -21.84, 49.72]}
//               scale={7.05}
//             />
//             <mesh
//               name="Cube3"
//               geometry={nodes.Cube3.geometry}
//               material={materials["wood-red"]}
//               castShadow
//               receiveShadow
//               position={[-9.72, -3.84, -79.8]}
//               rotation={[0, -Math.PI / 2, 0]}
//             />
//             <group name="Group 19" position={[6.89, 10.69, 22.42]}>
//               <mesh
//                 name="Ellipse 21"
//                 geometry={nodes["Ellipse 21"].geometry}
//                 material={materials["yellow-light"]}
//                 castShadow
//                 receiveShadow
//                 position={[-1.4, 1.52, 4.21]}
//                 rotation={[-0.59, -0.18, -1.73]}
//                 scale={0.77}
//               />
//               <mesh
//                 name="Cube 24"
//                 geometry={nodes["Cube 24"].geometry}
//                 material={materials.grey}
//                 castShadow
//                 receiveShadow
//                 position={[0, 0, 0]}
//                 rotation={[-0.59, -0.18, -0.16]}
//                 scale={0.77}
//               />
//             </group>
//           </group>
//           <mesh
//             name="wood"
//             geometry={nodes.wood.geometry}
//             material={materials["wood-red-light"]}
//             castShadow
//             receiveShadow
//             position={[0, 192.51, 22.75]}
//             rotation={[0, Math.PI / 2, 0]}
//             scale={1.73}
//           />
//         </group>
//         <group
//           name="Clock Digital"
//           position={[391.44, 164.24, -355.26]}
//           scale={0.17}
//         >
//           <mesh
//             name="Rectangle"
//             geometry={nodes.Rectangle.geometry}
//             material={materials["Rectangle Material"]}
//             castShadow
//             receiveShadow
//             position={[-0.71, 31.69, -78.32]}
//             rotation={[-Math.PI, 0, -Math.PI]}
//             scale={0.48}
//           />
//           <mesh
//             name="button_side 2"
//             geometry={nodes["button_side 2"].geometry}
//             material={materials["button_side 2 Material"]}
//             castShadow
//             receiveShadow
//             position={[-206.15, 84.88, 7.74]}
//             scale={[0.04, 0.35, 0.37]}
//           />
//           <group
//             name="button"
//             position={[1.33, 158.34, 8.45]}
//             rotation={[0, 0, 0]}
//             scale={0.13}
//           >
//             <mesh
//               name="Rectangle 3"
//               geometry={nodes["Rectangle 3"].geometry}
//               material={materials["Button Power"]}
//               position={[-0.09, 66.83, -51.92]}
//               rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//               scale={[1.31, 0.25, 1.68]}
//             />
//             <mesh
//               name="Cylinder2"
//               geometry={nodes.Cylinder2.geometry}
//               material={materials["Button Power"]}
//               position={[0.02, 64.7, 0.02]}
//               rotation={[Math.PI, -0.21, Math.PI]}
//               scale={1}
//             />
//           </group>
//           <mesh
//             name="sun"
//             geometry={nodes.sun.geometry}
//             material={materials["Screen Numbers"]}
//             castShadow
//             receiveShadow
//             position={[178.22, 140.33, 79.06]}
//           />
//           <mesh
//             name="(light)"
//             geometry={nodes["(light)"].geometry}
//             material={materials["Screen Numbers"]}
//             castShadow
//             receiveShadow
//             position={[6.13, 84.77, 80.44]}
//           />
//           <group
//             name="button_left"
//             position={[113.69, 169.75, 7.35]}
//             scale={0.48}
//           >
//             <mesh
//               name="Cube 42"
//               geometry={nodes["Cube 42"].geometry}
//               material={materials["Buttons Top"]}
//               castShadow
//               receiveShadow
//               position={[0, 1.07, -0.4]}
//               rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//               scale={[0.54, 2.28, 0.15]}
//             />
//             <mesh
//               name="Cube 25"
//               geometry={nodes["Cube 25"].geometry}
//               material={materials["Buttons Top Base"]}
//               castShadow
//               receiveShadow
//               position={[0, -0.98, 0]}
//               rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//               scale={[0.58, 2.34, 0.15]}
//             />
//           </group>
//           <group
//             name="button_right"
//             position={[-110.01, 169.75, 7.35]}
//             scale={0.48}
//           >
//             <mesh
//               name="Cube 43"
//               geometry={nodes["Cube 43"].geometry}
//               material={materials["Buttons Top"]}
//               castShadow
//               receiveShadow
//               position={[0, 1.07, 0]}
//               rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//               scale={[0.54, 2.28, 0.15]}
//             />
//             <mesh
//               name="Cube 26"
//               geometry={nodes["Cube 26"].geometry}
//               material={materials["Buttons Top Base"]}
//               castShadow
//               receiveShadow
//               position={[0, -0.98, 0]}
//               rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//               scale={[0.58, 2.34, 0.15]}
//             />
//           </group>
//           <mesh
//             name="screen"
//             geometry={nodes.screen.geometry}
//             material={materials["screen Material"]}
//             castShadow
//             receiveShadow
//             position={[-4.83, 82.53, 64.93]}
//             scale={[0.46, 0.43, 0.46]}
//           />
//           <mesh
//             name="border"
//             geometry={nodes.border.geometry}
//             material={materials["Screen Frame"]}
//             castShadow
//             receiveShadow
//             position={[-5.07, 82.01, 77.49]}
//             scale={0.48}
//           />
//           <mesh
//             name="clock"
//             geometry={nodes.clock.geometry}
//             material={materials["Clock Body"]}
//             castShadow
//             receiveShadow
//             position={[1.47, 85.68, 7.74]}
//             scale={[1.24, 0.51, 0.51]}
//           />
//         </group>
//         <group name="macBook" position={[242.89, 160.6, -319.09]} scale={0.26}>
//           <group
//             name="screen1"
//             position={[0.5, 10.73, -120.95]}
//             rotation={[-Math.PI / 9, 0, 0]}
//           >
//             <group name="logo" position={[2.73, 193.99, -3.03]}>
//               <mesh
//                 name="logo_apple"
//                 geometry={nodes.logo_apple.geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[17.42, 19.01, 0.2]}
//                 rotation={[-Math.PI, 0, -Math.PI]}
//                 scale={[0.07, 0.07, 39.27]}
//               />
//               <mesh
//                 name="logo_apple1"
//                 geometry={nodes.logo_apple1.geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[-0.11, 36.16, -0.2]}
//                 rotation={[-Math.PI, 0, -Math.PI]}
//                 scale={[0.07, 0.07, 39.27]}
//               />
//             </group>
//             <group name="camera" position={[5.26, 361.65, 3.09]}>
//               <mesh
//                 name="green_light"
//                 geometry={nodes.green_light.geometry}
//                 material={materials["green_light Material"]}
//                 castShadow
//                 receiveShadow
//                 position={[4.7, 0, 0.04]}
//                 rotation={[0, 0, 0]}
//                 scale={[0.32, 0.32, 0.36]}
//               />
//               <mesh
//                 name="camera1"
//                 geometry={nodes.camera1.geometry}
//                 material={materials["camera1 Material"]}
//                 castShadow
//                 receiveShadow
//                 position={[-3.9, 0, 0.04]}
//                 rotation={[0, 0, 0]}
//                 scale={[0.32, 0.32, 0.36]}
//               />
//               <mesh
//                 name="border_black_camera"
//                 geometry={nodes.border_black_camera.geometry}
//                 material={materials["Untitled Material"]}
//                 castShadow
//                 receiveShadow
//                 position={[-3.9, 0, -0.04]}
//                 rotation={[0, 0, 0]}
//                 scale={[0.32, 0.32, 0.36]}
//               />
//             </group>
//             <mesh
//               name="screen2"
//               geometry={nodes.screen2.geometry}
//               material={materials["screen2 Material"]}
//               castShadow
//               receiveShadow
//               position={[-262.2, 23.97, 3.12]}
//               rotation={[0, 0, 0]}
//               scale={0.35}
//             />
//             <mesh
//               name="border_screen"
//               geometry={nodes.border_screen.geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[-0.18, 182.34, -0.22]}
//               rotation={[0, 0, 0]}
//               scale={[0.35, 0.35, 0.39]}
//             />
//             <mesh
//               name="Rectangle1"
//               geometry={nodes.Rectangle1.geometry}
//               material={materials.Metal}
//               castShadow
//               receiveShadow
//               position={[0, 182.34, -2.54]}
//               rotation={[0, 0, 0]}
//               scale={[0.35, 0.35, 0.39]}
//             />
//             <mesh
//               name="metalic_screen"
//               geometry={nodes.metalic_screen.geometry}
//               material={materials.Metal}
//               castShadow
//               receiveShadow
//               position={[0, 182.34, -0.62]}
//               rotation={[0, 0, 0]}
//               scale={[0.35, 0.35, 0.39]}
//             />
//           </group>
//           <group name="base" position={[0, 14.97, 72.83]}>
//             <group name="keyboard" position={[-0.57, -5.97, -61.38]}>
//               <group name="Component" position={[-142.86, -0.78, 46.98]}>
//                 <mesh
//                   name="Triangle1"
//                   geometry={nodes.Triangle1.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon"
//                   geometry={nodes.icon.geometry}
//                   material={materials["icon Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F1"
//                   geometry={nodes.F1.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@"
//                   geometry={nodes["@"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+"
//                   geometry={nodes["+"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="="
//                   geometry={nodes["="].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number"
//                   geometry={nodes.number.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 3"
//                   geometry={nodes["Text 3"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base"
//                   geometry={nodes["key-base"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 31"
//                 position={[-9.58, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle2"
//                   geometry={nodes.Triangle2.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon1"
//                   geometry={nodes.icon1.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F11"
//                   geometry={nodes.F11.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@1"
//                   geometry={nodes["@1"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+1"
//                   geometry={nodes["+1"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=1"
//                   geometry={nodes["=1"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number1"
//                   geometry={nodes.number1.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 31"
//                   geometry={nodes["Text 31"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base1"
//                   geometry={nodes["key-base1"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 33"
//                 position={[85.66, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle3"
//                   geometry={nodes.Triangle3.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon2"
//                   geometry={nodes.icon2.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F12"
//                   geometry={nodes.F12.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@2"
//                   geometry={nodes["@2"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+2"
//                   geometry={nodes["+2"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=2"
//                   geometry={nodes["=2"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number2"
//                   geometry={nodes.number2.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 32"
//                   geometry={nodes["Text 32"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base2"
//                   geometry={nodes["key-base2"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 29"
//                 position={[-136.46, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle4"
//                   geometry={nodes.Triangle4.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon3"
//                   geometry={nodes.icon3.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F13"
//                   geometry={nodes.F13.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@3"
//                   geometry={nodes["@3"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+3"
//                   geometry={nodes["+3"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=3"
//                   geometry={nodes["=3"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number3"
//                   geometry={nodes.number3.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 33"
//                   geometry={nodes["Text 33"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base3"
//                   geometry={nodes["key-base3"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 311"
//                 position={[22.06, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle5"
//                   geometry={nodes.Triangle5.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon4"
//                   geometry={nodes.icon4.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F14"
//                   geometry={nodes.F14.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@4"
//                   geometry={nodes["@4"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+4"
//                   geometry={nodes["+4"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=4"
//                   geometry={nodes["=4"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number4"
//                   geometry={nodes.number4.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 34"
//                   geometry={nodes["Text 34"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base4"
//                   geometry={nodes["key-base4"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 331"
//                 position={[149.11, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle6"
//                   geometry={nodes.Triangle6.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon5"
//                   geometry={nodes.icon5.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F15"
//                   geometry={nodes.F15.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@5"
//                   geometry={nodes["@5"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+5"
//                   geometry={nodes["+5"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=5"
//                   geometry={nodes["=5"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number5"
//                   geometry={nodes.number5.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 35"
//                   geometry={nodes["Text 35"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base5"
//                   geometry={nodes["key-base5"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 32"
//                 position={[-73.01, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle7"
//                   geometry={nodes.Triangle7.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon6"
//                   geometry={nodes.icon6.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F16"
//                   geometry={nodes.F16.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@6"
//                   geometry={nodes["@6"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+6"
//                   geometry={nodes["+6"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=6"
//                   geometry={nodes["=6"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number6"
//                   geometry={nodes.number6.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 36"
//                   geometry={nodes["Text 36"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base6"
//                   geometry={nodes["key-base6"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 332"
//                 position={[117.3, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle8"
//                   geometry={nodes.Triangle8.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon7"
//                   geometry={nodes.icon7.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F17"
//                   geometry={nodes.F17.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@7"
//                   geometry={nodes["@7"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+7"
//                   geometry={nodes["+7"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=7"
//                   geometry={nodes["=7"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number7"
//                   geometry={nodes.number7.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 37"
//                   geometry={nodes["Text 37"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base7"
//                   geometry={nodes["key-base7"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 30"
//                 position={[-104.82, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle9"
//                   geometry={nodes.Triangle9.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon8"
//                   geometry={nodes.icon8.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F18"
//                   geometry={nodes.F18.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@8"
//                   geometry={nodes["@8"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+8"
//                   geometry={nodes["+8"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=8"
//                   geometry={nodes["=8"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number8"
//                   geometry={nodes.number8.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 38"
//                   geometry={nodes["Text 38"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base8"
//                   geometry={nodes["key-base8"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 48"
//                 position={[212.64, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle10"
//                   geometry={nodes.Triangle10.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon9"
//                   geometry={nodes.icon9.geometry}
//                   material={materials["icon9 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F19"
//                   geometry={nodes.F19.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@9"
//                   geometry={nodes["@9"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+9"
//                   geometry={nodes["+9"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=9"
//                   geometry={nodes["=9"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number9"
//                   geometry={nodes.number9.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 39"
//                   geometry={nodes["Text 39"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base9"
//                   geometry={nodes["key-base9"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 333"
//                 position={[180.95, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle11"
//                   geometry={nodes.Triangle11.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon10"
//                   geometry={nodes.icon10.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F110"
//                   geometry={nodes.F110.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@10"
//                   geometry={nodes["@10"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+10"
//                   geometry={nodes["+10"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=10"
//                   geometry={nodes["=10"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number10"
//                   geometry={nodes.number10.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 310"
//                   geometry={nodes["Text 310"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base10"
//                   geometry={nodes["key-base10"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 312"
//                 position={[-41.17, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle12"
//                   geometry={nodes.Triangle12.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon11"
//                   geometry={nodes.icon11.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F111"
//                   geometry={nodes.F111.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@11"
//                   geometry={nodes["@11"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+11"
//                   geometry={nodes["+11"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=11"
//                   geometry={nodes["=11"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number11"
//                   geometry={nodes.number11.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 311"
//                   geometry={nodes["Text 311"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base11"
//                   geometry={nodes["key-base11"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 334"
//                 position={[54.07, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle13"
//                   geometry={nodes.Triangle13.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon12"
//                   geometry={nodes.icon12.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F112"
//                   geometry={nodes.F112.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@12"
//                   geometry={nodes["@12"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+12"
//                   geometry={nodes["+12"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=12"
//                   geometry={nodes["=12"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number12"
//                   geometry={nodes.number12.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 312"
//                   geometry={nodes["Text 312"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base12"
//                   geometry={nodes["key-base12"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 28"
//                 position={[-168.05, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle14"
//                   geometry={nodes.Triangle14.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon13"
//                   geometry={nodes.icon13.geometry}
//                   material={materials["icon13 Material"]}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F113"
//                   geometry={nodes.F113.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@13"
//                   geometry={nodes["@13"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+13"
//                   geometry={nodes["+13"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=13"
//                   geometry={nodes["=13"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number13"
//                   geometry={nodes.number13.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 313"
//                   geometry={nodes["Text 313"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base13"
//                   geometry={nodes["key-base13"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 22"
//                 position={[142.93, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle15"
//                   geometry={nodes.Triangle15.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon14"
//                   geometry={nodes.icon14.geometry}
//                   material={materials["icon14 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F114"
//                   geometry={nodes.F114.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@14"
//                   geometry={nodes["@14"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+14"
//                   geometry={nodes["+14"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=14"
//                   geometry={nodes["=14"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number14"
//                   geometry={nodes.number14.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 314"
//                   geometry={nodes["Text 314"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base14"
//                   geometry={nodes["key-base14"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 20"
//                 position={[212.64, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle16"
//                   geometry={nodes.Triangle16.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon15"
//                   geometry={nodes.icon15.geometry}
//                   material={materials["icon15 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F115"
//                   geometry={nodes.F115.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@15"
//                   geometry={nodes["@15"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+15"
//                   geometry={nodes["+15"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=15"
//                   geometry={nodes["=15"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number15"
//                   geometry={nodes.number15.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 315"
//                   geometry={nodes["Text 315"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base15"
//                   geometry={nodes["key-base15"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 21"
//                 position={[158.48, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle17"
//                   geometry={nodes.Triangle17.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon16"
//                   geometry={nodes.icon16.geometry}
//                   material={materials["icon16 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F116"
//                   geometry={nodes.F116.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@16"
//                   geometry={nodes["@16"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+16"
//                   geometry={nodes["+16"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=16"
//                   geometry={nodes["=16"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number16"
//                   geometry={nodes.number16.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 316"
//                   geometry={nodes["Text 316"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base16"
//                   geometry={nodes["key-base16"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 221"
//                 position={[111.24, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle18"
//                   geometry={nodes.Triangle18.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon17"
//                   geometry={nodes.icon17.geometry}
//                   material={materials["icon17 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F117"
//                   geometry={nodes.F117.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@17"
//                   geometry={nodes["@17"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+17"
//                   geometry={nodes["+17"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=17"
//                   geometry={nodes["=17"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number17"
//                   geometry={nodes.number17.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 317"
//                   geometry={nodes["Text 317"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base17"
//                   geometry={nodes["key-base17"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 19"
//                 position={[180.95, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle19"
//                   geometry={nodes.Triangle19.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon18"
//                   geometry={nodes.icon18.geometry}
//                   material={materials["icon18 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F118"
//                   geometry={nodes.F118.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@18"
//                   geometry={nodes["@18"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+18"
//                   geometry={nodes["+18"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=18"
//                   geometry={nodes["=18"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number18"
//                   geometry={nodes.number18.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 318"
//                   geometry={nodes["Text 318"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base18"
//                   geometry={nodes["key-base18"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 211"
//                 position={[126.6, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle20"
//                   geometry={nodes.Triangle20.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon19"
//                   geometry={nodes.icon19.geometry}
//                   material={materials["icon19 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F119"
//                   geometry={nodes.F119.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@19"
//                   geometry={nodes["@19"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+19"
//                   geometry={nodes["+19"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=19"
//                   geometry={nodes["=19"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number19"
//                   geometry={nodes.number19.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 319"
//                   geometry={nodes["Text 319"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base19"
//                   geometry={nodes["key-base19"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 222"
//                 position={[79.36, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle21"
//                   geometry={nodes.Triangle21.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon20"
//                   geometry={nodes.icon20.geometry}
//                   material={materials["icon20 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F120"
//                   geometry={nodes.F120.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@20"
//                   geometry={nodes["@20"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+20"
//                   geometry={nodes["+20"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=20"
//                   geometry={nodes["=20"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number20"
//                   geometry={nodes.number20.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 320"
//                   geometry={nodes["Text 320"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base20"
//                   geometry={nodes["key-base20"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 18"
//                 position={[149.07, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle22"
//                   geometry={nodes.Triangle22.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon21"
//                   geometry={nodes.icon21.geometry}
//                   material={materials["icon21 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F121"
//                   geometry={nodes.F121.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@21"
//                   geometry={nodes["@21"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+21"
//                   geometry={nodes["+21"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=21"
//                   geometry={nodes["=21"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number21"
//                   geometry={nodes.number21.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 321"
//                   geometry={nodes["Text 321"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base21"
//                   geometry={nodes["key-base21"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 17"
//                 position={[165.55, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle23"
//                   geometry={nodes.Triangle23.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon22"
//                   geometry={nodes.icon22.geometry}
//                   material={materials["icon22 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F122"
//                   geometry={nodes.F122.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@22"
//                   geometry={nodes["@22"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+22"
//                   geometry={nodes["+22"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=22"
//                   geometry={nodes["=22"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number22"
//                   geometry={nodes.number22.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 322"
//                   geometry={nodes["Text 322"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base22"
//                   geometry={nodes["key-base22"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 16"
//                 position={[133.78, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle24"
//                   geometry={nodes.Triangle24.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon23"
//                   geometry={nodes.icon23.geometry}
//                   material={materials["icon23 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F123"
//                   geometry={nodes.F123.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@23"
//                   geometry={nodes["@23"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+23"
//                   geometry={nodes["+23"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=23"
//                   geometry={nodes["=23"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number23"
//                   geometry={nodes.number23.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 323"
//                   geometry={nodes["Text 323"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base23"
//                   geometry={nodes["key-base23"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 15"
//                 position={[102.14, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle25"
//                   geometry={nodes.Triangle25.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon24"
//                   geometry={nodes.icon24.geometry}
//                   material={materials["icon24 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F124"
//                   geometry={nodes.F124.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@24"
//                   geometry={nodes["@24"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+24"
//                   geometry={nodes["+24"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=24"
//                   geometry={nodes["=24"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number24"
//                   geometry={nodes.number24.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 324"
//                   geometry={nodes["Text 324"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base24"
//                   geometry={nodes["key-base24"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 12"
//                 position={[117.48, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle26"
//                   geometry={nodes.Triangle26.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon25"
//                   geometry={nodes.icon25.geometry}
//                   material={materials["icon25 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F125"
//                   geometry={nodes.F125.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@25"
//                   geometry={nodes["@25"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+25"
//                   geometry={nodes["+25"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=25"
//                   geometry={nodes["=25"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number25"
//                   geometry={nodes.number25.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 325"
//                   geometry={nodes["Text 325"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base25"
//                   geometry={nodes["key-base25"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 151"
//                 position={[70.49, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle27"
//                   geometry={nodes.Triangle27.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon26"
//                   geometry={nodes.icon26.geometry}
//                   material={materials["icon26 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F126"
//                   geometry={nodes.F126.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@26"
//                   geometry={nodes["@26"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+26"
//                   geometry={nodes["+26"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=26"
//                   geometry={nodes["=26"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number26"
//                   geometry={nodes.number26.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 326"
//                   geometry={nodes["Text 326"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base26"
//                   geometry={nodes["key-base26"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 121"
//                 position={[85.83, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle28"
//                   geometry={nodes.Triangle28.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon27"
//                   geometry={nodes.icon27.geometry}
//                   material={materials["icon27 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F127"
//                   geometry={nodes.F127.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@27"
//                   geometry={nodes["@27"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+27"
//                   geometry={nodes["+27"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=27"
//                   geometry={nodes["=27"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number27"
//                   geometry={nodes.number27.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 327"
//                   geometry={nodes["Text 327"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base27"
//                   geometry={nodes["key-base27"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 10"
//                 position={[94.95, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle29"
//                   geometry={nodes.Triangle29.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon28"
//                   geometry={nodes.icon28.geometry}
//                   material={materials["icon28 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F128"
//                   geometry={nodes.F128.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@28"
//                   geometry={nodes["@28"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+28"
//                   geometry={nodes["+28"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=28"
//                   geometry={nodes["=28"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number28"
//                   geometry={nodes.number28.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 328"
//                   geometry={nodes["Text 328"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base28"
//                   geometry={nodes["key-base28"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 152"
//                 position={[38.77, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle30"
//                   geometry={nodes.Triangle30.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon29"
//                   geometry={nodes.icon29.geometry}
//                   material={materials["icon29 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F129"
//                   geometry={nodes.F129.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@29"
//                   geometry={nodes["@29"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+29"
//                   geometry={nodes["+29"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=29"
//                   geometry={nodes["=29"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number29"
//                   geometry={nodes.number29.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 329"
//                   geometry={nodes["Text 329"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base29"
//                   geometry={nodes["key-base29"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 122"
//                 position={[54.12, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle31"
//                   geometry={nodes.Triangle31.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon30"
//                   geometry={nodes.icon30.geometry}
//                   material={materials["icon30 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F130"
//                   geometry={nodes.F130.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@30"
//                   geometry={nodes["@30"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+30"
//                   geometry={nodes["+30"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=30"
//                   geometry={nodes["=30"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number30"
//                   geometry={nodes.number30.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 330"
//                   geometry={nodes["Text 330"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base30"
//                   geometry={nodes["key-base30"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 101"
//                 position={[63.23, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle32"
//                   geometry={nodes.Triangle32.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon31"
//                   geometry={nodes.icon31.geometry}
//                   material={materials["icon31 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F131"
//                   geometry={nodes.F131.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@31"
//                   geometry={nodes["@31"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+31"
//                   geometry={nodes["+31"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=31"
//                   geometry={nodes["=31"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number31"
//                   geometry={nodes.number31.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 331"
//                   geometry={nodes["Text 331"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base31"
//                   geometry={nodes["key-base31"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 6"
//                 position={[47.63, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle33"
//                   geometry={nodes.Triangle33.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon32"
//                   geometry={nodes.icon32.geometry}
//                   material={materials["icon32 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F132"
//                   geometry={nodes.F132.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@32"
//                   geometry={nodes["@32"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+32"
//                   geometry={nodes["+32"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=32"
//                   geometry={nodes["=32"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number32"
//                   geometry={nodes.number32.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 332"
//                   geometry={nodes["Text 332"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base32"
//                   geometry={nodes["key-base32"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 153"
//                 position={[7.14, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle34"
//                   geometry={nodes.Triangle34.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon33"
//                   geometry={nodes.icon33.geometry}
//                   material={materials["icon33 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F133"
//                   geometry={nodes.F133.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@33"
//                   geometry={nodes["@33"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+33"
//                   geometry={nodes["+33"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=33"
//                   geometry={nodes["=33"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number33"
//                   geometry={nodes.number33.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 333"
//                   geometry={nodes["Text 333"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base33"
//                   geometry={nodes["key-base33"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 123"
//                 position={[22.48, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle35"
//                   geometry={nodes.Triangle35.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon34"
//                   geometry={nodes.icon34.geometry}
//                   material={materials["icon34 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F134"
//                   geometry={nodes.F134.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@34"
//                   geometry={nodes["@34"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+34"
//                   geometry={nodes["+34"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=34"
//                   geometry={nodes["=34"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number34"
//                   geometry={nodes.number34.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 334"
//                   geometry={nodes["Text 334"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base34"
//                   geometry={nodes["key-base34"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 102"
//                 position={[31.6, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle36"
//                   geometry={nodes.Triangle36.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon35"
//                   geometry={nodes.icon35.geometry}
//                   material={materials["icon35 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F135"
//                   geometry={nodes.F135.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@35"
//                   geometry={nodes["@35"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+35"
//                   geometry={nodes["+35"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=35"
//                   geometry={nodes["=35"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number35"
//                   geometry={nodes.number35.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 335"
//                   geometry={nodes["Text 335"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base35"
//                   geometry={nodes["key-base35"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 5"
//                 position={[15.99, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle37"
//                   geometry={nodes.Triangle37.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon36"
//                   geometry={nodes.icon36.geometry}
//                   material={materials["icon36 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F136"
//                   geometry={nodes.F136.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@36"
//                   geometry={nodes["@36"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+36"
//                   geometry={nodes["+36"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=36"
//                   geometry={nodes["=36"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number36"
//                   geometry={nodes.number36.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 336"
//                   geometry={nodes["Text 336"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base36"
//                   geometry={nodes["key-base36"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 154"
//                 position={[-24.78, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle38"
//                   geometry={nodes.Triangle38.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon37"
//                   geometry={nodes.icon37.geometry}
//                   material={materials["icon37 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F137"
//                   geometry={nodes.F137.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@37"
//                   geometry={nodes["@37"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+37"
//                   geometry={nodes["+37"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=37"
//                   geometry={nodes["=37"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number37"
//                   geometry={nodes.number37.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 337"
//                   geometry={nodes["Text 337"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base37"
//                   geometry={nodes["key-base37"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 124"
//                 position={[-9.44, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle39"
//                   geometry={nodes.Triangle39.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon38"
//                   geometry={nodes.icon38.geometry}
//                   material={materials["icon38 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F138"
//                   geometry={nodes.F138.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@38"
//                   geometry={nodes["@38"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+38"
//                   geometry={nodes["+38"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=38"
//                   geometry={nodes["=38"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number38"
//                   geometry={nodes.number38.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 338"
//                   geometry={nodes["Text 338"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base38"
//                   geometry={nodes["key-base38"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 103"
//                 position={[-0.32, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle40"
//                   geometry={nodes.Triangle40.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon39"
//                   geometry={nodes.icon39.geometry}
//                   material={materials["icon39 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F139"
//                   geometry={nodes.F139.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@39"
//                   geometry={nodes["@39"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+39"
//                   geometry={nodes["+39"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=39"
//                   geometry={nodes["=39"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number39"
//                   geometry={nodes.number39.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 339"
//                   geometry={nodes["Text 339"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base39"
//                   geometry={nodes["key-base39"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 4"
//                 position={[-15.92, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle41"
//                   geometry={nodes.Triangle41.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon40"
//                   geometry={nodes.icon40.geometry}
//                   material={materials["icon40 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F140"
//                   geometry={nodes.F140.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@40"
//                   geometry={nodes["@40"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+40"
//                   geometry={nodes["+40"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=40"
//                   geometry={nodes["=40"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number40"
//                   geometry={nodes.number40.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 340"
//                   geometry={nodes["Text 340"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base40"
//                   geometry={nodes["key-base40"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 155"
//                 position={[-56.57, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle42"
//                   geometry={nodes.Triangle42.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon41"
//                   geometry={nodes.icon41.geometry}
//                   material={materials["icon41 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F141"
//                   geometry={nodes.F141.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@41"
//                   geometry={nodes["@41"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+41"
//                   geometry={nodes["+41"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=41"
//                   geometry={nodes["=41"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number41"
//                   geometry={nodes.number41.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 341"
//                   geometry={nodes["Text 341"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base41"
//                   geometry={nodes["key-base41"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 125"
//                 position={[-41.23, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle43"
//                   geometry={nodes.Triangle43.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon42"
//                   geometry={nodes.icon42.geometry}
//                   material={materials["icon42 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F142"
//                   geometry={nodes.F142.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@42"
//                   geometry={nodes["@42"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+42"
//                   geometry={nodes["+42"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=42"
//                   geometry={nodes["=42"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number42"
//                   geometry={nodes.number42.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 342"
//                   geometry={nodes["Text 342"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base42"
//                   geometry={nodes["key-base42"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 104"
//                 position={[-32.11, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle44"
//                   geometry={nodes.Triangle44.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon43"
//                   geometry={nodes.icon43.geometry}
//                   material={materials["icon43 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F143"
//                   geometry={nodes.F143.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@43"
//                   geometry={nodes["@43"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+43"
//                   geometry={nodes["+43"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=43"
//                   geometry={nodes["=43"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number43"
//                   geometry={nodes.number43.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 343"
//                   geometry={nodes["Text 343"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base43"
//                   geometry={nodes["key-base43"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 3"
//                 position={[-47.71, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle45"
//                   geometry={nodes.Triangle45.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon44"
//                   geometry={nodes.icon44.geometry}
//                   material={materials["icon44 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F144"
//                   geometry={nodes.F144.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@44"
//                   geometry={nodes["@44"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+44"
//                   geometry={nodes["+44"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=44"
//                   geometry={nodes["=44"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number44"
//                   geometry={nodes.number44.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 344"
//                   geometry={nodes["Text 344"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base44"
//                   geometry={nodes["key-base44"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 156"
//                 position={[-88.19, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle46"
//                   geometry={nodes.Triangle46.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon45"
//                   geometry={nodes.icon45.geometry}
//                   material={materials["icon45 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F145"
//                   geometry={nodes.F145.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@45"
//                   geometry={nodes["@45"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+45"
//                   geometry={nodes["+45"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=45"
//                   geometry={nodes["=45"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number45"
//                   geometry={nodes.number45.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 345"
//                   geometry={nodes["Text 345"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base45"
//                   geometry={nodes["key-base45"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 126"
//                 position={[-72.84, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle47"
//                   geometry={nodes.Triangle47.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon46"
//                   geometry={nodes.icon46.geometry}
//                   material={materials["icon46 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F146"
//                   geometry={nodes.F146.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@46"
//                   geometry={nodes["@46"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+46"
//                   geometry={nodes["+46"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=46"
//                   geometry={nodes["=46"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number46"
//                   geometry={nodes.number46.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 346"
//                   geometry={nodes["Text 346"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base46"
//                   geometry={nodes["key-base46"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 105"
//                 position={[-63.73, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle48"
//                   geometry={nodes.Triangle48.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon47"
//                   geometry={nodes.icon47.geometry}
//                   material={materials["icon47 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F147"
//                   geometry={nodes.F147.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@47"
//                   geometry={nodes["@47"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+47"
//                   geometry={nodes["+47"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=47"
//                   geometry={nodes["=47"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number47"
//                   geometry={nodes.number47.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 347"
//                   geometry={nodes["Text 347"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base47"
//                   geometry={nodes["key-base47"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 2"
//                 position={[-79.33, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle49"
//                   geometry={nodes.Triangle49.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon48"
//                   geometry={nodes.icon48.geometry}
//                   material={materials["icon48 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F148"
//                   geometry={nodes.F148.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@48"
//                   geometry={nodes["@48"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+48"
//                   geometry={nodes["+48"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=48"
//                   geometry={nodes["=48"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number48"
//                   geometry={nodes.number48.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 348"
//                   geometry={nodes["Text 348"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base48"
//                   geometry={nodes["key-base48"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 157"
//                 position={[-119.89, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle50"
//                   geometry={nodes.Triangle50.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon49"
//                   geometry={nodes.icon49.geometry}
//                   material={materials["icon49 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F149"
//                   geometry={nodes.F149.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@49"
//                   geometry={nodes["@49"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+49"
//                   geometry={nodes["+49"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=49"
//                   geometry={nodes["=49"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number49"
//                   geometry={nodes.number49.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 349"
//                   geometry={nodes["Text 349"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base49"
//                   geometry={nodes["key-base49"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 127"
//                 position={[-104.55, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle51"
//                   geometry={nodes.Triangle51.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon50"
//                   geometry={nodes.icon50.geometry}
//                   material={materials["icon50 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F150"
//                   geometry={nodes.F150.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@50"
//                   geometry={nodes["@50"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+50"
//                   geometry={nodes["+50"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=50"
//                   geometry={nodes["=50"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number50"
//                   geometry={nodes.number50.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 350"
//                   geometry={nodes["Text 350"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base50"
//                   geometry={nodes["key-base50"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 106"
//                 position={[-95.43, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle52"
//                   geometry={nodes.Triangle52.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon51"
//                   geometry={nodes.icon51.geometry}
//                   material={materials["icon51 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F151"
//                   geometry={nodes.F151.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@51"
//                   geometry={nodes["@51"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+51"
//                   geometry={nodes["+51"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=51"
//                   geometry={nodes["=51"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number51"
//                   geometry={nodes.number51.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 351"
//                   geometry={nodes["Text 351"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base51"
//                   geometry={nodes["key-base51"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 45"
//                 position={[215.31, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle53"
//                   geometry={nodes.Triangle53.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon52"
//                   geometry={nodes.icon52.geometry}
//                   material={materials["icon52 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F152"
//                   geometry={nodes.F152.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@52"
//                   geometry={nodes["@52"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+52"
//                   geometry={nodes["+52"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=52"
//                   geometry={nodes["=52"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number52"
//                   geometry={nodes.number52.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 352"
//                   geometry={nodes["Text 352"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base52"
//                   geometry={nodes["key-base52"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[-0.2, 12.2, 6.73]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 47"
//                 position={[182.84, -1.01, 77.71]}
//                 rotation={[-Math.PI, 0, -Math.PI]}
//               >
//                 <mesh
//                   name="Triangle54"
//                   geometry={nodes.Triangle54.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI]}
//                 />
//                 <mesh
//                   name="icon53"
//                   geometry={nodes.icon53.geometry}
//                   material={materials["icon53 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F153"
//                   geometry={nodes.F153.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@53"
//                   geometry={nodes["@53"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+53"
//                   geometry={nodes["+53"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=53"
//                   geometry={nodes["=53"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number53"
//                   geometry={nodes.number53.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 353"
//                   geometry={nodes["Text 353"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base53"
//                   geometry={nodes["key-base53"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[-0.2, 12.2, 6.73]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 46"
//                 position={[182.84, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle55"
//                   geometry={nodes.Triangle55.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI]}
//                 />
//                 <mesh
//                   name="icon54"
//                   geometry={nodes.icon54.geometry}
//                   material={materials["icon54 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F154"
//                   geometry={nodes.F154.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@54"
//                   geometry={nodes["@54"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+54"
//                   geometry={nodes["+54"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=54"
//                   geometry={nodes["=54"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number54"
//                   geometry={nodes.number54.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 354"
//                   geometry={nodes["Text 354"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base54"
//                   geometry={nodes["key-base54"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[-0.2, 12.2, 6.73]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 44"
//                 position={[151.66, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle56"
//                   geometry={nodes.Triangle56.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon55"
//                   geometry={nodes.icon55.geometry}
//                   material={materials["icon55 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F155"
//                   geometry={nodes.F155.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@55"
//                   geometry={nodes["@55"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+55"
//                   geometry={nodes["+55"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=55"
//                   geometry={nodes["=55"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number55"
//                   geometry={nodes.number55.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 355"
//                   geometry={nodes["Text 355"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base55"
//                   geometry={nodes["key-base55"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[-0.2, 12.2, 6.73]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 43"
//                 position={[120.86, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle57"
//                   geometry={nodes.Triangle57.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon56"
//                   geometry={nodes.icon56.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[-6.9, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F156"
//                   geometry={nodes.F156.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-0.09, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@56"
//                   geometry={nodes["@56"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+56"
//                   geometry={nodes["+56"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=56"
//                   geometry={nodes["=56"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number56"
//                   geometry={nodes.number56.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 356"
//                   geometry={nodes["Text 356"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base56"
//                   geometry={nodes["key-base56"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 40"
//                 position={[-152.11, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle58"
//                   geometry={nodes.Triangle58.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon57"
//                   geometry={nodes.icon57.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[7.25, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F157"
//                   geometry={nodes.F157.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-1.85, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@57"
//                   geometry={nodes["@57"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+57"
//                   geometry={nodes["+57"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=57"
//                   geometry={nodes["=57"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number57"
//                   geometry={nodes.number57.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 357"
//                   geometry={nodes["Text 357"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base57"
//                   geometry={nodes["key-base57"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 41"
//                 position={[-215.33, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle59"
//                   geometry={nodes.Triangle59.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon58"
//                   geometry={nodes.icon58.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[-7.96, 16.78, 6.35]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F158"
//                   geometry={nodes.F158.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-1.85, 15.43, -7.25]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@58"
//                   geometry={nodes["@58"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+58"
//                   geometry={nodes["+58"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=58"
//                   geometry={nodes["=58"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number58"
//                   geometry={nodes.number58.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 358"
//                   geometry={nodes["Text 358"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base58"
//                   geometry={nodes["key-base58"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 39"
//                 position={[-184.03, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle60"
//                   geometry={nodes.Triangle60.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon59"
//                   geometry={nodes.icon59.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[7.25, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F159"
//                   geometry={nodes.F159.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-1.85, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@59"
//                   geometry={nodes["@59"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+59"
//                   geometry={nodes["+59"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=59"
//                   geometry={nodes["=59"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number59"
//                   geometry={nodes.number59.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 359"
//                   geometry={nodes["Text 359"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base59"
//                   geometry={nodes["key-base59"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 42"
//                 position={[-77.83, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle61"
//                   geometry={nodes.Triangle61.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon60"
//                   geometry={nodes.icon60.geometry}
//                   material={materials["icon60 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F160"
//                   geometry={nodes.F160.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@60"
//                   geometry={nodes["@60"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+60"
//                   geometry={nodes["+60"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=60"
//                   geometry={nodes["=60"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number60"
//                   geometry={nodes.number60.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 360"
//                   geometry={nodes["Text 360"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base60"
//                   geometry={nodes["key-base60"].geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[62.55, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 431"
//                 position={[87.2, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle62"
//                   geometry={nodes.Triangle62.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon61"
//                   geometry={nodes.icon61.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[-14.54, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F161"
//                   geometry={nodes.F161.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-3.78, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@61"
//                   geometry={nodes["@61"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+61"
//                   geometry={nodes["+61"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=61"
//                   geometry={nodes["=61"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number61"
//                   geometry={nodes.number61.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 361"
//                   geometry={nodes["Text 361"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base61"
//                   geometry={nodes["key-base61"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[-3.92, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 38"
//                 position={[-111.04, -0.78, 77.93]}
//               >
//                 <mesh
//                   name="Triangle63"
//                   geometry={nodes.Triangle63.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon62"
//                   geometry={nodes.icon62.geometry}
//                   material={materials[""]}
//                   castShadow
//                   receiveShadow
//                   position={[7.25, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F162"
//                   geometry={nodes.F162.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-1.85, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@62"
//                   geometry={nodes["@62"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+62"
//                   geometry={nodes["+62"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=62"
//                   geometry={nodes["=62"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number62"
//                   geometry={nodes.number62.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 362"
//                   geometry={nodes["Text 362"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base62"
//                   geometry={nodes["key-base62"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[-3.92, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance"
//                 position={[-111.04, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle64"
//                   geometry={nodes.Triangle64.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon63"
//                   geometry={nodes.icon63.geometry}
//                   material={materials["icon63 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F163"
//                   geometry={nodes.F163.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@63"
//                   geometry={nodes["@63"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+63"
//                   geometry={nodes["+63"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=63"
//                   geometry={nodes["=63"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number63"
//                   geometry={nodes.number63.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 363"
//                   geometry={nodes["Text 363"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base63"
//                   geometry={nodes["key-base63"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 24"
//                 position={[-215.33, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle65"
//                   geometry={nodes.Triangle65.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon64"
//                   geometry={nodes.icon64.geometry}
//                   material={materials["icon64 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F164"
//                   geometry={nodes.F164.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@64"
//                   geometry={nodes["@64"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+64"
//                   geometry={nodes["+64"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=64"
//                   geometry={nodes["=64"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number64"
//                   geometry={nodes.number64.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 364"
//                   geometry={nodes["Text 364"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base64"
//                   geometry={nodes["key-base64"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 158"
//                 position={[-183.39, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle66"
//                   geometry={nodes.Triangle66.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon65"
//                   geometry={nodes.icon65.geometry}
//                   material={materials["icon65 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F165"
//                   geometry={nodes.F165.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@65"
//                   geometry={nodes["@65"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+65"
//                   geometry={nodes["+65"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=65"
//                   geometry={nodes["=65"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number65"
//                   geometry={nodes.number65.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 365"
//                   geometry={nodes["Text 365"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base65"
//                   geometry={nodes["key-base65"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 26"
//                 position={[-215.33, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle67"
//                   geometry={nodes.Triangle67.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon66"
//                   geometry={nodes.icon66.geometry}
//                   material={materials["icon66 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F166"
//                   geometry={nodes.F166.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@66"
//                   geometry={nodes["@66"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+66"
//                   geometry={nodes["+66"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=66"
//                   geometry={nodes["=66"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[4.14, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number66"
//                   geometry={nodes.number66.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 366"
//                   geometry={nodes["Text 366"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base66"
//                   geometry={nodes["key-base66"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[11.97, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 27"
//                 position={[-215.33, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle68"
//                   geometry={nodes.Triangle68.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon67"
//                   geometry={nodes.icon67.geometry}
//                   material={materials["icon67 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F167"
//                   geometry={nodes.F167.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@67"
//                   geometry={nodes["@67"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+67"
//                   geometry={nodes["+67"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=67"
//                   geometry={nodes["=67"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[-3.77, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number67"
//                   geometry={nodes.number67.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 367"
//                   geometry={nodes["Text 367"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base67"
//                   geometry={nodes["key-base67"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[19.83, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 37"
//                 position={[197.53, -0.78, 46.98]}
//               >
//                 <mesh
//                   name="Triangle69"
//                   geometry={nodes.Triangle69.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon68"
//                   geometry={nodes.icon68.geometry}
//                   material={materials["icon68 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F168"
//                   geometry={nodes.F168.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@68"
//                   geometry={nodes["@68"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+68"
//                   geometry={nodes["+68"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=68"
//                   geometry={nodes["=68"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[9.07, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number68"
//                   geometry={nodes.number68.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 368"
//                   geometry={nodes["Text 368"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base68"
//                   geometry={nodes["key-base68"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[-3.45, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 36"
//                 position={[197.53, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle70"
//                   geometry={nodes.Triangle70.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon69"
//                   geometry={nodes.icon69.geometry}
//                   material={materials["icon69 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F169"
//                   geometry={nodes.F169.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@69"
//                   geometry={nodes["@69"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+69"
//                   geometry={nodes["+69"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=69"
//                   geometry={nodes["=69"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[9.07, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number69"
//                   geometry={nodes.number69.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 369"
//                   geometry={nodes["Text 369"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base69"
//                   geometry={nodes["key-base69"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[4.08, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 35"
//                 position={[197.53, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle71"
//                   geometry={nodes.Triangle71.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon70"
//                   geometry={nodes.icon70.geometry}
//                   material={materials["icon70 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F170"
//                   geometry={nodes.F170.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@70"
//                   geometry={nodes["@70"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+70"
//                   geometry={nodes["+70"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=70"
//                   geometry={nodes["=70"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[9.07, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number70"
//                   geometry={nodes.number70.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 370"
//                   geometry={nodes["Text 370"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base70"
//                   geometry={nodes["key-base70"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[7.55, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 34"
//                 position={[-215.33, -0.78, -77.05]}
//               >
//                 <mesh
//                   name="Triangle72"
//                   geometry={nodes.Triangle72.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon71"
//                   geometry={nodes.icon71.geometry}
//                   material={materials["icon71 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F171"
//                   geometry={nodes.F171.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@71"
//                   geometry={nodes["@71"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+71"
//                   geometry={nodes["+71"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=71"
//                   geometry={nodes["=71"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0.66, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number71"
//                   geometry={nodes.number71.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 371"
//                   geometry={nodes["Text 371"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base71"
//                   geometry={nodes["key-base71"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[7.55, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 25"
//                 position={[-215.33, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle73"
//                   geometry={nodes.Triangle73.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon72"
//                   geometry={nodes.icon72.geometry}
//                   material={materials["icon72 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F172"
//                   geometry={nodes.F172.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@72"
//                   geometry={nodes["@72"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+72"
//                   geometry={nodes["+72"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=72"
//                   geometry={nodes["=72"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[6.93, 15.43, 6.34]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number72"
//                   geometry={nodes.number72.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 372"
//                   geometry={nodes["Text 372"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base72"
//                   geometry={nodes["key-base72"].geometry}
//                   material={materials["keyboard-2"]}
//                   castShadow
//                   receiveShadow
//                   position={[7.55, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 128"
//                 position={[-168.05, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle74"
//                   geometry={nodes.Triangle74.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon73"
//                   geometry={nodes.icon73.geometry}
//                   material={materials["icon73 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F173"
//                   geometry={nodes.F173.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@73"
//                   geometry={nodes["@73"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+73"
//                   geometry={nodes["+73"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=73"
//                   geometry={nodes["=73"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number73"
//                   geometry={nodes.number73.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 373"
//                   geometry={nodes["Text 373"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base73"
//                   geometry={nodes["key-base73"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 11"
//                 position={[-158.93, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle75"
//                   geometry={nodes.Triangle75.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon74"
//                   geometry={nodes.icon74.geometry}
//                   material={materials["icon74 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F174"
//                   geometry={nodes.F174.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@74"
//                   geometry={nodes["@74"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+74"
//                   geometry={nodes["+74"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=74"
//                   geometry={nodes["=74"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number74"
//                   geometry={nodes.number74.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 374"
//                   geometry={nodes["Text 374"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base74"
//                   geometry={nodes["key-base74"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 159"
//                 position={[-151.71, -0.78, -46.6]}
//               >
//                 <mesh
//                   name="Triangle76"
//                   geometry={nodes.Triangle76.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon75"
//                   geometry={nodes.icon75.geometry}
//                   material={materials["icon75 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F175"
//                   geometry={nodes.F175.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@75"
//                   geometry={nodes["@75"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+75"
//                   geometry={nodes["+75"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=75"
//                   geometry={nodes["=75"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number75"
//                   geometry={nodes.number75.geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 375"
//                   geometry={nodes["Text 375"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base75"
//                   geometry={nodes["key-base75"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 129"
//                 position={[-136.37, -0.78, -15.89]}
//               >
//                 <mesh
//                   name="Triangle77"
//                   geometry={nodes.Triangle77.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon76"
//                   geometry={nodes.icon76.geometry}
//                   material={materials["icon76 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F176"
//                   geometry={nodes.F176.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@76"
//                   geometry={nodes["@76"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+76"
//                   geometry={nodes["+76"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=76"
//                   geometry={nodes["=76"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number76"
//                   geometry={nodes.number76.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 376"
//                   geometry={nodes["Text 376"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base76"
//                   geometry={nodes["key-base76"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <group
//                 name="Component Instance 107"
//                 position={[-127.25, -0.78, 16.01]}
//               >
//                 <mesh
//                   name="Triangle78"
//                   geometry={nodes.Triangle78.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[-0.32, 15.46, 6.77]}
//                   rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//                 />
//                 <mesh
//                   name="icon77"
//                   geometry={nodes.icon77.geometry}
//                   material={materials["icon77 Material"]}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.37, 16.78, -6.2]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="F177"
//                   geometry={nodes.F177.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0.07, 15.43, 6.07]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="@77"
//                   geometry={nodes["@77"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -6.05]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="+77"
//                   geometry={nodes["+77"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, -5.94]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="=77"
//                   geometry={nodes["=77"].geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="number77"
//                   geometry={nodes.number77.geometry}
//                   material={materials.white}
//                   visible={false}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.43, 4.55]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="Text 377"
//                   geometry={nodes["Text 377"].geometry}
//                   material={materials.white}
//                   castShadow
//                   receiveShadow
//                   position={[0, 15.58, -0.27]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                   name="key-base77"
//                   geometry={nodes["key-base77"].geometry}
//                   material={materials.keyboard}
//                   castShadow
//                   receiveShadow
//                   position={[0, 12.2, 0]}
//                   rotation={[-Math.PI / 2, 0, 0]}
//                   scale={0.39}
//                 />
//               </group>
//               <mesh
//                 name="Torus1"
//                 geometry={nodes.Torus1.geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[212.55, 13.76, -77.55]}
//                 rotation={[-Math.PI / 2, 0, 0]}
//                 scale={0.46}
//               />
//               <mesh
//                 name="keyboard1"
//                 geometry={nodes.keyboard1.geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0, 11.95, 0]}
//                 rotation={[-Math.PI / 2, 0, 0]}
//                 scale={[0.39, 0.39, 0.85]}
//               />
//             </group>
//             <group name="audio" position={[0.64, 6.98, -61.88]}>
//               <mesh
//                 name="Rectangle 4"
//                 geometry={nodes["Rectangle 4"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[251.47, 0, 0]}
//                 rotation={[-Math.PI / 2, 0, -Math.PI]}
//               />
//               <mesh
//                 name="Rectangle 31"
//                 geometry={nodes["Rectangle 31"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[-251.27, 0, 0]}
//                 rotation={[-Math.PI / 2, 0, -Math.PI]}
//               />
//             </group>
//             <group
//               name="button_right1"
//               position={[270.11, -0.84, -89.59]}
//               rotation={[0, 0, 0]}
//               scale={0.39}
//             >
//               <mesh
//                 name="Rectangle 9"
//                 geometry={nodes["Rectangle 9"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[-2.05, -20.27, 425.43]}
//                 rotation={[Math.PI / 2, 1.28, -Math.PI / 2]}
//                 scale={1}
//               />
//               <mesh
//                 name="Rectangle 10"
//                 geometry={nodes["Rectangle 10"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0, 0, -105.07]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//               <mesh
//                 name="Rectangle 91"
//                 geometry={nodes["Rectangle 91"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0, 2.5, -26.07]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//               <mesh
//                 name="Rectangle 8"
//                 geometry={nodes["Rectangle 8"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0, 2.94, 79.57]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//             </group>
//             <group
//               name="button_left1"
//               position={[-270.11, -0.27, -98.47]}
//               rotation={[-Math.PI, 0, -Math.PI]}
//               scale={0.39}
//             >
//               <mesh
//                 name="Rectangle 81"
//                 geometry={nodes["Rectangle 81"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[-1.38, -18.91, -448.11]}
//                 rotation={[Math.PI / 2, 1.23, -Math.PI / 2]}
//                 scale={1}
//               />
//               <mesh
//                 name="Rectangle 32"
//                 geometry={nodes["Rectangle 32"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0.77, 1.08, 84]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//               <mesh
//                 name="Ellipse2"
//                 geometry={nodes.Ellipse2.geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0.48, -0.08, -113.5]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//               <mesh
//                 name="Rectangle 6"
//                 geometry={nodes["Rectangle 6"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0.48, 0.57, -58.94]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//               <mesh
//                 name="Rectangle 5"
//                 geometry={nodes["Rectangle 5"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0.48, 0.57, 5.16]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//               <mesh
//                 name="Rectangle 41"
//                 geometry={nodes["Rectangle 41"].geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[0.48, 1.08, 84]}
//                 rotation={[0, Math.PI / 2, 0]}
//               />
//             </group>
//             <mesh
//               name="connector"
//               geometry={nodes.connector.geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[0, -5.62, -188.2]}
//               rotation={[0, 0, 0]}
//               scale={0.81}
//             />
//             <mesh
//               name="Cube4"
//               geometry={nodes.Cube4.geometry}
//               material={materials.black}
//               castShadow
//               receiveShadow
//               position={[0, 1.19, -185.77]}
//               rotation={[0, 0, 0]}
//               scale={0.81}
//             />
//             <group
//               name="trackpad"
//               position={[23.69, 7.75, 128.23]}
//               rotation={[0, 0, 0]}
//               scale={0.39}
//             >
//               <mesh
//                 name="trackpad_top"
//                 geometry={nodes.trackpad_top.geometry}
//                 material={materials.Metal}
//                 castShadow
//                 receiveShadow
//                 position={[-61.19, -1.67, -41.26]}
//                 rotation={[-Math.PI / 2, 0, 0]}
//                 scale={[0.83, 0.83, 5]}
//               />
//               <mesh
//                 name="trackpad_border"
//                 geometry={nodes.trackpad_border.geometry}
//                 material={materials.black}
//                 castShadow
//                 receiveShadow
//                 position={[-61.19, -2.48, -41.26]}
//                 rotation={[-Math.PI / 2, 0, 0]}
//                 scale={[0.83, 0.83, 5]}
//               />
//             </group>
//             <mesh
//               name="base1"
//               geometry={nodes.base1.geometry}
//               material={materials.Metal}
//               castShadow
//               receiveShadow
//               position={[24.25, -3.33, 69.6]}
//               rotation={[0, 0, 0]}
//               scale={0.39}
//             />
//             <group
//               name="feet"
//               position={[1.74, -12.91, 21.25]}
//               rotation={[0, 0, 0]}
//               scale={0.39}
//             >
//               <group name="Group" position={[0, -3.2, -42.82]}>
//                 <mesh
//                   name="Subdiv 3"
//                   geometry={nodes["Subdiv 3"].geometry}
//                   material={materials.black}
//                   castShadow
//                   receiveShadow
//                   position={[466.78, 0.56, -369.64]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1, 1.05, 1.03]}
//                 />
//                 <mesh
//                   name="Subdiv 31"
//                   geometry={nodes["Subdiv 31"].geometry}
//                   material={materials.black}
//                   castShadow
//                   receiveShadow
//                   position={[-464, -0.56, -369.57]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1, 1.05, 1.03]}
//                 />
//                 <mesh
//                   name="Subdiv 2"
//                   geometry={nodes["Subdiv 2"].geometry}
//                   material={materials.black}
//                   castShadow
//                   receiveShadow
//                   position={[466.78, 0.56, 369.64]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1, 1.05, 1.03]}
//                 />
//                 <mesh
//                   name="Cylinder3"
//                   geometry={nodes.Cylinder3.geometry}
//                   material={materials.black}
//                   castShadow
//                   receiveShadow
//                   position={[-466.78, 0.56, 369.64]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1, 1.05, 1.03]}
//                 />
//               </group>
//               <group name="Group 2" position={[0, 3.41, -42.84]}>
//                 <mesh
//                   name="Subdiv 32"
//                   geometry={nodes["Subdiv 32"].geometry}
//                   material={materials.Metal}
//                   castShadow
//                   receiveShadow
//                   position={[466.78, 0.01, -369.62]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1.09, 1.15, 1.13]}
//                 />
//                 <mesh
//                   name="Subdiv 33"
//                   geometry={nodes["Subdiv 33"].geometry}
//                   material={materials.Metal}
//                   castShadow
//                   receiveShadow
//                   position={[-466.78, 0.01, -369.62]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1.09, 1.15, 1.13]}
//                 />
//                 <mesh
//                   name="Subdiv 21"
//                   geometry={nodes["Subdiv 21"].geometry}
//                   material={materials.Metal}
//                   castShadow
//                   receiveShadow
//                   position={[466.78, 0.01, 369.67]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1.09, 1.15, 1.13]}
//                 />
//                 <mesh
//                   name="Subdiv"
//                   geometry={nodes.Subdiv.geometry}
//                   material={materials.Metal}
//                   castShadow
//                   receiveShadow
//                   position={[-466.78, 0.01, 369.67]}
//                   rotation={[0, 0, -Math.PI]}
//                   scale={[-1.09, 1.15, 1.13]}
//                 />
//               </group>
//             </group>
//           </group>
//         </group>
//         <group
//           name="table_large"
//           position={[268.47, 11.59, -291.28]}
//           scale={[0.75, 0.68, 0.64]}
//         >
//           <mesh
//             name="Cube 44"
//             geometry={nodes["Cube 44"].geometry}
//             material={materials.light_brown}
//             castShadow
//             receiveShadow
//             position={[217.73, 101.01, -118.31]}
//             scale={[1.36, 1.36, 1.41]}
//           />
//           <mesh
//             name="Cube 34"
//             geometry={nodes["Cube 34"].geometry}
//             material={materials.light_brown}
//             castShadow
//             receiveShadow
//             position={[217.73, 101.01, 118.53]}
//             scale={[1.36, 1.36, 1.41]}
//           />
//           <mesh
//             name="Cube 45"
//             geometry={nodes["Cube 45"].geometry}
//             material={materials.light_brown}
//             castShadow
//             receiveShadow
//             position={[-208.82, 101.01, -118.31]}
//             scale={[1.36, 1.36, 1.41]}
//           />
//           <mesh
//             name="Cube 27"
//             geometry={nodes["Cube 27"].geometry}
//             material={materials.light_brown}
//             castShadow
//             receiveShadow
//             position={[-208.82, 101.01, 118.53]}
//             scale={[1.36, 1.36, 1.41]}
//           />
//           <mesh
//             name="Cube5"
//             geometry={nodes.Cube5.geometry}
//             material={materials.light_brown}
//             castShadow
//             receiveShadow
//             position={[0, 213.31, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={[1, 1.58, 1]}
//           />
//         </group>
//         <group name="Bed" position={[-165.24, 0, 109.42]}>
//           <group
//             name="Component Instance1"
//             position={[-192.85, 70.88, 0.47]}
//             scale={0.71}
//           >
//             <mesh
//               name="Cylinder 21"
//               geometry={nodes["Cylinder 21"].geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[0.31, -71.99, -125.82]}
//             />
//             <mesh
//               name="Cylinder4"
//               geometry={nodes.Cylinder4.geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[0.31, -71.99, 132.57]}
//             />
//             <mesh
//               name="Rectangle2"
//               geometry={nodes.Rectangle2.geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[-15, 51.17, 0]}
//               rotation={[0, Math.PI / 2, 0]}
//               scale={[1, 2.21, 1]}
//             />
//           </group>
//           <group
//             name="Component1"
//             position={[168.23, 70.88, 0.47]}
//             scale={0.71}
//           >
//             <mesh
//               name="Cylinder 22"
//               geometry={nodes["Cylinder 22"].geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[0.31, -71.99, -125.82]}
//             />
//             <mesh
//               name="Cylinder5"
//               geometry={nodes.Cylinder5.geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[0.31, -71.99, 132.57]}
//             />
//             <mesh
//               name="Rectangle3"
//               geometry={nodes.Rectangle3.geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[-15, 1.22, 0]}
//               rotation={[0, Math.PI / 2, 0]}
//             />
//           </group>
//           <group name="body" position={[-13.03, 78.06, 0]} scale={0.71}>
//             <mesh
//               name="Subdiv 22"
//               geometry={nodes["Subdiv 22"].geometry}
//               material={materials.yellow}
//               castShadow
//               receiveShadow
//               position={[-121.94, 68.96, -10.02]}
//               rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//               scale={[1.85, 1.55, 1.91]}
//             />
//             <mesh
//               name="blanket"
//               geometry={nodes.blanket.geometry}
//               material={materials.yellow}
//               castShadow
//               receiveShadow
//               position={[-32.5, 66.13, -10.02]}
//               rotation={[-Math.PI / 2, 0, Math.PI / 2]}
//               scale={[1.74, 1.53, 1.89]}
//             />
//             <mesh
//               name="pillow"
//               geometry={nodes.pillow.geometry}
//               material={materials.white}
//               castShadow
//               receiveShadow
//               position={[-185.06, 35, 0.29]}
//               rotation={[Math.PI, -Math.PI / 2, 0]}
//               scale={[1.98, 1.98, 0.65]}
//             />
//             <mesh
//               name="basebed 2"
//               geometry={nodes["basebed 2"].geometry}
//               material={materials.white}
//               castShadow
//               receiveShadow
//               position={[0, -1.19, 0.29]}
//               rotation={[0, Math.PI / 2, 0]}
//             />
//             <mesh
//               name="basebed"
//               geometry={nodes.basebed.geometry}
//               material={materials.wood}
//               castShadow
//               receiveShadow
//               position={[0, -38.65, 0.29]}
//               rotation={[0, Math.PI / 2, 0]}
//             />
//           </group>
//         </group>
//         <mesh
//           name="dinding"
//           geometry={nodes.dinding.geometry}
//           material={materials["dinding Material"]}
//           castShadow
//           receiveShadow
//           position={[-444.34, 249.56, -55.14]}
//           rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//           scale={[1.06, 1, 1.47]}
//         />
//         <directionalLight
//           name="Directional Light"
//           castShadow
//           intensity={0.7}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-near={-10000}
//           shadow-camera-far={100000}
//           shadow-camera-left={-1000}
//           shadow-camera-right={1000}
//           shadow-camera-top={1000}
//           shadow-camera-bottom={-1000}
//           color="#9fa6c6"
//           position={[323, 734.13, 32.93]}
//         />
//         <OrthographicCamera
//           name="1"
//           makeDefault={true}
//           zoom={0.25}
//           far={100000}
//           near={-100000}
//           position={[1579.77, 2689.16, 2172.37]}
//           rotation={[-0.83, 0.43, 0.43]}
//           scale={1}
//         />
//         <hemisphereLight
//           name="Default Ambient Light"
//           intensity={0.75}
//           color="#eaeaea"
//         />
//       </group>
//     </>
//   );
// }
