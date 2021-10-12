"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3428],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,i(i({ref:n},l),{},{components:t})):a.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69537:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],c={id:"screen",title:"Screen",sidebar_label:"Screen"},s=void 0,p={unversionedId:"screen",id:"version-6.x/screen",isDocsHomePage:!1,title:"Screen",description:"Screen components are used to configure various aspects of screens inside a navigator.",source:"@site/versioned_docs/version-6.x/screen.md",sourceDirName:".",slug:"/screen",permalink:"/docs/screen",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/screen.md",tags:[],version:"6.x",frontMatter:{id:"screen",title:"Screen",sidebar_label:"Screen"},sidebar:"version-6.x/docs",previous:{title:"Group",permalink:"/docs/group"},next:{title:"Options for screens",permalink:"/docs/screen-options"}},l=[{value:"Props",id:"props",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>options</code>",id:"options",children:[]},{value:"<code>initialParams</code>",id:"initialparams",children:[]},{value:"<code>getId</code>",id:"getid",children:[]},{value:"<code>component</code>",id:"component",children:[]},{value:"<code>getComponent</code>",id:"getcomponent",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>navigationKey</code>",id:"navigationkey",children:[]}]}],d={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," components are used to configure various aspects of screens inside a navigator."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Screen")," is returned from a ",(0,o.kt)("inlineCode",{parentName:"p"},"createXNavigator")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties\n")),(0,o.kt)("p",null,"After creating the navigator, it can be used as children of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Navigator")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Navigator>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n')),(0,o.kt)("p",null,"You need to provide at least a name and a component to render for each screen."),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("h3",{id:"name"},(0,o.kt)("inlineCode",{parentName:"h3"},"name")),(0,o.kt)("p",null,"The name to use for the screen. It accepts a string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen name="Profile" component={ProfileScreen} />\n')),(0,o.kt)("p",null,"This name is used to navigate to the screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Profile');\n")),(0,o.kt)("p",null,"It is also used for the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," property in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,o.kt)("inlineCode",{parentName:"a"},"route")),"."),(0,o.kt)("p",null,"While it is supported, we recommend to avoid spaces or special characters in screen names and keep them simple."),(0,o.kt)("h3",{id:"options"},(0,o.kt)("inlineCode",{parentName:"h3"},"options")),(0,o.kt)("p",null,"Options to configure how the screen gets presented in the navigator. It accepts either an object or a function returning an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  name=\"Profile\"\n  component={ProfileScreen}\n  options={{\n    title: 'Awesome app',\n  }}\n/>\n")),(0,o.kt)("p",null,"When you pass a function, it'll receive the ",(0,o.kt)("a",{parentName:"p",href:"/docs/route-prop"},(0,o.kt)("inlineCode",{parentName:"a"},"route"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/navigation-prop"},(0,o.kt)("inlineCode",{parentName:"a"},"navigation")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Profile"\n  component={ProfileScreen}\n  options={({ route, navigation }) => ({\n    title: route.params.userId,\n  })}\n/>\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/screen-options"},"Options for screens")," for more details and examples."),(0,o.kt)("h3",{id:"initialparams"},(0,o.kt)("inlineCode",{parentName:"h3"},"initialParams")),(0,o.kt)("p",null,"Initial params to use for the screen. If a screen is used as ",(0,o.kt)("inlineCode",{parentName:"p"},"initialRouteName"),", it'll contain the params from ",(0,o.kt)("inlineCode",{parentName:"p"},"initialParams"),". If you navigate to a new screen, the params passed are shallow merged with the initial params."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Details"\n  component={DetailsScreen}\n  initialParams={{ itemId: 42 }}\n/>\n')),(0,o.kt)("h3",{id:"getid"},(0,o.kt)("inlineCode",{parentName:"h3"},"getId")),(0,o.kt)("p",null,"Callback to return an unique ID to use for the screen. It receives an object with the route params:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen\n  name="Profile"\n  component={ProfileScreen}\n  getId={({ params }) => params.userId}\n/>\n')),(0,o.kt)("p",null,"By default, calling ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate('ScreenName', params)")," identifies the screen by its name, and navigates to the existing screen instead of adding a new one. If you specify ",(0,o.kt)("inlineCode",{parentName:"p"},"getId")," and it doesn't return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", the screen is identified by both the screen name and the returned ID."),(0,o.kt)("p",null,"This is useful for preventing multiple instances of the same screen in the navigator, e.g. - when ",(0,o.kt)("inlineCode",{parentName:"p"},"params.userId")," is used as an ID, subsequent navigation to the screen with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," will navigate to the existing screen instead of adding a new one to the stack. If the navigation was with a different ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),", then it'll add a new screen."),(0,o.kt)("h3",{id:"component"},(0,o.kt)("inlineCode",{parentName:"h3"},"component")),(0,o.kt)("p",null,"The React Component to render for the screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen name="Profile" component={ProfileScreen} />\n')),(0,o.kt)("h3",{id:"getcomponent"},(0,o.kt)("inlineCode",{parentName:"h3"},"getComponent")),(0,o.kt)("p",null,"Callback to return the React Component to render for the screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  name=\"Profile\"\n  getComponent={() => require('./ProfileScreen').default}\n/>\n")),(0,o.kt)("p",null,"You can use this approach instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," prop if you want the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProfileScreen")," module to be lazily evaluated when needed. This is especially useful when using ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/ram-bundles-inline-requires"},"ram bundles")," to improve initial load."),(0,o.kt)("h3",{id:"children"},(0,o.kt)("inlineCode",{parentName:"h3"},"children")),(0,o.kt)("p",null,"Render callback to return React Element to use for the screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<Stack.Screen name="Profile">\n  {(props) => <ProfileScreen {...props} />}\n</Stack.Screen>\n')),(0,o.kt)("p",null,"You can use this approach instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," prop if you need to pass additional props. Though we recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React context")," for passing data instead."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: By default, React Navigation applies optimizations to screen components to prevent unnecessary renders. Using a render callback removes those optimizations. So if you use a render callback, you'll need to ensure that you use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactmemo"},(0,o.kt)("inlineCode",{parentName:"a"},"React.memo"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactpurecomponent"},(0,o.kt)("inlineCode",{parentName:"a"},"React.PureComponent"))," for your screen components to avoid performance issues.")),(0,o.kt)("h3",{id:"navigationkey"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigationKey")),(0,o.kt)("p",null,"Optional key for this screen. This doesn't need to be unique. If the key changes, existing screens with this name will be removed (if used in a stack navigator) or reset (if used in a tab or drawer navigator)."),(0,o.kt)("p",null,"This can be useful when we have some screens which we want to be removed or reset when the condition changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  navigationKey={isSignedIn ? 'user' : 'guest'}\n  name=\"Profile\"\n  component={ProfileScreen}\n/>\n")))}u.isMDXComponent=!0}}]);