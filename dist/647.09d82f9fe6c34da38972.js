"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[647],{7110:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(5003),r=a(4848);const l=(0,n.A)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1647:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(6540),r=a(4011),l=a(4073),c=a(2471),m=a(9067),i=a(6990),o=a(9799),d=a(4635),u=a(2241),s=a(4448),v=a(1641),A=a(7110),E=a(7282),g=a(887);const h=()=>{const{addCategory:e,deleteCategory:t,categories:a}=(0,E.Pj)(g.n$),[h,p]=(0,n.useState)(""),[y,b]=(0,n.useState)(null);return n.createElement("div",{className:"container-fluid d-flex justify-content-center vh-100"},n.createElement("div",null,n.createElement(l.A,{variant:"h4",gutterBottom:!0},"Manage Categories"),n.createElement("form",{onSubmit:t=>{if(t.preventDefault(),""===h.trim())return void b("Category name cannot be empty");const a={id:(0,r.A)(),name:h.trim()};e(a),p(""),b(null)}},n.createElement("div",{className:"mb-3"},n.createElement(c.A,{id:"name",label:"Name",variant:"outlined",value:h,onChange:e=>p(e.target.value),fullWidth:!0,placeholder:"Enter category name"}),y&&n.createElement(l.A,{variant:"body2",color:"error",mt:2},y)),n.createElement(m.A,{mb:3,mt:3},n.createElement(i.A,{type:"submit",variant:"contained",color:"primary"},"Add Category"))),0===a.length?n.createElement(m.A,{textAlign:"center",mt:4},n.createElement(l.A,{variant:"h6"},"No categories available")):n.createElement(o.A,null,a.map((e=>n.createElement(d.Ay,{key:e.id},n.createElement(u.A,{primary:e.name}),n.createElement(s.A,null,n.createElement(v.A,{edge:"end","aria-label":"delete",onClick:()=>{return a=e.id,void t(a);var a}},n.createElement(A.A,null)))))))))}}}]);