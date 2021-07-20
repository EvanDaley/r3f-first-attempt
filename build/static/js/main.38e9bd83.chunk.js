(this["webpackJsonpr3f-template"]=this["webpackJsonpr3f-template"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var i=n(7),r=n.n(i),o=n(34),a=n.n(o),c=(n(44),n(45),n(10)),s=n(52),l=n(54),j=n(1),d=n(12),b=n(8),h=window.location.href+"/models/Robot.glb";function u(e){var t={clearcoat:1,clearcoatRoughness:0,metalness:.65,roughness:.3,color:"blue",normalMap:Object(s.a)(window.location.href+"/images/flakes.png"),normalScale:[.3,.3],"normalMap-wrapS":j.RepeatWrapping,"normalMap-wrapT":j.RepeatWrapping,"normalMap-repeat":[30,30],"normalMap-anisotropy":16,transmission:.6,transparent:!0},n=Object(i.useRef)(),r=Object(l.a)(h),o=r.nodes,a=r.materials,u=Object(i.useMemo)((function(){return new j.EdgesGeometry(o.Cube001_1.geometry)}),[o]),m=Object(i.useMemo)((function(){return new j.EdgesGeometry(o.Cube001_2.geometry)}),[o]),x=Object(i.useMemo)((function(){return new j.EdgesGeometry(o.Cube001_3.geometry)}),[o]),g=Object(i.useMemo)((function(){return new j.EdgesGeometry(o.Cube001_3.geometry)}),[o]);return Object(d.b)((function(){null!=n.current&&(n.current.rotation.y=n.current.rotation.y+=.01)})),Object(b.jsxs)("group",Object(c.a)(Object(c.a)({ref:n},e),{},{dispose:null,children:[Object(b.jsxs)("group",{position:[0,.85,0],children:[Object(b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube001_1.geometry,material:a.Mat1}),Object(b.jsx)("lineSegments",{geometry:u,children:Object(b.jsx)("lineBasicMaterial",{color:"black"})}),Object(b.jsx)("lineSegments",{geometry:m,children:Object(b.jsx)("lineBasicMaterial",{color:"black"})}),Object(b.jsx)("lineSegments",{geometry:x,children:Object(b.jsx)("lineBasicMaterial",{color:"black"})}),Object(b.jsx)("lineSegments",{geometry:g,children:Object(b.jsx)("lineBasicMaterial",{color:"black"})}),Object(b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube001_2.geometry,material:a.Mat2}),Object(b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube001_3.geometry,material:a.Mat3}),Object(b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube001_3.geometry,material:a.Mat3,children:Object(b.jsx)("meshPhysicalMaterial",Object(c.a)(Object(c.a)({},t),{},{side:j.BackSide}))}),Object(b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube001_4.geometry,material:a.Mat4})]}),Object(b.jsx)("mesh",{castShadow:!0,receiveShadow:!0,geometry:o.Cube002.geometry,material:a["Material.001"],position:[0,.85,.03],children:Object(b.jsx)("meshPhysicalMaterial",Object(c.a)(Object(c.a)({},t),{},{side:j.BackSide,transmission:.9}))})]}))}l.a.preload(h);var m=n(56),x=n(53),g=n(55);var p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{colorManagement:!0,invalidateFrameloop:!0,pixelRatio:[1,2],children:[Object(b.jsx)(m.a,{makeDefault:!0,position:[1,6,10]}),Object(b.jsx)("directionalLight",{position:[-10,-10,-5],intensity:1}),Object(b.jsx)("ambientLight",{}),Object(b.jsx)("pointLight",{position:[10,10,10]}),Object(b.jsx)(i.Suspense,{fallback:null,children:Object(b.jsx)(x.a,{adjustCamera:!1,environment:"sunset",intensity:.5,contactShadow:!0,shadows:!0,children:Object(b.jsx)(u,{})})}),Object(b.jsx)(g.a,{target:[0,1,0]})]})})},O=n(13),y=n(39);function f(e){var t=e.setSelection,n={position:"relative",top:"25%",width:"100%",textAlign:"center",marginTop:"48px",fontSize:"40px"},i={color:"white",fontSize:"40px",background:"none",border:"none",padding:"0!important",fontFamily:"arial, sans-serif",textDecoration:"none",cursor:"pointer"};return Object(b.jsx)("div",{style:{pointerEvents:"auto",height:"100%",width:"100%",position:"fixed",zIndex:"1",top:"0",left:"0",backgroundImage:"linear-gradient(90deg, #134E5E 10%, #71B280 90%)",overflowX:"hidden",transition:"0.1s"},children:Object(b.jsx)("div",{style:n,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("ol",{style:n,children:Object(b.jsx)("button",{style:i,onClick:function(){return t("home")},children:"Home"})}),Object(b.jsx)("ol",{style:n,children:Object(b.jsx)("button",{style:i,onClick:function(){return t("about-me")},children:"About Me"})}),Object(b.jsx)("ol",{style:n,children:Object(b.jsx)("button",{style:i,onClick:function(){return t("get-in-touch")},children:"Get in Touch"})})]})})})}function w(){return Object(b.jsx)("div",{style:{pointerEvents:"auto",height:"100%",width:"100%",position:"fixed",zIndex:"1",top:"0",left:"0",backgroundColor:"black",color:"white",overflowX:"hidden",transition:"0.1s"},children:Object(b.jsxs)("div",{style:{display:"flex",position:"relative",top:"25%",width:"100%",textAlign:"left",marginTop:"48px",fontSize:"25px"},children:[Object(b.jsx)("div",{style:{width:"30%",display:"inline",textAlign:"right",marginRight:"20px"},children:Object(b.jsx)("p",{children:"[Image]"})}),Object(b.jsxs)("div",{style:{width:"50%",display:"inline"},children:[Object(b.jsx)("p",{children:"My name is Evan Daley and I'm a Lead Software Engineer at Two Barrels LLC. "}),Object(b.jsx)("p",{children:"I consider myself to be an experienced developer, leader and architect. My strongest proficiencies are JavaScript, Vue, React, Rails, AWS, Docker, and SQL. "}),Object(b.jsx)("p",{children:"In my free time, I like to exercise, sleep, and dig into different technologies like R, Kubernetes, GCP, and three.js. Lately I've been a bit obsessed with three.js and react-three-fiber, so thats why this site exists. "})]})]})})}function v(){var e=Object(i.useState)(!1),t=Object(O.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(""),a=Object(O.a)(o,2),c=a[0],s=a[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{pointerEvents:"none",display:"flex",justifyContent:"flex-end",zIndex:"2",width:"100%",padding:"40px",position:"fixed"},children:Object(b.jsx)("div",{style:{right:"24px",pointerEvents:"auto"},children:Object(b.jsx)(y.HamburgerButton,{open:n,onClick:function(){r(!n),s("")}.bind(this),width:25,height:20,strokeWidth:2.5,color:"white",animationDuration:.5})})}),n?Object(b.jsx)(f,{setSelection:s}):null,"about-me"===c?Object(b.jsx)(w,{}):null]})}function S(){return Object(b.jsx)("div",{className:"html-content-container",children:Object(b.jsx)(v,{})})}var M=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{}),Object(b.jsx)(p,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),o(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),k()}},[[51,1,2]]]);
//# sourceMappingURL=main.38e9bd83.chunk.js.map