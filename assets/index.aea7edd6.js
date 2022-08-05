import{r as g,c as u,a as s,b as n,w as i,n as v,d as h,F as w,e as f,o as m,f as b,g as D,h as y,l as A,_ as P,i as E,j as W,k as O}from"./vendor.d628d85d.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function p(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(t){if(t.ep)return;t.ep=!0;const a=p(t);fetch(t.href,a)}};C();var S="/LD-Workshop/assets/portrait.789534eb.jpg",$="/LD-Workshop/assets/sir\xE8ne.2de66080.png";var k=(_,e)=>{for(const[p,c]of e)_[p]=c;return _};const T={name:"App",components:{},methods:{expandOnHover:function(){},collapseOnLeave:function(){}},data(){return{overHereActivated:!1,overThereActivated:!1}}},V={class:"d-flex align-items-center shadow-sm bg-dark"},H=s("img",{class:"d-none d-md-block",alt:"photo de l'artiste LD en ange, avec des ailes de feutres",src:S},null,-1),j=s("img",{alt:"dessin de sir\xE8ne par LD",src:$},null,-1),I={class:"flex-column d-flex flex-md-row justify-content-md-evenly container-fluid"},R=s("div",{class:"justify-content-center col-md-8 d-flex align-items-center"},[s("p",{class:"h1 text-white smallH1"},"L' Atelier")],-1),M={class:"flex-row justify-content-around d-flex flex-md-column align-items-center"},B={class:"container-fluid"},N={class:"row flex-nowrap"},q={id:"smallScreensNav",class:"d-block d-md-none nav-font align-items-center align-items-sm-start px-3 pt-2 w-25 bg-dark"},G={class:"btn text-white px-0 align-middle",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"},z={class:"offcanvas offcanvas-start w-50",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},F=s("div",{class:"offcanvas-header"},[s("h5",{class:"offcanvas-title",id:"offcanvasExampleLabel"},"Navigation"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),K={class:"offcanvas-body"},Q={id:"smallScreensNavMenu"},J={class:"d-flex flex-column nav-font align-items-center align-items-sm-start px-3 pt-2 min-vh-100"},U=s("span",{class:"fs-4 text-dark"},"Accueil",-1),X={class:"nav nav-pills flex-column align-items-center align-items-sm-start",id:"menu"},Y={class:"nav-item"},Z={"data-bs-target":"#submenu1","data-bs-toggle":"collapse",class:"nav-link text-dark px-0 align-middle"},ss={class:"collapse nav flex-column fs-4",id:"submenu1","data-bs-parent":"#menu"},es={class:"w-100"},ts=s("span",{class:""},"Bio",-1),ns=s("span",{class:""},"Exp\xE9riences",-1),as=s("i",{class:"fs-4"},null,-1),os=s("span",{class:"fs-4"},"Galerie",-1),ls={key:0,class:"smallStyle"},is={class:"collapse nav flex-column fs-4",id:"submenu2","data-bs-parent":"#menu"},rs={class:"w-100"},cs=s("span",{class:"fs-4"},"Dessins",-1),ds=s("span",{class:"fs-4"},"Photos",-1),ps={class:"w-100"},us=s("span",{class:"fs-4"},"Peintures",-1),ms={class:"nav-item"},_s=s("i",{class:"fs-4"},null,-1),vs=s("span",{class:"fs-4"},"Arts",-1),hs={key:0,class:"smallStyle"},fs=f('<ul class="collapse nav flex-column fs-4" id="submenu3" data-bs-parent="#menu"><li class="w-100"><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Portraits</span></a></li><li><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Oeuvres sp\xE9ciales</span></a></li><li><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Shooting</span></a></li><li><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Boutique</span></a></li></ul>',1),bs=s("i",{class:"fs-4 bi-bootstrap"},null,-1),xs=s("span",{class:"fs-4"},"Services",-1),gs={key:0,class:"smallStyle"},ks=f('<ul class="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu"><li class="w-100"><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Exp\xE9rience</span></a></li><li><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Services d&#39;aides</span></a></li><li class="w-100"><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Planning</span></a></li><li><a href="#" class="nav-link text-dark px-0"><span class="fs-4">Paiement et CGV</span></a></li></ul>',1),Ls=s("i",{class:"fs-4 bi-people"},null,-1),ws=s("span",{class:"fs-4"},"Livre d'or",-1),Ds=s("span",{class:"fs-4"},[b("Espace "),s("br"),b(" membres")],-1),ys=[Ds],As=s("ul",{class:"collapse nav flex-column fs-4",id:"submenu5","data-bs-parent":"#menu"},[s("li",null,[s("a",{href:"#",class:"nav-link text-dark px-0"},[s("span",{class:"fs-4"},"Mot de l'artiste")])])],-1),Ps=s("i",{class:"fs-4 bi-people"},null,-1),Es=s("span",{class:"fs-4"},"Contacts",-1),Ws={class:"",role:"img","aria-label":"lien vers Instagram"},Os={href:"https://www.instagram.com/lilith154/",target:"_blank",class:"link-light align-middle"},Cs=s("hr",null,null,-1),Ss={class:"d-none d-md-block col-auto col-md-2 col-xl-2 pl-sm-2 bg-dark"},$s={class:"d-flex flex-column nav-font align-items-center align-items-sm-start px-3 pt-2 min-vh-100"},Ts=s("span",{class:"fs-6 d-none d-sm-inline text-white"},"Accueil",-1),Vs={class:"nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start",id:"menu"},Hs={class:"nav-item"},js={"data-bs-target":"#submenu1","data-bs-toggle":"collapse",class:"nav-link text-white px-0 align-middle"},Is={class:"collapse nav flex-column ms-1",id:"submenu1","data-bs-parent":"#menu"},Rs={class:"w-100"},Ms=s("span",{class:"d-none d-sm-inline"},"Bio",-1),Bs=s("span",{class:"d-none d-sm-inline"},"Exp\xE9riences",-1),Ns=s("i",{class:"fs-4"},null,-1),qs=s("span",{class:"ms-1 d-none d-sm-inline"},"Galerie",-1),Gs={key:0,class:"smallStyle"},zs={class:"collapse nav flex-column ms-1",id:"submenu2","data-bs-parent":"#menu"},Fs={class:"w-100"},Ks=s("span",{class:"d-none d-sm-inline"},"Dessins",-1),Qs={class:"w-100"},Js=s("span",{class:"d-none d-sm-inline"},"Photos",-1),Us={class:"w-100"},Xs=s("span",{class:"d-none d-sm-inline"},"Peintures",-1),Ys={class:"nav-item"},Zs=s("i",{class:"fs-4"},null,-1),se=s("span",{class:"ms-1 d-none d-sm-inline"},"Arts",-1),ee={key:0,class:"smallStyle"},te=f('<ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu"><li class="w-100"><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Portraits</span></a></li><li><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Oeuvres sp\xE9ciales</span></a></li><li><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Shooting</span></a></li><li><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Boutique</span></a></li></ul>',1),ne=s("i",{class:"fs-4 bi-bootstrap"},null,-1),ae=s("span",{class:"ms-1 d-none d-sm-inline"},"Services",-1),oe={key:0,class:"smallStyle"},le=f('<ul class="collapse nav flex-column ms-1" id="submenu4" data-bs-parent="#menu"><li class="w-100"><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Exp\xE9rience</span></a></li><li><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Services d&#39;aides</span></a></li><li class="w-100"><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Planning</span></a></li><li><a href="#" class="nav-link text-white px-0"><span class="d-none d-sm-inline">Paiement et CGV</span></a></li></ul>',1),ie=s("i",{class:"fs-4 bi-people"},null,-1),re=s("span",{class:"ms-1 d-none d-sm-inline"},"Livre d'or",-1),ce=s("span",{class:"ms-1 d-none d-sm-inline"},[b("Espace "),s("br"),b(" membres")],-1),de=[ce],pe={class:"collapse nav flex-column ms-1",id:"submenu5","data-bs-parent":"#menu"},ue=s("li",null,[s("a",{href:"#",class:"nav-link text-white px-0"},[s("span",{class:"d-none d-sm-inline"},"Mot de l'artiste")])],-1),me=s("i",{class:"fs-4 bi-people"},null,-1),_e=s("span",{class:"ms-1 d-none d-sm-inline"},"Publier un m\xE9dia",-1),ve=s("i",{class:"fs-4 bi-people"},null,-1),he=s("span",{class:"ms-1 d-none d-sm-inline"},"Contacts",-1),fe={class:"icon-md mobile-tap fa-xl",role:"img","aria-label":"lien vers Instagram"},be={href:"https://www.instagram.com/lilith154/",target:"_blank",class:"link-light align-middle"},xe=s("hr",null,null,-1),ge={class:"col py-3"},ke=s("div",{id:"emotion",class:"aside-stamp py-2 px-3 border bg-light"},[s("aside",null,[s("p",{class:"h3"},"G\xE9n\xE9rateur d'\xE9motions")])],-1);function Le(_,e,p,c,t,a){const r=g("fa"),o=g("router-link"),x=g("router-view");return m(),u(w,null,[s("div",V,[H,j,s("div",I,[R,s("div",M,[s("a",{role:"button",class:"h1 text-white text-decoration-none",onMouseover:e[0]||(e[0]=l=>t.overHereActivated=!0),onMouseleave:e[1]||(e[1]=l=>t.overHereActivated=!1),onClick:e[2]||(e[2]=l=>t.overHereActivated=!0)},"Arts",32),s("a",{role:"button",class:"h1 text-white text-decoration-none",onMouseover:e[3]||(e[3]=l=>t.overThereActivated=!0),onMouseleave:e[4]||(e[4]=l=>t.overThereActivated=!1),onClick:e[5]||(e[5]=l=>t.overThereActivated=!0)},"Vie",32)])])]),s("div",B,[s("div",N,[s("div",q,[s("button",G,[n(r,{class:"fa-xl",icon:["fas","house"]})]),s("div",z,[F,s("div",K,[s("div",Q,[s("div",J,[n(o,{to:"/LD-Workshop/",class:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"},{default:i(()=>[U]),_:1}),s("ul",X,[s("li",Y,[s("button",Z,[s("span",{class:"fs-4",onMouseover:e[6]||(e[6]=l=>a.expandOnHover()),onMouseleave:e[7]||(e[7]=l=>a.collapseOnLeave())},"\xC0 propos",32)]),s("ul",ss,[s("li",es,[n(o,{to:"/LD-Workshop/bio",class:"nav-link text-dark px-0"},{default:i(()=>[ts]),_:1})]),s("li",null,[n(o,{to:"/LD-Workshop/experiences",class:"nav-link text-dark px-0"},{default:i(()=>[ns]),_:1})])])]),s("li",null,[s("button",{"data-bs-target":"#submenu2","data-bs-toggle":"collapse",onClick:e[8]||(e[8]=l=>this.$router.push({path:"/LD-Workshop/gallery"})),class:"nav-link text-dark px-0 align-middle"},[as,s("div",{class:v({beating:t.overHereActivated})},[os,t.overHereActivated?(m(),u("span",ls,"\xA0 Par ici ! ")):h("",!0)],2)]),s("ul",is,[s("li",rs,[n(o,{to:"/LD-Workshop/galleryDrawings",class:"nav-link text-dark px-0"},{default:i(()=>[cs]),_:1})]),s("li",null,[n(o,{to:"/LD-Workshop/galleryPhotos",class:"nav-link text-dark px-0"},{default:i(()=>[ds]),_:1})]),s("li",ps,[n(o,{to:"/LD-Workshop/galleryPaintings",class:"nav-link text-dark px-0"},{default:i(()=>[us]),_:1})])])]),s("li",ms,[s("button",{"data-bs-target":"#submenu3","data-bs-toggle":"collapse",onClick:e[9]||(e[9]=l=>this.$router.push({path:"/LD-Workshop/arts"})),class:"nav-link text-dark px-0 align-middle"},[_s,s("div",{class:v({beating:t.overHereActivated})},[vs,t.overHereActivated?(m(),u("span",hs,"\xA0 Par ici ! ")):h("",!0)],2)]),fs]),s("li",null,[s("button",{"data-bs-target":"#submenu4","data-bs-toggle":"collapse",onClick:e[10]||(e[10]=l=>this.$router.push({path:"/LD-Workshop/services"})),class:"nav-link text-dark px-0 align-middle"},[bs,s("div",{class:v({beating:t.overThereActivated})},[xs,t.overThereActivated?(m(),u("span",gs,"\xA0 Par l\xE0 ! ")):h("",!0)],2)]),ks]),s("li",null,[n(o,{to:"/LD-Workshop/livreOr",class:"nav-link text-dark px-0 align-middle"},{default:i(()=>[Ls,ws]),_:1})]),s("li",null,[s("button",{"data-bs-target":"#submenu5","data-bs-toggle":"collapse",onClick:e[11]||(e[11]=l=>this.$router.push({path:"/LD-Workshop/memberSpace"})),class:"nav-link text-dark px-0 align-middle"},ys),As]),s("li",null,[n(o,{to:"/LD-Workshop/contacts",class:"nav-link text-dark px-0 align-middle"},{default:i(()=>[Ps,Es]),_:1})]),s("li",null,[s("span",Ws,[s("a",Os,[n(r,{class:"text-dark",icon:["fab","instagram"]})])])])]),Cs])])])])]),s("div",Ss,[s("div",$s,[n(o,{to:"/LD-Workshop/",class:"d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none"},{default:i(()=>[Ts]),_:1}),s("ul",Vs,[s("li",Hs,[s("button",js,[s("span",{class:"ms-1 d-none d-sm-inline",onMouseover:e[12]||(e[12]=l=>a.expandOnHover()),onMouseleave:e[13]||(e[13]=l=>a.collapseOnLeave())},"\xC0 propos",32)]),s("ul",Is,[s("li",Rs,[n(o,{to:"/LD-Workshop/bio",class:"nav-link text-white px-0"},{default:i(()=>[Ms]),_:1})]),s("li",null,[n(o,{to:"/LD-Workshop/experiences",class:"nav-link text-white px-0"},{default:i(()=>[Bs]),_:1})])])]),s("li",null,[s("button",{"data-bs-target":"#submenu2","data-bs-toggle":"collapse",onClick:e[14]||(e[14]=l=>this.$router.push({path:"/LD-Workshop/gallery"})),class:"nav-link text-white px-0 align-middle"},[Ns,s("div",{class:v({beating:t.overHereActivated})},[qs,t.overHereActivated?(m(),u("span",Gs,"\xA0 Par ici ! ")):h("",!0)],2)]),s("ul",zs,[s("li",Fs,[n(o,{to:"/LD-Workshop/galleryDrawings",class:"nav-link text-white px-0"},{default:i(()=>[Ks]),_:1})]),s("li",Qs,[n(o,{to:"/LD-Workshop/galleryPhotos",class:"nav-link text-white px-0"},{default:i(()=>[Js]),_:1})]),s("li",Us,[n(o,{to:"/LD-Workshop/galleryPaintings",class:"nav-link text-white px-0"},{default:i(()=>[Xs]),_:1})])])]),s("li",Ys,[s("button",{"data-bs-target":"#submenu3","data-bs-toggle":"collapse",onClick:e[15]||(e[15]=l=>this.$router.push({path:"/LD-Workshop/arts"})),class:"nav-link text-white px-0 align-middle"},[Zs,s("div",{class:v({beating:t.overHereActivated})},[se,t.overHereActivated?(m(),u("span",ee,"\xA0 Par ici ! ")):h("",!0)],2)]),te]),s("li",null,[s("button",{"data-bs-target":"#submenu4","data-bs-toggle":"collapse",onClick:e[16]||(e[16]=l=>this.$router.push({path:"/LD-Workshop/services"})),class:"nav-link text-white px-0 align-middle"},[ne,s("div",{class:v({beating:t.overThereActivated})},[ae,t.overThereActivated?(m(),u("span",oe,"\xA0 Par l\xE0 ! ")):h("",!0)],2)]),le]),s("li",null,[n(o,{to:"/LD-Workshop/livreOr",class:"nav-link text-white px-0 align-middle"},{default:i(()=>[ie,re]),_:1})]),s("li",null,[s("button",{"data-bs-target":"#submenu5","data-bs-toggle":"collapse",onClick:e[17]||(e[17]=l=>this.$router.push({path:"/LD-Workshop/memberSpace"})),class:"nav-link text-white px-0 align-middle"},de),s("ul",pe,[ue,s("li",null,[n(o,{to:"/LD-Workshop/post",class:"nav-link text-white px-0 align-middle"},{default:i(()=>[me,_e]),_:1})])])]),s("li",null,[n(o,{to:"/LD-Workshop/contacts",class:"nav-link text-white px-0 align-middle"},{default:i(()=>[ve,he]),_:1})]),s("li",null,[s("span",fe,[s("a",be,[n(r,{icon:["fab","instagram"]})])])])]),xe])]),s("div",ge,[n(x)])])]),ke],64)}var we=k(T,[["render",Le]]);const De="modulepreload",L={},ye="/LD-Workshop/",d=function(e,p){return!p||p.length===0?e():Promise.all(p.map(c=>{if(c=`${ye}${c}`,c in L)return;L[c]=!0;const t=c.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${a}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":De,t||(r.as="script",r.crossOrigin=""),r.href=c,document.head.appendChild(r),t)return new Promise((o,x)=>{r.addEventListener("load",o),r.addEventListener("error",x)})})).then(()=>e())},Ae={name:"Home",data(){return{}}},Pe={class:"container"},Ee=f('<div id="home" class="row"><div class="col"><h1 class="h1">Accueil</h1><br><h2 class="h2">Bienvenue sur le site de l&#39;Atelier:</h2><p> Quelque soit la raison qui vous a conduite ici-bas sur notre petite plan\xE8te, nous vous en remercions.<br><br> Afin de vous permettre une navigation simple et utile qui r\xE9pondra \xE0 toutes vos attentes, n&#39;h\xE9sitez pas \xE0 lire et visiter tous les chapitres de notre site.<br> Dans le but de faciliter votre visite, notre site se d\xE9coupe en deux parties bien distinctes, structur\xE9es autour des deux grands domaines professionnels propos\xE9s par l&#39;artiste.<br><br> L&#39;Atelier de Vie vous accueillera et vous proposera des services \xE0 buts p\xE9dagogiques et acad\xE9miques, qui se r\xE9v\xE9leront indispensables au bien-\xEAtre personnel et scolaire de votre enfant.<br><br> L&#39;Atelier d&#39;Arts vous transportera dans un tout autre univers, en vous pr\xE9sentant le travail de l&#39;artiste, il fera appel \xE0 vos \xE9motions les plus profondes et vous transportera pour un voyage inoubliable et hors du temps.<br><br> \xC0 la fin de votre visite, vous aurez la possibilit\xE9 de repartir avec un petit morceau de cet univers \xE0 faire germer chez vous, dans votre coeur ou dans votre esprit...<br><br> Bonne visite et bon voyage ! </p></div></div>',1),We=[Ee];function Oe(_,e,p,c,t,a){return m(),u("div",Pe,We)}var Ce=k(Ae,[["render",Oe]]);const Se=[{path:"/LD-Workshop/",name:"Home",component:Ce},{path:"/LD-Workshop/bio",name:"Bio",component:()=>d(()=>import("./Bio.19a219de.js"),["assets/Bio.19a219de.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/gallery",name:"Galerie",component:()=>d(()=>import("./gallery.6c6c0cde.js"),["assets/gallery.6c6c0cde.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/galleryPhotos",name:"galleryPhotos",component:()=>d(()=>import("./galleryPhotos.80cb8a63.js"),["assets/galleryPhotos.80cb8a63.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/galleryDrawings",name:"galleryDrawings",component:()=>d(()=>import("./galleryDrawings.cb31f36a.js"),["assets/galleryDrawings.cb31f36a.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/galleryPaintings",name:"galleryPaintings",component:()=>d(()=>import("./galleryPaintings.552301a5.js"),["assets/galleryPaintings.552301a5.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/arts",name:"Arts",component:()=>d(()=>import("./Arts.70ce1c62.js"),["assets/Arts.70ce1c62.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/login",name:"Login",component:()=>d(()=>import("./Login.f4c1d2b4.js"),["assets/Login.f4c1d2b4.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/post",name:"Post",component:()=>d(()=>import("./Post.f6f83516.js"),["assets/Post.f6f83516.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/experiences",name:"Experiences",component:()=>d(()=>import("./Experiences.482dbe4f.js"),["assets/Experiences.482dbe4f.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/services",name:"Services",component:()=>d(()=>import("./Services.6e28db6d.js"),["assets/Services.6e28db6d.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/livreOr",name:"LivreOr",component:()=>d(()=>import("./LivreOr.7dced051.js"),["assets/LivreOr.7dced051.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/memberSpace",name:"MemberSpace",component:()=>d(()=>import("./MemberSpace.eb075535.js"),["assets/MemberSpace.eb075535.js","assets/vendor.d628d85d.js"])},{path:"/LD-Workshop/contacts",name:"Contacts",component:()=>d(()=>import("./Contacts.7cf5a1b7.js"),["assets/Contacts.7cf5a1b7.js","assets/index.4db902b9.js","assets/axios.edddaafe.js","assets/vendor.d628d85d.js"])}],$e=D({history:y(),routes:Se});A.add(P,E);W(we).component("fa",O).use($e).mount("#app");export{k as _};