(this["webpackJsonpr3f-template"]=this["webpackJsonpr3f-template"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),o=n(26),a=n.n(o),i=(n(50),n(51),n(9)),s=n(12),j=n(37),b=n(14),l=n(13);function u(e){var t=Object(c.useRef)(),n=Object(c.useState)(!1),r=Object(s.a)(n,2),o=r[0],a=r[1],u=Object(c.useState)(!1),O=Object(s.a)(u,2),f=O[0],g=O[1],p=Object(j.useSpring)({config:{duration:450},scale:f?[1.5,1.5,1.5]:[1,1,1],color:o?"white":"black"}),h=p.scale,d=p.color;return Object(b.f)((function(){null!=t.current&&(t.current.rotation.x=t.current.rotation.y+=.01)})),Object(l.jsxs)(j.animated.mesh,Object(i.a)(Object(i.a)({},e),{},{ref:t,scale:h,onClick:function(e){return g(!f)},onPointerOver:function(e){return a(!0)},onPointerOut:function(e){return a(!1)},children:[Object(l.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(l.jsx)(j.animated.meshStandardMaterial,{color:d})]}))}var O=n(60);O.a.preload("/robot.glb");var f=n(58);function g(e){var t=Object(c.useRef)(),n=Object(O.a)("/public/stork.glb"),r=n.nodes,o=n.materials,a=n.animations,s=Object(f.a)(a,t).actions;return console.log(s),Object(l.jsx)("group",Object(i.a)(Object(i.a)({ref:t},e),{},{dispose:null,children:Object(l.jsx)("mesh",{name:"Object_0",geometry:r.Object_0.geometry,material:o.Material_0_COLOR_0,morphTargetDictionary:r.Object_0.morphTargetDictionary,morphTargetInfluences:r.Object_0.morphTargetInfluences,rotation:[Math.PI/2,0,0]})}))}O.a.preload("/public/stork.glb");var p=n(61),h=n(59),d=n(62);var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(b.a,{children:[Object(l.jsx)("ambientLight",{}),Object(l.jsx)("pointLight",{position:[10,10,10]}),Object(l.jsx)(p.a,{}),Object(l.jsx)(c.Suspense,{fallback:Object(l.jsx)(h.a,{children:"loading.."}),children:Object(l.jsx)(g,{})}),Object(l.jsx)(u,{position:[1.2,0,0]}),Object(l.jsx)(u,{position:[-1.2,2.2,0]}),Object(l.jsx)(u,{position:[1.2,2.2,0]}),Object(l.jsx)(d.a,{})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),x()}},[[57,1,2]]]);
//# sourceMappingURL=main.07a7b741.chunk.js.map