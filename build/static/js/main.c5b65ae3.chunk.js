(this.webpackJsonpgoogleclone=this.webpackJsonpgoogleclone||[]).push([[0],{58:function(e,c,s){},59:function(e,c,s){},70:function(e,c,s){},71:function(e,c,s){},74:function(e,c,s){"use strict";s.r(c);var t=s(0),a=s(23),n=s.n(a),r=(s(58),s(6)),i=s(4),l=s(44),o=s.n(l),j=s(89),h=s(18),d=(s(59),s(34)),b=s.n(d),u=s(43),m=s.n(u),O=s(88),x=s(2),_=Object(t.createContext)(),v=function(e){var c=e.reducer,s=e.initialState,a=e.children;return Object(x.jsx)(_.Provider,{value:Object(t.useReducer)(c,s),children:a})},g=function(){return Object(t.useContext)(_)},p=s(36),f="SET_SEARCH_TERM",N=function(e,c){switch(console.log(c),c.type){case f:return Object(p.a)(Object(p.a)({},e),{},{term:c.term});default:return e}};var P=function(e){var c=e.hideButtons,s=void 0!==c&&c,a=e.searchTerm,n=void 0===a?"":a;console.log(n);var r=Object(t.useState)(n),l=Object(h.a)(r,2),o=l[0],j=l[1],d=g(),u=Object(h.a)(d,2),_=(u[0],u[1]),v=Object(i.f)(),p=function(e){e.preventDefault(),_({type:f,term:o}),v.push("/search")};return Object(x.jsxs)("form",{className:"search",children:[Object(x.jsxs)("div",{className:"search__input",children:[Object(x.jsx)(b.a,{className:"search__inputIcon"}),Object(x.jsx)("input",{value:o,onChange:function(e){return j(e.target.value)}}),Object(x.jsx)(m.a,{className:"search__micIcon"})]}),s?Object(x.jsxs)("div",{className:"search__buttons",children:[Object(x.jsx)(O.a,{type:"submit",onClick:p,variant:"outlined",className:"search__hideButtons",children:"Google Search"}),Object(x.jsx)(O.a,{variant:"outlined",className:"search__hideButtons",children:"I'm Feeling Lucky"})]}):Object(x.jsxs)("div",{className:"search__buttons",children:[Object(x.jsx)(O.a,{type:"submit",onClick:p,variant:"outlined",children:"Google Search"}),Object(x.jsx)(O.a,{variant:"outlined",children:" I'm Feeling Lucky "})]})]})};s(70);var S=function(){return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsxs)("div",{className:"home__header",children:[Object(x.jsxs)("div",{className:"header__left",children:[Object(x.jsx)(r.b,{to:"/about",children:"About"}),Object(x.jsx)(r.b,{to:"/store",children:"Store"})]}),Object(x.jsxs)("div",{className:"header__right",children:[Object(x.jsx)(r.b,{to:"/gmail",children:"Gmail"}),Object(x.jsx)(r.b,{to:"/images",children:"Images"}),Object(x.jsx)(o.a,{}),Object(x.jsx)(j.a,{})]})]}),Object(x.jsxs)("div",{className:"home__body",children:[Object(x.jsx)("img",{src:"/google.png",alt:""}),Object(x.jsx)("div",{className:"home__inputContainer",children:Object(x.jsx)(P,{})})]})]})},k=(s(71),s(39)),y=s.n(k),I=s(45);var w=function(e){console.log(e);var c=Object(t.useState)(null),s=Object(h.a)(c,2),a=s[0],n=s[1];return Object(t.useEffect)((function(){(function(){var c=Object(I.a)(y.a.mark((function c(){var s,t;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyA44iliY8hnMlrWanjkpEV0UPEpYTBJHiU","&cx=").concat("95fe52f16b414c326","&q=").concat(e));case 2:return s=c.sent,c.next=5,s.json();case 5:t=c.sent,console.log("res",t),n(t);case 8:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]),{data:a}},T=s(46),C=s.n(T),A=s(47),B=s.n(A),E=s(48),L=s.n(E),R=s(49),M=s.n(R),G=s(50),J=s.n(G);var q=function(){var e=g(),c=Object(h.a)(e,2),s=c[0].term,t=(c[1],w(s).data);return Object(x.jsxs)("div",{className:"searchPage",children:[Object(x.jsxs)("div",{className:"search__header",children:[Object(x.jsx)(r.b,{to:"/",children:Object(x.jsx)("img",{className:"searchPage__logo",src:"/google.png",alt:""})}),Object(x.jsxs)("div",{className:"searchPage__headerBody",children:[Object(x.jsx)(P,{hideButtons:!0,searchTerm:s}),Object(x.jsxs)("div",{className:"searchPage__options",children:[Object(x.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(x.jsxs)("div",{className:"searchPage__option",children:[Object(x.jsx)(b.a,{}),Object(x.jsx)(r.b,{to:"/all",children:"All"})]}),Object(x.jsxs)("div",{className:"searchPage__option",children:[Object(x.jsx)(C.a,{}),Object(x.jsx)(r.b,{to:"/news",children:"News"})]}),Object(x.jsxs)("div",{className:"searchPage__option",children:[Object(x.jsx)(B.a,{}),Object(x.jsx)(r.b,{to:"/images",children:"Images"})]}),Object(x.jsxs)("div",{className:"searchPage__option",children:[Object(x.jsx)(L.a,{}),Object(x.jsx)(r.b,{to:"/shopping",children:"Shopping"})]}),Object(x.jsxs)("div",{className:"searchPage__option",children:[Object(x.jsx)(M.a,{}),Object(x.jsx)(r.b,{to:"/maps",children:"Maps"})]}),Object(x.jsxs)("div",{className:"searchPage__option",children:[Object(x.jsx)(J.a,{}),Object(x.jsx)(r.b,{to:"/more",children:"More"})]})]}),Object(x.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(x.jsx)("div",{className:"searchPage__option",children:Object(x.jsx)(r.b,{to:"/more",children:"Settings"})}),Object(x.jsx)("div",{className:"searchPage__option",children:Object(x.jsx)(r.b,{to:"/more",children:"Tools"})})]})]})]})]}),s&&Object(x.jsxs)("div",{className:"searchPage__results",children:[Object(x.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===t||void 0===t?void 0:t.searchInformation.formattedTotalResults," results (",null===t||void 0===t?void 0:t.searchInformation.formattedSearchTime,") for ",s]}),null===t||void 0===t?void 0:t.items.map((function(e){var c,s,t,a,n,r,i,l;return Object(x.jsxs)("div",{className:"searchPage__result",children:[Object(x.jsxs)("a",{className:"searchPage__resultLink",href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(s=c.cse_image)||void 0===s?void 0:s.length)>0&&(null===(t=e.pagemap)||void 0===t||null===(a=t.cse_image[0])||void 0===a?void 0:a.src)&&Object(x.jsx)("img",{className:"searchPage__resultImage",src:(null===(n=e.pagemap)||void 0===n||null===(r=n.cse_image)||void 0===r?void 0:r.length)>0&&(null===(i=e.pagemap)||void 0===i||null===(l=i.cse_image[0])||void 0===l?void 0:l.src),alt:""}),e.displayLink]}),Object(x.jsx)("br",{}),Object(x.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(x.jsx)("h2",{children:e.title})}),Object(x.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]},e.cacheId)}))]})]})},F=function(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(r.a,{children:Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",component:S}),Object(x.jsx)(i.a,{exact:!0,path:"/search",children:Object(x.jsx)(q,{})})]})})})};n.a.render(Object(x.jsx)(v,{initialState:{term:null},reducer:N,children:Object(x.jsx)(F,{})}),document.querySelector("#root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c5b65ae3.chunk.js.map