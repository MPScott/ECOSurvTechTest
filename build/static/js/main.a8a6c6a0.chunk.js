(this.webpackJsonpreactproj=this.webpackJsonpreactproj||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(3),i=n.n(r),s=n(4),o=n(5),d=n(8),u=n(7),h=n(17),j=n(0),l=function(t){var e=t.cellData;return Object(j.jsx)("th",{children:e||""})},b=function(t){var e=t.rowData,n=t.index,a=t.categories;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:n},"#"+n),a.map((function(t,a){return e[t]?Object(j.jsx)(l,{cellData:(c=e[t],"object"!==typeof c?c.toString():c.utc?new Date(c.utc).toString():JSON.stringify(c))},n+"cell"+a):Object(j.jsx)(l,{cellData:""},n+"cell"+a);var c}))]},n)},p=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).componentDidMount=function(){t.updateEndpoint(t.state.endpoint)},t.updateEndpoint=function(){fetch(t.state.endpoint).then((function(e){e.json().then((function(e){t.defineTableHeaders(e.results)}))})).catch((function(){console.log("Invalid Endpoint")}))},t.defineTableHeaders=function(e){var n=[];e.forEach((function(t){Object.keys(t).forEach((function(t){n.includes(t)||n.push(t)}))})),t.setState({headers:n,data:e})},t.handleInputChange=function(e){var n=e.target.value;t.setState({endpoint:n})},t.handleSubmit=function(e){e.preventDefault(),t.updateEndpoint(t.state.endpoint)},t.headerRow=function(){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"#"}),t.state.headers.map((function(t){return Object(j.jsx)("td",{children:t},t)}))]},"header")},t.state={endpoint:"https://api.openaq.org/v1/measurements?country=GB&city=Manchester",data:[],headers:[],rows:[]},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("form",{onSubmit:this.handleSubmit.bind(this),children:[Object(j.jsxs)("label",{children:["Endpoint:",Object(j.jsx)("input",{type:"text",value:this.state.endpoint,onChange:this.handleInputChange})]}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]}),Object(j.jsxs)(h.a,{children:[Object(j.jsx)("thead",{children:this.headerRow()}),Object(j.jsx)("tbody",{children:this.state.data.map((function(e,n){return Object(j.jsx)(b,{rowData:e,index:n,categories:t.state.headers},"row"+n)}))})]})]})}}]),n}(c.a.Component);var f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{})})};n(14);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8a6c6a0.chunk.js.map