import{a as i}from"./index.4db902b9.js";import{r as n,c as d,a,q as r,b as m,w as c,e as p,o as u,f}from"./vendor.d628d85d.js";import{_ as g}from"./index.aea7edd6.js";import"./axios.edddaafe.js";const b={name:"login",data(){return{email:"",password:"",user:{id:localStorage.getItem("userId"),isAdmin:localStorage.getItem("isAdmin")}}},methods:{login(){this.errorAlert=!1,i.post("http://localhost:3001/api/users/login",{email:document.getElementById("email").value,password:document.getElementById("password").value}).then(e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.userId),localStorage.setItem("isAdmin",e.data.isAdmin),localStorage.getItem("isAdmin")=="true"?this.$router.push("/LD-Workshop/Post"):this.$router.push("/LD-Workshop/Home")}).catch(()=>{this.errorAlert=!0})}}},h={class:"loginForm"},_=p('<div class="mx-auto w-50 mb-3"><label for="email" class="form-label d-flex justify-content-start">Adresse mail:</label><input type="email" class="form-control" name="email" id="email"></div><div class="mx-auto w-50 mb-3"><label for="password" class="form-label d-flex justify-content-start">Mot de passe :</label><input type="password" class="form-control" name="password" id="password"></div>',2),v=f("Retourner \xE0 l'accueil");function x(e,t,w,I,k,o){const l=n("router-link");return u(),d("div",h,[a("form",{id:"form",class:"mt-5",onSubmit:t[1]||(t[1]=r(s=>o.login(),["prevent"])),method:"post",novalidate:"true"},[_,a("button",{type:"submit",class:"btn btn-primary",onClick:t[0]||(t[0]=r((...s)=>o.login&&o.login(...s),["prevent"]))}," Se connecter "),m(l,{class:"btn btn-primary",to:"/LD-Workshop/Home"},{default:c(()=>[v]),_:1})],32)])}var B=g(b,[["render",x]]);export{B as default};