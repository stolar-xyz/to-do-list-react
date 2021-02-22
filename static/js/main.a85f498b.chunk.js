(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(0),o=t.n(c),a=t(22),i=t.n(a),s=t(17),u=t(8),d=t(7),l=t(6);function b(){var n=Object(d.a)(["\n    padding: 25px;\n    border-top: 3px solid ",";\n"]);return b=function(){return n},n}function j(){var n=Object(d.a)(["\n    margin: 0;\n    padding: 25px;\n"]);return j=function(){return n},n}function f(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: auto auto;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return f=function(){return n},n}function h(){var n=Object(d.a)(["\n    background-color: ",";\n    box-shadow: 0 0 10px 0 #d3d2d2;\n    margin: 10px 0;\n"]);return h=function(){return n},n}var O=l.d.section(h(),(function(n){return n.theme.colors.backgroundInside})),x=l.d.div(f(),(function(n){return n.theme.breakpoints.mobileMax})),p=l.d.h2(j()),m=l.d.div(b(),(function(n){return n.theme.colors.borderColor})),g=function(n){var e=n.title,t=n.extraHeaderContent,c=n.body;return Object(r.jsxs)(O,{children:[Object(r.jsxs)(x,{children:[Object(r.jsx)(p,{children:e}),t]}),Object(r.jsx)(m,{children:c})]})},v=function(n){var e=n.title;return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:e})})};function k(){var n=Object(d.a)(["\n    max-width: 1200px;\n    padding: 0 10px;\n    margin: 0 auto;\n"]);return k=function(){return n},n}var w=l.d.main(k()),y=function(n){var e=n.children;return Object(r.jsx)(w,{children:e})},C=function(){return Object(r.jsxs)(y,{children:[Object(r.jsx)(v,{title:"About author"}),Object(r.jsx)(g,{title:"name surname",body:"something"})]})},T=t(37),S=t(21),D=t(10),I="tasks",A="hideDone",M=function(n,e){localStorage.setItem(I,JSON.stringify(n)),localStorage.setItem(A,JSON.stringify(e))},F=Object(S.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(I))||[],hideDone:JSON.parse(localStorage.getItem(A))||!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t[c].done=!t[c].done},deleteAllTasks:function(n){n.tasks=[]},markAllAsDone:function(n){n.tasks.forEach((function(n){return n.done=!0}))},removeTask:function(n,e){var t=n.tasks,r=e.payload,c=t.findIndex((function(n){return n.id===r}));t.splice(c,1)},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),L=F.actions,J=L.addTask,N=L.toggleHideDone,E=L.toggleTaskDone,H=L.deleteAllTasks,P=L.markAllAsDone,U=L.removeTask,R=L.fetchExampleTasks,z=L.setTasks,B=function(n){return n.tasks},W=function(n){return B(n).tasks},Y=function(n){return B(n).hideDone},q=function(n){return W(n).every((function(n){return n.done}))},G=function(n){return 0===W(n).length},K=F.reducer;function Q(){var n=Object(d.a)(["\n    border: 2px solid ",";\n    padding: 10px;\n"]);return Q=function(){return n},n}var V=l.d.input(Q(),(function(n){return n.theme.colors.borderColor}));function X(){var n=Object(d.a)(["\n    cursor: pointer;\n    border: none;\n    color: white;\n    background-color: ",";;\n    padding: 10px 15px;\n    transition: filter 0.3s, transform 0.3s;\n\n    &:hover {\n        filter: brightness(1.1);\n    }\n\n    &:active {\n        filter: brightness(1.2);\n        transform: scale(1.05);\n    }\n"]);return X=function(){return n},n}function Z(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 10px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"]);return Z=function(){return n},n}var $=l.d.form(Z(),(function(n){return n.theme.breakpoints.mobileMax})),_=l.d.button(X(),(function(n){return n.theme.colors.main})),nn=function(){var n=Object(c.useState)(""),e=Object(T.a)(n,2),t=e[0],o=e[1],a=Object(c.useRef)(null),i=Object(D.b)();return Object(r.jsxs)($,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(i(J({content:e,done:!1,id:Object(S.c)()})),o(""),a.current.focus())},children:[Object(r.jsx)(V,{ref:a,placeholder:"What should I do today?",value:t,onChange:function(n){var e=n.target;return o(e.value)}}),Object(r.jsx)(_,{children:"Add task"})]})},en=t(29);function tn(){var n=Object(d.a)(["\n        text-decoration: line-through;\n    "]);return tn=function(){return n},n}function rn(){var n=Object(d.a)(["\n    overflow-wrap: anywhere;\n\n    ","\n\n    @media (max-width: ","px) {\n        justify-self: center;\n    }\n"]);return rn=function(){return n},n}function cn(){var n=Object(d.a)(["\n        color: crimson;\n    "]);return cn=function(){return n},n}function on(){var n=Object(d.a)(["\n        color: #fefefe;\n        background-color: ",";\n\n        &:hover {\n        filter: brightness(1.1);\n        }\n    "]);return on=function(){return n},n}function an(){var n=Object(d.a)(["\n    cursor: pointer;\n    border: none;\n    line-height: 50%;\n    padding: 5px;\n    background-color: inherit;\n    color: ",";\n    transition: color 0.2s, filter 0.2s;\n\n    ",";\n\n    ","\n"]);return an=function(){return n},n}function sn(){var n=Object(d.a)(["\n        display: none;\n    "]);return sn=function(){return n},n}function un(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 20px;\n    padding: 20px;\n    align-items: center;\n    border-bottom: 1px solid ",";\n\n    ","\n"]);return un=function(){return n},n}function dn(){var n=Object(d.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);return dn=function(){return n},n}var ln=l.d.ul(dn()),bn=l.d.li(un(),(function(n){return n.theme.colors.borderColor}),(function(n){return n.hidden&&Object(l.c)(sn())})),jn=l.d.button(an(),(function(n){return n.theme.colors.main}),(function(n){return n.toggleDone&&Object(l.c)(on(),(function(n){return n.theme.colors.main}))}),(function(n){return n.remove&&Object(l.c)(cn())})),fn=l.d.span(rn(),(function(n){return n.done&&Object(l.c)(tn())}),(function(n){return n.theme.breakpoints.mobileMax})),hn="search",On=function(){var n=Object(u.h)(),e=new URLSearchParams(n.search).get(hn),t=Object(D.c)((function(n){return function(n,e){var t=W(n);return e&&""!==e.trim()?W(n).filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),c=Object(D.c)(Y),o=Object(D.b)();return Object(r.jsx)(ln,{children:t.map((function(n){return Object(r.jsxs)(bn,{hidden:n.done&&c,children:[Object(r.jsx)(jn,{toggleDone:n.done,onClick:function(){return o(E(n.id))},children:Object(r.jsx)(en.a,{title:"check mark"})}),Object(r.jsx)(fn,{done:n.done,children:Object(r.jsx)(s.b,{to:"/tasks/".concat(n.id),children:n.content})}),Object(r.jsx)(jn,{remove:!0,onClick:function(){return o(U(n.id))},children:Object(r.jsx)(en.b,{title:"cross mark"})})]},n.id)}))})};function xn(){var n=Object(d.a)(["\n        color: #acacac;\n        cursor: default;\n    "]);return xn=function(){return n},n}function pn(){var n=Object(d.a)(["\n    margin: 15px;\n    align-self: center;\n    cursor: pointer;\n    border: none;\n    color: ",";\n    background-color: inherit;\n    transition: color 0.2s;\n\n    ","\n"]);return pn=function(){return n},n}function mn(){var n=Object(d.a)(["\n    @media (max-width: ","px) {\n        display: flex;\n        flex-direction: column; \n    }\n"]);return mn=function(){return n},n}var gn=l.d.div(mn(),(function(n){return n.theme.breakpoints.mobileMax})),vn=l.d.button(pn(),(function(n){return n.theme.colors.main}),(function(n){return n.disabled&&Object(l.c)(xn())})),kn=function(){var n=Object(D.c)(G),e=Object(D.c)(Y),t=Object(D.c)(q),c=Object(D.b)();return Object(r.jsx)(gn,{children:n?Object(r.jsx)(vn,{onClick:function(){return c(R())},children:"Download sample tasks"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(vn,{onClick:function(){return c(N())},children:e?"Show done tasks":"Hide done tasks"}),Object(r.jsx)(vn,{onClick:function(){return c(P())},disabled:t,children:"Mark all as done"}),Object(r.jsx)(vn,{onClick:function(){return c(H())},children:"Delete all"})]})})};function wn(){var n=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n"]);return wn=function(){return n},n}var yn=l.d.div(wn()),Cn=function(){var n=Object(u.h)(),e=Object(u.g)(),t=new URLSearchParams(n.search).get(hn);return Object(r.jsx)(yn,{children:Object(r.jsx)(V,{placeholder:"Filter tasks",value:t||"",onChange:function(t){var r=t.target,c=new URLSearchParams(n.search);""===r.value.trim()?c.delete(hn):c.set(hn,r.value),e.push("".concat(n.pathname,"?").concat(c.toString()))}})})},Tn=function(){return Object(r.jsxs)(y,{children:[Object(r.jsx)(v,{title:"To-do List"}),Object(r.jsx)(g,{title:"Add new task",body:Object(r.jsx)(nn,{})}),Object(r.jsx)(g,{title:"Search",body:Object(r.jsx)(Cn,{})}),Object(r.jsx)(g,{title:"Task List",body:Object(r.jsx)(On,{}),extraHeaderContent:Object(r.jsx)(kn,{})})]})},Sn=function(){var n=Object(u.i)().id,e=Object(D.c)((function(e){return function(n,e){return W(n).find((function(n){return n.id===e}))}(e,n)}),z);return Object(r.jsxs)(y,{children:[Object(r.jsx)(v,{title:"Task details"}),Object(r.jsx)(g,{title:e?e.content:"There is no such task on the list, sorry!",body:e&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("strong",{children:"Completed:"})," ",e.done?"Yes":"No"]})})]})};function Dn(){var n=Object(d.a)(["\n    &."," {\n        color: red;\n    }\n"]);return Dn=function(){return n},n}var In="active",An=Object(l.d)(s.c).attrs((function(){return{activeClassName:In}}))(Dn(),In),Mn=function(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)("nav",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(An,{to:"/tasks",children:"Tasks"})}),Object(r.jsx)("li",{children:Object(r.jsx)(An,{to:"/author",children:"Author"})})]}),Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{path:"/tasks/:id",children:Object(r.jsx)(Sn,{})}),Object(r.jsx)(u.b,{path:"/tasks",children:Object(r.jsx)(Tn,{})}),Object(r.jsx)(u.b,{path:"/author",children:Object(r.jsx)(C,{})}),Object(r.jsx)(u.b,{path:"/",children:Object(r.jsx)(u.a,{to:"/tasks"})})]})]})})},Fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,52)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),o(n),a(n)}))};function Ln(){var n=Object(d.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *,\n    *::before,\n    *::after {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        background: ",";\n    }\n"]);return Ln=function(){return n},n}var Jn=Object(l.b)(Ln(),(function(n){return n.theme.colors.backgroundOutside})),Nn=t(38),En=t(14),Hn=t.n(En),Pn=t(16),Un=t(36),Rn=function(){var n=Object(Un.a)(Hn.a.mark((function n(){var e;return Hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/to-do-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),zn=Hn.a.mark(Yn),Bn=Hn.a.mark(qn),Wn=Hn.a.mark(Gn);function Yn(){var n;return Hn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Pn.b)(Rn);case 3:return n=e.sent,e.next=6,Object(Pn.c)(z(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Pn.b)(alert,"Something went wrong!");case 12:case 13:case"end":return e.stop()}}),zn,null,[[0,8]])}function qn(){var n,e,t;return Hn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Pn.d)(B);case 2:return n=r.sent,e=n.tasks,t=n.hideDone,r.next=7,Object(Pn.b)(M,e,t);case 7:case"end":return r.stop()}}),Bn)}function Gn(){return Hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Pn.f)(R.type,Yn);case 2:return n.next=4,Object(Pn.e)("*",qn);case 4:case"end":return n.stop()}}),Wn)}var Kn=Hn.a.mark(Qn);function Qn(){return Hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Pn.a)([Gn()]);case 2:case"end":return n.stop()}}),Kn)}var Vn=Object(Nn.a)(),Xn=Object(S.a)({reducer:{tasks:K},middleware:[Vn]});Vn.run(Qn);var Zn=Xn;i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(D.a,{store:Zn,children:Object(r.jsxs)(l.a,{theme:{colors:{main:"hsl(180, 100%, 25%)",backgroundInside:"hsl(0, 0%, 100%)",backgroundOutside:"hsl(0, 0%, 93%)",borderColor:"hsl(270, 6%, 93%)"},breakpoints:{mobileMax:767}},children:[Object(r.jsx)(Jn,{}),Object(r.jsx)(Mn,{})]})})}),document.getElementById("root")),Fn()}},[[51,1,2]]]);
//# sourceMappingURL=main.a85f498b.chunk.js.map