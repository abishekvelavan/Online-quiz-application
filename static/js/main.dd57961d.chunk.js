(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{25:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(26),s=a.n(r),o=a(13),i=a(15),l=a(24),d=a(48),u=a(9),j=a.n(u),p=a(16),b=a(10),m=a(46).a.initializeApp({apiKey:"AIzaSyCHVrEBdnGRptABIn_4ZOSmPSxEAZm0yc8",authDomain:"quizoid-dev-279b5.firebaseapp.com",ddatabaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCHVrEBdnGRptABIn_4ZOSmPSxEAZm0yc8",REACT_APP_FIREBASE_APP_ID:"1:665413809719:web:a5648c1f71a01485df31b2",REACT_APP_FIREBASE_AUTH_DOMAIN:"quizoid-dev-279b5.firebaseapp.com",REACT_APP_FIREBASE_DATABASEURL:"https://quizoid-dev-279b5-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-LXPTX8PN4X",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"665413809719",REACT_APP_FIREBASE_PROJECT_ID:"quizoid-dev-279b5",REACT_APP_FIREBASE_STORAGE_BUCKET:"quizoid-dev-279b5.appspot.com"}).REACT_APP_DATABASEURL,projectId:"quizoid-dev-279b5",storageBucket:"quizoid-dev-279b5.appspot.com",messagingSenderId:"665413809719",appId:"1:665413809719:web:a5648c1f71a01485df31b2",measurementId:"G-LXPTX8PN4X"}),h=m.auth(),x=m,O=a(3),g=Object(n.createContext)(),f=function(e){var t=e.children,a=Object(n.useState)(),c=Object(b.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(!0),i=Object(b.a)(o,2),l=i[0],d=i[1];function u(){return(u=Object(p.a)(j.a.mark((function e(t,a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signInWithEmailAndPassword(t,a);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(p.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.createUserWithEmailAndPassword(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.sendPasswordResetEmail(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.currentUser.updateEmail(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.currentUser.updatePassword(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return h.onAuthStateChanged((function(e){s(e),d(!1)}))})),Object(O.jsx)(g.Provider,{value:{currentUser:r,login:function(e,t){return u.apply(this,arguments)},signup:function(e,t){return m.apply(this,arguments)},logout:function(){return x.apply(this,arguments)},resetPassword:function(e){return f.apply(this,arguments)},updateEmail:function(e){return v.apply(this,arguments)},updatePassword:function(e){return y.apply(this,arguments)}},children:!l&&t})},v=["component"];function y(e){var t=e.component,a=Object(d.a)(e,v),c=Object(n.useContext)(g).currentUser;return Object(O.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return c?Object(O.jsx)(t,Object(l.a)({},e)):Object(O.jsx)(i.a,{to:"/login"})}}))}var N=a(80),w=a(78),S=a(77);a(25);function C(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useContext)(g),s=r.currentUser,l=r.logout,d=Object(i.g)(),u=s.email.slice(0,s.email.indexOf("@"));function m(){return h.apply(this,arguments)}function h(){return(h=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,l();case 4:d.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return window.$uName=u,Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsxs)(N.a,{className:"topcon",children:[Object(O.jsxs)("h2",{children:["Hi, ",window.$uName]}),Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h1",{children:"DashBoard-Profile"}),a&&Object(O.jsxs)(w.a,{class:"alerts",variant:"danger",children:[" ",a," "]}),Object(O.jsx)(o.b,{to:"update-profile",className:"btn",children:"Update Profile"}),Object(O.jsx)(o.b,{to:"/Categories",className:"btn",children:"Categories"}),Object(O.jsx)(o.b,{to:"/ChooseLeaderBoard",className:"btn",children:"Leaderboards"}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(S.a,{className:"btn",style:{textDecoration:"none"},variant:"link",onClick:m,children:"Log Out"})})]})]})]})}var A=a(33),k=a.n(A),E=function(e){var t=e.tableName,a=Object(n.useState)([]),c=Object(b.a)(a,2),r=c[0],s=c[1],o="/".concat(t);Object(n.useEffect)((function(){x.database().ref(o).on("value",(function(e){var t=e.val(),a=[];for(var n in t)a.push({id:n,userName:t[n].userName,userScore:t[n].userScore});var c=a.sort(i);s(c.slice(c.length-10,c.length).reverse())}))}),[o]);var i=function(e,t){return e.userScore-t.userScore};return 0===r.length?Object(O.jsx)("div",{className:"flex justify-center items-center h-screen",children:Object(O.jsx)(k.a,{})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"text-center rounded-md  lg:rounded-lg shadow-xl overflow-hidden bg-black mt-8",children:Object(O.jsxs)("table",{className:"text-sm lg:table-auto lg:text-xl",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"bg-gray-600 text-white",children:[Object(O.jsx)("th",{className:"text-center",children:"Position"}),Object(O.jsx)("th",{className:"text-center",children:"Name "}),Object(O.jsx)("th",{className:"text-center",children:"Score "})]})}),r.map((function(e,t){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{className:"bg-white",children:[Object(O.jsxs)("td",{className:"px-8 py-1 lg:px-16 text-center",children:[" ",parseInt(t)+1]}),Object(O.jsxs)("td",{className:"px-8 py-1 lg:px-16 text-center",children:[" ",e.userName," "]}),Object(O.jsxs)("td",{className:"px-8 py-1 lg:px-16 text-center",children:[" ",e.userScore," "]})]})})}))]})})})},P=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],c=t[1],r=function(){var e=["General Knowledge","Ecology","Computer Science","Maths","Geographical Science","History","Sports","Ancient Mythology","Films and Series","Musicals","Video Games","Books and Novels","Board Games","Biological Science","Comics","Cartoons and Anime"];function t(){return(t=Object(p.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a,r=e.indexOf(n.target.value),c(r);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsx)("select",{style:{width:"15rem",textAlign:"center",backgroundColor:"white",color:"#3e4962",borderRadius:5,padding:"0.5rem"},onChange:function(e){return t.apply(this,arguments)},value:e[a],children:e.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))})};return Object(O.jsxs)("div",{children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("img",{className:"logo",alt:"logo",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"})}),Object(O.jsxs)("div",{style:{marginTop:"0rem",marginLeft:"2rem",marginRight:"2rem",borderRadius:10,padding:"2rem 2rem"},children:[Object(O.jsx)("div",{className:"flex justify-center items-center",children:Object(O.jsx)(r,{})}),Object(O.jsx)("div",{style:{marginTop:"2rem",marginBottom:"2rem"},children:0===a?Object(O.jsx)(E,{tableName:"General Knowledge"}):1===a?Object(O.jsx)(E,{tableName:"Ecology"}):2===a?Object(O.jsx)(E,{tableName:"Computer Science"}):3===a?Object(O.jsx)(E,{tableName:"Maths"}):4===a?Object(O.jsx)(E,{tableName:"Geographical Science"}):5===a?Object(O.jsx)(E,{tableName:"History"}):6===a?Object(O.jsx)(E,{tableName:"Sports"}):7===a?Object(O.jsx)(E,{tableName:"Ancient Mythology"}):8===a?Object(O.jsx)(E,{tableName:"Films and Series"}):9===a?Object(O.jsx)(E,{tableName:"Musicals"}):10===a?Object(O.jsx)(E,{tableName:"Video Games"}):11===a?Object(O.jsx)(E,{tableName:"Books and Novels"}):12===a?Object(O.jsx)(E,{tableName:"Board Games"}):13===a?Object(O.jsx)(E,{tableName:"Biological Science"}):14===a?Object(O.jsx)(E,{tableName:"Comics"}):15===a?Object(O.jsx)(E,{tableName:"Cartoons and Anime"}):null}),Object(O.jsxs)("div",{className:"flex justify-center items-center gap-6",children:[Object(O.jsx)(o.b,{to:"/categories",className:"p-3 rounded-md bg-white text-center text-decoration-none",style:{backgroundColor:"white",color:"#3e4962",fontWeight:"500"},children:"Retake Quiz"}),Object(O.jsx)(o.b,{to:"/",className:"p-3 rounded-md bg-white text-center text-decoration-none",style:{backgroundColor:"white",color:"#3e4962",fontWeight:"500"},children:"Dashboard"})]})]})]})},_=a(47),R=(a(72),function(e){var t=e.showAnswers,a=e.handleAnswer,n=e.handleNextQuestion,c=e.data,r=c.question,s=c.correct_answer,o=c.answers;return Object(O.jsxs)("div",{className:"flex flex-col",children:[Object(O.jsx)("div",{className:" text-black p-10 rounded shadow-md",style:{backgroundColor:"#7dced0"},children:Object(O.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:r}})}),Object(O.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",children:o.map((function(e,n){var c=t?e===s?"text-green-700":"text-red-600":"text-black";return Object(O.jsx)("button",{style:{backgroundColor:"#7dced0"},className:"kl-auto text-black ".concat(c," p-4 font-semibold rounded shadow"),onClick:function(){return a(e)},answer:e,dangerouslySetInnerHTML:{__html:e}},n)}))}),t&&Object(O.jsx)("button",{onClick:n,className:"ml-auto mt-6 bg-white text-purple-800 p-4 font-semibold rounded shadow",children:"Next Question"})]})});var B=function(e){var t=e.name,a=e.api,c=Object(n.useState)([]),r=Object(b.a)(c,2),s=r[0],i=r[1],d=Object(n.useState)(0),u=Object(b.a)(d,2),m=u[0],h=u[1],g=Object(n.useState)(0),f=Object(b.a)(g,2),v=f[0],y=f[1],N=Object(n.useState)(!1),w=Object(b.a)(N,2),S=w[0],C=w[1],A="/".concat(t);Object(n.useEffect)((function(){fetch("".concat(a)).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{answers:[e.correct_answer].concat(Object(_.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));i(t)}))}),[a]);var E={paddingTop:20,paddingLeft:3,paddingRight:3,paddingBottom:20,borderRadius:10,backgroundColor:"white",color:"#3e4962",fontWeight:"500",textDecoration:"none",textAlign:"center"},P=function(){var e=Object(p.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("logged in upload Data"),t=x.database().ref(A),a={userName:window.$uName,userScore:v},console.log(a),e.next=7,t.push(a);case 7:console.log("pushed the data"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),B={textAlign:"center",Display:"flex",justifyContent:"center",marginTop:"6rem"};return s.length>0?Object(O.jsx)("div",{className:"container",style:B,children:m>=s.length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{className:"text-3xl font-bold",style:{color:"#7dced0",textAlign:"center",marginBottom:"2rem",marginTop:"5rem"},children:["Game ended! Your score in ",t," is ",v]}),Object(O.jsx)("div",{className:"flex flex-col gap-4",style:{fontSize:20},children:Object(O.jsxs)("div",{className:"grid grid-cols-2 gap-3 mt-6",children:[Object(O.jsx)(o.b,{to:"/",style:E,children:"Dashboard"}),Object(O.jsx)(o.b,{to:"/ChooseLeaderBoard",style:E,children:"LeaderBoard"})]})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"text-3xl font-bold",style:{color:"#7dced0"},children:t}),Object(O.jsx)(R,{style:B,data:s[m],showAnswers:S,handleAnswer:function(e){S||e===s[m].correct_answer&&y(v+1),C(!0)},handleNextQuestion:function(){C(!1),m+1>=s.length&&P(),h(m+1)}})]})}):Object(O.jsx)("div",{className:"flex justify-center items-center h-screen",children:Object(O.jsx)(k.a,{})})};var T=function(){var e=Object(n.useState)(void 0),t=Object(b.a)(e,2),a=t[0],c=t[1],r=function(e){var t=e.id,a=e.text,n=e.bg;return Object(O.jsx)("button",{className:"text-black px-8",style:{paddingTop:25,paddingBottom:25,paddingLeft:20,paddingRight:20,fontSize:20,borderRadius:10,backgroundColor:"".concat(n),border:0,textAlign:"center",fontWeight:"600"},onClick:function(){return s(t)},children:a})};function s(e){c(e)}return"1"===a?Object(O.jsx)(B,{name:"General Knowledge",api:"https://opentdb.com/api.php?amount=10&category=9&type=multiple"}):"2"===a?Object(O.jsx)(B,{name:"Ecology",api:"https://opentdb.com/api.php?amount=10&category=17&type=multiple"}):"3"===a?Object(O.jsx)(B,{name:"Computer Science",api:"https://opentdb.com/api.php?amount=10&category=18&type=multiple"}):"4"===a?Object(O.jsx)(B,{name:"Maths",api:"https://opentdb.com/api.php?amount=10&category=19&type=multiple"}):"5"===a?Object(O.jsx)(B,{name:"Geographical Science",api:"https://opentdb.com/api.php?amount=10&category=22&type=multiple"}):"6"===a?Object(O.jsx)(B,{name:"History",api:"https://opentdb.com/api.php?amount=10&category=23&type=multiple"}):"7"===a?Object(O.jsx)(B,{name:"Sports",api:"https://opentdb.com/api.php?amount=10&category=21&type=multiple"}):"8"===a?Object(O.jsx)(B,{name:"Ancient Mythology",api:"https://opentdb.com/api.php?amount=10&category=20&type=multiple"}):"9"===a?Object(O.jsx)(B,{name:"Films and Series",api:"https://opentdb.com/api.php?amount=10&category=11&type=multiple"}):"10"===a?Object(O.jsx)(B,{name:"Musicals",api:"https://opentdb.com/api.php?amount=10&category=12&type=multiple"}):"11"===a?Object(O.jsx)(B,{name:"Video Games",api:"https://opentdb.com/api.php?amount=10&category=15&type=multiple"}):"12"===a?Object(O.jsx)(B,{name:"Books and Novels",api:"https://opentdb.com/api.php?amount=10&category=10&type=multiple"}):"13"===a?Object(O.jsx)(B,{name:"Board Games",api:"https://opentdb.com/api.php?amount=10&category=16&type=multiple"}):"14"===a?Object(O.jsx)(B,{name:"Biological Science",api:"https://opentdb.com/api.php?amount=10&category=27&type=multiple"}):"15"===a?Object(O.jsx)(B,{name:"Comics",api:"https://opentdb.com/api.php?amount=10&category=29&type=multiple"}):"16"===a?Object(O.jsx)(B,{name:"Cartoons and Anime",api:"https://opentdb.com/api.php?amount=10&category=32&type=multiple"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("img",{className:"logo",alt:"logo",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"})}),Object(O.jsx)("header",{className:"font-bold text-4xl ",style:{textAlign:"center",color:"#7dced0",marginTop:"1rem",marginBottom:"1rem"},children:"Choose your category"}),Object(O.jsxs)("div",{className:"grid grid-cols-2 gap-6 mt-6 lg:grid-cols-4 gap-6 mt-6 ",style:{marginTop:"3rem",marginBottom:"rem"},children:[Object(O.jsx)(r,{id:"1",text:"General Knowledge",bg:"#9483bd",onClick:s}),Object(O.jsx)(r,{id:"2",text:"Ecology",bg:"#e79995",onClick:s}),Object(O.jsx)(r,{id:"3",text:"Computer Science",bg:"#98d5ca",onClick:s}),Object(O.jsx)(r,{id:"4",text:"Maths",bg:"#9acaed",onClick:s}),Object(O.jsx)(r,{id:"5",bg:"#98d099",text:"Geographical Science",onClick:s}),Object(O.jsx)(r,{id:"6",text:"History",bg:"#e8ce4f",onClick:s}),Object(O.jsx)(r,{id:"7",text:"Sports",bg:"#e7e5e3",onClick:s}),Object(O.jsx)(r,{id:"8",text:"Ancient Mythology",bg:"#e769bb",onClick:s}),Object(O.jsx)(r,{id:"9",text:"Films and Series",bg:"#e79995",onClick:s}),Object(O.jsx)(r,{id:"10",text:"Musicals",bg:"#98d5ca",onClick:s}),Object(O.jsx)(r,{id:"11",text:"Video Games",bg:"#9acaed",onClick:s}),Object(O.jsx)(r,{id:"12",text:"Books and Novels",bg:"#9483bd",onClick:s}),Object(O.jsx)(r,{id:"13",bg:"#98d099",text:"Board Games",onClick:s}),Object(O.jsx)(r,{id:"14",text:"Biological Science",bg:"#e8ce4f",onClick:s}),Object(O.jsx)(r,{id:"15",text:"Comics",bg:"#e7e5e3",onClick:s}),Object(O.jsx)(r,{id:"16",text:"Cartoons and Anime",bg:"#e769bb",onClick:s})]})]})},I=a(79);function G(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useContext)(g),r=c.currentUser,s=c.updatePassword,l=c.updateEmail,d=Object(n.useState)(""),u=Object(b.a)(d,2),j=u[0],p=u[1],m=Object(n.useState)(!1),h=Object(b.a)(m,2),x=h[0],f=h[1],v=Object(i.g)();var y={padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(N.a,{className:"topcon",children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Update Profile"}),j&&Object(O.jsxs)(w.a,{variant:"danger",children:[" ",j," "]}),Object(O.jsxs)(I.a,{onSubmit:function(n){if(n.preventDefault(),t.current.value!==a.current.value)return p("Passwords do not match");var c=[];e.current.value!==r.email&&c.push(l(e.current.value)),t.current.value&&c.push(s(t.current.value)),Promise.all(c).then((function(){v.push("/")})).catch((function(){p("Failed to Update Account")})).finally((function(){f("false")}))},children:[Object(O.jsx)(I.a.Group,{id:"email",children:Object(O.jsx)(I.a.Control,{className:"form-top",style:y,type:"email",ref:e,required:!0,placeholder:"Email",defaultValue:r.email})}),Object(O.jsx)(I.a.Group,{id:"password",children:Object(O.jsx)(I.a.Control,{className:"form-mid",style:y,type:"password",ref:t,placeholder:"Enter new Password"})}),Object(O.jsx)(I.a.Group,{id:"confirmpassword",children:Object(O.jsx)(I.a.Control,{className:"form-end",style:y,type:"password",ref:a,placeholder:"Confirm Password"})}),Object(O.jsx)(S.a,{disabled:x,className:"btn",type:"submit",children:"Update"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(o.b,{to:"/",className:"links",children:"Cancel"})})]})})]})}function q(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=Object(n.useContext)(g).signup,r=Object(n.useState)(""),s=Object(b.a)(r,2),l=s[0],d=s[1],u=Object(n.useState)(!1),m=Object(b.a)(u,2),h=m[0],x=m[1],f=Object(i.g)();function v(){return(v=Object(p.a)(j.a.mark((function n(r){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",d("Passwords do not match"));case 3:return n.prev=3,d(""),x(!0),n.next=8,c(e.current.value,t.current.value);case 8:f.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),d("Failed to Create an Account");case 14:x(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}var y={padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(N.a,{className:"topcon",children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Sign Up"}),l&&Object(O.jsxs)(w.a,{variant:"danger",children:[" ",l," "]}),Object(O.jsxs)(I.a,{id:"signup-form",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(O.jsx)(I.a.Group,{id:"signup-email",children:Object(O.jsx)(I.a.Control,{className:"form-top",style:y,type:"email",ref:e,required:!0,placeholder:"Email"})}),Object(O.jsx)(I.a.Group,{id:"password",children:Object(O.jsx)(I.a.Control,{className:"form-mid",type:"password",style:y,ref:t,placeholder:"Password",pattern:"(?=.*\\d)(?=.[a-z])(?=.[A-z]).{8,}",title:"Must contain at least one number[0-9] and one uppercase[A-Z] and lowercase[a-b] letter,and atleast 8 or more character",required:!0})}),Object(O.jsx)(I.a.Group,{id:"confirmpassword",children:Object(O.jsx)(I.a.Control,{className:"form-end",type:"password",style:y,ref:a,required:!0,placeholder:"Confirm Password"})}),Object(O.jsx)(S.a,{disabled:h,className:"btn",type:"submit",children:"Sign Up"})]}),Object(O.jsxs)("div",{className:"foot",children:["Already have an account? ",Object(O.jsx)(o.b,{to:"/login",className:"links",children:"Log In"})]})]})})]})}function z(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useContext)(g).login,c=Object(n.useState)(""),r=Object(b.a)(c,2),s=r[0],l=r[1],d=Object(n.useState)(!1),u=Object(b.a)(d,2),m=u[0],h=u[1],x=Object(i.g)();function f(){return(f=Object(p.a)(j.a.mark((function n(c){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,l(""),h(!0),n.next=6,a(e.current.value,t.current.value);case 6:x.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),l("Failed to log in");case 12:h(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var v={padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(N.a,{className:"topcon",children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Log In"}),s&&Object(O.jsx)("h4",{className:"text-red-500 bg-red-300 p-1 rounded-mt border-red-800 rounded",children:s}),Object(O.jsxs)(I.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(O.jsx)(I.a.Group,{id:"email",children:Object(O.jsx)(I.a.Control,{style:v,className:"form-top",type:"email",ref:e,required:!0,placeholder:"Email"})}),Object(O.jsx)(I.a.Group,{id:"password",children:Object(O.jsx)(I.a.Control,{style:v,className:"form-end",classNAme:"input",type:"password",ref:t,required:!0,placeholder:"Password"})}),Object(O.jsx)(S.a,{disabled:m,className:"btn",type:"submit",children:"Log In"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(o.b,{className:"links",to:"/forgot-password",children:"Forgot Password? "})}),Object(O.jsxs)("div",{className:"foot",children:["Need an account? ",Object(O.jsx)(o.b,{to:"/signup",className:"links",children:"Sign Up"})]})]})})]})}function F(){var e=Object(n.useRef)(),t=Object(n.useContext)(g).resetPassword,a=Object(n.useState)(""),c=Object(b.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),l=Object(b.a)(i,2),d=l[0],u=l[1],m=Object(n.useState)(!1),h=Object(b.a)(m,2),x=h[0],f=h[1];function v(){return(v=Object(p.a)(j.a.mark((function a(n){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,u(""),s(""),f(!0),a.next=7,t(e.current.value);case 7:u("Check Your Inbox for further Instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("Failed to Reset Password");case 13:f(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(N.a,{className:"topcon",children:Object(O.jsxs)(N.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Password Reset"}),r&&Object(O.jsxs)(w.a,{variant:"danger",children:[" ",r," "]}),d&&Object(O.jsxs)(w.a,{variant:"sucess",children:[" ",d," "]}),Object(O.jsxs)(I.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(O.jsx)(I.a.Group,{id:"email",children:Object(O.jsx)(I.a.Control,{className:"form-solo",type:"email",ref:e,required:!0,placeholder:"Email"})}),Object(O.jsx)(S.a,{disabled:x,className:"btn",type:"submit",children:"Reset Password"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(o.b,{className:"links",to:"/login",children:"Log In? "})}),Object(O.jsxs)("div",{className:"foot",children:["Need an account? ",Object(O.jsx)(o.b,{to:"/signup",className:"links",children:"Sign Up"})]})]})})]})}a(43);var D=function(){return Object(O.jsx)(f,{children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(y,{exact:!0,path:"/",component:C}),Object(O.jsx)(y,{path:"/update-profile",component:G}),Object(O.jsx)(i.b,{path:"/signup",component:q}),Object(O.jsx)(i.b,{path:"/login",component:z}),Object(O.jsx)(i.b,{path:"/forgot-password",component:F}),Object(O.jsx)(i.b,{path:"/ChooseLeaderBoard",exact:!0,component:P}),Object(O.jsx)(i.b,{path:"/Categories",exact:!0,component:T})]})})})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(D,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.dd57961d.chunk.js.map