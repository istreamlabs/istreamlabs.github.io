"use strict";(self.webpackChunkdocs_portal=self.webpackChunkdocs_portal||[]).push([[591],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(83117),a=t(67294),o=t(72389),l=t(79443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(80446),c=t(86010),s="tabItem_1uMI";function p(e){var n,t,r,o=e.lazy,l=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),k=y.tabGroupChoices,E=y.setTabGroupChoices,O=(0,a.useState)(h),T=O[0],w=O[1],N=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=k[m];null!=x&&x!==T&&b.some((function(e){return e.value===x}))&&w(x)}var j=function(e){var n=e.currentTarget,t=N.indexOf(n),r=b[t].value;r!==T&&(I(n),w(r),null!=m&&E(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},f)},b.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":T===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=t?t:n)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},45445:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),l=t(26396),u=t(58215),i=["components"],c={title:"Auditing Channels"},s=void 0,p={unversionedId:"guide/auditing",id:"guide/auditing",title:"Auditing Channels",description:"It is possible to audit all actions taken on a channel, even one that has been deleted.",source:"@site/docs/guide/auditing.mdx",sourceDirName:"guide",slug:"/guide/auditing",permalink:"/docs/guide/auditing",editUrl:"https://github.com/istreamlabs/docs-portal/edit/main/docs/guide/auditing.mdx",tags:[],version:"current",frontMatter:{title:"Auditing Channels"},sidebar:"someSidebar",previous:{title:"Channel Operations",permalink:"/docs/guide/channel-ops"},next:{title:"Auth & Tokens",permalink:"/docs/guide/concepts/auth"}},d=[],m={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is possible to audit all actions taken on a channel, even one that has been deleted."),(0,o.kt)(l.Z,{groupId:"client",defaultValue:"cli",values:[{label:"CLI",value:"cli"},{label:"Javascript",value:"js"},{label:"Go",value:"go"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"cli",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Get a channel timeline\n$ restish isp get-channel-timeline $CHANNEL_ID\n"))),(0,o.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO\n"))),(0,o.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'request := client.AuditOperationsApi.GetChannelTimeline(context.Background(), "CHANNEL_ID")\nentries, resp, err := request.Execute()\n\nif err.Error() != "" {\n  panic(err)\n}\n\n// Print out each action name\nfor _, entry := range entries {\n  fmt.Println(entry.Action)\n}\n')))),(0,o.kt)("p",null,"Individual audit entries look something like these below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action": "put-channel",\n  "agent": "UNIQUE_USER_IDENTIFIER",\n  "request_body": "{...data as JSON string...}",\n  "status_code": 200,\n  "timestamp": "2021-01-01T12:00:00Z",\n  "trace_id": "484821178360672118"\n},\n{\n  "action": "program-start",\n  "agent": "UNIQUE_USER_IDENTIFIER",\n  "request_body": "{\\"event_id\\":0}",\n  "status_code": 204,\n  "timestamp": "2021-01-01T12:00:00Z",\n  "trace_id": "5179266826846428609",\n}\n')))}f.isMDXComponent=!0}}]);