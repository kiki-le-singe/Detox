"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3685],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8095:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"artifacts",slug:"api/artifacts",title:"Artifacts",sidebar_label:"Artifacts"},s=void 0,c={unversionedId:"artifacts",id:"version-19.x/artifacts",isDocsHomePage:!1,title:"Artifacts",description:"Artifacts",source:"@site/versioned_docs/version-19.x/APIRef.Artifacts.md",sourceDirName:".",slug:"/api/artifacts",permalink:"/Detox/docs/api/artifacts",editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/APIRef.Artifacts.md",tags:[],version:"19.x",frontMatter:{id:"artifacts",slug:"api/artifacts",title:"Artifacts",sidebar_label:"Artifacts"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Mocking User Activity",permalink:"/Detox/docs/api/mocking-user-activity"},next:{title:"Taking Screenshots",permalink:"/Detox/docs/api/screenshots"}},p=[{value:"Artifacts",id:"artifacts",children:[{value:"Enabling Artifacts",id:"enabling-artifacts",children:[{value:"Launch Arguments",id:"launch-arguments",children:[{value:"Artifacts root directory",id:"artifacts-root-directory",children:[],level:5}],level:4},{value:"Configuration Object",id:"configuration-object",children:[{value:"Path builder",id:"path-builder",children:[],level:5},{value:"Screenshot Plugin",id:"screenshot-plugin",children:[],level:5},{value:"Video Plugin",id:"video-plugin",children:[],level:5},{value:"Log Plugin",id:"log-plugin",children:[],level:5},{value:"Instruments Plugin",id:"instruments-plugin",children:[],level:5},{value:"UI hierarchy Plugin",id:"ui-hierarchy-plugin",children:[],level:5},{value:"Timeline Plugin",id:"timeline-plugin",children:[{value:"Purpose",id:"purpose",children:[],level:6}],level:5}],level:4}],level:3},{value:"Artifacts Structure",id:"artifacts-structure",children:[{value:"Example of the structure",id:"example-of-the-structure",children:[],level:4}],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Screenshots and Videos Do Not Appear in the Artifacts Folder",id:"screenshots-and-videos-do-not-appear-in-the-artifacts-folder",children:[],level:4},{value:"Video Recording Issues on CI",id:"video-recording-issues-on-ci",children:[],level:4},{value:"Detox Instruments is Installed in a Custom Location",id:"detox-instruments-is-installed-in-a-custom-location",children:[],level:4},{value:"<code>Ctrl+C</code> Does Not Clean Up Temporary Files",id:"ctrlc-does-not-clean-up-temporary-files",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"artifacts"},"Artifacts"),(0,r.kt)("p",null,"Artifacts are various recordings during tests including, but not limited to, device logs, device screenshots and screen recordings (videos)."),(0,r.kt)("h3",{id:"enabling-artifacts"},"Enabling Artifacts"),(0,r.kt)("p",null,"Artifacts are disabled by default. To enable them, specify via ",(0,r.kt)("strong",{parentName:"p"},"launch arguments")," or a ",(0,r.kt)("strong",{parentName:"p"},"configuration")," object what artifacts you want to record."),(0,r.kt)("h4",{id:"launch-arguments"},"Launch Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To record ",(0,r.kt)("inlineCode",{parentName:"li"},".log")," files, add ",(0,r.kt)("inlineCode",{parentName:"li"},"--record-logs all")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"--record-logs failing"),", if you want to keep logs only for failing tests)."),(0,r.kt)("li",{parentName:"ul"},"To record ",(0,r.kt)("inlineCode",{parentName:"li"},".mp4")," test run videos, add ",(0,r.kt)("inlineCode",{parentName:"li"},"--record-videos all")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"--record-videos failing"),", if you want to keep video recordings only for failing tests)."),(0,r.kt)("li",{parentName:"ul"},"To record ",(0,r.kt)("inlineCode",{parentName:"li"},".dtxrec")," (Detox Instruments recordings) for each test, add ",(0,r.kt)("inlineCode",{parentName:"li"},"--record-performance all"),". To open those recordings, you\u2019ll need ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wix/DetoxInstruments"},"Detox Instruments"),". ",(0,r.kt)("strong",{parentName:"li"},"NOTE:")," only iOS is supported."),(0,r.kt)("li",{parentName:"ul"},"To capture ",(0,r.kt)("inlineCode",{parentName:"li"},".uihierarchy")," snapshots (",(0,r.kt)("strong",{parentName:"li"},"iOS only, Xcode 12.0+"),") on view action failures, add ",(0,r.kt)("inlineCode",{parentName:"li"},"--capture-view-hierarchy enabled"),"."),(0,r.kt)("li",{parentName:"ul"},"To take ",(0,r.kt)("inlineCode",{parentName:"li"},".png")," screenshots before and after each test, add ",(0,r.kt)("inlineCode",{parentName:"li"},"--take-screenshots all")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"--take-screenshots failing"),", if you want to keep only screenshots of failing tests).\\\nAlternatively, you might leverage the ",(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/api/device-object-api#devicetakescreenshotname"},"device.takeScreenshot()")," API for manual control.")),(0,r.kt)("h5",{id:"artifacts-root-directory"},"Artifacts root directory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To change artifacts root directory location (by default it is ",(0,r.kt)("inlineCode",{parentName:"li"},"./artifacts"),"), add ",(0,r.kt)("inlineCode",{parentName:"li"},"--artifacts-location <path>"),".\\\n",(0,r.kt)("strong",{parentName:"li"},"NOTE:")," There is a slightly obscure convention. If you want to create automatically a subdirectory with timestamp and configuration name (to avoid file overwrites upon consequent reruns), specify a path to directory that does not end with a slash. Otherwise, if you want to put artifacts straight to the specified directory (in a case where you make a single run only, e.g. on CI), add a slash (or a backslash) to the end.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --artifacts-location /tmp/detox_artifacts  # will also append /android.emu.release.2018-06-14 08:54:11Z\ndetox test --artifacts-location /tmp/detox_artifacts/ # won\u2019t append anything, hereby treating it as a root\n")),(0,r.kt)("h4",{id:"configuration-object"},"Configuration Object"),(0,r.kt)("p",null,"Detox artifacts can be configured in a more advanced way with the ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},".detoxrc"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "artifacts": {},\n  "configurations": {\n    "some.device": {\n      "artifacts": {},\n    },\n  },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," As you can see, there is a global and a local (per-configuration) configuration of the artifacts.\nDetox merges those configurations, and the per-device artifacts configuration has a higher priority over the general one."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts")," object has the following properties:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Example values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rootDir"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'".artifacts/"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"./artifacts")),(0,r.kt)("td",{parentName:"tr",align:null},"A directory, where all the recorded artifacts will be placed in. Please note that there is a trailing slash convention ",(0,r.kt)("a",{parentName:"td",href:"#artifacts-root-directory"},"described above"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pathBuilder"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"./e2e/config/pathbuilder.js"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Path to a module that exports a custom ",(0,r.kt)("inlineCode",{parentName:"td"},"PathBuilder")," ",(0,r.kt)("a",{parentName:"td",href:"#path-builder"},"\u1d43"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plugins"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ ... }")),(0,r.kt)("td",{parentName:"tr",align:null},"... see below"),(0,r.kt)("td",{parentName:"tr",align:null},"... see below")))),(0,r.kt)("h5",{id:"path-builder"},"Path builder"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u1d43")," ",(0,r.kt)("inlineCode",{parentName:"p"},"PathBuilder")," should be either an ",(0,r.kt)("em",{parentName:"p"},"object")," with a method ",(0,r.kt)("inlineCode",{parentName:"p"},"buildPathForTestArtifact")," or a ",(0,r.kt)("em",{parentName:"p"},"class")," \u2014 see the corresponding interfaces below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PathBuilder {\n    buildPathForTestArtifact(artifactPath: string, testSummary?: TestSummary): string;\n}\n\ninterface PathBuilderClass {\n    new(opts: { rootDir: string; }): PathBuilder;\n}\n")),(0,r.kt)("p",null,"As one can see, if a custom implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"PathBuilder")," exports a class instead of an object, then the class constructor can also get and save ",(0,r.kt)("inlineCode",{parentName:"p"},"rootDir")," location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class MyPathBuilder {\n  constructor({ rootDir }) {\n    this._rootDir = rootDir;\n  }\n\n  buildPathForTestArtifact(artifactName, testSummary) {\n    /* ... use this._rootDir ... */\n  }\n}\n\nmodule.exports = MyPathBuilder;\n")),(0,r.kt)("p",null,"Its main method, ",(0,r.kt)("inlineCode",{parentName:"p"},"buildPathForTestArtifact")," should return a full path to the custom artifact location, when called with a suggested artifact name (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"testDone.png"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"device.log"),") and the current ",(0,r.kt)("inlineCode",{parentName:"p"},"TestSummary"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"TestSummary")," is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface TestSummary {\n    /**\n     * Name of the current test, e.g., for:\n     * describe('that screen', () =>\n     *   it('should have a menu', () =>\n     * The expected string would be: \"should have a menu\".\n     */\n    title: string;\n    /**\n     * Full name of the current test, usually preceded by a suite name, e.g.:\n     * describe('that screen', () =>\n     *   it('should have a menu', () =>\n     * The expected string would be: \"that screen should have a menu\".\n     */\n    fullName: string;\n    /**\n     * Status of the current test. Free-form strings are not allowed.\n     */\n    status: 'running' | 'passed' | 'failed';\n    /**\n     * Clarifies the reason for why the test has failed.\n     * Expected to coincide only with status: 'failed'.\n     */\n    timedOut?: boolean;\n    /**\n     * If the test runner is capable of retrying failed tests, then\n     * this property indicates for which time this test is running.\n     * When the property is undefined, its value is considered to be 1.\n     * */\n    invocations?: number;\n}\n")),(0,r.kt)("p",null,"For more technical details, search for ",(0,r.kt)("inlineCode",{parentName:"p"},"ArtifactPathBuilder.js")," in Detox source code."),(0,r.kt)("p",null,"The further subsections describe the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," object structure."),(0,r.kt)("h5",{id:"screenshot-plugin"},"Screenshot Plugin"),(0,r.kt)("p",null,"Below is a default screenshot plugin object configuration, which is loaded implicitly and corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"manual")," preset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": {\n    "screenshot": {\n      "enabled": true,\n      "shouldTakeAutomaticSnapshots": false,\n      "keepOnlyFailedTestsArtifacts": false,\n      "takeWhen": {\n        "testStart": true,\n        "testDone": true,\n        "appNotReady": true,\n      },\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The other string presets override the following properties compared to the default configuration:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ enabled: false }"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failing")," => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ shouldTakeAutomaticSnapshots: true, keepOnlyFailedTestsArtifacts: true }"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," => ",(0,r.kt)("inlineCode",{parentName:"li"},"{ shouldTakeAutomaticSnapshots: true, keepOnlyFailedTestsArtifacts: false }"))),(0,r.kt)("p",null,"The individual property behavior is the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," is ",(0,r.kt)("em",{parentName:"li"},"false"),", then the screenshots will never be saved to the artifacts' folder."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"shouldTakeAutomaticSnapshots")," is ",(0,r.kt)("em",{parentName:"li"},"false"),", then no one of the events described in ",(0,r.kt)("inlineCode",{parentName:"li"},"takeWhen")," object is going to trigger a screenshot."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"keepOnlyFailedTestsArtifacts")," is ",(0,r.kt)("em",{parentName:"li"},"true"),", then only screenshots from a failed test will be saved to the artifacts folder."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"takeWhen")," is ",(0,r.kt)("em",{parentName:"li"},"undefined"),", it is going to have the default value described above (all props are true)."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"takeWhen")," is set to be an empty object ",(0,r.kt)("inlineCode",{parentName:"li"},"{}"),", that is equivalent to:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testStart": false,\n  "testDone": false,\n  "appNotReady": true,\n}\n')),(0,r.kt)("p",null,"Hence, for example, if you wish to enable only ",(0,r.kt)("inlineCode",{parentName:"p"},"testDone")," screenshots and leave taking ",(0,r.kt)("inlineCode",{parentName:"p"},"appNotReady")," screenshots as-is, you have to pass:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "artifacts": {\n    "plugins": {\n      "screenshot": {\n        "takeWhen": { "testDone": true }\n      }\n    }\n  }\n}\n')),(0,r.kt)("h5",{id:"video-plugin"},"Video Plugin"),(0,r.kt)("p",null,"To be done. See meanwhile the example in ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/configuration#artifacts-configuration"},"artifacts configuration section"),"."),(0,r.kt)("h5",{id:"log-plugin"},"Log Plugin"),(0,r.kt)("p",null,"To be done. See meanwhile the example in ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/configuration#artifacts-configuration"},"artifacts configuration section"),"."),(0,r.kt)("h5",{id:"instruments-plugin"},"Instruments Plugin"),(0,r.kt)("p",null,"To be done. See meanwhile the example in ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/configuration#artifacts-configuration"},"artifacts configuration section"),"."),(0,r.kt)("h5",{id:"ui-hierarchy-plugin"},"UI hierarchy Plugin"),(0,r.kt)("p",null,"To be done. See meanwhile the example in ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/configuration#artifacts-configuration"},"artifacts configuration section"),"."),(0,r.kt)("h5",{id:"timeline-plugin"},"Timeline Plugin"),(0,r.kt)("p",null,"When enabled using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--record-timeline all")," argument to Detox, the time-line of the entire testing session is recorded, based on trace calls made by Detox internally, and explicit calls made in user test-code, combined.\nThe final outcome is a JSON-like file named ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.trace.json"),", which, if loaded into a Chrome-browser tab with the ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://tracing")," URL, would look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Timeline artifact example",src:n(7881).Z})),(0,r.kt)("p",null,"This ",(0,r.kt)("em",{parentName:"p"},"tracing")," view provides a visual, hierarchical representation of the various processes that took place during the execution of the testing session, over the execution\u2019s ",(0,r.kt)("em",{parentName:"p"},"time-line"),". These processes appear as hierarchical ",(0,r.kt)("em",{parentName:"p"},"sections")," -- sometimes visually ordered in a parent-child way, depending on their formation time and context.\nTo name a few predefined events, which are generated by Detox itself:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"detoxInit"),":")," Initialization of Detox, prior to running the suites associated with a specific tests file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"awaitBoot"),":")," Waiting for an emulator to complete booting (thus being ready to run tests). Done in the surrounding context of ",(0,r.kt)("inlineCode",{parentName:"li"},"detoxInit")," (and hence visually appears \"below\" it), as waiting for emulators' boot is an inherent part of Detox' initialization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"appInstall")),", ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"appUninstall")),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Sanity":')," Execution of a user test suite called ",(0,r.kt)("em",{parentName:"li"},"Sanity"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"reloadRN"),":")," A dynamic reload of the React-Native. Bound to calls to ",(0,r.kt)("inlineCode",{parentName:"li"},"device.reloadReactNative()"),", specifically.")),(0,r.kt)("p",null,"In the above example, the following can be observed:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There were 2 test workers (the Worker #\u20601, Worker #\u20602 time-lines) executing a total of two test suites."),(0,r.kt)("li",{parentName:"ol"},"There were 2 Android emulators used for running the test session, namely ",(0,r.kt)("inlineCode",{parentName:"li"},"emulator-17800")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"emulator-12466"),". They were used by worker 1 and worker 2, respectively."),(0,r.kt)("li",{parentName:"ol"},"It took about a total of 54 seconds to initialize and run all the tests."),(0,r.kt)("li",{parentName:"ol"},"The first worker took longer to initialize (as depicted by the ",(0,r.kt)("inlineCode",{parentName:"li"},"detoxInit")," section). In particular, that happened because it took longer for the associated emulator too finish bootstrapping (see the child ",(0,r.kt)("inlineCode",{parentName:"li"},"awaitBoot")," section). That suggests there might be a problem with the test execution environment.")),(0,r.kt)("h6",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This artifact can be helpful in looking up ways to optimize the execution of your E2E tests.")," It may surface shortcomings in the test environment\u2019s ability to run the test, or provide a means to consider different ways of splitting up your tests over test files so as to better utilize parallelism."),(0,r.kt)("p",null,"The artifact can in fact be even better utilized -- to the level of inspecting the inside of your tests, by explicitly calling ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.traceCall()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.trace.startSection()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.trace.endSection()")," ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/detox-object-api#detoxtracecall"},"APIs")," inside your tests."),(0,r.kt)("h3",{id:"artifacts-structure"},"Artifacts Structure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Artifacts root folder")," is created per detox test run. If, for instance,",(0,r.kt)("inlineCode",{parentName:"p"},"--artifacts-location /tmp")," is used with ",(0,r.kt)("inlineCode",{parentName:"p"},"--configuration ios.sim.release")," configuration on 14th June 2018 at 11:02:11 GMT+02, then the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/ios.sim.release.2018-06-14 09:02:11Z")," is created.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Test folder")," is created per test inside the root folder. The folder name consists of the test number, and the test\u2019s full name provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.afterEach(testSummary)")," as explained above and in ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/detox-object-api"},"detox object")," documentation. For instance, for the above example, the following folders will be created inside ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/ios.sim.release.2018-06-14 09:02:11Z"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"\u2717 Assertions should assert an element has (accessibility)\n\u2713 Network Synchronization Sync with short network requests - 100ms\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Artifacts files")," are created inside the test folders. The files suffixes stand for the files types (currently there are .err.log and .out.log), and the files prefixes are the launch numbers of the application per test (if the app was executed more than once per test, you will have several artifacts of each type - one per launch). For instance, a test folder may contain the following artifacts files:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"test.log\ntest.mp4\ntest.dtxrec/\nbeforeEach.png\nafterEach.png\n")))),(0,r.kt)("h4",{id:"example-of-the-structure"},"Example of the structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},"artifacts/android.emu.release.2018-06-12 06:36:18Z/startup.log\nartifacts/android.emu.release.2018-06-12 06:36:18Z/\u2717 Assertions should assert an element has (accessibility) id/beforeEach.png\nartifacts/android.emu.release.2018-06-12 06:36:18Z/\u2717 Assertions should assert an element has (accessibility) id/test.log\nartifacts/android.emu.release.2018-06-12 06:36:18Z/\u2717 Assertions should assert an element has (accessibility) id/test.mp4\nartifacts/android.emu.release.2018-06-12 06:36:18Z/\u2717 Assertions should assert an element has (accessibility) id/afterEach.png\n")),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"screenshots-and-videos-do-not-appear-in-the-artifacts-folder"},"Screenshots and Videos Do Not Appear in the Artifacts Folder"),(0,r.kt)("p",null,"Make sure you have ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.beforeEach(testSummary)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"detox.afterEach(testSummary)")," calls in your ",(0,r.kt)("inlineCode",{parentName:"p"},"./e2e/init.js"),". Check out the recommendations on how to do that for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native/e2e/init.js"},"mocha")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/examples/demo-react-native-jest/e2e/init.js"},"jest")," using the out-of-the-box adapters."),(0,r.kt)("h4",{id:"video-recording-issues-on-ci"},"Video Recording Issues on CI"),(0,r.kt)("p",null,"For iOS, you might be getting errors on CI similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plain",metastring:"text",text:!0},'Error: Error Domain=NSPOSIXErrorDomain Code=22 "Invalid argument" UserInfo={NSLocalizedDescription=Video recording requires hardware Metal capability.}.\n')),(0,r.kt)("p",null,"Unfortunately, this error is beyond our reach. To fix it, you have to enable hardware acceleration on your build machine, or just disable video recording on CI if it is not possible to turn on the acceleration."),(0,r.kt)("p",null,"There might be a similar issue on Android when the screen recording process exits with an error on CI. While the solution might be identical to the one above, also you might try to experiment with other emulator devices and Android OS versions to see if it helps."),(0,r.kt)("h4",{id:"detox-instruments-is-installed-in-a-custom-location"},"Detox Instruments is Installed in a Custom Location"),(0,r.kt)("p",null,"If you have to use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxInstruments"},"Detox Instruments")," installed in a custom location, you can point Detox to it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DETOX_INSTRUMENTS_PATH")," environment variable, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'DETOX_INSTRUMENTS_PATH="/path/to/Detox Instruments.app" detox test ...\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If ",(0,r.kt)("strong",{parentName:"p"},"Detox Instruments")," had been ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxInstruments/blob/master/Documentation/XcodeIntegrationGuide.md"},"integrated into your project"),", then the integrated ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/DetoxInstruments/tree/master/Profiler"},"Detox Profiler framework")," will be used when profiling with Detox.")),(0,r.kt)("h4",{id:"ctrlc-does-not-clean-up-temporary-files"},(0,r.kt)("inlineCode",{parentName:"h4"},"Ctrl+C")," Does Not Clean Up Temporary Files"),(0,r.kt)("p",null,"This is a known issue. :man","_","shrugging:\nAfter you press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+C")," and stop the tests, some of temporary files won\u2019t get erased (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/sdcard/83541_0.mp4")," on Android emulator, or ",(0,r.kt)("inlineCode",{parentName:"p"},"/private/var/folders/lm/thz8hdxs4v3fppjh0fjc2twhfl_3x2/T/f12a4fcb-0d1f-4d98-866c-e7cea4942ade.png")," on your Mac).\nIt cannot be solved on behalf of Detox itself, because the problem has to do with how Jest runner terminates its puppet processes.\nThe issue is on our radar, but the ETA for the fix stays unknown.\nIf you feel able to contribute the fix to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest"},"Jest"),", you are very welcome."))}u.isMDXComponent=!0},7881:function(e,t,n){t.Z=n.p+"assets/images/timeline-artifact-330d8f1de5146484a15c9f5c9f4d9709.png"}}]);