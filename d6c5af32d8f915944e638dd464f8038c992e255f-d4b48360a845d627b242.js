(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2wox":function(t,e,n){"use strict";function r(t,e,n){var r,i=e.theme&&e.theme[t];return"function"==typeof(r="function"==typeof i?i(n):n[i])?r(e):r}function i(t,e){return function(n){return r(t,n,e)}}i.variants=function(t,e,n){return function(i){var o=i[e]&&n[i[e]];return o&&r(t,i,o)}},t.exports=i},"6VaU":function(t,e,n){"use strict";var r=n("XKFU"),i=n("xF/b"),o=n("S/j/"),a=n("ne8i"),c=n("2OiF"),u=n("zRwo");r(r.P,"Array",{flatMap:function(t){var e,n,r=o(this);return c(t),e=a(r.length),n=u(r,0),i(n,r,r,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(t,e,n){"use strict";var r=n("XKFU"),i=n("Lgjv"),o=n("ol8x"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"8+s/":function(t,e,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,i=n("q1tI"),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=t(s.map((function(t){return t.props}))),l.canUseDOM?e(u):n&&(u=n(u))}var l=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},"9VmF":function(t,e,n){"use strict";var r=n("XKFU"),i=n("ne8i"),o=n("0sh+"),a="".startsWith;r(r.P+r.F*n("UUeW")("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},"9XZr":function(t,e,n){"use strict";var r=n("XKFU"),i=n("Lgjv"),o=n("ol8x"),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*a,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},FLlr:function(t,e,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},HKfP:function(t,e,n){t.exports=n.p+"static/trianglify-a4a874d37849ca877a18d40fa5df7913.svg"},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},INYr:function(t,e,n){"use strict";var r=n("XKFU"),i=n("CkkT")(6),o="findIndex",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(o)},InJ6:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return f})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"f",(function(){return h})),n.d(e,"d",(function(){return m}));var r=n("2wox"),i=n.n(r),o=n("HKfP"),a=n.n(o),c=i()("theme",{light:"#1f2933",dark:"rgba(255, 255, 255, 0.75)",love:"#ffa7c4"}),u=i()("theme",{light:"rgba(39, 110, 241, 1)",dark:"rgba(39, 110, 241, 1)",love:"#ffa7c4"}),s=i()("theme",{light:"#ced4da",dark:"rgba(255, 255, 255, 0.75)",love:"#ffa7c4"}),f=i()("theme",{light:"#ced4da",dark:"rgba(21, 21, 21, 1)",love:"#ffffff"}),l=i()("theme",{light:"rgba(0, 0, 0, 0.08) 0px 4px 8px",dark:"rgba(255, 255, 255, 1) 0px 2px 4px",love:"#ffa7c4 0px 2px 4px"}),d=i()("theme",{light:"rgba(255, 255, 255, 1)",dark:"rgb(23, 23, 23)",love:"rgba(255, 255, 255, 1)"}),p=i()("theme",{light:"rgba(245, 245, 245, 1)",dark:"rgb(34, 35, 38)",love:""}),h=i()("theme",{light:"",dark:"",love:"url("+a.a+")"}),m="all 0.3s ease"},Lgjv:function(t,e,n){var r=n("ne8i"),i=n("l0Rn"),o=n("vhPU");t.exports=function(t,e,n,a){var c=String(o(t)),u=c.length,s=void 0===n?" ":String(n),f=r(e);if(f<=u||""==s)return c;var l=f-u,d=i.call(s,Math.ceil(l/s.length));return d.length>l&&(d=d.slice(0,l)),a?d+c:c+d}},Oezq:function(t,e,n){t.exports=n.p+"static/favicon-db9e577a600d00ca64d458ed3fd1fff2.ico"},SPin:function(t,e,n){"use strict";var r=n("XKFU"),i=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},YuTi:function(t,e,n){n("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},Zttt:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n("91GP");var r=n("q1tI"),i=n.n(r),o=n("cKtk"),a=n("vOnD");var c=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).handleScroll=function(){n.setState({y:window.scrollY})},n.themeToggle=function(t){n.setState({theme:t}),("undefined"!=typeof window&&window).localStorage.setItem("theme",t)},n.state={y:0,theme:"light"},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=r.prototype;return c.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),this.setState({theme:Object(o.b)()})},c.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},c.render=function(){var t=Object.assign(Object.assign({},this.state),{},{themeToggle:this.themeToggle});return i.a.createElement(o.a.Provider,{value:t},i.a.createElement(a.a,{theme:{theme:this.state.theme}},this.props.children))},r}(r.Component),u=n("qhky"),s=n("Oezq"),f=n.n(s),l=function(t){var e=t.siteMetadata;if(!e)return null;var n=e.title,r=e.image,o=e.twitterUsername;return i.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:n,meta:[{name:"description",content:n},{name:"keywords",content:"gatsbyjs, reactjs, graphql, dixitk13"},{name:"image",content:r},{name:"twitter:creator",content:o}],link:[{rel:"shortcut icon",type:"image/png",href:""+f.a}]})}},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,u,s,f=r(e),l=r(n);if(f&&l){if((u=e.length)!=n.length)return!1;for(c=u;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(f!=l)return!1;var d=e instanceof Date,p=n instanceof Date;if(d!=p)return!1;if(d&&p)return e.getTime()==n.getTime();var h=e instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return e.toString()==n.toString();var y=i(e);if((u=y.length)!==i(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,y[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=u;0!=c--;)if(!("_owner"===(s=y[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},cKtk:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return f}));var r=n("q1tI"),i=n.n(r),o=n("LvDl"),a=i.a.createContext({y:0,theme:"light",themeToggle:function(){}}),c={0:"light",1:"dark",2:"love"},u=Object(o.invert)(c),s=function(){var t="undefined"!=typeof window&&window;return t&&t.localStorage.getItem("theme")||"light"},f=function(){return u[s()]}},dRSK:function(t,e,n){"use strict";var r=n("XKFU"),i=n("CkkT")(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},l0Rn:function(t,e,n){"use strict";var r=n("RYi7"),i=n("vhPU");t.exports=function(t){var e=String(i(this)),n="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(e+=e))1&o&&(n+=e);return n}},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return mt}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,i,o,a,c=n("17x9"),u=n.n(c),s=n("8+s/"),f=n.n(s),l=n("bmMU"),d=n.n(l),p=n("q1tI"),h=n.n(p),m=n("MgzW"),y=n.n(m),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),S="cssText",A="href",E="http-equiv",O="innerHTML",C="itemprop",P="name",x="property",k="rel",j="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",F="encodeSpecialCharacters",U="onChangeClientState",K="titleTemplate",N=Object.keys(I).reduce((function(t,e){return t[I[e]]=e,t}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},W=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},B=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},X=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=$(t,T.TITLE),n=$(t,K);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=$(t,M);return e||r||void 0},G=function(t){return $(t,U)||function(){}},z=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},J=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},Z=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var c=o[a],u=c.toLowerCase();-1===e.indexOf(u)||n===k&&"canonical"===t[n].toLowerCase()||u===k&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==O&&c!==S&&c!==C||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][s]&&(i[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],u=y()({},r[c],i[c]);r[c]=u}return t}),[]).reverse()},$=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:t.requestAnimationFrame||Q,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,d=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,i),ct(l,d);var p={baseTag:st(T.BASE,n),linkTags:st(T.LINK,o),metaTags:st(T.META,a),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,f)},h={},m={};Object.keys(p).forEach((function(t){var e=p[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(m[t]=p[t].oldTags)})),e&&e(),u(t,h,m)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===i.indexOf(u)&&i.push(u);var f=o.indexOf(u);-1!==f&&o.splice(f,1)}for(var l=o.length-1;l>=0;l--)n.removeAttribute(o[l]);i.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===O)n.innerHTML=e.innerHTML;else if(r===S)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},ft=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[I[n]||n]=t[n],e}),e)},dt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,i=lt(n,r),[h.a.createElement(T.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=ft(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+X(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+X(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case b:return{toComponent:function(){return lt(e)},toString:function(){return ft(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=I[t]||t;if(n===O||n===S){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),h.a.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===O||t===S)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+X(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===q.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},pt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,d=t.titleAttributes;return{base:dt(T.BASE,e,r),bodyAttributes:dt(g,n,r),htmlAttributes:dt(b,i,r),link:dt(T.LINK,o,r),meta:dt(T.META,a,r),noscript:dt(T.NOSCRIPT,c,r),script:dt(T.SCRIPT,u,r),style:dt(T.STYLE,s,r),title:dt(T.TITLE,{title:l,titleAttributes:d},r)}},ht=f()((function(t){return{baseTag:J([A,L],t),bodyAttributes:z(g,t),defer:$(t,R),encode:$(t,F),htmlAttributes:z(b,t),linkTags:Z(T.LINK,[k,A],t),metaTags:Z(T.META,[P,w,E,x,C],t),noscriptTags:Z(T.NOSCRIPT,[O],t),onChangeClientState:G(t),scriptTags:Z(T.SCRIPT,[j,O],t),styleTags:Z(T.STYLE,[S],t),title:V(t),titleAttributes:z(v,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),pt)((function(){return null})),mt=(i=ht,a=o=function(t){function e(){return D(this,e),B(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return Y({},i,((e={})[r.type]=a,e.titleAttributes=Y({},o),e));case T.BODY:return Y({},i,{bodyAttributes:Y({},o)});case T.HTML:return Y({},i,{htmlAttributes:Y({},o)})}return Y({},i,((n={})[r.type]=Y({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return h.a.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[N[n]||n]=t[n],e}),e)}(_(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=_(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),h.a.createElement(i,r)},W(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(h.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=pt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);mt.renderStatic=mt.rewind}).call(this,n("yLpj"))},"xF/b":function(t,e,n){"use strict";var r=n("EWmC"),i=n("0/R4"),o=n("ne8i"),a=n("m0Pp"),c=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,u,s,f,l,d,p){for(var h,m,y=f,g=0,b=!!d&&a(d,p,3);g<s;){if(g in u){if(h=b?b(u[g],g,n):u[g],m=!1,i(h)&&(m=void 0!==(m=h[c])?!!m:r(h)),m&&l>0)y=t(e,n,h,o(h.length),y,l-1)-1;else{if(y>=9007199254740991)throw TypeError();e[y]=h}y++}g++}return y}}}]);
//# sourceMappingURL=d6c5af32d8f915944e638dd464f8038c992e255f-d4b48360a845d627b242.js.map