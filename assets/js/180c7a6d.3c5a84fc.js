"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[6691],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96695:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o={id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},l=void 0,c={unversionedId:"api/animations/withDecay",id:"version-2.3.0-beta.1/api/animations/withDecay",isDocsHomePage:!1,title:"withDecay",description:'Starts a velocity based "scroll" animation.',source:"@site/versioned_docs/version-2.3.0-beta.1/api/animations/withDecay.md",sourceDirName:"api/animations",slug:"/api/animations/withDecay",permalink:"/react-native-reanimated/docs/api/animations/withDecay",version:"2.3.0-beta.1",frontMatter:{id:"withDecay",title:"withDecay",sidebar_label:"withDecay"},sidebar:"version-2.3.0-beta.1/docs",previous:{title:"withSpring",permalink:"/react-native-reanimated/docs/api/animations/withSpring"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/api/animations/cancelAnimation"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Starts a velocity based "scroll" animation.'),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"options-object"},(0,i.kt)("inlineCode",{parentName:"h4"},"options")," ","[object]"),(0,i.kt)("p",null,"Object containing animation configuration.\nAllowed parameters are listed below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Options"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"velocity"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial velocity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deceleration"),(0,i.kt)("td",{parentName:"tr",align:null},"0.998"),(0,i.kt)("td",{parentName:"tr",align:null},"Rate of decay")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clamp"),(0,i.kt)("td",{parentName:"tr",align:null},"[]"),(0,i.kt)("td",{parentName:"tr",align:null},"Array of two animation boundaries (optional)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"velocityFactor"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Factor to modify velocity unit (optional)")))),(0,i.kt)("h5",{id:"velocityfactor"},(0,i.kt)("inlineCode",{parentName:"h5"},"velocityFactor")),(0,i.kt)("p",null,"The default unit of velocity in decay is pixel per second but it can be problematic when you want to animate value not related to pixels for example opacity ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 1]")," or progress bar ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 1]"),". In this case, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"velocityFactor")," property with value ",(0,i.kt)("inlineCode",{parentName:"p"},"< 1")," to modify the velocity of change to more matched for the required domain."),(0,i.kt)("h4",{id:"callback-functionoptional"},(0,i.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,i.kt)("p",null,"The provided function will be called when the animation is complete.\nIn case the animation is cancelled, the callback will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,i.kt)("a",{parentName:"p",href:"../hooks/useAnimatedStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Animated, {\n  useSharedValue,\n  withSpring,\n  useAnimatedStyle,\n  useAnimatedGestureHandler,\n} from 'react-native-reanimated';\nimport { PanGestureHandler } from 'react-native-gesture-handler';\n\nfunction App() {\n  const x = useSharedValue(0);\n\n  const gestureHandler = useAnimatedGestureHandler({\n    onStart: (_, ctx) => {\n      ctx.startX = x.value;\n    },\n    onActive: (event, ctx) => {\n      x.value = ctx.startX + event.translationX;\n    },\n    onEnd: (evt) => {\n      x.value = withDecay({\n        velocity: evt.velocityX,\n        clamp: [0, 200], // optionally define boundaries for the animation\n      });\n    },\n  });\n\n  const animatedStyle = useAnimatedStyle(() => {\n    return {\n      transform: [\n        {\n          translateX: x.value,\n        },\n      ],\n    };\n  });\n\n  return (\n    <PanGestureHandler onGestureEvent={gestureHandler}>\n      <Animated.View style={[styles.box, animatedStyle]} />\n    </PanGestureHandler>\n  );\n}\n")))}s.isMDXComponent=!0}}]);