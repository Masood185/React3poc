(this.webpackJsonpuserapp=this.webpackJsonpuserapp||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(32),s=n.n(c),o=(n(38),n.p,n(39),n(40),n(5)),i=n.n(o),l=n(12),u=n(11),m=n(13),d=n.n(m),p=n(6),j=(n(18),n(60),n(62),n(3)),b=n.n(j),h=n(0),x=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b()("nav").show(),e.next=3,d.a.get("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products");case 3:t=e.sent,r(t.data.reverse()),b()("#myTable").DataTable();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products/".concat(t));case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"py-4",children:[Object(h.jsx)("h1",{children:"Home Page"}),Object(h.jsxs)("table",{class:"table border shadow",id:"myTable",children:[Object(h.jsx)("thead",{class:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"User Name"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.username}),Object(h.jsx)("td",{children:e.email}),Object(h.jsxs)("td",{children:[Object(h.jsx)(p.b,{class:"btn btn-primary mr-2",to:"/user/userview/".concat(e.id),children:"View"}),Object(h.jsx)(p.b,{class:"btn btn-outline-primary mr-2",to:"/user/edit/".concat(e.id),children:"Edit"}),Object(h.jsx)(p.b,{class:"btn btn-danger",onClick:function(){return s(e.id)},children:"Delete"})]})]})}))})]})]})})},f=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"py-4",children:[Object(h.jsx)("h1",{children:"About page"}),Object(h.jsx)("p",{className:"lead",children:"Lorem30"})]})})},O=function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"py-4",children:Object(h.jsx)("h1",{children:"Contact page"})})})},g=function(){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",id:"nav",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",to:"#",children:"React App"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(p.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/Home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(p.b,{className:"nav-link",to:"/AddUser",children:"Add Users"})})]})}),Object(h.jsx)(p.b,{className:"btn btn-danger",to:"/",children:"Logout"})]})})},v=n(14),N=n(2),y=function(){var e=Object(N.f)(),t=Object(a.useState)({username:"",pass:""}),n=Object(u.a)(t,2),r=n[0],c=n[1],s=r.username,o=r.pass,i=function(e){c(Object(v.a)({},e.target.name,e.target.value))};Object(a.useEffect)((function(){l()}));var l=function(){b()("nav").hide()};return Object(h.jsx)("div",{className:"container space",children:Object(h.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Login"}),Object(h.jsxs)("form",{onSubmit:function(t){"Admin"==o?e.push("/Home"):alert("User Id or Password is Invalid!")},children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your User Name",name:"username",value:s,onChange:function(e){return i(e)}})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"Password",className:"form-control form-control-lg",placeholder:"Enter Your Password",name:"pass",value:o,onChange:function(e){return i(e)}})}),Object(h.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},w=n(16),k=function(){var e=Object(N.f)(),t=Object(a.useState)({name:"",username:"",email:"",phone:"",website:""}),n=Object(u.a)(t,2),r=n[0],c=n[1],s=r.name,o=r.username,m=r.email,p=r.phone,j=r.website,x=function(e){c(Object(w.a)(Object(w.a)({},r),{},Object(v.a)({},e.target.name,e.target.value)))},f=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,d.a.post("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products",r);case 3:e.push("/Home");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Add A User"}),Object(h.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",id:"name1",value:s,onChange:function(e){return x(e)},onClick:function(e){return function(e){var t=/[A-Za-z]/;document.querySelector("#name1").addEventListener("input",(function(e){var n=e.target.value.split("").pop();t.test(n)?b()("#errmsgname1").css("display","none"):b()("#errmsgname1").css("display","block")}))}()}}),Object(h.jsx)("label",{className:"errmsg",style:{display:"none",color:"red"},id:"errmsgname1",children:"Numaric and Special Correctors are not allowed!"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",id:"uname",value:o,onChange:function(e){return x(e)},onClick:function(e){return function(e){var t=/[A-Za-z]/;document.querySelector("#uname").addEventListener("input",(function(e){var n=e.target.value.split("").pop();t.test(n)?b()("#errmsguname").css("display","none"):b()("#errmsguname").css("display","block")}))}()}}),Object(h.jsx)("label",{className:"errmsg",style:{display:"none"},id:"errmsguname",children:"Numaric and Special Correctors are not allowed!"})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:m,onChange:function(e){return x(e)}})}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",id:"intp",value:p,onChange:function(e){return x(e)},onClick:function(e){return function(e){var t=/^[0-9]/;document.querySelector("#intp").addEventListener("input",(function(e){var n=e.target.value.split("").pop();t.test(n)?b()("#errmsgnum").css("display","none"):b()("#errmsgnum").css("display","block")}))}()}}),Object(h.jsx)("label",{className:"errmsg",style:{display:"none"},id:"errmsgnum",children:"Alphabets and Special Correctors are not allowed!"})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:j,onChange:function(e){return x(e)}})}),Object(h.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},C=function(){return Object(h.jsx)("h1",{children:"Page not found "})},E=function(){var e=Object(N.f)(),t=Object(a.useState)({name:"",username:"",phone:"",email:"",website:""}),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(N.g)().id,o=r.name,m=r.phone,p=r.email,j=r.username,x=r.website,f=function(e){c(Object(w.a)(Object(w.a)({},r),{},Object(v.a)({},e.target.name,e.target.value)))};Object(a.useEffect)((function(){O()}),[]);var O=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products/".concat(s),r);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,d.a.put("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products/".concat(s),r);case 3:e.push("/Home");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(h.jsx)("h2",{className:"text-center mb-4",children:"Edit A User"}),Object(h.jsxs)("form",{onSubmit:function(e){return g(e)},children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,id:"name",onChange:function(e){return f(e)},onKeyPress:function(e){return function(e){var t=/[A-Za-z]/;document.querySelector("#name").addEventListener("input",(function(e){var n=e.target.value.split("").pop();t.test(n)?b()("#errmsgname").css("display","none"):b()("#errmsgname").css("display","block")}))}()}}),Object(h.jsx)("label",{className:"errmsg",style:{display:"none"},id:"errmsgname",children:"Numaric and Special Correctors are not allowed!"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Username",name:"username",value:j,id:"uname",onChange:function(e){return f(e)},onKeyPress:function(e){return function(e){var t=/[A-Za-z]/;document.querySelector("#uname").addEventListener("input",(function(e){var n=e.target.value.split("").pop();t.test(n)?b()("#errmsguname").css("display","none"):b()("#errmsguname").css("display","block")}))}()}}),Object(h.jsx)("label",{className:"errmsg",style:{display:"none"},id:"errmsguname",children:"Numaric and Special Correctors are not allowed!"})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"email",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your E-mail Address",name:"email",value:p,onChange:function(e){return f(e)}})}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",id:"intp",value:m,onChange:function(e){return f(e)},onKeyPress:function(e){return function(e){var t=/^[0-9]/;document.querySelector("#intp").addEventListener("input",(function(e){var n=e.target.value.split("").pop();t.test(n)?b()("#errmsgnum").css("display","none"):b()("#errmsgnum").css("display","block")}))}()}}),Object(h.jsx)("label",{className:"errmsg",style:{display:"none"},id:"errmsgnum",children:"Alphabets and Special Correctors are not allowed!"})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",required:!0,className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:x,onChange:function(e){return f(e)}})}),Object(h.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},S=function(){var e=Object(a.useState)({name:"",username:"",email:"",phone:"",webiste:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],c=(n.name,n.username,n.email,n.phone,n.website,Object(N.g)().id);Object(a.useEffect)((function(){s()}));var s=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://testingapi.ap-south-1.elasticbeanstalk.com/api/products/".concat(c),n);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container py-4",children:[Object(h.jsxs)("h1",{className:"display-4",children:["User Id: ",c]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("ul",{className:"list-group w-50",children:[Object(h.jsxs)("li",{className:"list-group-item",children:["name: ",n.name]}),Object(h.jsxs)("li",{className:"list-group-item",children:["user name: ",n.username]}),Object(h.jsxs)("li",{className:"list-group-item",children:["email: ",n.email]}),Object(h.jsxs)("li",{className:"list-group-item",children:["phone: ",n.phone]}),Object(h.jsxs)("li",{className:"list-group-item",children:["website: ",n.website]})]})]})};var A=function(){return Object(h.jsx)(p.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{}),Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{exact:!0,path:"/",component:y}),Object(h.jsx)(N.a,{exact:!0,path:"/Home",component:x}),Object(h.jsx)(N.a,{exact:!0,path:"/About",component:f}),Object(h.jsx)(N.a,{exact:!0,path:"/Contact",component:O}),Object(h.jsx)(N.a,{exact:!0,path:"/AddUser",component:k}),Object(h.jsx)(N.a,{exact:!0,path:"/user/edit/:id",component:E}),Object(h.jsx)(N.a,{exact:!0,path:"/user/userview/:id",component:S}),Object(h.jsx)(N.a,{component:C})]})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root")),q()}},[[69,1,2]]]);
//# sourceMappingURL=main.03d3cdf7.chunk.js.map