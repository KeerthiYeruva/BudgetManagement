"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[347],{3896:(e,t,a)=>{a.d(t,{A:()=>S});var r=a(8587),n=a(8168),o=a(6540),i=a(4164),l=a(4111),s=a(771),d=a(1848),c=a(9770),m=a(3541),u=a(2850),p=a(4225),v=a(2778),b=a(6852),g=a(1347),y=a(6721),A=a(8081),h=a(7553),f=a(7245);function C(e){return(0,f.Ay)("MuiMenuItem",e)}const x=(0,h.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var E=a(4848);const $=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],w=(0,d.Ay)(p.A,{shouldForwardProp:e=>(0,c.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,n.A)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,s.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.X4)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.A.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.A.inset}`]:{marginLeft:52},[`& .${A.A.root}`]:{marginTop:0,marginBottom:0},[`& .${A.A.inset}`]:{paddingLeft:36},[`& .${y.A.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,n.A)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${y.A.root} svg`]:{fontSize:"1.25rem"}})))),S=o.forwardRef((function(e,t){const a=(0,m.A)({props:e,name:"MuiMenuItem"}),{autoFocus:s=!1,component:d="li",dense:c=!1,divider:p=!1,disableGutters:g=!1,focusVisibleClassName:y,role:A="menuitem",tabIndex:h,className:f}=a,x=(0,r.A)(a,$),S=o.useContext(u.A),k=o.useMemo((()=>({dense:c||S.dense||!1,disableGutters:g})),[S.dense,c,g]),O=o.useRef(null);(0,v.A)((()=>{s&&O.current&&O.current.focus()}),[s]);const M=(0,n.A)({},a,{dense:k.dense,divider:p,disableGutters:g}),I=(e=>{const{disabled:t,dense:a,divider:r,disableGutters:o,selected:i,classes:s}=e,d={root:["root",a&&"dense",t&&"disabled",!o&&"gutters",r&&"divider",i&&"selected"]},c=(0,l.A)(d,C,s);return(0,n.A)({},s,c)})(a),N=(0,b.A)(O,t);let G;return a.disabled||(G=void 0!==h?h:-1),(0,E.jsx)(u.A.Provider,{value:k,children:(0,E.jsx)(w,(0,n.A)({ref:N,role:A,tabIndex:G,component:d,focusVisibleClassName:(0,i.A)(I.focusVisible,y),className:(0,i.A)(I.root,f)},x,{ownerState:M,classes:I}))})}))},3347:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var r=a(6540),n=a(887),o=a(7282),i=a(7520),l=a(9067),s=a(4073),d=a(2471),c=a(779),m=a(4433),u=a(2924),p=a(3896),v=a(6990);const b=()=>{const{addExpense:e}=(0,o.Pj)(n.$L),{addCategory:t,categories:a}=(0,o.Pj)(n.n$),[b,g]=(0,r.useState)((new Date).toISOString().split("T")[0]),[y,A]=(0,r.useState)(""),[h,f]=(0,r.useState)(""),[C,x]=(0,r.useState)(""),[E,$]=(0,r.useState)("");return r.createElement(l.A,{sx:{maxWidth:500,mx:"auto",mt:4}},r.createElement("form",{onSubmit:r=>{if(r.preventDefault(),!h||isNaN(parseFloat(h)))return void alert("Please enter a valid amount.");const n=(new Date).toISOString().split("T")[0],o=""!==b.trim()?b:n;let l=y;if("new"===y&&""!==E.trim()){if(a.some((e=>e.name===E.trim())))return void(0,i.UG)("Category already exists");l=E.trim(),t({id:Math.floor(1e3*Math.random()),name:l})}const s={id:Math.floor(1e3*Math.random()),date:o,category:l,amount:parseFloat(h),description:C};e(s),(0,i.VX)("Expense added successfully"),g(""),A(""),f(""),x(""),$("")}},r.createElement(s.A,{variant:"h4",component:"h2",gutterBottom:!0},"Add Expense"),r.createElement(l.A,{sx:{mb:3}},r.createElement(d.A,{fullWidth:!0,label:"Date",type:"date",value:b,onChange:e=>g(e.target.value),InputLabelProps:{shrink:!0}})),r.createElement(l.A,{sx:{mb:3}},r.createElement(c.A,{fullWidth:!0},r.createElement(m.A,{id:"category-label"},"Category"),r.createElement(u.A,{labelId:"category-label",value:y,label:"Category",onChange:e=>A(e.target.value)},r.createElement(p.A,{value:""},r.createElement("em",null,"Select category...")),a.map((e=>r.createElement(p.A,{key:e.id,value:e.name},e.name))),r.createElement(p.A,{value:"new"},"Add New Category"))),"new"===y&&r.createElement(d.A,{fullWidth:!0,sx:{mt:2},label:"Enter new category...",value:E,onChange:e=>$(e.target.value)})),r.createElement(l.A,{sx:{mb:3}},r.createElement(d.A,{fullWidth:!0,label:"Amount",type:"number",value:h,onChange:e=>f(e.target.value)})),r.createElement(l.A,{sx:{mb:3}},r.createElement(d.A,{fullWidth:!0,label:"Description",multiline:!0,rows:2,value:C,onChange:e=>x(e.target.value)})),r.createElement(l.A,null,r.createElement(v.A,{type:"submit",variant:"contained",color:"primary"},"Save"))))}}}]);