"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[6704],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return t?i.createElement(f,o(o({ref:n},p),{},{components:t})):i.createElement(f,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46152:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o={id:"timing",title:"Timing",sidebar_label:"Timing"},c=void 0,l={unversionedId:"animations/timing",id:"version-1.x.x/animations/timing",isDocsHomePage:!1,title:"Timing",description:"`js",source:"@site/versioned_docs/version-1.x.x/animations/timing.md",sourceDirName:"animations",slug:"/animations/timing",permalink:"/react-native-reanimated/docs/1.x.x/animations/timing",version:"1.x.x",frontMatter:{id:"timing",title:"Timing",sidebar_label:"Timing"},sidebar:"version-1.x.x/docs",previous:{title:"Clock",permalink:"/react-native-reanimated/docs/1.x.x/clock"},next:{title:"Decay",permalink:"/react-native-reanimated/docs/1.x.x/animations/decay"}},s=[],p={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"timing(\n  clock,\n  { finished, position, frameTime, time },\n  { toValue, duration, easing }\n);\n")),(0,a.kt)("p",null,"Updates ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," node by running timing based animation from a given position to a destination determined by ",(0,a.kt)("inlineCode",{parentName:"p"},"toValue"),". The animation is expected to last ",(0,a.kt)("inlineCode",{parentName:"p"},"duration")," milliseconds and use ",(0,a.kt)("inlineCode",{parentName:"p"},"easing")," function that could be set to one of the nodes exported by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Easing")," object.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"frameTime")," node will also get updated and represents the progress of animation in milliseconds (how long the animation has lasted so far), similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"time")," node that just indicates the last clock time the animation node has been evaluated. Both of these variables are expected to be reset before restarting the animation. Finally ",(0,a.kt)("inlineCode",{parentName:"p"},"finished")," node will be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," when the position reaches the final value or when ",(0,a.kt)("inlineCode",{parentName:"p"},"frameTime")," exceeds ",(0,a.kt)("inlineCode",{parentName:"p"},"duration"),"."))}m.isMDXComponent=!0}}]);