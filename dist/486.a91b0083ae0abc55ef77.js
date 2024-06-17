"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[486],{6486:(e,t,o)=>{o.r(t),o.d(t,{default:()=>D});var r=o(6540),a=o(7767),n=o(4976),l=o(8587),i=o(8168),s=o(4164),p=o(4111),c=o(1848),d=o(3541),u=o(8466),m=o(538),b=o(7553),g=o(7245);function v(e){return(0,g.Ay)("MuiAppBar",e)}(0,b.A)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var A=o(4848);const x=["className","color","enableColorOnDark","position"],f=(e,t)=>e?`${null==e?void 0:e.replace(")","")}, ${t})`:t,k=(0,c.Ay)(m.A,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,u.A)(o.position)}`],t[`color${(0,u.A)(o.color)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,i.A)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!e.vars&&(0,i.A)({},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,i.A)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,i.A)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:f(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:f(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:f(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:f(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),h=r.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiAppBar"}),{className:r,color:a="primary",enableColorOnDark:n=!1,position:c="fixed"}=o,m=(0,l.A)(o,x),b=(0,i.A)({},o,{color:a,position:c,enableColorOnDark:n}),g=(e=>{const{color:t,position:o,classes:r}=e,a={root:["root",`color${(0,u.A)(t)}`,`position${(0,u.A)(o)}`]};return(0,p.A)(a,v,r)})(b);return(0,A.jsx)(k,(0,i.A)({square:!0,component:"header",ownerState:b,elevation:4,className:(0,s.A)(g.root,r,"fixed"===c&&"mui-fixed"),ref:t},m))}));function y(e){return(0,g.Ay)("MuiToolbar",e)}(0,b.A)("MuiToolbar",["root","gutters","regular","dense"]);const B=["className","component","disableGutters","variant"],C=(0,c.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((({theme:e,ownerState:t})=>(0,i.A)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar)),E=r.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiToolbar"}),{className:r,component:a="div",disableGutters:n=!1,variant:c="regular"}=o,u=(0,l.A)(o,B),m=(0,i.A)({},o,{component:a,disableGutters:n,variant:c}),b=(e=>{const{classes:t,disableGutters:o,variant:r}=e,a={root:["root",!o&&"gutters",r]};return(0,p.A)(a,y,t)})(m);return(0,A.jsx)(C,(0,i.A)({as:a,className:(0,s.A)(b.root,r),ref:t,ownerState:m},u))}));var w=o(1968),O=o(423),S=o(9067);const I=e=>{const{children:t,value:o,index:a}=e,n=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o}(e,["children","value","index"]);return r.createElement("div",Object.assign({role:"tabpanel",hidden:o!==a,id:`simple-tabpanel-${a}`,"aria-labelledby":`simple-tab-${a}`},n),o===a&&r.createElement(S.A,{sx:{p:3}},t))},D=()=>{const e=(0,a.zy)(),[t,o]=(0,r.useState)((()=>{switch(e.pathname){case"/expenses/manage-expenses":return 1;case"/expenses/add-category":return 2;default:return 0}}));return r.createElement(S.A,null,r.createElement(h,{position:"static"},r.createElement(E,null,r.createElement(w.A,{value:t,onChange:(e,t)=>{o(t)},"aria-label":"expenses tabs",textColor:"inherit",indicatorColor:"primary"},r.createElement(O.A,{label:"Add Expense",component:n.k2,to:"/expenses/add-expense"}),r.createElement(O.A,{label:"Manage Expenses",component:n.k2,to:"/expenses/manage-expenses"}),r.createElement(O.A,{label:"Manage Category",component:n.k2,to:"/expenses/add-category"})))),r.createElement(S.A,{className:"tab-content mt-2"},r.createElement(I,{value:t,index:0},r.createElement(a.sv,null)),r.createElement(I,{value:t,index:1},r.createElement(a.sv,null)),r.createElement(I,{value:t,index:2},r.createElement(a.sv,null))))}}}]);