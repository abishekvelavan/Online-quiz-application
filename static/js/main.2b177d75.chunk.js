(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{25:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a.n(c),n=a(26),r=a.n(n),o=a(8),i=a(15),l=a(24),d=a(48),j=a(10),b=a.n(j),u=a(16),p=a(11),m=a(46).a.initializeApp({apiKey:"AIzaSyCHVrEBdnGRptABIn_4ZOSmPSxEAZm0yc8",authDomain:"quizoid-dev-279b5.firebaseapp.com",ddatabaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyCHVrEBdnGRptABIn_4ZOSmPSxEAZm0yc8",REACT_APP_FIREBASE_APP_ID:"1:665413809719:web:a5648c1f71a01485df31b2",REACT_APP_FIREBASE_AUTH_DOMAIN:"quizoid-dev-279b5.firebaseapp.com",REACT_APP_FIREBASE_DATABASEURL:"https://quizoid-dev-279b5-default-rtdb.firebaseio.com",REACT_APP_FIREBASE_MEASUREMENT_ID:"G-LXPTX8PN4X",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"665413809719",REACT_APP_FIREBASE_PROJECT_ID:"quizoid-dev-279b5",REACT_APP_FIREBASE_STORAGE_BUCKET:"quizoid-dev-279b5.appspot.com"}).REACT_APP_DATABASEURL,projectId:"quizoid-dev-279b5",storageBucket:"quizoid-dev-279b5.appspot.com",messagingSenderId:"665413809719",appId:"1:665413809719:web:a5648c1f71a01485df31b2",measurementId:"G-LXPTX8PN4X"}),h=m.auth(),x=m,O=a(2),g=Object(c.createContext)(),f=function(e){var t=e.children,a=Object(c.useState)(),s=Object(p.a)(a,2),n=s[0],r=s[1],o=Object(c.useState)(!0),i=Object(p.a)(o,2),l=i[0],d=i[1];function j(){return(j=Object(u.a)(b.a.mark((function e(t,a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signInWithEmailAndPassword(t,a);case 2:return c=e.sent,e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(u.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.createUserWithEmailAndPassword(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.sendPasswordResetEmail(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.currentUser.updateEmail(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.currentUser.updatePassword(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.currentUser.sendEmailVerification(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){return h.onAuthStateChanged((function(e){r(e),d(!1)}))})),Object(O.jsx)(g.Provider,{value:{currentUser:n,login:function(e,t){return j.apply(this,arguments)},signup:function(e,t){return m.apply(this,arguments)},logout:function(){return x.apply(this,arguments)},resetPassword:function(e){return f.apply(this,arguments)},updateEmail:function(e){return v.apply(this,arguments)},updatePassword:function(e){return y.apply(this,arguments)},verifyEmail:function(e){return w.apply(this,arguments)}},children:!l&&t})},v=["component"];function y(e){var t=e.component,a=Object(d.a)(e,v),s=Object(c.useContext)(g).currentUser;return Object(O.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return s?Object(O.jsx)(t,Object(l.a)({},e)):Object(O.jsx)(i.a,{to:"/login"})}}))}a(25);var w=a.p+"static/media/5603875.56e7133e.jpg",N=a.p+"static/media/3.0213c0ac.jpeg",C=a.p+"static/media/2.c50765dc.jpeg",S=[{name:"Harikrishna C",image:a.p+"static/media/0.90e80a2a.jpeg",price:"III-CSE, KPRIET"},{name:"Abishek Velavan D",image:C,price:"III-CSE, KPRIET"},{name:"Gokul B",image:N,price:"III-BME KPRIET"}];var E=function(e){var t=e.image,a=e.name,c=e.price;return Object(O.jsxs)("div",{className:"menuItem",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(t,")")},children:" "}),Object(O.jsxs)("h1",{children:[" ",a," "]}),Object(O.jsxs)("p",{children:[" ",c," "]})]})},k=a.p+"static/media/logo.4499fd83.png";a(67);var A=function(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),a=t[0],s=t[1];return Object(O.jsxs)("div",{className:"navbar",children:[Object(O.jsxs)("div",{className:"leftSide",id:a?"open":"close",children:[Object(O.jsx)("img",{src:k,alt:"logo"}),Object(O.jsxs)("div",{className:"hiddenLinks",children:[Object(O.jsx)(o.b,{to:"/categories",children:"Take Quiz"}),Object(O.jsx)(o.b,{to:"/ChooseLeaderBoard",children:"LeaderBoard"}),Object(O.jsx)(o.b,{to:"/MyProfile",children:"Profile"})]})]}),Object(O.jsxs)("div",{className:"rightSide",children:[Object(O.jsx)(o.b,{to:"/categories",children:"  Categories"}),Object(O.jsx)(o.b,{to:"/ChooseLeaderBoard",children:" LeaderBoard  "}),Object(O.jsx)(o.b,{to:"/MyProfile",children:"Profile "}),Object(O.jsx)("button",{onClick:function(){s(!a)},children:"X"})]})]})};a(68),a(69),a(70);var P=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(A,{}),Object(O.jsx)("div",{className:"home",style:{backgroundImage:"url(".concat(w,")")}}),Object(O.jsxs)("div",{style:{backgroundColor:"#ffffff",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fafafa' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")",textAlign:"center",color:"#1e1e1e",fontSize:"25px"},children:[Object(O.jsx)("h6",{children:Object(O.jsx)("br",{})}),Object(O.jsx)("h1",{children:"Instructions"}),Object(O.jsx)("h6",{children:Object(O.jsx)("br",{})}),Object(O.jsxs)("h6",{children:["\u26ab      Select the Categories from the ",Object(O.jsx)(o.b,{to:"/categories",style:{textDecoration:"none"},children:"categories"})," page.",Object(O.jsx)("br",{})]}),Object(O.jsxs)("h6",{children:["\u26ab      There will be 4 choices for each quiz question.",Object(O.jsx)("br",{})]}),Object(O.jsxs)("h6",{children:["\u26ab      Select the correct option.",Object(O.jsx)("br",{})]}),Object(O.jsxs)("h6",{children:["\u26ab      The right answer will be displayed in ",Object(O.jsx)("span",{style:{color:"green"},children:"Green"})," colour.",Object(O.jsx)("br",{})]}),Object(O.jsxs)("h6",{children:["\u26ab      The wrong answers will be displayed in ",Object(O.jsx)("span",{style:{color:"red"},children:"Red"})," colour."]}),Object(O.jsxs)("h6",{children:["\u26ab      Click Next to move to the next question.",Object(O.jsx)("br",{})]}),Object(O.jsxs)("h6",{children:["\u26ab      After 10 questions are completed move to leaderboard to see your scores!",Object(O.jsx)("br",{})]}),Object(O.jsxs)("h6",{children:["\u26ab      If you abandon the quiz, your score will be considered as zero.",Object(O.jsx)("br",{})]}),Object(O.jsx)("h6",{children:Object(O.jsx)("br",{})}),Object(O.jsx)("h6",{children:Object(O.jsx)("br",{})})]}),Object(O.jsxs)("div",{className:"menu",style:{backgroundColor:"#ffffff",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23fafafa' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E\")"},children:[Object(O.jsx)("h1",{children:"Our Team"}),Object(O.jsx)("div",{className:"menuList",children:S.map((function(e,t){return Object(O.jsx)(E,{image:e.image,name:e.name,price:e.price},t)}))})]})]})};function B(){var e=Object(c.useContext)(g).currentUser,t=Object(i.g)();try{var a=e.email.slice(0,e.email.indexOf("@"));window.$uName=a}catch(s){t.push("/login")}return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(P,{})})}var I=a(33),R=a.n(I),_=function(e){var t=e.tableName,a=Object(c.useState)([]),s=Object(p.a)(a,2),n=s[0],r=s[1],o="/".concat(t);Object(c.useEffect)((function(){x.database().ref(o).on("value",(function(e){var t=e.val(),a=[];for(var c in t)a.push({id:c,userName:t[c].userName,userScore:t[c].userScore});var s=a.sort(i);s.length<=10?r(s.reverse()):r(s.slice(s.length-10,s.length).reverse())}))}),[o]);var i=function(e,t){return e.userScore-t.userScore};return 0===n.length?Object(O.jsx)("div",{className:"flex justify-center items-center h-screen",children:Object(O.jsx)(R.a,{})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"my-8 lg:mx-64 flex flex-col rounded-md  lg:rounded-lg shadow-xl overflow-hidden bg-yellow-400",children:Object(O.jsxs)("table",{className:"text-sm lg:table-auto lg:text-xl",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"bg-gray-600 text-white",children:[Object(O.jsx)("th",{className:"text-center",children:"Position"}),Object(O.jsx)("th",{className:"text-center",children:"Name "}),Object(O.jsx)("th",{className:"text-center",children:"Score "})]})}),n.map((function(e,t){return Object(O.jsx)("tbody",{children:Object(O.jsxs)("tr",{className:"bg-white",children:[Object(O.jsxs)("td",{className:"px-8 py-1 lg:px-16 text-center",children:[" ",parseInt(t)+1]}),Object(O.jsxs)("td",{className:"px-8 py-1 lg:px-16 text-center",children:[" ",e.userName," "]}),Object(O.jsxs)("td",{className:"px-8 py-1 lg:px-16 text-center",children:[" ",e.userScore," "]})]})})}))]})})})},T=function(){var e=Object(c.useState)(0),t=Object(p.a)(e,2),a=t[0],s=t[1],n=function(){var e=["General Knowledge","Ecology","Computer Science","Maths","Geographical Science","History","Sports","Ancient Mythology","Films and Series","Musicals","Video Games","Books and Novels","Board Games","Biological Science","Comics","Cartoons and Anime"];function t(){return(t=Object(u.a)(b.a.mark((function t(c){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a,n=e.indexOf(c.target.value),s(n);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(O.jsx)("select",{style:{width:"15rem",textAlign:"center",backgroundColor:"white",color:"#3e4962",borderRadius:5,padding:"0.5rem"},onChange:function(e){return t.apply(this,arguments)},value:e[a],children:e.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))})};return Object(O.jsxs)("div",{children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("img",{className:"logo",alt:"logo",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"})}),Object(O.jsxs)("div",{className:"my-10 mx-[1.8px]",children:[Object(O.jsx)("div",{className:"flex justify-center items-center",children:Object(O.jsx)(n,{})}),Object(O.jsx)("div",{className:"mx-2",children:0===a?Object(O.jsx)(_,{tableName:"General Knowledge"}):1===a?Object(O.jsx)(_,{tableName:"Ecology"}):2===a?Object(O.jsx)(_,{tableName:"Computer Science"}):3===a?Object(O.jsx)(_,{tableName:"Maths"}):4===a?Object(O.jsx)(_,{tableName:"Geographical Science"}):5===a?Object(O.jsx)(_,{tableName:"History"}):6===a?Object(O.jsx)(_,{tableName:"Sports"}):7===a?Object(O.jsx)(_,{tableName:"Ancient Mythology"}):8===a?Object(O.jsx)(_,{tableName:"Films and Series"}):9===a?Object(O.jsx)(_,{tableName:"Musicals"}):10===a?Object(O.jsx)(_,{tableName:"Video Games"}):11===a?Object(O.jsx)(_,{tableName:"Books and Novels"}):12===a?Object(O.jsx)(_,{tableName:"Board Games"}):13===a?Object(O.jsx)(_,{tableName:"Biological Science"}):14===a?Object(O.jsx)(_,{tableName:"Comics"}):15===a?Object(O.jsx)(_,{tableName:"Cartoons and Anime"}):null}),Object(O.jsxs)("div",{className:"flex justify-center items-center gap-4",children:[Object(O.jsx)(o.b,{to:"/categories",className:"p-2 px-2 rounded-md bg-white text-center text-decoration-none",style:{backgroundColor:"white",color:"#3e4962",fontWeight:"500"},children:"Retake Quiz"}),Object(O.jsx)(o.b,{to:"/",className:"p-2 px-2 rounded-md bg-white text-center text-decoration-none",style:{backgroundColor:"white",color:"#3e4962",fontWeight:"500"},children:"Dashboard"})]})]})]})},M=a(47),q=(a(76),function(e){var t=e.showAnswers,a=e.handleAnswer,c=e.handleNextQuestion,s=e.data,n=s.question,r=s.correct_answer,o=s.answers;return Object(O.jsxs)("div",{className:"flex flex-col",children:[Object(O.jsx)("div",{className:" text-black p-10 rounded shadow-md ",style:{backgroundColor:"#7dced0"},children:Object(O.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:n}})}),Object(O.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",children:o.map((function(e,c){var s=t?e===r?"text-green-700":"text-red-600":"text-black";return Object(O.jsx)("button",{style:{backgroundColor:"#7dced0"},className:"kl-auto text-black ".concat(s," p-4 font-semibold rounded shadow"),onClick:function(){return a(e)},answer:e,dangerouslySetInnerHTML:{__html:e}},c)}))}),t&&Object(O.jsx)("button",{onClick:c,className:"ml-auto mt-6 bg-white text-purple-800 p-4 font-semibold rounded shadow",children:"Next Question"})]})});var z=function(e){var t=e.name,a=e.api,s=Object(c.useState)([]),n=Object(p.a)(s,2),r=n[0],i=n[1],d=Object(c.useState)(0),j=Object(p.a)(d,2),m=j[0],h=j[1],g=Object(c.useState)(0),f=Object(p.a)(g,2),v=f[0],y=f[1],w=Object(c.useState)(!1),N=Object(p.a)(w,2),C=N[0],S=N[1],E="/".concat(t);Object(c.useEffect)((function(){fetch("".concat(a)).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{answers:[e.correct_answer].concat(Object(M.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));i(t)}))}),[a]);var k={paddingTop:20,paddingLeft:2,paddingRight:2,paddingBottom:20,borderRadius:10,backgroundColor:"white",color:"#3e4962",fontWeight:"500",textDecoration:"none",textAlign:"center"},A=function(){var e=Object(u.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("logged in upload Data"),t=x.database().ref(E),a={userName:window.$uName,userScore:v},console.log(a),e.next=7,t.push(a);case 7:console.log("pushed the data"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),P={textAlign:"center",Display:"flex",justifyContent:"center",paddingLeft:"0rem",paddingRight:"0rem",marginTop:"6rem"};return r.length>0?Object(O.jsx)("div",{className:"container",style:P,children:m>=r.length?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h2",{className:"text-3xl font-bold mx-4",style:{color:"#7dced0",textAlign:"center",marginBottom:"2rem",marginTop:"5rem"},children:["Game ended! Your score in ",t," is ",v]}),Object(O.jsx)("div",{className:"flex flex-col gap-4 mx-4",style:{fontSize:20},children:Object(O.jsxs)("div",{className:"grid grid-cols-2 gap-3 mt-6",children:[Object(O.jsx)(o.b,{to:"/",style:k,children:"Dashboard"}),Object(O.jsx)(o.b,{to:"/ChooseLeaderBoard",style:k,children:"LeaderBoard"})]})})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"text-3xl font-bold",style:{color:"#7dced0"},children:t}),Object(O.jsx)(q,{style:P,data:r[m],showAnswers:C,handleAnswer:function(e){C||e===r[m].correct_answer&&y(v+1),S(!0)},handleNextQuestion:function(){S(!1),m+1>=r.length&&A(),h(m+1)}})]})}):Object(O.jsx)("div",{className:"flex justify-center items-center h-screen",children:Object(O.jsx)(R.a,{})})};var G=function(){var e=Object(c.useState)(void 0),t=Object(p.a)(e,2),a=t[0],s=t[1],n=Object(i.g)();void 0===window.$uName&&n.push("/login");var r=function(e){var t=e.id,a=e.text,c=e.bg;return Object(O.jsx)("button",{className:"text-black px-8",style:{paddingTop:25,paddingBottom:25,paddingLeft:20,paddingRight:20,fontSize:20,borderRadius:5,backgroundColor:"".concat(c),border:0,textAlign:"center",fontWeight:"600"},onClick:function(){return l(t)},children:a})};function l(e){s(e)}return"1"===a?Object(O.jsx)(z,{name:"General Knowledge",api:"https://opentdb.com/api.php?amount=10&category=9&type=multiple"}):"2"===a?Object(O.jsx)(z,{name:"Ecology",api:"https://opentdb.com/api.php?amount=10&category=17&type=multiple"}):"3"===a?Object(O.jsx)(z,{name:"Computer Science",api:"https://opentdb.com/api.php?amount=10&category=18&type=multiple"}):"4"===a?Object(O.jsx)(z,{name:"Maths",api:"https://opentdb.com/api.php?amount=10&category=19&type=multiple"}):"5"===a?Object(O.jsx)(z,{name:"Geographical Science",api:"https://opentdb.com/api.php?amount=10&category=22&type=multiple"}):"6"===a?Object(O.jsx)(z,{name:"History",api:"https://opentdb.com/api.php?amount=10&category=23&type=multiple"}):"7"===a?Object(O.jsx)(z,{name:"Sports",api:"https://opentdb.com/api.php?amount=10&category=21&type=multiple"}):"8"===a?Object(O.jsx)(z,{name:"Ancient Mythology",api:"https://opentdb.com/api.php?amount=10&category=20&type=multiple"}):"9"===a?Object(O.jsx)(z,{name:"Films and Series",api:"https://opentdb.com/api.php?amount=10&category=11&type=multiple"}):"10"===a?Object(O.jsx)(z,{name:"Musicals",api:"https://opentdb.com/api.php?amount=10&category=12&type=multiple"}):"11"===a?Object(O.jsx)(z,{name:"Video Games",api:"https://opentdb.com/api.php?amount=10&category=15&type=multiple"}):"12"===a?Object(O.jsx)(z,{name:"Books and Novels",api:"https://opentdb.com/api.php?amount=10&category=10&type=multiple"}):"13"===a?Object(O.jsx)(z,{name:"Board Games",api:"https://opentdb.com/api.php?amount=10&category=16&type=multiple"}):"14"===a?Object(O.jsx)(z,{name:"Biological Science",api:"https://opentdb.com/api.php?amount=10&category=27&type=multiple"}):"15"===a?Object(O.jsx)(z,{name:"Comics",api:"https://opentdb.com/api.php?amount=10&category=29&type=multiple"}):"16"===a?Object(O.jsx)(z,{name:"Cartoons and Anime",api:"https://opentdb.com/api.php?amount=10&category=32&type=multiple"}):Object(O.jsxs)("div",{children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("img",{className:"logo",alt:"logo",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"})}),Object(O.jsx)("header",{className:"font-bold text-4xl mx-1 ",style:{textAlign:"center",color:"#7dced0",marginTop:"1rem",marginBottom:"1rem"},children:"Choose your category"}),Object(O.jsxs)("div",{className:"grid grid-cols-2 gap-6 mr-5 ml-5 lg:grid-cols-4 lg:mr-40 lg:ml-40",children:[Object(O.jsx)(r,{id:"1",text:"General Knowledge",bg:"#9483bd",onClick:l}),Object(O.jsx)(r,{id:"2",text:"Ecology",bg:"#e79995",onClick:l}),Object(O.jsx)(r,{id:"3",text:"Computer Science",bg:"#98d5ca",onClick:l}),Object(O.jsx)(r,{id:"4",text:"Maths",bg:"#9acaed",onClick:l}),Object(O.jsx)(r,{id:"5",bg:"#98d099",text:"Geographical Science",onClick:l}),Object(O.jsx)(r,{id:"6",text:"History",bg:"#e8ce4f",onClick:l}),Object(O.jsx)(r,{id:"7",text:"Sports",bg:"#e7e5e3",onClick:l}),Object(O.jsx)(r,{id:"8",text:"Ancient Mythology",bg:"#e769bb",onClick:l}),Object(O.jsx)(r,{id:"9",text:"Films and Series",bg:"#e79995",onClick:l}),Object(O.jsx)(r,{id:"10",text:"Musicals",bg:"#98d5ca",onClick:l}),Object(O.jsx)(r,{id:"11",text:"Video Games",bg:"#9acaed",onClick:l}),Object(O.jsx)(r,{id:"12",text:"Books and Novels",bg:"#9483bd",onClick:l}),Object(O.jsx)(r,{id:"13",bg:"#98d099",text:"Board Games",onClick:l}),Object(O.jsx)(r,{id:"14",text:"Biological Science",bg:"#e8ce4f",onClick:l}),Object(O.jsx)(r,{id:"15",text:"Comics",bg:"#e7e5e3",onClick:l}),Object(O.jsx)(r,{id:"16",text:"Cartoons and Anime",bg:"#e769bb",onClick:l})]})]})},F=a(84),L=a(82),D=a(83),U=a(81);function V(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),s=Object(c.useContext)(g),n=s.currentUser,r=s.updatePassword,l=s.updateEmail,d=Object(c.useState)(""),j=Object(p.a)(d,2),b=j[0],u=j[1],m=Object(c.useState)(!1),h=Object(p.a)(m,2),x=h[0],f=h[1],v=Object(i.g)();var y={padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(F.a,{className:"topcon",children:Object(O.jsxs)(F.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Update Profile"}),b&&Object(O.jsxs)(L.a,{variant:"danger",children:[" ",b," "]}),Object(O.jsxs)(D.a,{onSubmit:function(c){if(c.preventDefault(),t.current.value!==a.current.value)return u("Passwords do not match");var s=[];e.current.value!==n.email&&s.push(l(e.current.value)),t.current.value&&s.push(r(t.current.value)),Promise.all(s).then((function(){v.push("/")})).catch((function(){u("Failed to Update Account")})).finally((function(){f("false")}))},children:[Object(O.jsx)(D.a.Group,{id:"email",children:Object(O.jsx)(D.a.Control,{className:"formx-top",style:y,type:"email",ref:e,required:!0,placeholder:"Email",defaultValue:n.email})}),Object(O.jsx)(D.a.Group,{id:"password",children:Object(O.jsx)(D.a.Control,{className:"formx-mid",style:y,type:"password",ref:t,placeholder:"Enter new Password"})}),Object(O.jsx)(D.a.Group,{id:"confirmpassword",children:Object(O.jsx)(D.a.Control,{className:"formx-end",style:y,type:"password",ref:a,placeholder:"Confirm Password"})}),Object(O.jsx)(U.a,{disabled:x,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",type:"submit",children:"Update"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(o.b,{to:"/MyProfile",className:"links",children:"Cancel"})})]})})]})}function H(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),s=Object(c.useContext)(g).signup,n=Object(c.useState)(""),r=Object(p.a)(n,2),l=r[0],d=r[1],j=Object(c.useState)(!1),m=Object(p.a)(j,2),h=m[0],x=m[1],f=Object(i.g)();function v(){return(v=Object(u.a)(b.a.mark((function c(n){return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",d("Passwords do not match"));case 3:return c.prev=3,d(""),x(!0),c.next=8,s(e.current.value,t.current.value);case 8:console.log("verified"),f.push("/"),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(3),d("Failed to Create an Account");case 15:x(!1);case 16:case"end":return c.stop()}}),c,null,[[3,12]])})))).apply(this,arguments)}var y={padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(F.a,{className:"topcon",children:Object(O.jsxs)(F.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Sign Up"}),l&&Object(O.jsx)("h4",{className:"bg-red-100 text-base border border-red-400 text-red-700 px-1 py-2 rounded relative",role:"alert",children:l}),Object(O.jsxs)(D.a,{id:"signup-form",onSubmit:function(e){return v.apply(this,arguments)},children:[Object(O.jsx)(D.a.Group,{id:"signup-email",children:Object(O.jsx)(D.a.Control,{className:"formx-top",style:y,type:"email",ref:e,required:!0,placeholder:"Email"})}),Object(O.jsx)(D.a.Group,{id:"password",children:Object(O.jsx)(D.a.Control,{className:"formx-mid",type:"password",style:y,ref:t,placeholder:"Password",pattern:"(?=.*\\d)(?=.[a-z])(?=.[A-z]).{8,}",title:"Must contain at least one number[0-9] and one uppercase[A-Z] and lowercase[a-b] letter,and atleast 8 or more character",required:!0})}),Object(O.jsx)(D.a.Group,{id:"confirmpassword",children:Object(O.jsx)(D.a.Control,{className:"formx-end",type:"password",style:y,ref:a,required:!0,placeholder:"Confirm Password"})}),Object(O.jsx)(U.a,{disabled:h,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded",type:"submit",children:"Sign Up"})]}),Object(O.jsxs)("div",{className:"foot",children:["Already have an account? ",Object(O.jsx)(o.b,{to:"/login",className:"links",children:"Log In"})]})]})})]})}function K(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useContext)(g).login,s=Object(c.useState)(""),n=Object(p.a)(s,2),r=n[0],l=n[1],d=Object(c.useState)(!1),j=Object(p.a)(d,2),m=j[0],h=j[1],x=Object(i.g)();function f(){return(f=Object(u.a)(b.a.mark((function c(s){return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,l(""),h(!0),c.next=6,a(e.current.value,t.current.value);case 6:x.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),l("Failed to log in");case 12:h(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}var v={padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem",fontWeight:"normal"};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(F.a,{className:"topcon",children:Object(O.jsxs)(F.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Log In"}),r&&Object(O.jsx)("h4",{className:"bg-red-100 text-base border border-red-400 text-red-700 px-1 py-2 rounded relative",role:"alert",children:r}),Object(O.jsxs)(D.a,{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(O.jsx)(D.a.Group,{id:"email",children:Object(O.jsx)(D.a.Control,{style:v,className:"formx-top",type:"email",ref:e,required:!0,placeholder:"Email"})}),Object(O.jsx)(D.a.Group,{id:"password",children:Object(O.jsx)(D.a.Control,{style:v,className:"formx-end",classNAme:"input",type:"password",ref:t,required:!0,placeholder:"Password"})}),Object(O.jsx)(U.a,{disabled:m,className:"bg-blue-500 hover:bg-blue-700 text-white items-center font-bold py-2 px-5 mt-1 rounded",type:"submit",children:"Log In"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(o.b,{className:"links",to:"/forgot-password",children:"Forgot Password? "})}),Object(O.jsxs)("div",{className:"foot",children:["Need an account? ",Object(O.jsx)(o.b,{to:"/signup",className:"links",children:"Sign Up"})]})]})})]})}function W(){var e=Object(c.useRef)(),t=Object(c.useContext)(g).resetPassword,a=Object(c.useState)(""),s=Object(p.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),l=Object(p.a)(i,2),d=l[0],j=l[1],m=Object(c.useState)(!1),h=Object(p.a)(m,2),x=h[0],f=h[1];function v(){return(v=Object(u.a)(b.a.mark((function a(c){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,j(""),r(""),f(!0),a.next=7,t(e.current.value);case 7:j("Check Your Inbox for further Instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),r("Failed to Reset Password");case 13:f(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{className:"logo",alt:"Social Vue",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"}),Object(O.jsx)(F.a,{className:"topcon",children:Object(O.jsxs)(F.a.Body,{children:[Object(O.jsx)("h1",{className:"font-bold text-3xl",children:"Password Reset"}),n&&Object(O.jsx)("h4",{className:" border border-red-400 text-red-700 px-1 py-2 text-base rounded relative",role:"alert",children:n}),d&&Object(O.jsx)("h4",{className:" border border-green-400 text-green-700 text-base px-1 py-2 rounded relative",role:"alert",children:d}),Object(O.jsxs)(D.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(O.jsx)(D.a.Group,{id:"email",children:Object(O.jsx)(D.a.Control,{className:"formx-solo",style:{padding:"0.5rem 0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem",width:"15rem"},type:"email",ref:e,required:!0,placeholder:"Email"})}),Object(O.jsx)(U.a,{disabled:x,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",type:"submit",children:"Reset Password"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(o.b,{className:"links",to:"/login",children:"Log In? "})}),Object(O.jsxs)("div",{className:"foot",children:["Need an account? ",Object(O.jsx)(o.b,{to:"/signup",className:"links",children:"Sign Up"})]})]})})]})}a(43);var X=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),a=t[0],s=t[1],n=Object(c.useContext)(g),r=n.currentUser,l=n.logout,d=Object(i.g)();try{var j=r.email.slice(0,r.email.indexOf("@"));window.$uName=j}catch(h){d.push("/login")}function m(){return(m=Object(u.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(""),e.prev=1,e.next=4,l();case 4:d.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(o.b,{to:"/",children:Object(O.jsx)("img",{className:"logo",alt:"logo",src:"https://raw.githubusercontent.com/abishekvelavan/Online-quiz-application/main/quizoid%20logo%404x-8.png"})}),Object(O.jsxs)(F.a,{className:"topcon",children:[Object(O.jsx)("h2",{children:window.$uName}),Object(O.jsxs)(F.a.Body,{children:[Object(O.jsx)("h1",{children:"Profile"}),a&&Object(O.jsxs)(L.a,{class:"alerts",variant:"danger",children:[" ",a," "]}),Object(O.jsxs)("div",{className:"grid grid-rows-2 gap-2",children:[Object(O.jsx)(o.b,{to:"update-profile",className:"btn",children:"Update Profile"}),Object(O.jsx)(o.b,{to:"/",className:"btn",children:"Back"})]}),Object(O.jsx)("div",{className:"foot",children:Object(O.jsx)(U.a,{className:"btn",style:{textDecoration:"none"},variant:"link",onClick:function(){return m.apply(this,arguments)},children:"Log Out"})})]})]})]})};var Q=function(){return Object(O.jsx)(f,{children:Object(O.jsx)(o.a,{children:Object(O.jsxs)(i.d,{children:[Object(O.jsx)(y,{exact:!0,path:"/",component:B}),Object(O.jsx)(y,{path:"/update-profile",component:V}),Object(O.jsx)(i.b,{path:"/signup",component:H}),Object(O.jsx)(i.b,{path:"/login",component:K}),Object(O.jsx)(i.b,{path:"/forgot-password",component:W}),Object(O.jsx)(i.b,{path:"/ChooseLeaderBoard",component:T}),Object(O.jsx)(i.b,{path:"/Categories",component:G}),Object(O.jsx)(i.b,{path:"/MyProfile",component:X})]})})})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(Q,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.2b177d75.chunk.js.map