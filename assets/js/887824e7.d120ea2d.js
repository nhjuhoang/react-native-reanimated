"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[8723],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),p=i,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99380:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o={slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},l=void 0,s={unversionedId:"about",id:"version-1.x.x/about",isDocsHomePage:!1,title:"About React Native Reanimated",description:"React Native's Animated library reimplemented.",source:"@site/versioned_docs/version-1.x.x/about.md",sourceDirName:".",slug:"/",permalink:"/react-native-reanimated/docs/1.x.x/",version:"1.x.x",frontMatter:{slug:"/",title:"About React Native Reanimated",sidebar_label:"About"},sidebar:"version-1.x.x/docs",next:{title:"Getting started",permalink:"/react-native-reanimated/docs/1.x.x/getting_started"}},d=[{value:"Motivation",id:"motivation",children:[]},{value:"Reanimated overview",id:"reanimated-overview",children:[]},{value:"At most once evaluation (the algorithm)",id:"at-most-once-evaluation-the-algorithm",children:[]},{value:"100% declarative gesture interactions",id:"100-declarative-gesture-interactions",children:[]}],c={toc:d};function m(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native's Animated library reimplemented."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native Performance"),": Declare your animations in JS, but have them run on the native thread! \ud83e\uddd9\u200d\u2642\ufe0f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Precise Animations"),": The API affords new levels of precision and detailed control of your animations. \ud83d\udd79"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(mostly) Backwards Compatible"),": Use the same Animated API from React Native that you've been using. You generally don't ",(0,r.kt)("em",{parentName:"li"},"need")," to change anything to get started. \ud83d\udc4d")),(0,r.kt)("p",null,"Reanimated provides a more comprehensive, low level abstraction for the Animated library API, giving you much greater flexibility, control and performance. Combine it with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kmagiera/react-native-gesture-handler"},"react-native-gesture-handler")," for performant gesture-based interactions."),(0,r.kt)("h3",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," library has several limitations that become troubling when it comes to gesture based interactions.\nThis project was initially created to resolve the issue of pan interaction when the object can be dragged along the screen and when released it should snap to some place on the screen.\nThe problem was that despite using ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated.event")," and mapping gesture state to the position of the box, and making this whole interaction run on UI thread with ",(0,r.kt)("inlineCode",{parentName:"p"},"useNativeDriver"),' flag, we still had to call back into JS at the end of the gesture for us to start "snap" animation.\nThis is because ',(0,r.kt)("inlineCode",{parentName:"p"},"Animated.spring({}).start()"),' cannot be used in a "declarative" manner, because when it gets executed it has a "side effect" of starting a process (an animation) that updates the value for some time.\nAdding "side effect" nodes into the current Animated implementation turned out to be a pretty difficult task as the execution model of the Animated API runs all the dependent nodes of each frame for the views that need to update.\nWe don\'t want to run "side effects" more often than necessary as it would, for example, result in the animation starting multiple times.'),(0,r.kt)("p",null,"Another inspiration to redesigning the internals of ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated"),' was Krzysztof\'s work on porting "Animated Tracking" functionality to the native driver.\nApparently, even though the native driver is out for quite a while, it still does not support all the things non-native ',(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," lib can do.\nObviously, it is far more difficult to build three versions of each feature (JS, Android and iOS) instead of one, and the same applies for fixing bugs.\nOne of the goals of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),' was to provide a more generic building block for the API that would allow for building more complex features only in JS and make the native codebase as minimal as possible.\nTaking "diffClamp" node as an example, it is currently implemented in three different places in ',(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," core and even though it is pretty useful it actually only has one use case (collapsible scrollview header)."),(0,r.kt)("p",null,"On a similar topic, there's React Native's PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/18029"},"#18029")," and even though it provides a legitimate use case, maintainers are hesitant about merging it. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," API shouldn't block people from building things like this and the goal of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," is to provide lower level access that would allow for implementing that and many more features with no necessary changes to the core of the library."),(0,r.kt)("p",null,"You can watch Krzysztof Magiera's ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kdq4z2708VM"},"React Europe talk")," where he explains the motivation."),(0,r.kt)("p",null,"The goals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"More generic primitive node types leading to more code reuse for the library internals therefore making it easier to add new features and fix bugs."),(0,r.kt)("li",{parentName:"ul"},"The new set of base nodes can be used to implement ",(0,r.kt)("inlineCode",{parentName:"li"},"Animated")," compatible API including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Complex nodes such as \u201cdiffClamp\u201d."),(0,r.kt)("li",{parentName:"ul"},"Interactions such as animated value tracking or animation staggering."))),(0,r.kt)("li",{parentName:"ul"},"Conditional evaluation & nodes with side effects (",(0,r.kt)("inlineCode",{parentName:"li"},"set"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"startClock"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"stopClock"),")."),(0,r.kt)("li",{parentName:"ul"},"No more \u201cuseNativeDriver\u201d \u2013 all animations runs on the UI thread by default")),(0,r.kt)("h3",{id:"reanimated-overview"},"Reanimated overview"),(0,r.kt)("p",null,"We aim to bring this project to be fully compatible with ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," API. We believe that the set of base nodes we have selected should make this possible to be done only by writing JS code and does not require significant changes in the native codebases. Here is a list of things that haven't yet been ported from the original version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," library.\nAll the functionality that missing elements provide in ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," can already be achieved with ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," although a different methodology for implementing those may be required (e.g. check ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/declarative"},'"Declarative Animation API" section')," to see how the implementation may differ)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using value offsets"),(0,r.kt)("li",{parentName:"ul"},"value tracking (can be achieved in different way, ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")," also allows for tracking all the animation parameters not only destination params)"),(0,r.kt)("li",{parentName:"ul"},"animation staggering"),(0,r.kt)("li",{parentName:"ul"},"animation delays")),(0,r.kt)("h3",{id:"at-most-once-evaluation-the-algorithm"},"At most once evaluation (the algorithm)"),(0,r.kt)("p",null,"Unlike the original ",(0,r.kt)("inlineCode",{parentName:"p"},"Animated")," library where each node could have been evaluated many times within a single frame, ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," restricts each node to be evaluated at most once in a frame.\nThis restriction is required for nodes that have side-effects to be used (e.g. ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/nodes/set"},(0,r.kt)("inlineCode",{parentName:"a"},"set"))," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/nodes/startClock"},(0,r.kt)("inlineCode",{parentName:"a"},"startClock")),").\nWhen node is evaluated (e.g. in case of an ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/nodes/add"},(0,r.kt)("inlineCode",{parentName:"a"},"add"))," node we want to get a sum of the input nodes) its value is cached. If within the next frame there are other nodes that want to use the output of that node instead of evaluating we return cached value.\nThis notion also helps with performance as we can try to evaluate as few nodes as expected.\nThe current algorithm for making decisions of which nodes to evaluate works as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For each frame we first analyze the generated events (e.g. touch stream). It is possible that events may update some animated values."),(0,r.kt)("li",{parentName:"ol"},"Then we update values that correspond to ",(0,r.kt)("a",{parentName:"li",href:"/react-native-reanimated/docs/1.x.x/clock"},"clock"),' nodes that are "running".'),(0,r.kt)("li",{parentName:"ol"},"We traverse the node's tree starting from the nodes that have been updated in the current cycle and we look for final nodes that are connected to views."),(0,r.kt)("li",{parentName:"ol"},"If we found nodes connected to view properties we evaluate them. This can recursively trigger an evaluation for their input nodes etc."),(0,r.kt)("li",{parentName:"ol"},'After everything is done we check if some "running" clocks exists. If so we enqueue a callback to be evaluated with the next frame and start over from pt 1. Otherwise we do nothing.')),(0,r.kt)("h3",{id:"100-declarative-gesture-interactions"},"100% declarative gesture interactions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," works best with the ",(0,r.kt)("a",{parentName:"p",href:"https://kmagiera.github.io/react-native-gesture-handler"},"Gesture Handler"),"\nlibrary. Currently all the examples are made using that library, including the ultimate\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/Example/src/imageViewer"},"ImagePreview app"),"."))}m.isMDXComponent=!0}}]);