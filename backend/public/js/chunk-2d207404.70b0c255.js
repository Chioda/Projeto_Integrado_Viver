(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207404"],{a076:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 offset-lg-3 col-sm-10 offset-sm-1"},[r("form",{staticClass:"text-center border border-primary p-5",staticStyle:{"margin-top":"70px",height:"auto","padding-top":"100px !important"},on:{submit:function(t){return t.preventDefault(),e.loginSubmitUserForm()}}},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.email,expression:"loginForm.email"}],staticClass:"form-control mb-5",class:{"is-invalid":e.isSubmitted&&e.$v.loginForm.email.$error},attrs:{type:"text",id:"email",name:"email",placeholder:"Digite seu E-mail"},domProps:{value:e.loginForm.email},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"email",t.target.value)}}}),e.isSubmitted&&!e.$v.loginForm.email.required?r("div",{staticClass:"invalid-feedback"},[e._v("\n            O campo e-mail é obrigatório!\n          ")]):e._e()]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control mb-5",class:{"is-invalid":e.isSubmitted&&e.$v.loginForm.password.$error},attrs:{type:"password",id:"password",name:"password",placeholder:"Digite sua Senha"},domProps:{value:e.loginForm.password},on:{input:function(t){t.target.composing||e.$set(e.loginForm,"password",t.target.value)}}}),e.isSubmitted&&!e.$v.loginForm.password.required?r("div",{staticClass:"invalid-feedback"},[e._v("\n            O campo password é obrigatório!\n          ")]):e._e()]),r("p",{staticClass:"center"},[e._v("\n          Não tem uma conta cadastrada?"),r("router-link",{attrs:{to:"/register"}},[e._v("\n            Cadastre Aqui")])],1),r("center",[r("button",{staticClass:"btn btn-primary btn-block w-75 my-4",on:{click:e.submitLoginUser}},[e._v("\n            Entrar\n          ")])])],1)])])])},i=[],o=r("1da1"),s=(r("96cf"),r("1940")),n=r.n(s),l=r("b5ae"),c=r("3f4a"),u={loginUser:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(c["a"])().post("/login",e);case 3:a=r.sent,i=a.data.token,localStorage.setItem("jwt",i),i&&n()({title:"Sucesso!",text:"Usuário(a) logado com sucesso!",icon:"success"}),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),n()({title:"Oops!",text:"Alguma coisa deu errado aqui!",icon:"error"}),t.$router.push("/");case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()}},m={name:"LoginComponent",data:function(){return{loginForm:{email:null,password:null},isSubmitted:!1}},validations:{loginForm:{email:{required:l["required"]},password:{required:l["required"]}}},methods:{loginSubmitUserForm:function(){},submitLoginUser:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isSubmitted=!0,e.$v.$touch(),!e.$v.$invalid){t.next=6;break}return n()({title:"Oops!",text:"Você precisa incluir todos os campos obrigatórios!",icon:"error"}),t.abrupt("return");case 6:return t.next=8,u.loginUser(e.loginForm);case 8:e.$router.push("/home"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),n()({title:"Senha Incorreta!",text:"Digite a senha cadastrada!",icon:"error"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}},d=m,p=r("2877"),g=Object(p["a"])(d,a,i,!1,null,"fc8908a0",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d207404.70b0c255.js.map