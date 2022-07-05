(this["webpackJsonpperez.io"]=this["webpackJsonpperez.io"]||[]).push([[0],{58:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(22),l=a.n(i),c=a(43),r=a(48),s=a(26),p=function(e){return"".concat("https://nperez9.github.io/nperez.io").concat(e)};c.a.use(r.a).use(s.e).init({lng:"en",backend:{loadPath:p("/translations/{{lng}}.json")},fallbackLng:"en",debug:!0,ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});c.a;var m=a(5),u=a(3),g=a(1),d={maxWidth:"1200px",display:"block",margin:"0 auto","@media (max-width: 1200px)":{padding:10,"padding-bottom":60},"padding-bottom":60},b=Object(u.a)({},d),h=function(e){var t=e.children;return Object(g.a)("section",{css:b}," ",t," ")},f=Object(u.a)(Object(u.a)({},d),{},{padding:"0px !important",margin:"20px auto"}),v=function(e){var t=e.color,a=e.height;return f.backgroundColor=t,f.height=a,Object(g.a)("div",{css:f})};v.defaultProps={color:"#d6d6d6",height:1};var y=v,j=a(20),x=function(e){var t=e.tag,a=e.children,o={color:"#F92672"};return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{style:o},"<".concat(t,"> ")),a,n.a.createElement("span",{style:o}," </".concat(t,">")))},O=x,w=function(e){var t=e.link,a=e.children,o=e.isExternal,i=n.a.createElement("a",{className:"btn btn-outline-light",href:t,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(O,{tag:"a"},a)),l=n.a.createElement(j.b,{className:"btn btn-outline-light",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(O,{tag:"a"},a));return o?i:l};w.defaultProps={isExternal:!0};var k=w,_=function(e){var t=e.children,a=e.classes,o=e.type,i=e.outline,l="btn".concat(i?"-outline":"","-").concat(o);return n.a.createElement("button",{className:"btn ".concat(l," ").concat(a),type:"button"},t)};_.defaultProps={type:"primary",clasess:"",outline:!1};var C=a(81),E={textAlign:"center",position:"relative",img:{width:"200px",heigth:"200px"},"> *":{marginBottom:"20px"}},N=function(){var e=Object(C.a)().t;return Object(g.a)("section",{css:E},Object(g.a)("h1",null,Object(g.a)(x,{tag:"h1"},e("home.title"))),Object(g.a)("h2",null,Object(g.a)(x,{tag:"h2"},e("home.subtitle"))),Object(g.a)("h4",null,e("home.posttitle")))},z=[{link:"https://github.com/nperez9",name:"GitHub",text:"contact.github"},{link:"https://stackoverflow.com/users/6888888/nperez9",name:"StackOverflow",text:"contact.stackoverflow"},{link:"https://www.linkedin.com/in/nicol%C3%A1s-agust%C3%ADn-perez-23a5b1aa",name:"LinkedIn",text:"contact.linkedin"},{link:"mailto:nicolasperez95.a@gmail.com",name:"Gmail",text:"contact.gmail"}],A=[{groupName:"Videogames",tecs:[{name:"Unity",logo:"unity-logo.png"},{name:"C#",logo:"c-logo.png"},{name:"Aseprite",logo:"asesprite-logo.png"}]},{groupName:"Front-end",tecs:[{name:"React",logo:"react-icon.svg"},{name:"Angular",logo:"angular-logo.png"},{name:"Webpack",logo:"webpack-logo.png"},{name:"TS",logo:"ts-logo.png"}]},{groupName:"Back-end",tecs:[{name:"NodeJs",logo:"nodejs-logo.png"},{name:"MongoDB",logo:"mongo-logo.png"},{name:"Docker",logo:"docker-logo.png"},{name:"MySql",logo:"mysql-logo.png"},{name:"TS",logo:"ts-logo.png"}]}],S={".tec-group-title":{marginBottom:"15px",fontSize:"16px"},".tecs-container":{display:"flex",flexFlow:"row wrap",alignItems:"center",justifyContent:"center",marginBottom:"20px",".tec-item":{width:"170px",padding:"15px","> img":{maxWidth:"130px",height:"130px",margin:"auto",display:"block"},"> span":{marginTop:"5px",display:"inline-block"}}}},P=function(e){var t=e.tecGroup;return Object(g.a)("div",{className:"tec-group",css:S},Object(g.a)("h5",{className:"tec-group-title"},t.groupName,":"),Object(g.a)("div",{className:"tecs-container"},t.tecs.map((function(e){return Object(g.a)("div",{className:"tec-item",key:e.name},Object(g.a)("img",{src:p("/images/".concat(e.logo)),alt:e.name}),Object(g.a)("span",null,e.name))}))))},L={textAlign:"center",h4:{marginBottom:30,fontSize:18},".social-block":{display:"flex",justifyContent:"center",flexDirection:"row","@media (max-width: 780px)":{flexDirection:"column","> div":{margin:"10px auto"}},"> div":{padding:"0 20px"}}},R=function(){var e,t,a=Object(C.a)().t;return e=A.map((function(e){return Object(g.a)(P,{tecGroup:e,key:e.groupName})})),t=z.map((function(e){return Object(g.a)("div",{key:e.name},Object(g.a)(k,{link:e.link},e.name))})),Object(g.a)("section",{css:L},Object(g.a)("div",null,Object(g.a)("h4",null,a("home.tecnologies")),Object(g.a)("div",null,e)),Object(g.a)(y,null),Object(g.a)("div",null,Object(g.a)("h4",null,a("home.findMe")),Object(g.a)("div",{className:"social-block"},t)))},B=Object(u.a)({},d),W=function(){return Object(g.a)("main",{css:B},Object(g.a)(N,null),Object(g.a)(y,null),Object(g.a)(R,null))},D=function(){return Object(g.a)("div",null,"your component about")},M=a(80),F=a(82),T=[{id:1,type:"videogame",name:"Super Cannon Blast!",cover_image:"/images/portfolio/cannon-blast/cover-imag.png",description_images:["/images/portfolio/cannon-blast/cover-imag.png","/images/portfolio/cannon-blast/screen-level-1.png","/images/portfolio/cannon-blast/screen-level-2.png"],videos:[],description:"A full action arcade game, inspired by donkey kong country",short_description:"An arcade 2D game full of action, based in barrel mechanincs, go to the end of the level and grab the coins!",github_url:"https://github.com/nperez9/cannon-blast",isPlayable:!1,play_url:"/proyects/cannon-blast",itch_url:""},{id:2,type:"videogame",name:"Pokeclon",cover_image:"/images/portfolio/pokeclon/pc-3.png",description_images:["/images/portfolio/pokeclon/pc-1.png","/images/portfolio/pokeclon/pc-2.png","/images/portfolio/pokeclon/pc-3.png","/images/portfolio/pokeclon/pc-4.png"],videos:[],description:"A full action arcade game, inspired by donkey kong country",short_description:"A fan mande pokemon game made in unity",github_url:"https://github.com/nperez9/poketSouls",isPlayable:!1,devlog_url:"https://github.com/nperez9/poketSouls/wiki/Devlog",play_url:"",itch_url:""},{id:3,type:"videogame",name:"Wood-Cutter",cover_image:"/images/portfolio/wood-cutter/front.png",description_images:["/images/portfolio/wood-cutter/front.png"],videos:[],description:"A full action arcade game, inspired by donkey kong country",short_description:"A 2D arcade videogame made in JS, with parser",github_url:"https://github.com/nperez9/wood-axe-game",isPlayable:!0,devlog_url:"",play_url:"/proyects/wood-cutter",itch_url:""},{id:7,type:"web",name:"Api Auth",cover_image:"/images/portfolio/api-auth/cover_image.png",description_images:[],videos:[],description:"An authentication microservice build in NodeJS, with express, typescript and mongo. Mostly used as base for my futher Node Api's",short_description:"An authentication microservice build in NodeJS, with express, typescript and mongodb. Mostly used as base for my further Node Apis",github_url:"https://github.com/nperez9/api-auth",isPlayable:!1,devlog_url:"",play_url:"",itch_url:""},{id:5,type:"web",name:"React Hypercoss",cover_image:"/images/portfolio/react-hypercross/cover_image.png",description_images:[],videos:[],description:"Component library based on bootstrap framework, build on storybook and with unit testing",short_description:"Component library based on bootstrap framework, build on storybook, typescript and with unit testing. Only for React!",github_url:"https://github.com/nperez9/react-hypercross",isPlayable:!1,devlog_url:"",play_url:"",itch_url:""},{id:4,type:"web",name:"React redux",cover_image:"/images/portfolio/react-redux/cover_image.png",description_images:["/images/portfolio/react-redux/image_2.png"],videos:[],description:"React redux implementation for academind course. this includes classic classic implementation and also the use of @redux/toolkit",short_description:"React redux implementation for academind course. this includes classic store implementation and also the use of @redux/toolkit",github_url:"https://github.com/nperez9/react-functional-redux",isPlayable:!1,devlog_url:"",play_url:"",itch_url:""},{id:8,type:"web",name:"This Website",cover_image:"/images/portfolio/website/cover_image.png",description_images:[],videos:[],description:"Yes! you can see the source code of this website, it's not my fanciest project, but it does have some cool stuff like multiple languages",short_description:"Yes! you can see the source code of this website, it's not my fanciest project, but it does have some cool stuff like multiple languages and emotion",github_url:"https://github.com/nperez9/perez.io",isPlayable:!1,devlog_url:"",play_url:"",itch_url:""},{id:6,type:"web",name:"Micro wallet",cover_image:"/images/portfolio/wallet-test/cover_image.png",description_images:[],videos:[],description:"Code challenge for a crypto wallet company, made with React and context",short_description:"Code challenge for a crypto wallet company, made with React and context API",github_url:"https://github.com/nperez9/test-task",isPlayable:!1,devlog_url:"",play_url:"",itch_url:""}],J={display:"flex",maxHeight:"300px",width:"100%",padding:"20px 0",marginTop:"25px",".item-image":{width:"35%",img:{width:"100%",borderRadius:"10px"}},".item-content":{padding:"0 20px",width:"65%",display:"flex",flexFlow:"column",justifyContent:"space-between",".item-buttons":{display:"flex",flexWrap:"wrap",flexFlow:"row",gap:"10px",justifyContent:"flex-start"}},"@media (max-width: 780px)":{flexFlow:"column",maxHeight:"none",".item-image":{width:"100%",padding:"10px"},".item-content":{width:"100%",padding:"0 10px"}}},G=function(e){var t=e.item;return Object(g.a)("div",{className:"item-container",css:J},Object(g.a)("div",{className:"item-image"},Object(g.a)("img",{alt:t.name,src:p(t.cover_image)})),Object(g.a)("div",{className:"item-content"},Object(g.a)("div",null,Object(g.a)("h4",null,t.name),Object(g.a)(y,null),Object(g.a)("p",null,t.short_description)),Object(g.a)("div",{className:"item-buttons"},t.github_url&&Object(g.a)(k,{link:t.github_url},"Code"),t.devlog_url&&Object(g.a)(k,{link:t.devlog_url},"DevLog"),t.play_url&&t.isPlayable&&Object(g.a)(k,{link:p(t.play_url)},"Play"))))},H={marginTop:"25px"},V=function(e){var t=e.portfolioList.map((function(e){return Object(g.a)("article",{key:e.id},Object(g.a)(G,{item:e}),Object(g.a)(y,null))}));return Object(g.a)("div",{style:H},t)},I={justifyContent:"space-evenly",".nav-item":{width:"50%",fontSize:"1.25em","> button":{width:"100%",color:"white"}}},K=function(){var e=T.filter((function(e){return"web"===e.type})),t=T.filter((function(e){return"videogame"===e.type}));return Object(g.a)(M.a,{defaultActiveKey:"web",id:"uncontrolled-tab-example",css:I},Object(g.a)(F.a,{eventKey:"web",title:"Web"},Object(g.a)(V,{portfolioList:e})),Object(g.a)(F.a,{eventKey:"games",title:"Games"},Object(g.a)(V,{portfolioList:t})))},q={textAlign:"center"},Y=function(){var e=Object(C.a)().t;return Object(g.a)(h,null,Object(g.a)("h1",{style:q},Object(g.a)(x,{tag:"h1"},e("portfolio.title"))),Object(g.a)("h3",{style:q},Object(g.a)(x,{tag:"h2"},e("portfolio.subtitle")," \ud83d\ude05")),Object(g.a)(y,null),Object(g.a)(K,null))},U=Object(u.a)(Object(u.a)({},d),{},{textAlign:"center",a:{display:"block",margin:12,i:{heigth:24,width:24,marginRight:14}}}),$=function(){var e=["linkedin","gmail"],t=Object(C.a)().t,a=z.map((function(a){var o=a.name,n=a.link,i=a.text;return e.includes(o.toLocaleLowerCase())?(console.info(i),Object(g.a)("a",{key:o,href:n,target:"_blank",rel:"noopener noreferrer"},Object(g.a)("i",{className:"nes-icon ".concat(o.toLocaleLowerCase()," is-small")}),t(i))):null}));return Object(g.a)("main",{css:U},Object(g.a)("h1",null,"Contact me!"),Object(g.a)("div",null,a))},Q=function(){return n.a.createElement(m.d,null,n.a.createElement(m.b,{path:"/home",exact:!0,component:W}),n.a.createElement(m.b,{path:"/about",exact:!0,component:D}),n.a.createElement(m.b,{path:"/portfolio",exact:!0,component:Y}),n.a.createElement(m.b,{path:"/portfolio/:id",exact:!0,component:Y}),n.a.createElement(m.b,{path:"/contact",exact:!0,component:$}),n.a.createElement(m.a,{exact:!0,from:"/",to:"/home"}))},X={display:"inline-block",float:"right","#lng_select":{width:"120px",float:"left",select:{padding:"2px"}},select:{backgroundColor:"#272822",color:"#d6d6d6",fontFamily:"'Roboto Mono', monospace"}},Z=function(){var e=Object(C.a)().i18n;return Object(g.a)("div",{css:X},Object(g.a)("div",{id:"lng_select"},Object(g.a)("select",{onChange:function(t){e.changeLanguage(t.target.value)}},Object(g.a)("option",{value:"en",name:"language",defaultValue:!0},"eng"),Object(g.a)("option",{value:"es",name:"language"},"esp"))))},ee={maxWidth:"1200px",display:"block",margin:"0 auto",padding:"10px 0",textAling:"center",marginBottom:20,"> a":{marginRight:25,color:"#d6d6d6"},LenguagePicker:{float:"right"},"@media (max-width: 1200px)":{paddingLeft:"10px"}},te=function(){return Object(g.a)("nav",{css:ee},Object(g.a)(j.b,{to:"/home"},"Home"),Object(g.a)(j.b,{to:"/portfolio"},"Portfolio"),Object(g.a)(Z,null))},ae={bottom:0,width:"100%",position:"fixed",marginTop:40,backgroundColor:"#3c7dde;",color:"white",padding:"2px 4px",a:{color:"white"},".leftSide":{float:"left"}},oe=function(){return Object(g.a)("footer",{css:ae},Object(g.a)("div",{className:"left-side"},Object(g.a)("span",null,Object(g.a)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-cloud-arrow-up-fill",viewBox:"0 0 16 16"},Object(g.a)("path",{d:"M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"}))," ","master")))};var ne=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o.Suspense,{fallback:null},n.a.createElement(te,null),n.a.createElement(Q,null),n.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j.a,{basename:"https://nperez9.github.io/nperez.io"},n.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.bebdf2bb.chunk.js.map