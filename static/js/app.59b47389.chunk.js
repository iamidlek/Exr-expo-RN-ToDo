(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{90:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));var r=n(9),o=n.n(r),c=n(30),a=n.n(c),s=n(1),i=n.n(s),l=n(88),u=n(0),d=n(4),p=n(32),f=n(10),b=n(22),j=n(51),x=n(58),h=n(89),g=n(14),O=n(126),y=n(127),v=n(33),w="black",m="#3A3D40",k="#1A1C20",P=n(2);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(){var e=Object(u.useState)(!0),t=a()(e,2),n=t[0],r=t[1],c=Object(u.useState)(""),s=a()(c,2),d=s[0],w=s[1],k=Object(u.useState)({}),D=a()(k,2),T=D[0],C=D[1];Object(u.useEffect)((function(){E()}),[]);var J=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(v.a.setItem("@toDos",JSON.stringify(e)));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),null,null,[[0,5]],Promise)},E=function(){var e,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(v.a.getItem("@toDos"));case 3:return e=n.sent,n.next=6,i.a.awrap(v.a.getItem("@tabs"));case 6:t=n.sent,e&&C(JSON.parse(e)),t&&r(JSON.parse(t)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),null,null,[[0,11]],Promise)},I=function(e){var t=S({},T);t[e].done=!t[e].done,C(t),J(t)};return Object(P.jsxs)(f.a,{style:z.container,children:[Object(P.jsx)(l.a,{style:"auto"}),Object(P.jsxs)(f.a,{style:z.header,children:[Object(P.jsx)(b.a,{onPress:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!0),e.next=4,i.a.awrap(v.a.setItem("@tabs",JSON.stringify(!0)));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),null,null,[[0,6]],Promise)},children:Object(P.jsx)(p.a,{style:{fontSize:38,fontWeight:"600",color:n?"white":m},children:"Work"})}),Object(P.jsx)(b.a,{onPress:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(!1),e.next=4,i.a.awrap(v.a.setItem("@tabs",JSON.stringify(!1)));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),null,null,[[0,6]],Promise)},children:Object(P.jsx)(p.a,{style:{fontSize:38,fontWeight:"600",color:n?m:"white"},children:"Travel"})})]}),Object(P.jsx)(j.a,{onSubmitEditing:function(){var e;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==d){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,e=S(S({},T),{},o()({},Date.now(),{text:d,done:!1,working:n,editToggle:!1})),C(e),t.next=7,i.a.awrap(J(e));case 7:w(""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),console.log(t.t0);case 13:case"end":return t.stop()}}),null,null,[[2,10]],Promise)},onChangeText:function(e){return w(e)},value:d,returnKeyType:"done",placeholder:n?"What do you have to do?":"Where do you want to go?",style:z.input}),Object(P.jsx)(h.a,{children:Object.keys(T).map((function(e){return T[e].working===n?Object(P.jsxs)(f.a,{style:z.toDo,children:[T[e].editToggle?Object(P.jsx)(j.a,{onSubmitEditing:function(t){return function(e,t){var n=S({},T);n[t].text=e.nativeEvent.text,n[t].editToggle=!n[t].editToggle,C(n),J(n)}(t,e)},returnKeyType:"done",placeholder:T[e].text,style:z.input}):Object(P.jsx)(p.a,{style:T[e].done?z.doneText:z.toDoText,children:T[e].text}),Object(P.jsxs)(f.a,{style:z.box,children:[Object(P.jsx)(b.a,{onPress:function(){return function(e){var t=S({},T);t[e].editToggle=!t[e].editToggle,C(t),J(t)}(e)},children:Object(P.jsx)(O.a,{name:"edit",size:24,style:z.check})}),T[e].done?Object(P.jsx)(b.a,{onPress:function(){return I(e)},children:Object(P.jsx)(O.a,{name:"reload1",size:24,style:z.check})}):Object(P.jsx)(b.a,{onPress:function(){return I(e)},children:Object(P.jsx)(O.a,{name:"check",size:24,style:z.check})}),Object(P.jsx)(b.a,{onPress:function(){return function(e){if("web"===g.a.OS){if(confirm("Do you want to delete this Todo?")){var t=S({},T);delete t[e],C(t),J(t)}}else x.a.alert("Delete To Do","Are you sure?",[{text:"Cancel"},{text:"Delete",style:"destructive",onPress:function(){var t=S({},T);delete t[e],C(t),J(t)}}])}(e)},children:Object(P.jsx)(y.a,{name:"trash",size:18,color:m})})]})]},e):null}))})]})}var z=d.a.create({container:{flex:1,backgroundColor:w,paddingHorizontal:20},box:{flexDirection:"row"},check:{paddingRight:20,color:"white"},header:{justifyContent:"space-between",flexDirection:"row",marginTop:100},input:{backgroundColor:"white",paddingVertical:15,paddingHorizontal:20,borderRadius:30,marginVertical:20,fontSize:18},toDo:{backgroundColor:k,marginBottom:10,paddingVertical:20,paddingHorizontal:20,borderRadius:15,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},toDoText:{color:"white",fontSize:16,fontWeight:"600"},doneText:{color:m}})},91:function(e,t,n){e.exports=n(118)}},[[91,1,2]]]);
//# sourceMappingURL=app.59b47389.chunk.js.map