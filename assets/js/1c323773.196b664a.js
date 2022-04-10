"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8627],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,x=d["".concat(a,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(x,p(p({ref:t},s),{},{components:r})):n.createElement(x,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,p[1]=u;for(var c=2;c<i;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8040:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),p=["components"],u={id:"expo",slug:"guide/expo",title:"Expo",sidebar_label:"Expo"},a=void 0,c={unversionedId:"expo",id:"version-19.x/expo",isDocsHomePage:!1,title:"Expo",description:"Expo",source:"@site/versioned_docs/version-19.x/Guide.Expo.md",sourceDirName:".",slug:"/guide/expo",permalink:"/Detox/docs/guide/expo",editUrl:"https://github.com/wix/Detox/edit/master/docs/versioned_docs/version-19.x/Guide.Expo.md",tags:[],version:"19.x",frontMatter:{id:"expo",slug:"guide/expo",title:"Expo",sidebar_label:"Expo"},sidebar:"version-19.x/tutorialSidebar",previous:{title:"Third-Party Drivers",permalink:"/Detox/docs/guide/third-party-drivers"},next:{title:"Uninstalling Detox",permalink:"/Detox/docs/guide/uninstalling"}},s=[{value:"Expo",id:"expo",children:[],level:2}],l={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"expo"},"Expo"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": Expo support with Detox is entirely a community driven effort. We have no specific support in Detox for Expo applications (ejected or otherwise)."),(0,i.kt)("p",null,"If you are seeing an issue, it is most likely not an issue with Detox itself, but with the Expo runtime or with an incorrect Detox setup. For support on how to use Detox with Expo, you should contact the Expo team or the Expo community."),(0,i.kt)("p",null,"General Expo issues will no longer be allowed in the Detox issue tracker. If you\u2019ve investigated the Expo runtime or your app, and found a genuine issue with Detox, please open an issue."))}d.isMDXComponent=!0}}]);