(this["webpackJsonppoke-front"]=this["webpackJsonppoke-front"]||[]).push([[0],{50:function(e,t,a){e.exports=a(84)},73:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(13),s=a(11),i=a(9),u=a.n(i),p=a(47),m=a(14),d=a(16),f=a(17),h=a(20),v=a(18),g=a(21),b=a(19),k=a.n(b),E=k.a.create({baseURL:"https://pokedex-jacto-admission.herokuapp.com/api"}),x=(a(73),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={captures:[],captureInfo:{},page:1,img:[]},a.loadCaptures=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r,o,c,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:1,e.next=3,E.get("/captures?page=".concat(t));case 3:n=e.sent,r=n.data,o=r.docs,c=Object(p.a)(r,["docs"]),a.setState({captures:o,captureInfo:c,page:t}),console.log(a.state.docs);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a.prevPage=function(){var e=a.state,t=e.page;e.captureInfo;if(1!==t){var n=t-1;a.loadCaptures(n)}},a.nextPage=function(){var e=a.state,t=e.page;if(t!==e.captureInfo.pages){var n=t+1;a.loadCaptures(n)}},a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadCaptures()}},{key:"Capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this,t=this.state,a=t.captures,n=t.page,o=t.captureInfo;return r.a.createElement("div",{className:"capture-list"},r.a.createElement("h1",{align:"center"},"Captured Pokemons"),a.map((function(t){return r.a.createElement("article",{key:t._id},r.a.createElement("strong",null,e.Capitalize(t.pokemon)),r.a.createElement("p",null,t.moveList.map((function(t,a){return r.a.createElement("li",{key:a},e.Capitalize(t))}))))})),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===n,onClick:this.prevPage},"Previous"),r.a.createElement(l.b,{to:"/captures",style:{padding:"10px",borderRadius:"5px",border:"0",background:"#da552f",color:"#fff",fontSize:"16px",fontWeight:"bold",cursor:"pointer"}},"New Captures"),r.a.createElement("button",{disabled:n===o.pages,onClick:this.nextPage},"Next")))}}]),t}(n.Component)),w=a(45),C=a(39),y=a.n(C),j=a(85),O=a(86),S=a(41),A=a(87),P=a(89),I=a(88),z=a(90),D=(a(79),k.a.create()),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={pokemons:[],selected_value:"",options:[{value:"one",label:"One"},{value:"two",label:"Two"}],img:"",moves:[],capturedAt:""},a.loadPokemons=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/pokemons");case 2:t=e.sent,n=t.data,r=n.map((function(e){return{value:e,label:e}})),console.log(n),a.setState({pokemons:n,options:r});case 7:case"end":return e.stop()}}),e)}))),a.handleChange=function(e){a.handleImageMoves(e),console.log(e.value),a.setState({selected_value:e})},a.handleSubmit=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.post("/captures",{pokemon:a.state.selected_value.value,capturedAt:a.state.capturedAt,moveList:a.state.moves}).then((function(e){console.log(e.json)}));case 2:alert("Salvou");case 3:case"end":return e.stop()}}),e)}))),a.handleCaptureDate=function(e){a.setState({capturedAt:e}),console.log(a.state.capturedAt)},a.handleImageMoves=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("https://pokeapi.co/api/v2/pokemon/".concat(t.value));case 2:n=e.sent,r=n.data.sprites.front_default,y()(n.data.moves),o=n.data.moves.map((function(e){return e.move.name})).slice(0,4),console.log({name:o.map((function(e){return e}))}),a.setState({img:r,moves:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadPokemons()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(j.a,{style:{padding:"10px",width:"240px"},align:"center"},r.a.createElement(w.a,{key:this.state.pokemons._id,onChange:this.handleChange,options:this.state.options,autoFocus:!0})),r.a.createElement(j.a,null,r.a.createElement(O.a,null,r.a.createElement(S.a,{align:"center"},r.a.createElement("h2",{align:"center"},"Pokemon"),r.a.createElement(A.a,{src:this.state.img,height:"240px",width:"240px"})),r.a.createElement(S.a,null,r.a.createElement(P.a,null,r.a.createElement("h2",{align:"center"},"Moves"),this.state.moves.map((function(e,t){return r.a.createElement(P.a.Item,{key:t,align:"center"},e)}))))),r.a.createElement(I.a,{align:"center"},r.a.createElement(I.a.Group,{align:"center"},r.a.createElement(I.a.Label,null,"Capture Date and time:"),r.a.createElement(I.a.Control,{size:"lg",style:{width:"300px",justifyContent:"center"},type:"datetime-local",placeholder:"01/01/2020",defaultValue:this.state.capturedAt,onChange:function(t){return e.handleCaptureDate(t.target.value)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{onClick:this.handleSubmit,style:{fontSize:"20px",width:"140px"},type:"button",variant:"warning"},"Capture"),r.a.createElement(l.b,{to:"/",style:{marginLeft:"5px",padding:"10px",width:"140px",borderRadius:"5px",border:"0",background:"#da552f",color:"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer"}},"Listar Capturas")))))}}]),t}(n.Component),M=function(){return r.a.createElement(l.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:x}),r.a.createElement(s.a,{path:"/captures",component:L})))},N=(a(82),a(83),function(){return r.a.createElement("header",{id:"main-header"},"Minha PokeDex")}),_=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.1f8c2be1.chunk.js.map