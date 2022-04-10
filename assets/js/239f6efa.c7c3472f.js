"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3524],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),u=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<r;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8071:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var i=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],s={id:"running-on-ci",slug:"guide/running-on-ci",title:"Running on CI",sidebar_label:"Running on CI"},l=void 0,u={unversionedId:"running-on-ci",id:"version-19.x/running-on-ci",isDocsHomePage:!1,title:"Running on CI",description:"Running on CI",source:"@site/versioned_docs/version-19.x/Guide.RunningOnCI.md",sourceDirName:".",slug:"/guide/running-on-ci",permalink:"/Detox/docs/guide/running-on-ci",editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.RunningOnCI.md",tags:[],version:"19.x",frontMatter:{id:"running-on-ci",slug:"guide/running-on-ci",title:"Running on CI",sidebar_label:"Running on CI"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Developing Your App While Writing Tests",permalink:"/Detox/docs/guide/developing-while-writing-tests"},next:{title:"Debugging in Xcode During Detox Tests",permalink:"/Detox/docs/guide/debugging-in-xcode"}},c=[{value:"Running on CI",id:"running-on-ci",children:[{value:"Step 1: Prepare a Release Configuration for Your App",id:"step-1-prepare-a-release-configuration-for-your-app",children:[],level:3},{value:"Step 2: Add <code>build</code> and <code>test</code> Commands to Your CI Script",id:"step-2-add-build-and-test-commands-to-your-ci-script",children:[],level:3},{value:"Running Android Tests on CI",id:"running-android-tests-on-ci",children:[],level:3},{value:"Appendix",id:"appendix",children:[{value:"\u2022 Running Detox on Travis CI",id:"-running-detox-on-travis-ci",children:[],level:4},{value:"\u2022 Running Detox on Bitrise",id:"-running-detox-on-bitrise",children:[],level:4},{value:"\u2022 Running Detox on GitLab CI - Android Only",id:"-running-detox-on-gitlab-ci---android-only",children:[],level:4}],level:3}],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"running-on-ci"},"Running on CI"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Disclaimer: This guide is focused on iOS (i.e. lacking info about Android) and is generally out of date.")),(0,r.kt)("p",null,"When your test suite is finally ready, it should be set up to run automatically on your CI server on every git push. This will alert you if new changes to the app break existing functionality."),(0,r.kt)("p",null,"Running Detox on CI is not that different from running it locally. There are two main differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should test a release build rather than a debug build"),(0,r.kt)("li",{parentName:"ul"},"Tell Detox to shut down the simulator when test is over")),(0,r.kt)("h3",{id:"step-1-prepare-a-release-configuration-for-your-app"},"Step 1: Prepare a Release Configuration for Your App"),(0,r.kt)("p",null,"We will need to create a ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/api/configuration#device-configurations"},"release device configuration for Detox")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"detox")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"detox": {\n  "devices": {\n    "simulator": {\n      "type": "ios.simulator",\n      "device": {\n        "type": "iPhone 12 Pro Max"\n      }\n    }\n  },\n  "apps": {\n    "ios.release": {\n      "type": "ios.app",\n      "binaryPath": "ios/build/Build/Products/Release-iphonesimulator/example.app",\n      "build": "xcodebuild -project ios/example.xcodeproj -scheme example -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",\n    }\n  },\n  "configurations": {\n    "ios.sim.release": {\n      "device": "simulator",\n      "app": "ios.release"\n    }\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TIP: Notice that the name ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," above should be replaced with your actual project name.")),(0,r.kt)("h3",{id:"step-2-add-build-and-test-commands-to-your-ci-script"},"Step 2: Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"test")," Commands to Your CI Script"),(0,r.kt)("p",null,"Assuming your CI is executing some sort of shell script, add the following commands that should run inside the project root:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox build --configuration ios.sim.release\ndetox test --configuration ios.sim.release --cleanup\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," Adding ",(0,r.kt)("inlineCode",{parentName:"p"},"--cleanup")," to the test command will make sure detox exits cleanly by shutting down the simulator when the test is over.")),(0,r.kt)("h3",{id:"running-android-tests-on-ci"},"Running Android Tests on CI"),(0,r.kt)("p",null,"Setting up a CI environment capable of running Android tests isn\u2019t as trivial. Fortunately, we\u2019ve written all about it in a ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/wix-engineering/how-to-execute-android-ui-tests-on-ci-and-stay-alive-eb9089d88c1f"},"blogpost on medium!")),(0,r.kt)("h3",{id:"appendix"},"Appendix"),(0,r.kt)("h4",{id:"-running-detox-on-travis-ci"},"\u2022 Running Detox on ",(0,r.kt)("a",{parentName:"h4",href:"https://travis-ci.org/"},"Travis CI")),(0,r.kt)("p",null,"Detox\u2019s own build is running on Travis, check out Detox\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wix/Detox/tree/master/.travis.yml"},(0,r.kt)("inlineCode",{parentName:"a"},".travis.yml"))," file to see how it\u2019s done."),(0,r.kt)("p",null,"This is a simple example configuration to get you started with Detox on Travis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'language: objective-c\nosx_image: xcode8.3\n\nbranches:\n  only:\n  - master\n\nenv:\n  global:\n  - NODE_VERSION=stable\n\ninstall:\n- brew tap wix/brew\n- brew install applesimutils\n- curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash\n- export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"\n- nvm install $NODE_VERSION\n- nvm use $NODE_VERSION\n- nvm alias default $NODE_VERSION\n\n- npm install -g react-native-cli\n- npm install -g detox-cli\n\nscript:\n- detox build --configuration ios.sim.release\n- detox test --configuration ios.sim.release --cleanup\n\n')),(0,r.kt)("h4",{id:"-running-detox-on-bitrise"},"\u2022 Running Detox on ",(0,r.kt)("a",{parentName:"h4",href:"https://www.bitrise.io/"},"Bitrise")),(0,r.kt)("p",null,"Bitrise is a popular CI service for automating React Native apps. If you are looking to get started with Bitrise, check out ",(0,r.kt)("a",{parentName:"p",href:"https://blog.bitrise.io/post/how-to-set-up-a-react-native-app-on-bitrise"},"this")," guide."),(0,r.kt)("p",null,"You can run Detox on Bitrise by creating a new workflow. Below is an example of the Bitrise ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," file for a workflow called ",(0,r.kt)("inlineCode",{parentName:"p"},"tests"),"."),(0,r.kt)("p",null,"Additionally, you can use a ",(0,r.kt)("a",{parentName:"p",href:"https://devcenter.bitrise.io/en/apps/webhooks/adding-incoming-webhooks.html"},"webhook")," on Bitrise to post the build status directly into your Slack channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"---\nformat_version: 1.1.0\ndefault_step_lib_source: https://github.com/bitrise-io/bitrise-steplib.git\ntrigger_map:\n- push_branch: \"*\"\n  workflow: tests\nworkflows:\n  _tests_setup:\n    steps:\n    - activate-ssh-key: {}\n    - git-clone:\n        inputs:\n        - clone_depth: ''\n        title: Git Clone Repo\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            npm cache verify\n\n            npm install\n        title: Install NPM Packages\n    before_run:\n    after_run:\n  _detox_tests:\n    before_run: []\n    after_run: []\n    steps:\n    - npm:\n        inputs:\n        - command: install -g detox-cli\n        title: Install Detox CLI\n    - npm:\n        inputs:\n        - command: install -g react-native-cli\n        title: Install React Native CLI\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            brew tap wix/brew\n            brew install applesimutils\n        title: Install Detox Utils\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            detox build --configuration ios.sim.release\n        title: Detox - Build Release App\n    - script:\n        inputs:\n        - content: |-\n            #!/bin/bash\n\n            detox test --configuration ios.sim.release --cleanup\n        title: Detox - Run E2E Tests\n  tests:\n    before_run:\n    - _tests_setup\n    - _detox_tests\n    after_run: []\n")),(0,r.kt)("h4",{id:"-running-detox-on-gitlab-ci---android-only"},"\u2022 Running Detox on ",(0,r.kt)("a",{parentName:"h4",href:"https://docs.gitlab.com/ee/ci/README.html"},"GitLab CI")," - Android Only"),(0,r.kt)("p",null,"GitLab is also a popular git management service which also include a built-in CI system. They provide free runner up to 2000 minutes for private projects, however, the runners provided by them cannot be used to run Detox due to the lack of KVM support (in order to run Android Emulators). You can, instead, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/runners/README.html"},"create your own runner")," with KVM support. Some example of cloud providers offering this are: ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/products/droplets/"},"Digital Ocean"),", AWS (with ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/c5/"},"C5 instance types"),"), ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/instances/enable-nested-virtualization-vm-instances"},"Google Cloud")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/virtual-machines/windows/nested-virtualization"},"Azure")),(0,r.kt)("p",null,"One example of such job can be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'detox_e2e:\n  stage: test\n  image: reactnativecommunity/react-native-android\n  variables:\n  before_script:\n    - npm i -g envinfo detox-cli && envinfo\n    # Increase file watcher limit, see more here: https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details\n    - echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p\n    - mkdir -p /root/.android && touch /root/.android/repositories.cfg\n    # The Dockerimage provides two paths for sdkmanager and avdmanager, which the defaults are from $ANDROID_HOME/cmdline-tools\n    # That is not compatible with the one that Detox is using ($ANDROID_HOME/tools/bin)\n    - echo yes | $ANDROID_HOME/tools/bin/sdkmanager --channel=0 --verbose "system-images;android-27;default;x86_64"\n    # Nexus 6P, API 27, XXXHDPI\n    - echo no | $ANDROID_HOME/tools/bin/avdmanager --verbose create avd --force --name "Nexus6P" --package "system-images;android-27;default;x86_64" --sdcard 200M --device 11\n    - adb start-server\n  script:\n    - npx detox build -c android.emu.release.ci\n    - npx detox test -c android.emu.release.ci --headless\n')))}d.isMDXComponent=!0}}]);