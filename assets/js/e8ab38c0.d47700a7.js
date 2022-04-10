"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9408],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3106:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"contributing",slug:"contributing",title:"Contributing",sidebar_label:"Contributing"},s=void 0,d={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing",description:"Contributing",source:"@site/../docs/Guide.Contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/Detox/docs/next/contributing",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Guide.Contributing.md",tags:[],version:"current",frontMatter:{id:"contributing",slug:"contributing",title:"Contributing",sidebar_label:"Contributing"},sidebar:"tutorialSidebar",previous:{title:"Uninstalling Detox",permalink:"/Detox/docs/next/guide/uninstalling"}},p=[{value:"Contributing",id:"contributing",children:[{value:"Environment",id:"environment",children:[{value:"Install Homebrew",id:"install-homebrew",children:[],level:4},{value:"Install Node.js v12.x or newer",id:"install-nodejs-v12x-or-newer",children:[],level:4},{value:"Install <code>npm</code>",id:"install-npm",children:[],level:4},{value:"Install the monorepo management tool, <code>lerna</code>",id:"install-the-monorepo-management-tool-lerna",children:[],level:4},{value:"Install common React Native dependencies",id:"install-common-react-native-dependencies",children:[],level:4},{value:"iOS",id:"ios",children:[],level:4},{value:"Android",id:"android",children:[],level:4}],level:3},{value:"Detox",id:"detox",children:[{value:"Clone Detox and Submodules",id:"clone-detox-and-submodules",children:[],level:4},{value:"Installing and Linking Internal Projects",id:"installing-and-linking-internal-projects",children:[],level:4},{value:"Building and Testing",id:"building-and-testing",children:[{value:"Automatically",id:"automatically",children:[],level:5},{value:"Manually",id:"manually",children:[{value:"0. (React Native \u2264 0.55.x) Fixing Compilation Issues in RN Sources",id:"0-react-native--055x-fixing-compilation-issues-in-rn-sources",children:[],level:6},{value:"1. Unit Tests and Lint",id:"1-unit-tests-and-lint",children:[],level:6},{value:"2. Running Detox E2E Coverage Tests",id:"2-running-detox-e2e-coverage-tests",children:[],level:6},{value:"3. Android Native Unit-Tests",id:"3-android-native-unit-tests",children:[],level:6}],level:5}],level:4}],level:3},{value:"Detox - Example Projects",id:"detox---example-projects",children:[],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"This guide is about contributing to our codebase."),(0,r.kt)("p",null,"We don\u2019t have any special guidelines - just some setup walk-through!"),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("h4",{id:"install-homebrew"},"Install Homebrew"),(0,r.kt)("p",null,"If you haven\u2019t yet - install ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},(0,r.kt)("inlineCode",{parentName:"a"},"brew")),"."),(0,r.kt)("h4",{id:"install-nodejs-v12x-or-newer"},"Install Node.js v12.x or newer"),(0,r.kt)("p",null,"There\u2019s more than one way to install Node.js:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download from the ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official download page")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"nvm")," - if you need to allow for several versions to be installed on a single machine")),(0,r.kt)("p",null,"The best way is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"nvm"),", but the simplest way is to use Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install node\n")),(0,r.kt)("h4",{id:"install-npm"},"Install ",(0,r.kt)("inlineCode",{parentName:"h4"},"npm")),(0,r.kt)("p",null,"Either install ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or check that you have it installed, using their ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"official guide"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE: For Detox, please use the latest ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," version ",(0,r.kt)("inlineCode",{parentName:"strong"},"6.x.x")," (i.e not version 7.0.0 or newer)."))),(0,r.kt)("h4",{id:"install-the-monorepo-management-tool-lerna"},"Install the monorepo management tool, ",(0,r.kt)("inlineCode",{parentName:"h4"},"lerna")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g lerna@3.x.x\n")),(0,r.kt)("p",null,"For all the internal projects (detox, detox-cli, demos, test) ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna")," will create symbolic links in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," copying the content of the projects. This way, any change you do on any code is there immediately. There is no need to update node modules or copy files between projects."),(0,r.kt)("h4",{id:"install-common-react-native-dependencies"},"Install common React Native dependencies"),(0,r.kt)("p",null,"React-Native CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g react-native-cli\n")),(0,r.kt)("p",null,"Watchman:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install watchman\n")),(0,r.kt)("h4",{id:"ios"},"iOS"),(0,r.kt)("p",null,"For iOS, you must install Xcode and related tools. Refer to our ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/ios-dev-env"},"Setting Up an iOS Environment")," guide."),(0,r.kt)("p",null,"You must also have ",(0,r.kt)("inlineCode",{parentName:"p"},"xcpretty")," installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"gem install xcpretty\n")),(0,r.kt)("h4",{id:"android"},"Android"),(0,r.kt)("p",null,"For Android, you need to have Java and the Android SDK properly set up. Refer to our ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/next/introduction/android-dev-env"},"Setting Up an Android Development & Testing Environment")," guide."),(0,r.kt)("h3",{id:"detox"},"Detox"),(0,r.kt)("h4",{id:"clone-detox-and-submodules"},"Clone Detox and Submodules"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wix/detox.git\ncd detox\ngit submodule update --init --recursive\n")),(0,r.kt)("p",null,"(this makes sure all git submodule dependencies have been properly checked out)"),(0,r.kt)("h4",{id:"installing-and-linking-internal-projects"},"Installing and Linking Internal Projects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lerna bootstrap\n")),(0,r.kt)("h4",{id:"building-and-testing"},"Building and Testing"),(0,r.kt)("h5",{id:"automatically"},"Automatically"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scripts/ci.ios.sh")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scripts/ci.android.sh")," are the scripts Detox runs in CI, they will run ",(0,r.kt)("inlineCode",{parentName:"p"},"lerna bootstrap"),", unit tests, and E2E tests. Make sure these scripts pass before submitting a PR, this is exactly what Detox is going to run in CI."),(0,r.kt)("h5",{id:"manually"},"Manually"),(0,r.kt)("p",null,"The following steps can be run manually in order to build / test the various components of Detox."),(0,r.kt)("h6",{id:"0-react-native--055x-fixing-compilation-issues-in-rn-sources"},"0. (React Native \u2264 0.55.x) Fixing Compilation Issues in RN Sources"),(0,r.kt)("p",null,"Detox Android test project uses React Native sources instead of the precompiled AAR. The test project uses React Native 0.51 and 0.53, both have issues with compilation (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/commit/d8bb990abc226e778e2f32c2de3c6661c0aa64e5#diff-f44163238d434a443b56bd27b3ba0578"},"fixed in 0.55"),"). In order to fix this issue, from inside ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/test")," run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mv node_modules/react-native/ReactAndroid/release.gradle node_modules/react-native/ReactAndroid/release.gradle.bak\n")),(0,r.kt)("h6",{id:"1-unit-tests-and-lint"},"1. Unit Tests and Lint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"lerna run test\n")),(0,r.kt)("p",null,"Detox JS code is 100% test covered and is set to break the build if coverage gets below, so make sure you run unit tests (",(0,r.kt)("inlineCode",{parentName:"p"},"lerna run test"),") locally before pushing."),(0,r.kt)("p",null,"Alternatively, to run only the JS tests, run the following from the ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/detox")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm run unit\n-or-\nnpm run unit:watch\n")),(0,r.kt)("p",null,"After running the tests, ",(0,r.kt)("em",{parentName:"p"},"Jest")," will create a coverage report you can examine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd detox\nopen coverage/lcov-report/index.html\n")),(0,r.kt)("h6",{id:"2-running-detox-e2e-coverage-tests"},"2. Running Detox E2E Coverage Tests"),(0,r.kt)("p",null,'Detox has a suite of end-to-end tests to test its own API while developing (and for regression); We maintain a special application that is "tested" against Detox\u2019s API, but essentially, it\u2019s the API that is tested, not the app.'),(0,r.kt)("p",null,"To run the tests, you must first build the native code and then run based on your target of choice (Android / iOS):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iOS:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd detox/test\nnpm run build:ios\nnpm run e2e:ios\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Android:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd detox/test\nnpm run build:android\nnpm run e2e:android\n")))),(0,r.kt)("p",null,"FYI Android test project includes two flavors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromBin")," - (",(0,r.kt)("strong",{parentName:"li"},"standard use case"),") utilizes the precompiled ",(0,r.kt)("inlineCode",{parentName:"li"},".aar")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," just like a standard RN project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromSource")," - compiles the project with RN sources from ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules"),", this is useful when developing and debugging Espresso idle resource.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/react-native/wiki/Building-from-source#android"},"Here")," are the prerequisites to compiling React Native from source.")),(0,r.kt)("p",null,"Each build can be triggered separately by running its Gradle assembling task (under ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/test/android/"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew assembleFromSourceDebug\n-or-\n./gradlew assembleFromBinDebug\n")),(0,r.kt)("p",null,"To run from Android Studio, React Native\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"react.gradle")," script may require ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," to be in path.\nOn MacOS, environment variables can be exported to desktop applications by adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),"/",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"launchctl setenv PATH $PATH\n")),(0,r.kt)("h6",{id:"3-android-native-unit-tests"},"3. Android Native Unit-Tests"),(0,r.kt)("p",null,"Under ",(0,r.kt)("inlineCode",{parentName:"p"},"detox/android"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./gradlew testFullRelease\n")),(0,r.kt)("h3",{id:"detox---example-projects"},"Detox - Example Projects"),(0,r.kt)("p",null,"This is in fact a monorepo that also sports some example projects (for usage reference), alongside the main test project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-react-native")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-react-native-jest"),": Demonstrate usage of Detox in React-Native app projects, with ",(0,r.kt)("inlineCode",{parentName:"li"},"mocha.js")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Jest")," as the hosting test-runner frameworks, respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-native-ios"),": Demonstrates usage of Detox in a pure-native iOS app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-native-android")," (broken): Demonstrates usage of Detox in a pure-native Android app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"examples/demo-pure-native-android"),": Demonstrates usage of the ",(0,r.kt)("em",{parentName:"li"},"pure")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/detox-native/README.md"},"Detox-Native")," project"),(0,r.kt)("li",{parentName:"ul"},"more...")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In order to run E2E tests associated with any of these projects, refer to the ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/tree/master/examples"},"project-specific")," READMEs.")))}c.isMDXComponent=!0}}]);