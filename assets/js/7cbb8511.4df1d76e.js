"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8926],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6666:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],a={id:"ios-dev-env",slug:"introduction/ios-dev-env",title:"Setting Up an iOS Development & Testing Environment",sidebar_label:"Setting Up an iOS Development & Testing Environment"},s=void 0,p={unversionedId:"ios-dev-env",id:"ios-dev-env",isDocsHomePage:!1,title:"Setting Up an iOS Development & Testing Environment",description:"Setting Up an iOS Development & Testing Environment",source:"@site/../docs/Introduction.iOSDevEnv.md",sourceDirName:".",slug:"/introduction/ios-dev-env",permalink:"/Detox/docs/next/introduction/ios-dev-env",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.iOSDevEnv.md",tags:[],version:"current",frontMatter:{id:"ios-dev-env",slug:"introduction/ios-dev-env",title:"Setting Up an iOS Development & Testing Environment",sidebar_label:"Setting Up an iOS Development & Testing Environment"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Detox/docs/next/introduction/getting-started"},next:{title:"Setting Up an Android Development & Testing Environment",permalink:"/Detox/docs/next/introduction/android-dev-env"}},u=[{value:"Setting Up an iOS Development &amp; Testing Environment",id:"setting-up-an-ios-development--testing-environment",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Dependencies",id:"dependencies",children:[{value:"Install the Latest Version of Homebrew",id:"install-the-latest-version-of-homebrew",children:[],level:4},{value:"Install applesimutils",id:"install-applesimutils",children:[],level:4}],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"setting-up-an-ios-development--testing-environment"},"Setting Up an iOS Development & Testing Environment"),(0,o.kt)("p",null,"This guide sums up the tools required for an environment for running automated UI tests using iOS simulators (using Detox, in particular)."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Running Detox (on iOS) requires the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"MacOS Catalina or newer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Xcode ",(0,o.kt)("inlineCode",{parentName:"p"},"v12.x")," or newer (",(0,o.kt)("inlineCode",{parentName:"p"},"v13")," support - see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/issues/2895"},"here"),"), with Xcode command-line tools installed"),(0,o.kt)("p",{parentName:"li"},"Xcode can be installed from the App Store, or downloaded ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/download/more/"},"directly from Apple Developer")))),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("h4",{id:"install-the-latest-version-of-homebrew"},"Install the Latest Version of ",(0,o.kt)("a",{parentName:"h4",href:"http://brew.sh"},"Homebrew")),(0,o.kt)("p",null,"Homebrew is a package manager for macOS, used to install other command line tools."),(0,o.kt)("p",null,"To ensure everything needed for Homebrew tool installation is installed, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"xcode-select --install\n")),(0,o.kt)("h4",{id:"install-applesimutils"},"Install ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/wix/AppleSimulatorUtils"},(0,o.kt)("inlineCode",{parentName:"a"},"applesimutils"))),(0,o.kt)("p",null,"A collection of utils for Apple simulators, Detox uses it to query and communicate with the simulator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap wix/brew\nbrew install applesimutils\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Make sure to periodically update your version of ",(0,o.kt)("inlineCode",{parentName:"p"},"applesimutils")," to the latest version.")))}d.isMDXComponent=!0}}]);