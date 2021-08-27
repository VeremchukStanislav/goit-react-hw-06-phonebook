(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{39:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);n(21);var a,c=n(0),r=n.n(c),o=n(8),i=n.n(o),s=n(6),l=n(13),u=n(14),b=n(20),d=n(19),j=n(5),m=n(15),h=n.n(m),O=n(3),f={addContact:Object(O.b)("contacts/add",(function(e){var t=e.name,n=e.number;return{payload:{id:h.a.generate(),name:t,number:n}}})),deleteContact:Object(O.b)("contacts/delete"),changeFilter:Object(O.b)("contacts/changeFilter")},p=n(1),v=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handeChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(s.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:"label",children:["Name",Object(p.jsx)("input",{className:"input",type:"text",value:this.state.name,onChange:this.handeChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:"label",children:["Phone",Object(p.jsx)("input",{className:"input",type:"tel",value:this.state.number,onChange:this.handeChange,name:"number",required:!0})]}),Object(p.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})}}]),n}(c.Component),x=Object(j.b)(null,(function(e){return{onSubmit:function(t){var n=t.name,a=t.number;return e(f.addContact({name:n,number:a}))}}}))(v),g=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDelete;return Object(p.jsxs)("li",{className:"contact-list-item",children:[Object(p.jsx)("p",{className:"name bold",children:n}),Object(p.jsx)("p",{children:a}),Object(p.jsx)("button",{className:"button",onClick:function(){return c(t)},children:"Delete"})]})},C=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},N=Object(j.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:C(n,a)}}),(function(e){return{onDelete:function(t){return e(f.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.onDelete;return Object(p.jsx)("ul",{className:"contact-list",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(p.jsx)(g,{id:t,name:a,number:c,onDelete:n},t)}))})})),y=Object(j.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(f.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(p.jsxs)("label",{className:"label",children:["Find contacts by name",Object(p.jsx)("input",{className:"input",type:"text",value:t,onChange:n})]})})),k=function(){return Object(p.jsxs)("div",{className:"phonebook",children:[Object(p.jsx)("h1",{className:"phonebook_title",children:"Phonebook"}),Object(p.jsx)(x,{}),Object(p.jsx)("h2",{className:"phonebook_title",children:"Contacts"}),Object(p.jsx)(y,{}),Object(p.jsx)(N,{})]})},A=(n(39),n(16)),S=n(9),w=n(2),D=n(4),z=n(17),F=n.n(z),J=Object(O.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(s.a)(a,f.addContact,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(s.a)(a,f.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),Z=Object(O.c)("",Object(s.a)({},f.changeFilter,(function(e,t){return t.payload}))),q=Object(w.b)({items:J,filter:Z}),B=n(18),E=n.n(B),L=[].concat(Object(S.a)(Object(O.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[E.a]),M={key:"contacts",storage:F.a,blacklist:["filter"]},P=Object(w.b)({contacts:Object(D.g)(M,q)}),T=Object(O.a)({reducer:P,middleware:L,devTools:!1}),_={store:T,persistor:Object(D.h)(T)};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(j.a,{store:_.store,children:Object(p.jsx)(A.a,{loading:null,persistor:_.persistor,children:Object(p.jsx)(k,{})})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.76caaa5e.chunk.js.map