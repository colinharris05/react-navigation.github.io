"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[9249],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return b}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=i,h=u["".concat(s,".").concat(b)]||u[b]||p[b]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),i=a(67294),r=a(72389),o=a(79443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(99558),d=a(86010),c="tabItem_1uMI";function p(e){var t,a,n,r=e.lazy,o=e.block,p=e.defaultValue,u=e.values,b=e.groupId,h=e.className,m=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=m.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=m[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=l(),y=f.tabGroupChoices,N=f.setTabGroupChoices,w=(0,i.useState)(g),C=w[0],T=w[1],B=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=y[b];null!=P&&P!==C&&v.some((function(e){return e.value===P}))&&T(P)}var x=function(e){var t=e.currentTarget,a=B.indexOf(t),n=v[a].value;n!==C&&(S(t),T(n),null!=b&&N(b,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=B.indexOf(e.currentTarget)+1;a=B[n]||B[0];break;case"ArrowLeft":var i=B.indexOf(e.currentTarget)-1;a=B[i]||B[B.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,d.Z)("tabs__item",c,{"tabs__item--active":C===t}),key:t,ref:function(e){return B.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=a?a:t)}))),r?(0,i.cloneElement)(m.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,r.Z)();return i.createElement(p,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},41879:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(55064),l=a(58215),s=["components"],d={id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},c=void 0,p={unversionedId:"material-top-tab-navigator",id:"version-6.x/material-top-tab-navigator",isDocsHomePage:!1,title:"Material Top Tabs Navigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-6.x/material-top-tab-navigator.md",sourceDirName:".",slug:"/material-top-tab-navigator",permalink:"/docs/material-top-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/material-top-tab-navigator.md",tags:[],version:"6.x",frontMatter:{id:"material-top-tab-navigator",title:"Material Top Tabs Navigator",sidebar_label:"Material Top Tabs"},sidebar:"version-6.x/docs",previous:{title:"Material Bottom Tabs",permalink:"/docs/material-bottom-tab-navigator"},next:{title:"useNavigation",permalink:"/docs/use-navigation"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"API Definition",id:"api-definition",children:[{value:"Props",id:"props",children:[{value:"<code>id</code>",id:"id",children:[],level:4},{value:"<code>initialRouteName</code>",id:"initialroutename",children:[],level:4},{value:"<code>screenOptions</code>",id:"screenoptions",children:[],level:4},{value:"<code>backBehavior</code>",id:"backbehavior",children:[],level:4},{value:"<code>tabBarPosition</code>",id:"tabbarposition",children:[],level:4},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[],level:4},{value:"<code>initialLayout</code>",id:"initiallayout",children:[],level:4},{value:"<code>sceneContainerStyle</code>",id:"scenecontainerstyle",children:[],level:4},{value:"<code>style</code>",id:"style",children:[],level:4},{value:"<code>tabBar</code>",id:"tabbar",children:[],level:4}],level:3},{value:"Options",id:"options",children:[{value:"<code>title</code>",id:"title",children:[],level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",children:[],level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",children:[],level:4},{value:"<code>tabBarAllowFontScaling</code>",id:"tabbarallowfontscaling",children:[],level:4},{value:"<code>tabBarShowLabel</code>",id:"tabbarshowlabel",children:[],level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",children:[],level:4},{value:"<code>tabBarShowIcon</code>",id:"tabbarshowicon",children:[],level:4},{value:"<code>tabBarBadge</code>",id:"tabbarbadge",children:[],level:4},{value:"<code>tabBarIndicator</code>",id:"tabbarindicator",children:[],level:4},{value:"<code>tabBarIndicatorStyle</code>",id:"tabbarindicatorstyle",children:[],level:4},{value:"<code>tabBarIndicatorContainerStyle</code>",id:"tabbarindicatorcontainerstyle",children:[],level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",children:[],level:4},{value:"<code>tabBarActiveTintColor</code>",id:"tabbaractivetintcolor",children:[],level:4},{value:"<code>tabBarInactiveTintColor</code>",id:"tabbarinactivetintcolor",children:[],level:4},{value:"<code>tabBarPressColor</code>",id:"tabbarpresscolor",children:[],level:4},{value:"<code>tabBarPressOpacity</code>",id:"tabbarpressopacity",children:[],level:4},{value:"<code>tabBarBounces</code>",id:"tabbarbounces",children:[],level:4},{value:"<code>tabBarScrollEnabled</code>",id:"tabbarscrollenabled",children:[],level:4},{value:"<code>tabBarIconStyle</code>",id:"tabbariconstyle",children:[],level:4},{value:"<code>tabBarLabelStyle</code>",id:"tabbarlabelstyle",children:[],level:4},{value:"<code>tabBarItemStyle</code>",id:"tabbaritemstyle",children:[],level:4},{value:"<code>tabBarContentContainerStyle</code>",id:"tabbarcontentcontainerstyle",children:[],level:4},{value:"<code>tabBarStyle</code>",id:"tabbarstyle",children:[],level:4},{value:"<code>swipeEnabled</code>",id:"swipeenabled",children:[],level:4},{value:"<code>lazy</code>",id:"lazy",children:[],level:4},{value:"<code>lazyPreloadDistance</code>",id:"lazypreloaddistance",children:[],level:4},{value:"<code>lazyPlaceholder</code>",id:"lazyplaceholder",children:[],level:4}],level:3},{value:"Events",id:"events",children:[{value:"<code>tabPress</code>",id:"tabpress",children:[],level:4},{value:"<code>tabLongPress</code>",id:"tablongpress",children:[],level:4}],level:3},{value:"Helpers",id:"helpers",children:[{value:"<code>jumpTo</code>",id:"jumpto",children:[],level:4}],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],b={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the tabs or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),(0,r.kt)("p",null,"This wraps ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tab-view"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-tab-view")),"."),(0,r.kt)("div",{style:{display:"flex",margin:"16px 0"}},(0,r.kt)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},(0,r.kt)("source",{src:"/assets/navigators/tabs/material-top-tabs.mov"}))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use this navigator, ensure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-top-tabs"},(0,r.kt)("inlineCode",{parentName:"a"},"@react-navigation/material-top-tabs")),":"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/material-top-tabs react-native-tab-view\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/material-top-tabs react-native-tab-view\n")))),(0,r.kt)("p",null,"You also need to install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-pager-view"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-pager-view")),"."),(0,r.kt)("p",null,"If you have a Expo managed project, in your project directory, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npx expo install react-native-pager-view\n")),(0,r.kt)("p",null,"If you have a bare React Native project, in your project directory, run:"),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-pager-view\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-pager-view\n")))),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("p",null,"To use this tab navigator, import it from ",(0,r.kt)("inlineCode",{parentName:"p"},"@react-navigation/material-top-tabs"),":"),(0,r.kt)("samp",{id:"material-top-tab-based-navigation-minimal"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { createMaterialTopTabNavigator } from \'@react-navigation/material-top-tabs\';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",(0,r.kt)("a",{parentName:"p",href:"/docs/tab-based-navigation"},"Tab Navigation"))),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"Optional unique ID for the navigator. This can be used with ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-prop#getparent"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation.getParent"))," to refer to this navigator in a child navigator."),(0,r.kt)("h4",{id:"initialroutename"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialRouteName")),(0,r.kt)("p",null,"The name of the route to render on first load of the navigator."),(0,r.kt)("h4",{id:"screenoptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"screenOptions")),(0,r.kt)("p",null,"Default options to use for the screens in the navigator."),(0,r.kt)("h4",{id:"backbehavior"},(0,r.kt)("inlineCode",{parentName:"h4"},"backBehavior")),(0,r.kt)("p",null,"This controls how going back in the navigator is handled. This includes when the back button is pressed/back gesture is performed, or ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," is called."),(0,r.kt)("p",null,"It supports the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"firstRoute")," - return to the first tab (default)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialRoute")," - return to initial tab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order")," - return to previous tab (in the order they are shown in the tab bar)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")," - return to last visited tab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," - do not handle back button")),(0,r.kt)("h4",{id:"tabbarposition"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPosition")),(0,r.kt)("p",null,"Position of the tab bar in the tab view. Possible values are ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'bottom'"),". Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'"),"."),(0,r.kt)("h4",{id:"keyboarddismissmode"},(0,r.kt)("inlineCode",{parentName:"h4"},"keyboardDismissMode")),(0,r.kt)("p",null,"String indicating whether the keyboard gets dismissed in response to a drag gesture. Possible values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'auto'")," (default): the keyboard is dismissed when the index changes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-drag'"),": the keyboard is dismissed when a drag begins."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'none'"),": drags do not dismiss the keyboard.")),(0,r.kt)("h4",{id:"initiallayout"},(0,r.kt)("inlineCode",{parentName:"h4"},"initialLayout")),(0,r.kt)("p",null,"Object containing the initial height and width of the screens. Passing this will improve the initial rendering performance. For most apps, this is a good default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  width: Dimensions.get('window').width;\n}\n")),(0,r.kt)("h4",{id:"scenecontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"sceneContainerStyle")),(0,r.kt)("p",null,"Style to apply to the view wrapping each screen. You can pass this to override some default styles such as overflow clipping."),(0,r.kt)("h4",{id:"style"},(0,r.kt)("inlineCode",{parentName:"h4"},"style")),(0,r.kt)("p",null,"Style to apply to the tab view container."),(0,r.kt)("h4",{id:"tabbar"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBar")),(0,r.kt)("p",null,"Function that returns a React element to display as the tab bar."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("samp",{id:"material-top-tab-custom-tab-bar"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Animated, View, TouchableOpacity } from 'react-native';\n\nfunction MyTabBar({ state, descriptors, navigation, position }) {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      {state.routes.map((route, index) => {\n        const { options } = descriptors[route.key];\n        const label =\n          options.tabBarLabel !== undefined\n            ? options.tabBarLabel\n            : options.title !== undefined\n            ? options.title\n            : route.name;\n\n        const isFocused = state.index === index;\n\n        const onPress = () => {\n          const event = navigation.emit({\n            type: 'tabPress',\n            target: route.key,\n            canPreventDefault: true,\n          });\n\n          if (!isFocused && !event.defaultPrevented) {\n            // The `merge: true` option makes sure that the params inside the tab screen are preserved\n            navigation.navigate({ name: route.name, merge: true });\n          }\n        };\n\n        const onLongPress = () => {\n          navigation.emit({\n            type: 'tabLongPress',\n            target: route.key,\n          });\n        };\n\n        const inputRange = state.routes.map((_, i) => i);\n        const opacity = position.interpolate({\n          inputRange,\n          outputRange: inputRange.map(i => (i === index ? 1 : 0)),\n        });\n\n        return (\n          <TouchableOpacity\n            accessibilityRole=\"button\"\n            accessibilityState={isFocused ? { selected: true } : {}}\n            accessibilityLabel={options.tabBarAccessibilityLabel}\n            testID={options.tabBarTestID}\n            onPress={onPress}\n            onLongPress={onLongPress}\n            style={{ flex: 1 }}\n          >\n            <Animated.Text style={{ opacity }}>\n              {label}\n            </Animated.Text>\n          </TouchableOpacity>\n        );\n      })}\n    </View>\n  );\n}\n\n// ...\n\n<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>\n  {...}\n</Tab.Navigator>\n")),(0,r.kt)("p",null,"This example will render a basic tab bar with labels."),(0,r.kt)("p",null,"Note that you ",(0,r.kt)("strong",{parentName:"p"},"cannot")," use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar")," since ",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," is only available inside screens. You get a ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop for your ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBar")," which you can use instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function MyTabBar({ navigation }) {\n  return (\n    <Button\n      title=\"Go somewhere\"\n      onPress={() => {\n        // Navigate using the `navigation` prop that you received\n        navigation.navigate('SomeScreen');\n      }}\n    />\n  );\n}\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"The following ",(0,r.kt)("a",{parentName:"p",href:"/docs/screen-options"},"options")," can be used to configure the screens in the navigator:"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("samp",{id:"material-top-tab-options"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<Tab.Navigator\n  screenOptions={{\n    tabBarLabelStyle: { fontSize: 12 },\n    tabBarItemStyle: { width: 100 },\n    tabBarStyle: { backgroundColor: 'powderblue' },\n  }}\n>\n  {/* ... */}\n</Tab.Navigator>\n")),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"Generic title that can be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,r.kt)("h4",{id:"tabbarlabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,r.kt)("p",null,"Title string of a tab displayed in the tab bar or a function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,r.kt)("a",{parentName:"p",href:"#tabbarshowlabel"},(0,r.kt)("inlineCode",{parentName:"a"},"tabBarShowLabel"))," option."),(0,r.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,r.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,r.kt)("h4",{id:"tabbarallowfontscaling"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarAllowFontScaling")),(0,r.kt)("p",null,"Whether label font should scale to respect Text Size accessibility settings."),(0,r.kt)("h4",{id:"tabbarshowlabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarShowLabel")),(0,r.kt)("p",null,"Whether the tab label should be visible. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"tabbaricon"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,r.kt)("p",null,"Function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),(0,r.kt)("h4",{id:"tabbarshowicon"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarShowIcon")),(0,r.kt)("p",null,"Whether the tab icon should be visible. Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h4",{id:"tabbarbadge"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarBadge")),(0,r.kt)("p",null,"Function that returns a React element to use as a badge for the tab."),(0,r.kt)("h4",{id:"tabbarindicator"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIndicator")),(0,r.kt)("p",null,"Function that returns a React element as the tab bar indicator."),(0,r.kt)("h4",{id:"tabbarindicatorstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIndicatorStyle")),(0,r.kt)("p",null,"Style object for the tab bar indicator."),(0,r.kt)("h4",{id:"tabbarindicatorcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIndicatorContainerStyle")),(0,r.kt)("p",null,"Style object for the view containing the tab bar indicator."),(0,r.kt)("h4",{id:"tabbartestid"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,r.kt)("p",null,"ID to locate this tab button in tests."),(0,r.kt)("h4",{id:"tabbaractivetintcolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarActiveTintColor")),(0,r.kt)("p",null,"Color for the icon and label in the active tab."),(0,r.kt)("h4",{id:"tabbarinactivetintcolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarInactiveTintColor")),(0,r.kt)("p",null,"Color for the icon and label in the inactive tabs."),(0,r.kt)("h4",{id:"tabbarpresscolor"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPressColor")),(0,r.kt)("p",null,"Color for material ripple (Android >= 5.0 only)."),(0,r.kt)("h4",{id:"tabbarpressopacity"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarPressOpacity")),(0,r.kt)("p",null,"Opacity for pressed tab (iOS and Android < 5.0 only)."),(0,r.kt)("h4",{id:"tabbarbounces"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarBounces")),(0,r.kt)("p",null,"Boolean indicating whether the tab bar bounces when overscrolling."),(0,r.kt)("h4",{id:"tabbarscrollenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarScrollEnabled")),(0,r.kt)("p",null,"Boolean indicating whether to make the tab bar scrollable."),(0,r.kt)("p",null,"If you set this to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", you should also specify a width in ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarItemStyle")," to improve the performance of initial render."),(0,r.kt)("h4",{id:"tabbariconstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIconStyle")),(0,r.kt)("p",null,"Style object for the tab icon container."),(0,r.kt)("h4",{id:"tabbarlabelstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarLabelStyle")),(0,r.kt)("p",null,"Style object for the tab label."),(0,r.kt)("h4",{id:"tabbaritemstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarItemStyle")),(0,r.kt)("p",null,"Style object for the individual tab items."),(0,r.kt)("h4",{id:"tabbarcontentcontainerstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarContentContainerStyle")),(0,r.kt)("p",null,"Style object for the view containing the tab items."),(0,r.kt)("h4",{id:"tabbarstyle"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarStyle")),(0,r.kt)("p",null,"Style object for the tab bar."),(0,r.kt)("h4",{id:"swipeenabled"},(0,r.kt)("inlineCode",{parentName:"h4"},"swipeEnabled")),(0,r.kt)("p",null,"Boolean indicating whether to enable swipe gestures. Swipe gestures are enabled by default. Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," will disable swipe gestures, but the user can still switch tabs by pressing the tab bar."),(0,r.kt)("h4",{id:"lazy"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazy")),(0,r.kt)("p",null,"Whether this screen should be lazily rendered. When this is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the screen will be rendered as it comes into the viewport. By default all screens are rendered to provide a smoother swipe experience. But you might want to defer the rendering of screens out of the viewport until the user sees them. To enable lazy rendering for this screen, set ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"When you enable ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy"),", the lazy loaded screens will usually take some time to render when they come into the viewport. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"lazyPlaceholder")," prop to customize what the user sees during this short period."),(0,r.kt)("h4",{id:"lazypreloaddistance"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazyPreloadDistance")),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," is enabled, you can specify how many adjacent screens should be preloaded in advance with this prop. This value defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," which means lazy pages are loaded as they come into the viewport."),(0,r.kt)("h4",{id:"lazyplaceholder"},(0,r.kt)("inlineCode",{parentName:"h4"},"lazyPlaceholder")),(0,r.kt)("p",null,"Function that returns a React element to render if this screen hasn't been rendered yet. The ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," option also needs to be enabled for this to work."),(0,r.kt)("p",null,"This view is usually only shown for a split second. Keep it lightweight."),(0,r.kt)("p",null,"By default, this renders ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"The navigator can ",(0,r.kt)("a",{parentName:"p",href:"/docs/navigation-events"},"emit events")," on certain actions. Supported events are:"),(0,r.kt)("h4",{id:"tabpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabPress")),(0,r.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),(0,r.kt)("li",{parentName:"ul"},"If the tab is already focused:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",(0,r.kt)("a",{parentName:"li",href:"/docs/use-scroll-to-top"},(0,r.kt)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),(0,r.kt)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",(0,r.kt)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),(0,r.kt)("p",null,"To prevent the default behavior, you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),(0,r.kt)("samp",{id:"material-top-tab-prevent-default"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n    e.preventDefault();\n\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h4",{id:"tablongpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabLongPress")),(0,r.kt)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar for an extended period."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabLongPress', (e) => {\n    // Do something\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),(0,r.kt)("h3",{id:"helpers"},"Helpers"),(0,r.kt)("p",null,"The tab navigator adds the following methods to the navigation prop:"),(0,r.kt)("h4",{id:"jumpto"},(0,r.kt)("inlineCode",{parentName:"h4"},"jumpTo")),(0,r.kt)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,r.kt)("em",{parentName:"li"},"string")," - Name of the route to jump to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,r.kt)("em",{parentName:"li"},"object")," - Screen params to pass to the destination route.")),(0,r.kt)("samp",{id:"material-top-tab-jump-to"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("samp",{id:"material-top-tab-example"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';\n\nconst Tab = createMaterialTopTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName=\"Feed\"\n      screenOptions={{\n        tabBarActiveTintColor: '#e91e63',\n        tabBarLabelStyle: { fontSize: 12 },\n        tabBarStyle: { backgroundColor: 'powderblue' },\n      }}\n    >\n      <Tab.Screen\n        name=\"Feed\"\n        component={Feed}\n        options={{ tabBarLabel: 'Home' }}\n      />\n      <Tab.Screen\n        name=\"Notifications\"\n        component={Notifications}\n        options={{ tabBarLabel: 'Updates' }}\n      />\n      <Tab.Screen\n        name=\"Profile\"\n        component={Profile}\n        options={{ tabBarLabel: 'Profile' }}\n      />\n    </Tab.Navigator>\n  );\n}\n")))}h.isMDXComponent=!0}}]);