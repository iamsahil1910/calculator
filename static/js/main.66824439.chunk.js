(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{17:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var r=c(0),n=c(1),o=c.n(n),a=c(11),l=c.n(a),i=c(3),s=c(4),d=c(7),u=c(6),j=c(10),b=c(9),k=(c(17),function(t){Object(d.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(i.a)(this,c);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))).state={data:[],result:0,number:"",operation:"",mode:!0},t.historyRecord=function(){var e,c="",r=t.state.data.values(),n=Object(b.a)(r);try{for(n.s();!(e=n.n()).done;){var o=e.value;c=c+String(o)+"  "}}catch(a){n.e(a)}finally{n.f()}return c},t.clickedButton=function(e){var c=t.state.number;if(Number.isInteger(e)||"."===e)c+=String(e),t.setState({number:c,operation:""});else if("+"===e||"*"===e||"-"===e||"/"===e||"%"===e){var r=t.state.operation;if(""!==c)if("-"===r||"+"===r||"/"===r||"*"===r){var n=t.state.data;n.pop(),n.push(c),n.push(r),t.setState({data:n,number:"",operation:e,mode:!0})}else t.setState({data:[].concat(Object(j.a)(t.state.data),[c,e]),number:"",operation:e,mode:!0});else if("-"===r||"+"===r||"/"===r||"*"===r){var o=t.state.data;o.pop(),o.push(e),t.setState({data:o,number:"",operation:e,mode:!0})}else t.setState({data:[].concat(Object(j.a)(t.state.data),[e]),number:"",operation:e,mode:!0})}else if("C"===e)t.setState({data:[],number:"",operation:"",result:0,mode:!0});else if("="===e){if(""!==c){var a=t.calculateResult(c);t.setState({data:[],number:String(a),operation:"",result:a,mode:!0})}}else if("m"===e){var l=t.state.number;!0===t.state.mode?(l="-"+l,t.setState({number:l,mode:!1})):(l=l.slice(1),t.setState({number:l,mode:!0}))}},t.calculateResult=function(e){var c=0,r=t.state.data;r.push(e);var n,o=r.values(),a="+",l=Object(b.a)(o);try{for(l.s();!(n=l.n()).done;){var i=n.value;isNaN(i)?a=i:"+"===a?c+=parseFloat(i):"-"===a?c-=parseFloat(i):"/"===a?c/=parseFloat(i):"*"===a?c*=parseFloat(i):"%"===a&&(c%=parseFloat(i))}}catch(s){l.e(s)}finally{l.f()}return c},t}return Object(s.a)(c,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("h1",{className:"card-header",children:"Calculator"}),Object(r.jsxs)("div",{className:"screen",children:[Object(r.jsx)("p",{className:"card-title",children:this.historyRecord()}),Object(r.jsx)("h2",{className:"card-title",children:"="===this.state.operation?this.state.result:this.state.number})]})]}),Object(r.jsx)("table",{className:"table",children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{backgroundColor:"#f5f5f5",color:"darkgray"},onClick:function(){return t.clickedButton("C")},children:"C"}),Object(r.jsx)("td",{style:{backgroundColor:"#f5f5f5",color:"darkgray"},onClick:function(){return t.clickedButton("m")},children:"+/-"}),Object(r.jsx)("td",{style:{backgroundColor:"#f5f5f5",color:"darkgray"},onClick:function(){return t.clickedButton("%")},children:"%"}),Object(r.jsx)("td",{style:{backgroundColor:"#3c4b5e",color:"white"},onClick:function(){return t.clickedButton("/")},children:"\xf7"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(7)},children:"7"}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(8)},children:"8"}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(9)},children:"9"}),Object(r.jsx)("td",{style:{backgroundColor:"#3c4b5e",color:"white"},onClick:function(){return t.clickedButton("*")},children:"X"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(4)},children:"4"}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(5)},children:"5"}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(6)},children:"6"}),Object(r.jsx)("td",{style:{backgroundColor:"#3c4b5e",color:"white"},onClick:function(){return t.clickedButton("-")},children:"-"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(1)},children:"1"}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(2)},children:"2"}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(3)},children:"3"}),Object(r.jsx)("td",{style:{backgroundColor:"#3c4b5e",color:"white"},onClick:function(){return t.clickedButton("+")},children:"+"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(0)},children:"0"}),Object(r.jsx)("td",{}),Object(r.jsx)("td",{style:{color:"darkgray"},onClick:function(){return t.clickedButton(".")},children:"."}),Object(r.jsx)("td",{style:{backgroundColor:"#e7c313",color:"white"},onClick:function(){return t.clickedButton("=")},children:"="})]})]})})]})}}]),c}(o.a.Component)),h=function(t){Object(d.a)(c,t);var e=Object(u.a)(c);function c(){return Object(i.a)(this,c),e.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(k,{})})}}]),c}(o.a.Component);l.a.render(Object(r.jsx)(h,{}),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.66824439.chunk.js.map