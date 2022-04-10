"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1368],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1221:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"detox-cli",slug:"api/detox-cli",title:"Detox Command Line Tools",sidebar_label:"Detox Command Line Tools"},d=void 0,s={unversionedId:"detox-cli",id:"detox-cli",isDocsHomePage:!1,title:"Detox Command Line Tools",description:"Detox Command Line Tools (detox-cli)",source:"@site/../docs/APIRef.DetoxCLI.md",sourceDirName:".",slug:"/api/detox-cli",permalink:"/Detox/docs/next/api/detox-cli",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/APIRef.DetoxCLI.md",tags:[],version:"current",frontMatter:{id:"detox-cli",slug:"api/detox-cli",title:"Detox Command Line Tools",sidebar_label:"Detox Command Line Tools"},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/Detox/docs/next/introduction/workflows"},next:{title:"Configuration Options",permalink:"/Detox/docs/next/api/configuration"}},p=[{value:"Detox Command Line Tools (detox-cli)",id:"detox-command-line-tools-detox-cli",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Commands",id:"commands",children:[{value:"Options",id:"options",children:[],level:4},{value:"init",id:"init",children:[],level:4},{value:"build",id:"build",children:[],level:4},{value:"test",id:"test",children:[{value:"<code>DETOX_ARGV_OVERRIDE</code>",id:"detox_argv_override",children:[],level:5}],level:4},{value:"run-server",id:"run-server",children:[],level:4},{value:"recorder",id:"recorder",children:[],level:4},{value:"Cache",id:"cache",children:[],level:4}],level:3}],level:2}],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"detox-command-line-tools-detox-cli"},"Detox Command Line Tools (detox-cli)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"detox-cli")," lets you operate Detox from command line."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"detox-cli")," globally via ",(0,l.kt)("a",{parentName:"p",href:"http://npmjs.org/detox-cli"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g detox-cli\n")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"detox <command> [options] \n")),(0,l.kt)("h3",{id:"commands"},"Commands"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#init"},"init")),(0,l.kt)("td",{parentName:"tr",align:null},"Create initial E2E tests folder for jest or mocha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#build"},"build")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Convenience method.")," Run the command defined in 'build' property of the specified configuration.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#test"},"test")),(0,l.kt)("td",{parentName:"tr",align:null},"Initiating your test suite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#run-server"},"run-server")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts a standalone detox server")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cache"},"build-framework-cache")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"MacOS only.")," Builds Detox.framework to ","~","/Library/Detox. The framework cache is specific for each combination of Xcode and Detox versions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cache"},"clean-framework-cache")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"MacOS only.")," Deletes all compiled framework binaries from ","~","/Library/Detox, they will be rebuilt on 'npm install' or when running 'build-framework-cache'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#cache"},"rebuild-framework-cache")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"MacOS only.")," Rebuilds the Detox cache")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#recorder"},"recorder")),(0,l.kt)("td",{parentName:"tr",align:null},"Starts a ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder")," recording")))),(0,l.kt)("h4",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--version"),(0,l.kt)("td",{parentName:"tr",align:null},"Show version number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,l.kt)("h4",{id:"init"},"init"),(0,l.kt)("p",null,"Scaffolds initial E2E test folder structure for a specific test runner"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"detox init -r <test-runner-name>")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-r, --runner ",(0,l.kt)("inlineCode",{parentName:"td"},"<test-runner-name>")),(0,l.kt)("td",{parentName:"tr",align:null},"test runner name (supported values: mocha, jest)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,l.kt)("h4",{id:"build"},"build"),(0,l.kt)("p",null,"Run the command defined in ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," property of the specified ",(0,l.kt)("strong",{parentName:"p"},"configuration"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"detox build [options]")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,l.kt)("inlineCode",{parentName:"td"},"<device config>")),(0,l.kt)("td",{parentName:"tr",align:null},"Select a device configuration from your defined configurations, if not supplied, and there\u2019s only one configuration, detox will default to it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,l.kt)("inlineCode",{parentName:"td"},"<configPath>")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, detox searches for .detoxrc","[",'.js] or "detox" section in package.json')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-i, --if-missing"),(0,l.kt)("td",{parentName:"tr",align:null},"Execute the build command only if the app binary is missing.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s, --silent"),(0,l.kt)("td",{parentName:"tr",align:null},"Do not fail with error if an app config has no build command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,l.kt)("h4",{id:"test"},"test"),(0,l.kt)("p",null,"Initiating your test suite",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"detox test [options] <...testFilePaths>")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-C, --config-path ",(0,l.kt)("inlineCode",{parentName:"td"},"<configPath>")),(0,l.kt)("td",{parentName:"tr",align:null},"Specify Detox config file path. If not supplied, detox searches for .detoxrc","[",'.js] or "detox" section in package.json')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-c, --configuration ",(0,l.kt)("inlineCode",{parentName:"td"},"<device config>")),(0,l.kt)("td",{parentName:"tr",align:null},"Select a device configuration from your defined configurations, if not supplied, and there\u2019s only one configuration, detox will default to it")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-o, --runner-config ",(0,l.kt)("inlineCode",{parentName:"td"},"<config>")),(0,l.kt)("td",{parentName:"tr",align:null},"Test runner config file, defaults to 'e2e/mocha.opts' for mocha and 'e2e/config.json' for jest.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-n, --device-name ","[","name]"),(0,l.kt)("td",{parentName:"tr",align:null},"Override the device name specified in a configuration. Useful for running a single build configuration on multiple devices.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-l, --loglevel ","[","value]"),(0,l.kt)("td",{parentName:"tr",align:null},"Log level: fatal, error, warn, info, verbose, trace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-d, --debug-synchronization ",(0,l.kt)("inlineCode",{parentName:"td"},"<value>")),(0,l.kt)("td",{parentName:"tr",align:null},"Customize how long an action/expectation can take to complete before Detox starts querying the app why it is busy. By default, the app status will be printed if the action takes more than 10s to complete.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-a, --artifacts-location ",(0,l.kt)("inlineCode",{parentName:"td"},"<path>")),(0,l.kt)("td",{parentName:"tr",align:null},"Artifacts (logs, screenshots, etc) root directory.",(0,l.kt)("sup",{parentName:"td",id:"fnref-2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--record-logs ","[","failing/all/none]"),(0,l.kt)("td",{parentName:"tr",align:null},'Save logs during each test to artifacts directory. Pass "failing" to save logs of failing tests only. The default value is ',(0,l.kt)("strong",{parentName:"td"},"none"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--take-screenshots ","[","manual/failing/all/none]"),(0,l.kt)("td",{parentName:"tr",align:null},'Save screenshots before and after each test to artifacts directory. Pass "failing" to save screenshots of failing tests only. The default value is ',(0,l.kt)("strong",{parentName:"td"},"manual"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--record-videos ","[","failing/all/none]"),(0,l.kt)("td",{parentName:"tr",align:null},'Save screen recordings of each test to artifacts directory. Pass "failing" to save recordings of failing tests only. The default value is ',(0,l.kt)("strong",{parentName:"td"},"none"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--record-performance ","[","all/none]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","iOS Only] Save Detox Instruments performance recordings of each test to artifacts directory. The default value is ",(0,l.kt)("strong",{parentName:"td"},"none"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--record-timeline ","[","all/none]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","Jest Only] Record tests and events timeline, for visual display on the ",(0,l.kt)("a",{parentName:"td",href:"chrome://tracing"},"chrome://tracing")," tool. The default value is ",(0,l.kt)("strong",{parentName:"td"},"none"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--capture-view-hierarchy ","[","enabled/disabled]"),(0,l.kt)("td",{parentName:"tr",align:null},"[","iOS Only] Capture ",(0,l.kt)("inlineCode",{parentName:"td"},"*.uihierarchy")," snapshots on view action errors and ",(0,l.kt)("inlineCode",{parentName:"td"},"device.captureViewHierarchy()")," calls. The default value is ",(0,l.kt)("strong",{parentName:"td"},"disabled"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-R, --retries"),(0,l.kt)("td",{parentName:"tr",align:null},"[","Jest Circus Only] Re-spawn the test runner for individual failing suite files until they pass, or ",(0,l.kt)("inlineCode",{parentName:"td"},"<N>")," times at most.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-r, --reuse"),(0,l.kt)("td",{parentName:"tr",align:null},"Reuse existing installed app (do not delete + reinstall) for a faster run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-u, --cleanup"),(0,l.kt)("td",{parentName:"tr",align:null},"Shutdown simulator when test is over, useful for CI scripts, to make sure detox exists cleanly with no residue")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-w, --workers"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies number of workers the test runner should spawn, requires a test runner with parallel execution support (Detox CLI currently supports Jest). ",(0,l.kt)("em",{parentName:"td"},"Note: For workers > 1, Jest\u2019s spec-level reporting is disabled, by default (can be overridden using --jest-report-specs)."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--jest-report-specs"),(0,l.kt)("td",{parentName:"tr",align:null},"[","Jest Only] Whether to output logs per each running spec, in real-time. By default, disabled with multiple workers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-H, --headless"),(0,l.kt)("td",{parentName:"tr",align:null},"[","Android Only] Launch Emulator in headless mode. Useful when running on CI.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--gpu"),(0,l.kt)("td",{parentName:"tr",align:null},"[","Android Only] Launch Emulator with the specific -gpu ","[","gpu mode] parameter.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--device-launch-args"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of passthrough-arguments to use when (if) devices (Android emulator / iOS simulator) are launched by Detox.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: the value must be specified after an equal sign (",(0,l.kt)("inlineCode",{parentName:"strong"},"="),") and inside quotes.")," Usage example:",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'--device-launch-args="-http-proxy http://1.1.1.1:8000 -no-snapshot-load"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--app-launch-args"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom arguments to pass (through) onto the app every time it is launched. The same ",(0,l.kt)("strong",{parentName:"td"},"note")," applies here, as for ",(0,l.kt)("strong",{parentName:"td"},"--device-launch-args"),".",(0,l.kt)("br",null),"See ",(0,l.kt)("a",{parentName:"td",href:"/Detox/docs/next/api/launch-args"},"launch arguments guide")," for complete info.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-color"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable colors in log output")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--use-custom-logger"),(0,l.kt)("td",{parentName:"tr",align:null},"Use Detox' custom console-logging implementation, for logging Detox (non-device) logs. Disabling will fallback to node.js / test-runner\u2019s implementation (e.g. Jest / Mocha).",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Default: true"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--force-adb-install"),(0,l.kt)("td",{parentName:"tr",align:null},"Due to problems with the ",(0,l.kt)("inlineCode",{parentName:"td"},"adb install")," command on Android, Detox resorts to a different scheme for installing APKs. Setting true will disable that and force usage of ",(0,l.kt)("inlineCode",{parentName:"td"},"adb install"),", instead.",(0,l.kt)("br",null),"This flag is temporary until the Detox way proves stable.",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Default: false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--inspect-brk"),(0,l.kt)("td",{parentName:"tr",align:null},"Uses ",(0,l.kt)("a",{parentName:"td",href:"https://nodejs.org/en/docs/guides/debugging-getting-started/#enable-inspector"},"node\u2019s --inspect-brk")," flag to let users debug the jest/mocha test runner ",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"Default: false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,l.kt)("h5",{id:"detox_argv_override"},(0,l.kt)("inlineCode",{parentName:"h5"},"DETOX_ARGV_OVERRIDE")),(0,l.kt)("p",null,"If you happen to be troubleshooting Detox tests inside a complex script, or a failing CI build\n(e.g., on TeamCity or Jenkins), there is an escape-hatch feature for running Detox with\nsome extra CLI args just by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," environment variable before\nrerunning it again."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"> export DETOX_ARGV_OVERRIDE=\"--forceExit -w 1 --testNamePattern='that hanging test' e2e/sanity/login.test.js\"\n> bash scripts/ci.e2e.sh\n  # ... some output ...\n  > detox test -c ios.sim.release -l verbose --workers 3\n    # ...\n    configuration=ios.sim.release ... jest --maxWorkers 1 --forceExit --testNamePattern='that hanging test' e2e/sanity/login.test.js\n")),(0,l.kt)("p",null,"Consider the example above, where ",(0,l.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," forces Detox to run Jest in a single worker\nmode with a forceful exit (after 1 second) only for a selected test in a specific file."),(0,l.kt)("p",null,"As you might see, the idea of ",(0,l.kt)("inlineCode",{parentName:"p"},"DETOX_ARGV_OVERRIDE")," is quite similar to ",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/api/cli.html#cli_node_options_options"},"NODE","_","OPTIONS"),"\nexcept for the fact you use it not for regular flows, but for forced ad-hoc patching of a failing Detox configuration to\nsave your time."),(0,l.kt)("p",null,"Please avoid using it in your regular flows \u2013 instead, use Detox configuration files (",(0,l.kt)("inlineCode",{parentName:"p"},".detoxrc.js"),")\nas your primary choice."),(0,l.kt)("h4",{id:"run-server"},"run-server"),(0,l.kt)("p",null,"Start a standalone Detox server"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"detox run-server [options]")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-p, --port ","[","port]"),(0,l.kt)("td",{parentName:"tr",align:null},"Port number (default: 8099)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-l, --loglevel ","[","value]"),(0,l.kt)("td",{parentName:"tr",align:null},"Log level: fatal, error, warn, info, verbose, trace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--no-color"),(0,l.kt)("td",{parentName:"tr",align:null},"Disable colorful logs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"Show help")))),(0,l.kt)("h4",{id:"recorder"},"recorder"),(0,l.kt)("p",null,"If you have installed ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxRecorder"},"Detox Recorder")," in your project, you can use this command to start a new recording."),(0,l.kt)("h4",{id:"cache"},"Cache"),(0,l.kt)("p",null,"Detox stores a cached version of its framework in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/Library/Detox"),". A different cache folder is used for different Xcode and Detox versions. Use the various cache commands to clean or build this cache."),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"It should be noted that ",(0,l.kt)("inlineCode",{parentName:"li"},"detox test")," is a convenience method to trigger an execution\nof a supported test runner, so for the most part it reads configuration from CLI args and ",(0,l.kt)("inlineCode",{parentName:"li"},"package.json")," and remaps it\nto command-line arguments or environment variables that are supported by (or not conflict with) the test runner.\nHence, ",(0,l.kt)("strong",{parentName:"li"},"extra arguments to")," ",(0,l.kt)("inlineCode",{parentName:"li"},"detox test")," ",(0,l.kt)("strong",{parentName:"li"},"will be forwarded to your test runner"),", e.g:\\\n1","."," You run ",(0,l.kt)("inlineCode",{parentName:"li"},"detox test --bail"),", and since ",(0,l.kt)("inlineCode",{parentName:"li"},"--bail")," is an unknown option, it will be forwarded to the test runner as-is.\\\n2","."," If there is a name conflict for some option (between the test runner and ",(0,l.kt)("inlineCode",{parentName:"li"},"detox test"),"), you can pass it explicitly\\\nafter the reserved ",(0,l.kt)("inlineCode",{parentName:"li"},"--")," sequence. For instance, ",(0,l.kt)("inlineCode",{parentName:"li"},"detox test -- --help"),", will pass ",(0,l.kt)("inlineCode",{parentName:"li"},"--help")," to the test runner CLI\nitself.",(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"--artifacts-location")," path does not end with a slash (",(0,l.kt)("inlineCode",{parentName:"li"},"/"),") or a backslash, then detox CLI will append to the\npath a subdirectory with configuration name and timestamp (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"artifacts/android.emu.release.2018-06-12 05:52:43Z"),").\nIn other words, the path with a slash at the end assumes you do not want a subdirectory inside.\nFor more details, please check the ",(0,l.kt)("a",{parentName:"li",href:"/Detox/docs/next/api/artifacts#artifacts"},"Enabling artifacts"),".\nThe default value is ",(0,l.kt)("strong",{parentName:"li"},"artifacts")," (plus a subdirectory).",(0,l.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);