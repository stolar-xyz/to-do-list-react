(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(1),o=t.n(c),a=t(16),i=t.n(a),u=t(27),s=t(14),d=t(10),l="tasks",f="hideDone",b=function(n){return localStorage.setItem(l,JSON.stringify(n))},j=function(n){return localStorage.setItem(f,JSON.stringify(n))},x=Object(s.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(l))||[],hideDone:JSON.parse(localStorage.getItem(f))||!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},deleteAllTasks:function(n){n.tasks=[]},markAllAsDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),h=x.actions,p=h.addTask,O=h.toggleHideDone,m=h.toggleTaskDone,g=h.deleteAllTasks,v=h.markAllAsDone,k=h.removeTask,w=h.fetchExampleTasks,y=h.setTasks,T=function(n){return n.tasks},D=function(n){return T(n).tasks},C=function(n){return T(n).hideDone},S=function(n){return D(n).every((function(n){return n.done}))},I=function(n){return 0===D(n).length},A=x.reducer,M=t(6),J=t(5);function E(){var n=Object(M.a)(["\n    cursor: pointer;\n    border: none;\n    color: white;\n    background-color: ",";;\n    padding: 10px 15px;\n    transition: filter 0.3s, transform 0.3s;\n\n    &:hover {\n        filter: brightness(1.1);\n    }\n\n    &:active {\n        filter: brightness(1.2);\n        transform: scale(1.05);\n    }\n"]);return E=function(){return n},n}function F(){var n=Object(M.a)(["\n    border: 2px solid ",";\n    padding: 10px;\n"]);return F=function(){return n},n}function H(){var n=Object(M.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 10px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return H=function(){return n},n}var L=J.d.form(H(),(function(n){return n.theme.breakpoints.mobileMax})),N=J.d.input(F(),(function(n){return n.theme.colors.borderColor})),z=J.d.button(E(),(function(n){return n.theme.colors.main})),B=function(){var n=Object(c.useState)(""),e=Object(u.a)(n,2),t=e[0],o=e[1],a=Object(c.useRef)(null),i=Object(d.b)();return Object(r.jsxs)(L,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(i(p({content:e,done:!1,id:Object(s.c)()})),o(""),a.current.focus())},children:[Object(r.jsx)(N,{ref:a,placeholder:"What should I do today?",value:t,onChange:function(n){var e=n.target;return o(e.value)}}),Object(r.jsx)(z,{children:"Add task"})]})},P=t(20);function R(){var n=Object(M.a)(["\n        text-decoration: line-through;\n    "]);return R=function(){return n},n}function W(){var n=Object(M.a)(["\n    overflow-wrap: anywhere;\n\n    ","\n\n    @media (max-width: ","px) {\n        justify-self: center;\n    }\n"]);return W=function(){return n},n}function q(){var n=Object(M.a)(["\n        color: crimson;\n    "]);return q=function(){return n},n}function G(){var n=Object(M.a)(["\n        color: #fefefe;\n        background-color: ",";\n\n        &:hover {\n        filter: brightness(1.1);\n        }\n    "]);return G=function(){return n},n}function K(){var n=Object(M.a)(["\n    cursor: pointer;\n    border: none;\n    line-height: 50%;\n    padding: 5px;\n    background-color: inherit;\n    color: ",";\n    transition: color 0.2s, filter 0.2s;\n\n    ",";\n\n    ","\n"]);return K=function(){return n},n}function Q(){var n=Object(M.a)(["\n        display: none;\n    "]);return Q=function(){return n},n}function U(){var n=Object(M.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 20px;\n    padding: 20px;\n    align-items: center;\n    border-bottom: 1px solid ",";\n\n    ","\n"]);return U=function(){return n},n}function V(){var n=Object(M.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return V=function(){return n},n}var X=J.d.ul(V()),Y=J.d.li(U(),(function(n){return n.theme.colors.borderColor}),(function(n){return n.hidden&&Object(J.c)(Q())})),Z=J.d.button(K(),(function(n){return n.theme.colors.main}),(function(n){return n.toggleDone&&Object(J.c)(G(),(function(n){return n.theme.colors.main}))}),(function(n){return n.remove&&Object(J.c)(q())})),$=J.d.span(W(),(function(n){return n.done&&Object(J.c)(R())}),(function(n){return n.theme.breakpoints.mobileMax})),_=function(){var n=Object(d.c)(D),e=Object(d.c)(C),t=Object(d.b)();return Object(r.jsx)(X,{children:n.map((function(n){return Object(r.jsxs)(Y,{hidden:n.done&&e,children:[Object(r.jsx)(Z,{toggleDone:n.done,onClick:function(){return t(m(n.id))},children:Object(r.jsx)(P.a,{title:"check mark"})}),Object(r.jsx)($,{done:n.done,children:n.content}),Object(r.jsx)(Z,{remove:!0,onClick:function(){return t(k(n.id))},children:Object(r.jsx)(P.b,{title:"cross mark"})})]},n.id)}))})};function nn(){var n=Object(M.a)(["\n        color: #acacac;\n        cursor: default;\n    "]);return nn=function(){return n},n}function en(){var n=Object(M.a)(["\n    margin: 15px;\n    align-self: center;\n    cursor: pointer;\n    border: none;\n    color: ",";\n    background-color: inherit;\n    transition: color 0.2s;\n\n    ","\n"]);return en=function(){return n},n}function tn(){var n=Object(M.a)(["\n    @media (max-width: ","px) {\n        display: flex;\n        flex-direction: column; \n    }\n"]);return tn=function(){return n},n}var rn=J.d.div(tn(),(function(n){return n.theme.breakpoints.mobileMax})),cn=J.d.button(en(),(function(n){return n.theme.colors.main}),(function(n){return n.disabled&&Object(J.c)(nn())})),on=function(){var n=Object(d.c)(I),e=Object(d.c)(C),t=Object(d.c)(S),c=Object(d.b)();return Object(r.jsx)(rn,{children:n?Object(r.jsx)(cn,{onClick:function(){return c(w())},children:"Download sample tasks"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(cn,{onClick:function(){return c(O())},children:e?"Show done tasks":"Hide done tasks"}),Object(r.jsx)(cn,{onClick:function(){return c(v())},disabled:t,children:"Mark all as done"}),Object(r.jsx)(cn,{onClick:function(){return c(g())},children:"Delete all"})]})})};function an(){var n=Object(M.a)(["\n    padding: 25px;\n    border-top: 3px solid ",";\n"]);return an=function(){return n},n}function un(){var n=Object(M.a)(["\n    margin: 0;\n    padding: 25px;\n"]);return un=function(){return n},n}function sn(){var n=Object(M.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return sn=function(){return n},n}function dn(){var n=Object(M.a)(["\n    background-color: ",";\n    box-shadow: 0 0 10px 0 #d3d2d2;\n    margin: 10px 0;\n"]);return dn=function(){return n},n}var ln=J.d.section(dn(),(function(n){return n.theme.colors.backgroundInside})),fn=J.d.div(sn(),(function(n){return n.theme.breakpoints.mobileMax})),bn=J.d.h2(un()),jn=J.d.div(an(),(function(n){return n.theme.colors.borderColor})),xn=function(n){var e=n.title,t=n.extraHeaderContent,c=n.body;return Object(r.jsxs)(ln,{children:[Object(r.jsxs)(fn,{children:[Object(r.jsx)(bn,{children:e}),t]}),Object(r.jsx)(jn,{children:c})]})},hn=function(n){var e=n.title;return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:e})})};function pn(){var n=Object(M.a)(["\n    max-width: 1200px;\n    padding: 0 10px;\n    margin: 0 auto;\n"]);return pn=function(){return n},n}var On=J.d.main(pn()),mn=function(n){var e=n.children;return Object(r.jsx)(On,{children:e})};var gn=function(){return Object(r.jsxs)(mn,{children:[Object(r.jsx)(hn,{title:"To-do List"}),Object(r.jsx)(xn,{title:"Add new task",body:Object(r.jsx)(B,{})}),Object(r.jsx)(xn,{title:"Task List",body:Object(r.jsx)(_,{}),extraHeaderContent:Object(r.jsx)(on,{})})]})},vn=function(){return Object(r.jsx)(gn,{})},kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))};function wn(){var n=Object(M.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *,\n    *::before,\n    *::after {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        background: ",";\n    }\n"]);return wn=function(){return n},n}var yn=Object(J.b)(wn(),(function(n){return n.theme.colors.backgroundOutside})),Tn=t(28),Dn=t(8),Cn=t.n(Dn),Sn=t(11),In=t(26),An=function(){var n=Object(In.a)(Cn.a.mark((function n(){var e;return Cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/to-do-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Mn=Cn.a.mark(Hn),Jn=Cn.a.mark(Ln),En=Cn.a.mark(Nn),Fn=Cn.a.mark(zn);function Hn(){var n;return Cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Sn.b)(An);case 3:return n=e.sent,e.next=6,Object(Sn.c)(y(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Sn.b)(alert,"Something went wrong!");case 12:case 13:case"end":return e.stop()}}),Mn,null,[[0,8]])}function Ln(){var n;return Cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Sn.d)(D);case 2:return n=e.sent,e.next=5,Object(Sn.b)(b,n);case 5:case"end":return e.stop()}}),Jn)}function Nn(){var n;return Cn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Sn.d)(C);case 2:return n=e.sent,e.next=5,Object(Sn.b)(j,n);case 5:case"end":return e.stop()}}),En)}function zn(){return Cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Sn.f)(w.type,Hn);case 2:return n.next=4,Object(Sn.e)("*",Ln);case 4:return n.next=6,Object(Sn.e)("*",Nn);case 6:case"end":return n.stop()}}),Fn)}var Bn=Cn.a.mark(Pn);function Pn(){return Cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Sn.a)([zn()]);case 2:case"end":return n.stop()}}),Bn)}var Rn=Object(Tn.a)(),Wn=Object(s.a)({reducer:{tasks:A},middleware:[Rn]});Rn.run(Pn);var qn=Wn;i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(d.a,{store:qn,children:Object(r.jsxs)(J.a,{theme:{colors:{main:"hsl(180, 100%, 25%)",backgroundInside:"hsl(0, 0%, 100%)",backgroundOutside:"hsl(0, 0%, 93%)",borderColor:"hsl(270, 6%, 93%)"},breakpoints:{mobileMax:767}},children:[Object(r.jsx)(yn,{}),Object(r.jsx)(vn,{})]})})}),document.getElementById("root")),kn()}},[[42,1,2]]]);
//# sourceMappingURL=main.19ec62a1.chunk.js.map