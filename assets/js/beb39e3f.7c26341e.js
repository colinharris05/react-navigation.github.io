"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[39315],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),u=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),m=r,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return t?o.createElement(d,a(a({ref:n},l),{},{components:t})):o.createElement(d,a({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4024:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"use-link-to",title:"useLinkTo",sidebar_label:"useLinkTo"},c=void 0,u={unversionedId:"use-link-to",id:"version-6.x/use-link-to",isDocsHomePage:!1,title:"useLinkTo",description:"The useLinkTo hook lets us navigate to a screen using a path instead of a screen name based on the linking options. It returns a function that receives the path to navigate to.",source:"@site/versioned_docs/version-6.x/use-link-to.md",sourceDirName:".",slug:"/use-link-to",permalink:"/docs/use-link-to",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-link-to.md",tags:[],version:"6.x",frontMatter:{id:"use-link-to",title:"useLinkTo",sidebar_label:"useLinkTo"},sidebar:"version-6.x/docs",previous:{title:"useIsFocused",permalink:"/docs/use-is-focused"},next:{title:"useLinkProps",permalink:"/docs/use-link-props"}},l=[{value:"Using with class component",id:"using-with-class-component",children:[],level:2}],p={toc:l};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"useLinkTo")," hook lets us navigate to a screen using a path instead of a screen name based on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/navigation-container#linking"},(0,i.kt)("inlineCode",{parentName:"a"},"linking")," options"),". It returns a function that receives the path to navigate to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useLinkTo } from '@react-navigation/native';\n\n// ...\n\nfunction Home() {\n  const linkTo = useLinkTo();\n\n  return (\n    <Button onPress={() => linkTo('/profile/jane')}>\n      Go to Jane's profile\n    </Button>\n  );\n}\n")),(0,i.kt)("p",null,"This is a low-level hook used to build more complex behavior on top. We recommended to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/use-link-props"},(0,i.kt)("inlineCode",{parentName:"a"},"useLinkProps")," hook")," to build your custom link components instead of using this hook directly. It will ensure that your component is properly accessible on the web."),(0,i.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,i.kt)("p",null,"You can wrap your class component in a function component to use the hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class Home extends React.Component {\n  render() {\n    // Get it from props\n    const { linkTo } = this.props;\n  }\n}\n\n// Wrap and export\nexport default function (props) {\n  const linkTo = useLinkTo();\n\n  return <Profile {...props} linkTo={linkTo} />;\n}\n")))}f.isMDXComponent=!0}}]);