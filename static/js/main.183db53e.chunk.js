(this["webpackJsonppoke-front"]=this["webpackJsonppoke-front"]||[]).push([[0],{52:function(e,t,a){e.exports=a(87)},76:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),s=a(38),i=a.n(s),l=a(15),u=a(11),p=a(8),m=a.n(p),d=a(49),f=a(13),h=a(17),g=a(18),v=a(20),k=a(19),b=a(21),E=a(14),x=a.n(E),C=x.a.create({baseURL:"https://pokedex-jacto-admission.herokuapp.com/api"}),w=(a(76),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={captures:[],captureInfo:{},page:1,img:[],imgPokemons:[]},a.loadCaptures=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n,r,o,c,s,i=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,e.next=3,C.get("/captures?page=".concat(t));case 3:n=e.sent,r=n.data,o=r.docs,c=Object(d.a)(r,["docs"]),a.setState({captures:o,captureInfo:c,page:t}),s=a.state.captures.map((function(e){return e.pokemon})),a.setState({imgPokemons:s}),a.loadImage();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a.loadImage=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<=a.state.imgPokemons.length)){e.next=9;break}return e.next=4,x.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a.state.imgPokemons[t]));case 4:n=e.sent,a.state.img.push(n.data.sprites.front_default);case 6:t++,e.next=1;break;case 9:case"end":return e.stop()}}),e)}))),a.prevPage=function(){var e=a.state,t=e.page;e.captureInfo;if(1!==t){var n=t-1;a.loadCaptures(n)}},a.nextPage=function(){var e=a.state,t=e.page;if(t!==e.captureInfo.pages){var n=t+1;a.loadCaptures(n)}},a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.loadCaptures()}},{key:"Capitalize",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this,t=this.state,a=t.captures,n=t.page,o=t.captureInfo;t.img;return r.a.createElement("div",{className:"capture-list"},r.a.createElement("h1",{align:"center"},"Captured Pokemons"),a.map((function(t){return r.a.createElement("article",{key:t._id},r.a.createElement("strong",null,e.Capitalize(t.pokemon)),r.a.createElement("p",null,t.moveList.map((function(t,a){return r.a.createElement("li",{key:a},e.Capitalize(t))}))),r.a.createElement("p",null,"Capturado em: ",t.capturedAt))})),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===n,onClick:this.prevPage},"Previous"),r.a.createElement(l.b,{to:"/captures",style:{padding:"10px",borderRadius:"5px",border:"0",background:"#da552f",color:"#fff",fontSize:"16px",fontWeight:"bold",cursor:"pointer"}},"New Captures"),r.a.createElement("button",{disabled:n===o.pages,onClick:this.nextPage},"Next")))}}]),t}(n.Component)),y=a(47),j=a(41),O=a.n(j),P=a(88),A=a(89),S=a(43),I=a(90),z=a(92),_=a(91),D=a(93),L=(a(82),x.a.create()),M=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(v.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={pokemons:[],selected_value:"",options:[],img:"",moves:[],capturedAt:""},a.loadPokemons=Object(f.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("/pokemons");case 2:t=e.sent,n=t.data,r=n.map((function(e){return{value:e,label:e}})),a.setState({pokemons:n,options:r});case 6:case"end":return e.stop()}}),e)}))),a.handleChange=function(e){a.handleImageMoves(e),console.log(e.value),a.setState({selected_value:e})},a.handleSubmit=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(a.state.capturedAt),""!==a.state.capturedAt){e.next=6;break}return alert("Preencha a data e hora da captura"),e.abrupt("return",!1);case 6:return e.next=8,C.post("/captures",{pokemon:a.state.selected_value.value,capturedAt:a.state.capturedAt,moveList:a.state.moves}).then((function(e){console.log(e.json)}));case 8:alert("Salvou");case 9:case"end":return e.stop()}}),e)}))),a.handleCaptureDate=function(e){a.setState({capturedAt:e}),console.log(a.state.capturedAt)},a.handleImageMoves=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.get("https://pokeapi.co/api/v2/pokemon/".concat(t.value));case 2:n=e.sent,r=n.data.sprites.front_default,O()(n.data.moves),o=n.data.moves.map((function(e){return e.move.name})).slice(0,4),console.log({name:o.map((function(e){return e}))}),a.setState({img:r,moves:o});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.loadPokemons()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement(P.a,{style:{padding:"10px",width:"240px"},align:"center"},r.a.createElement(y.a,{key:this.state.pokemons._id,onChange:this.handleChange,options:this.state.options,autoFocus:!0})),r.a.createElement(P.a,null,r.a.createElement(A.a,null,r.a.createElement(S.a,{align:"center"},r.a.createElement("h2",{align:"center"},"Pokemon"),r.a.createElement(I.a,{src:this.state.img,height:"240px",width:"240px"})),r.a.createElement(S.a,null,r.a.createElement(z.a,null,r.a.createElement("h2",{align:"center"},"Moves"),this.state.moves.map((function(e,t){return r.a.createElement(z.a.Item,{key:t,align:"center"},e)}))))),r.a.createElement(_.a,{align:"center"},r.a.createElement(_.a.Group,{align:"center"},r.a.createElement(_.a.Label,null,"Capture Date and time:"),r.a.createElement(_.a.Control,{size:"lg",style:{width:"300px",justifyContent:"center"},required:!0,type:"datetime-local",placeholder:"01/01/2020",defaultValue:this.state.capturedAt,onChange:function(t){return e.handleCaptureDate(t.target.value)}}),r.a.createElement(_.a.Control.Feedback,{type:"invalid"},"Preencha a data e hora da captura.")),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{onClick:this.handleSubmit,style:{fontSize:"20px",width:"140px"},type:"button",variant:"warning"},"Capture"),r.a.createElement(l.b,{to:"/",style:{marginLeft:"5px",padding:"10px",width:"140px",borderRadius:"5px",border:"0",background:"#da552f",color:"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer"}},"Listar Capturas")))))}}]),t}(n.Component);i.a.config();var N=function(){return r.a.createElement(l.a,{basename:"/pokedex-frontend"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:w}),r.a.createElement(u.a,{path:"/captures",component:M})))},W=(a(85),a(86),function(){return r.a.createElement("header",{id:"main-header"},"Minha PokeDex")}),F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(W,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.183db53e.chunk.js.map