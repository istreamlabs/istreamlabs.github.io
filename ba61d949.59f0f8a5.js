(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{100:function(e,t,a){"use strict";var n=a(0),r=a(101);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},101:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},108:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(100),s=a(92),o=a(54),l=a.n(o);const c=37,u=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:b,groupId:p,className:d}=e,{tabGroupChoices:h,setTabGroupChoices:m}=Object(i.a)(),[f,O]=Object(n.useState)(o),g=n.Children.toArray(e.children);if(null!=p){const e=h[p];null!=e&&e!==f&&b.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=p&&m(p,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},d)},b.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(n.cloneElement)(g.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},109:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(93)),s=a(108),o=a(109),l={id:"cli",title:"Download the iStreamPlanet CLI",sidebar_label:"Download CLI"},c={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"Download the iStreamPlanet CLI",description:"iStreamPlanet's APIs implement OpenAPI 3 descriptions which are publicly linked via RFC 8631 service-desc link relation headers and auto-discovery for CLI configuration via x-cli-config extension. This means you can use any client which understands these features to interact with our APIs.",source:"@site/docs/cli.mdx",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/istreamlabs/docs-portal/edit/main/docs/cli.mdx",version:"current",sidebar_label:"Download CLI",sidebar:"someSidebar",previous:{title:"Streaming API",permalink:"/docs/reference/streaming"},next:{title:"Javascript SDK",permalink:"/docs/sdks/javascript"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Example Usage",id:"example-usage",children:[{value:"Getting Information",id:"getting-information",children:[]},{value:"Writing Data",id:"writing-data",children:[]}]}],b={toc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"iStreamPlanet's APIs implement OpenAPI 3 descriptions which are publicly linked via ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc8631"}),"RFC 8631")," ",Object(i.b)("inlineCode",{parentName:"p"},"service-desc")," link relation headers and auto-discovery for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rest.sh/#/openapi?id=autoconfiguration"}),"CLI configuration")," via ",Object(i.b)("inlineCode",{parentName:"p"},"x-cli-config")," extension. This means you can use any client which understands these features to interact with our APIs."),Object(i.b)("p",null,"Since the client is generated from API-provided descriptions rather than hard-coded, you will always have access to the latest API features."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"We recommend getting started with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rest.sh/"}),"Restish"),", a simple cURL-like commandline client for REST-ish APIs. Getting started is easy:"),Object(i.b)(s.a,{defaultValue:"mac",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"mac",mdxType:"TabItem"},Object(i.b)("p",null,"First, make sure you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew")," installed. After that, installing Restish is a breeze:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ brew tap danielgtaylor/restish && brew install restish\n")),Object(i.b)("p",null,"Prefer not to use Homebrew? Then ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/danielgtaylor/restish/releases"}),"manually download a release"),".")),Object(i.b)(o.a,{value:"win",mdxType:"TabItem"},Object(i.b)("p",null,"Head over and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/danielgtaylor/restish/releases"}),"manually download a release"),". Unzip the executable somewhere and you are good to go!")),Object(i.b)(o.a,{value:"linux",mdxType:"TabItem"},Object(i.b)("p",null,"First, make sure you have ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew")," installed. After that, installing Restish is a breeze:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ brew tap danielgtaylor/restish && brew install restish\n")),Object(i.b)("p",null,"Prefer not to use Homebrew? Then ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/danielgtaylor/restish/releases"}),"manually download a release")," or use ",Object(i.b)("inlineCode",{parentName:"p"},"go get")," if you have the Go compiler installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"// Download, build & install.\n$ go get -u github.com/danielgtaylor/restish\n")))),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Once installed you need to configure Restish to talk to the iStreamPlanet API. We will use ",Object(i.b)("inlineCode",{parentName:"p"},"isp")," as the shorthand name for the iStreamPlanet Streaming APIs. You will be prompted for your organization ID when setting up auth. Once done, select ",Object(i.b)("inlineCode",{parentName:"p"},"Save and quit"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Configure Restish to talk to iStreamPlanet.\n$ restish api config isp https://api.istreamplanet.com\n\n? Organization ID [? for help] YOUR_VALUE_HERE\n? Select option  [Use arrows to move, type to filter]\n  Change base URI (https://api.istreamplanet.com)\n  Add profile\n  Edit profile default\n> Save and exit\n")),Object(i.b)("h2",{id:"example-usage"},"Example Usage"),Object(i.b)("p",null,"Commands and help are generated on the fly from the server-provided OpenAPI document. Help commands let you see what is available and how to use it."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Get a list of all available commands.\n$ restish isp --help\n\n# See help for creating a channel.\n$ restish isp create-channel --help\n")),Object(i.b)("h3",{id:"getting-information"},"Getting Information"),Object(i.b)("p",null,"Read calls are fairly straightforward and take optional filtering parameters."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Get a list of sources you have access to.\n$ restish isp list-sources\n\n# Get a list of your channels.\n$ restish isp list-channels\n")),Object(i.b)("p",null,"Restish is smart about which URIs require authentication by matching them to pre-configured API base URIs, so you can also directly access links you find in responses. For example, you might see something like this returned when listing channels and want to get additional details:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Get details from a channel by link.\n$ restish https://api.istreamplanet.com/v2/channels/ch-abc123\n")),Object(i.b)("h3",{id:"writing-data"},"Writing Data"),Object(i.b)("p",null,"Write calls take input in one of two ways: JSON passed in via stdin or a custom ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rest.sh/#/shorthand"}),"CLI shorthand syntax")," on the commandline."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Pass JSON via stdin.\n$ restish isp create-channel <input.json\n\n# Pass data on the commandline via shorthand.\n$ restish isp create-channel name: My Test Channel, source: s-abc123, ...\n")),Object(i.b)("p",null,"Read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://rest.sh/"}),"Restish documentation")," for more in-depth CLI info and check out our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/guide/"}),"Guide")," and API reference for examples that show you how to use the iStreamPlanet APIs."))}p.isMDXComponent=!0},92:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=n,h=b["".concat(s,".").concat(d)]||b[d]||p[d]||i;return a?r.a.createElement(h,o(o({ref:t},c),{},{components:a})):r.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);