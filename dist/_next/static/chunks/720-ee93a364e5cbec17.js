(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[720],{4090:function(e,t,n){"use strict";n.d(t,{UQ:function(){return A},KF:function(){return M},XE:function(){return _},Qd:function(){return D},Hk:function(){return I}});var r=n(894),o=n(1604),i=n(7496),a=n(4592),l=n(6450),s=n(7294),c=n(242),u=n(7375);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var f=["onChange","defaultIndex","index","allowMultiple","allowToggle"],m=["isDisabled","isFocusable","id"],h=(0,c.n)(),g=h[0],y=(h[1],h[2]),v=h[3];function b(e){var t=e.onChange,n=e.defaultIndex,r=e.index,o=e.allowMultiple,i=e.allowToggle,l=d(e,f);!function(e){var t=e.index||e.defaultIndex,n=!(0,a.o8)(t)&&!(0,a.kJ)(t)&&e.allowMultiple;(0,a.ZK)({condition:!!n,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof t+","})}(e),function(e){(0,a.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var c=y(),p=(0,s.useState)(-1),m=p[0],h=p[1];(0,u.zq)((function(){h(-1)}));var g=(0,u.Tx)({value:r,defaultValue:function(){return o?null!=n?n:[]:null!=n?n:-1},onChange:t}),v=g[0],b=g[1];return{index:v,setIndex:b,htmlProps:l,getAccordionItemProps:function(e){var t=!1;null!==e&&(t=(0,a.kJ)(v)?v.includes(e):v===e);return{isOpen:t,onChange:function(t){if(null!==e)if(o&&(0,a.kJ)(v)){var n=t?(0,a.jX)(v,e):(0,a.cl)(v,e);b(n)}else t?b(e):i&&b(-1)}}},focusedIndex:m,setFocusedIndex:h,descendants:c}}var x=(0,l.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),k=x[0],w=x[1];function E(e){var t=e.isDisabled,n=e.isFocusable,r=e.id,o=d(e,m),i=w(),c=i.getAccordionItemProps,f=i.setFocusedIndex,h=(0,s.useRef)(null),g=(0,u.ZS)(r,"accordion-button","accordion-panel"),y=g[0],b=g[1];!function(e){(0,a.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var x=v({disabled:t&&!n}),k=x.register,E=x.index,T=x.descendants,C=c(-1===E?null:E),S=C.isOpen,A=C.onChange;!function(e){(0,a.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:S,isDisabled:t});var O=(0,s.useCallback)((function(){null==A||A(!S),f(E)}),[E,f,S,A]),P=(0,s.useCallback)((function(e){var t={ArrowDown:function(){var e=T.nextEnabled(E);e&&(0,a.T_)(e.node)},ArrowUp:function(){var e=T.prevEnabled(E);e&&(0,a.T_)(e.node)},Home:function(){var e=T.firstEnabled();e&&(0,a.T_)(e.node)},End:function(){var e=T.lastEnabled();e&&(0,a.T_)(e.node)}}[(0,a.uh)(e)];t&&(e.preventDefault(),t(e))}),[T,E]),N=(0,s.useCallback)((function(){f(E)}),[f,E]),D=(0,s.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),p({},e,{type:"button",ref:(0,l.lq)(k,h,n),id:y,disabled:!!t,"aria-expanded":!!S,"aria-controls":b,onClick:(0,a.v0)(e.onClick,O),onFocus:(0,a.v0)(e.onFocus,N),onKeyDown:(0,a.v0)(e.onKeyDown,P)})}),[y,t,S,O,N,P,b,k]),M=(0,s.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),p({},e,{ref:t,role:"region",id:b,"aria-labelledby":y,hidden:!S})}),[y,S,b]);return{isOpen:S,isDisabled:t,isFocusable:n,onOpen:function(){null==A||A(!0)},onClose:function(){null==A||A(!1)},getButtonProps:D,getPanelProps:M,htmlProps:o}}var T=["children","reduceMotion"],C=["htmlProps","descendants"],S=["htmlProps"],A=(0,o.Gp)((function(e,t){var n=e.children,r=e.reduceMotion,i=d(e,T),l=(0,o.jC)("Accordion",i),c=b((0,o.Lr)(i)),u=c.htmlProps,f=c.descendants,m=d(c,C),h=s.useMemo((function(){return p({},m,{reduceMotion:!!r})}),[m,r]);return s.createElement(g,{value:f},s.createElement(k,{value:h},s.createElement(o.Fo,{value:l},s.createElement(o.m$.div,p({ref:t},u,{className:(0,a.cx)("chakra-accordion",i.className)}),n))))}));a.Ts&&(A.displayName="Accordion");var O=(0,l.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),P=O[0],N=O[1],D=(0,o.Gp)((function(e,t){var n=e.children,r=e.className,i=E(e),l=i.htmlProps,c=d(i,S),u=p({},(0,o.yK)().container,{overflowAnchor:"none"}),f=s.useMemo((function(){return c}),[c]);return s.createElement(P,{value:f},s.createElement(o.m$.div,p({ref:t},l,{className:(0,a.cx)("chakra-accordion__item",r),__css:u}),(0,a.Pu)(n,{isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled})))}));a.Ts&&(D.displayName="AccordionItem");var M=(0,o.Gp)((function(e,t){var n=(0,N().getButtonProps)(e,t),r=p({display:"flex",alignItems:"center",width:"100%",outline:0},(0,o.yK)().button);return s.createElement(o.m$.button,p({},n,{className:(0,a.cx)("chakra-accordion__button",e.className),__css:r}))}));a.Ts&&(M.displayName="AccordionButton");var I=(0,o.Gp)((function(e,t){var n=w().reduceMotion,r=N(),l=r.getPanelProps,c=r.isOpen,u=l(e,t),d=(0,a.cx)("chakra-accordion__panel",e.className),f=(0,o.yK)();n||delete u.hidden;var m=s.createElement(o.m$.div,p({},u,{__css:f.panel,className:d}));return n?m:s.createElement(i.UO,{in:c},m)}));a.Ts&&(I.displayName="AccordionPanel");var _=function(e){var t=N(),n=t.isOpen,i=t.isDisabled,l=w().reduceMotion,c=(0,a.cx)("chakra-accordion__icon",e.className),u=p({opacity:i?.4:1,transform:n?"rotate(-180deg)":void 0,transition:l?void 0:"transform 0.2s",transformOrigin:"center"},(0,o.yK)().icon);return s.createElement(r.JO,p({viewBox:"0 0 24 24","aria-hidden":!0,className:c,__css:u},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};a.Ts&&(_.displayName="AccordionIcon")},9960:function(e,t){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.Doctype=t.CDATA=t.Tag=t.Style=t.Script=t.Comment=t.Directive=t.Text=t.Root=t.isTag=t.ElementType=void 0,function(e){e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",e.Script="script",e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"}(n=t.ElementType||(t.ElementType={})),t.isTag=function(e){return e.type===n.Tag||e.type===n.Script||e.type===n.Style},t.Root=n.Root,t.Text=n.Text,t.Directive=n.Directive,t.Comment=n.Comment,t.Script=n.Script,t.Style=n.Style,t.Tag=n.Tag,t.CDATA=n.CDATA,t.Doctype=n.Doctype},7790:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.hasChildren=t.isDocument=t.isDirective=t.isComment=t.isText=t.isCDATA=t.isTag=t.Element=t.Document=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var i=n(9960),a=new Map([[i.ElementType.Tag,1],[i.ElementType.Script,1],[i.ElementType.Style,1],[i.ElementType.Directive,1],[i.ElementType.Text,3],[i.ElementType.CDATA,4],[i.ElementType.Comment,8],[i.ElementType.Root,9]]),l=function(){function e(e){this.type=e,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var e;return null!==(e=a.get(this.type))&&void 0!==e?e:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),k(this,e)},e}();t.Node=l;var s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.data=n,r}return r(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(l);t.DataNode=s;var c=function(e){function t(t){return e.call(this,i.ElementType.Text,t)||this}return r(t,e),t}(s);t.Text=c;var u=function(e){function t(t){return e.call(this,i.ElementType.Comment,t)||this}return r(t,e),t}(s);t.Comment=u;var p=function(e){function t(t,n){var r=e.call(this,i.ElementType.Directive,n)||this;return r.name=t,r}return r(t,e),t}(s);t.ProcessingInstruction=p;var d=function(e){function t(t,n){var r=e.call(this,t)||this;return r.children=n,r}return r(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(l);t.NodeWithChildren=d;var f=function(e){function t(t){return e.call(this,i.ElementType.Root,t)||this}return r(t,e),t}(d);t.Document=f;var m=function(e){function t(t,n,r,o){void 0===r&&(r=[]),void 0===o&&(o="script"===t?i.ElementType.Script:"style"===t?i.ElementType.Style:i.ElementType.Tag);var a=e.call(this,o,r)||this;return a.name=t,a.attribs=n,a}return r(t,e),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))},enumerable:!1,configurable:!0}),t}(d);function h(e){return(0,i.isTag)(e)}function g(e){return e.type===i.ElementType.CDATA}function y(e){return e.type===i.ElementType.Text}function v(e){return e.type===i.ElementType.Comment}function b(e){return e.type===i.ElementType.Directive}function x(e){return e.type===i.ElementType.Root}function k(e,t){var n;if(void 0===t&&(t=!1),y(e))n=new c(e.data);else if(v(e))n=new u(e.data);else if(h(e)){var r=t?w(e.children):[],a=new m(e.name,o({},e.attribs),r);r.forEach((function(e){return e.parent=a})),null!=e.namespace&&(a.namespace=e.namespace),e["x-attribsNamespace"]&&(a["x-attribsNamespace"]=o({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(a["x-attribsPrefix"]=o({},e["x-attribsPrefix"])),n=a}else if(g(e)){r=t?w(e.children):[];var l=new d(i.ElementType.CDATA,r);r.forEach((function(e){return e.parent=l})),n=l}else if(x(e)){r=t?w(e.children):[];var s=new f(r);r.forEach((function(e){return e.parent=s})),e["x-mode"]&&(s["x-mode"]=e["x-mode"]),n=s}else{if(!b(e))throw new Error("Not implemented yet: ".concat(e.type));var k=new p(e.name,e.data);null!=e["x-name"]&&(k["x-name"]=e["x-name"],k["x-publicId"]=e["x-publicId"],k["x-systemId"]=e["x-systemId"]),n=k}return n.startIndex=e.startIndex,n.endIndex=e.endIndex,null!=e.sourceCodeLocation&&(n.sourceCodeLocation=e.sourceCodeLocation),n}function w(e){for(var t=e.map((function(e){return k(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}t.Element=m,t.isTag=h,t.isCDATA=g,t.isText=y,t.isComment=v,t.isDirective=b,t.isDocument=x,t.hasChildren=function(e){return Object.prototype.hasOwnProperty.call(e,"children")},t.cloneNode=k},885:function(e){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},8276:function(e,t,n){var r="html",o="head",i="body",a=/<([a-zA-Z]+[0-9]?)/,l=/<head.*>/i,s=/<body.*>/i,c=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},u=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"===typeof window.DOMParser){var p=new window.DOMParser;c=u=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),p.parseFromString(e,"text/html")}}if(document.implementation){var d=n(1507).isIE,f=document.implementation.createHTMLDocument(d()?"html-dom-parser":void 0);c=function(e,t){return t?(f.documentElement.getElementsByTagName(t)[0].innerHTML=e,f):(f.documentElement.innerHTML=e,f)}}var m,h=document.createElement("template");h.content&&(m=function(e){return h.innerHTML=e,h.content.childNodes}),e.exports=function(e){var t,n,p,d,f=e.match(a);switch(f&&f[1]&&(t=f[1].toLowerCase()),t){case r:return n=u(e),l.test(e)||(p=n.getElementsByTagName(o)[0])&&p.parentNode.removeChild(p),s.test(e)||(p=n.getElementsByTagName(i)[0])&&p.parentNode.removeChild(p),n.getElementsByTagName(r);case o:case i:return d=c(e).getElementsByTagName(t),s.test(e)&&l.test(e)?d[0].parentNode.childNodes:d;default:return m?m(e):c(e,i).getElementsByTagName(i)[0].childNodes}}},4152:function(e,t,n){var r=n(8276),o=n(1507).formatDOM,i=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(""===e)return[];var t,n=e.match(i);return n&&n[1]&&(t=n[1]),o(r(e),null,t)}},1507:function(e,t,n){for(var r,o=n(885),i=n(7790),a=o.CASE_SENSITIVE_TAG_NAMES,l=i.Comment,s=i.Element,c=i.ProcessingInstruction,u=i.Text,p={},d=0,f=a.length;d<f;d++)r=a[d],p[r.toLowerCase()]=r;function m(e){for(var t,n={},r=0,o=e.length;r<o;r++)n[(t=e[r]).name]=t.value;return n}function h(e){var t=function(e){return p[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:m,formatDOM:function e(t,n,r){n=n||null;for(var o=[],i=0,a=t.length;i<a;i++){var p,d=t[i];switch(d.nodeType){case 1:(p=new s(h(d.nodeName),m(d.attributes))).children=e(d.childNodes,p);break;case 3:p=new u(d.nodeValue);break;case 8:p=new l(d.nodeValue);break;default:continue}var f=o[i-1]||null;f&&(f.next=p),p.parent=n,p.prev=f,p.next=null,o.push(p)}return r&&((p=new c(r.substring(0,r.indexOf(" ")).toLowerCase(),r)).next=o[0]||null,p.parent=n,o.unshift(p),o[1]&&(o[1].prev=o[0])),o},isIE:function(){return/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},488:function(e,t,n){var r=n(3670),o=n(484),i=n(4152);i="function"===typeof i.default?i.default:i;var a={lowerCaseAttributeNames:!1};function l(e,t){if("string"!==typeof e)throw new TypeError("First argument must be a string");return""===e?[]:r(i(e,(t=t||{}).htmlparser2||a),t)}l.domToReact=r,l.htmlToDOM=i,l.attributesToProps=o,l.Element=n(7790).Element,e.exports=l,e.exports.default=l},484:function(e,t,n){var r=n(5726),o=n(4606);function i(e){return r.possibleStandardNames[e]}e.exports=function(e){var t,n,a,l,s,c={},u=(e=e||{}).type&&{reset:!0,submit:!0}[e.type];for(t in e)if(a=e[t],r.isCustomAttribute(t))c[t]=a;else if(l=i(n=t.toLowerCase()))switch(s=r.getPropertyInfo(l),"checked"!==l&&"value"!==l||u||(l=i("default"+n)),c[l]=a,s&&s.type){case r.BOOLEAN:c[l]=!0;break;case r.OVERLOADED_BOOLEAN:""===a&&(c[l]=!0)}else o.PRESERVE_CUSTOM_ATTRIBUTES&&(c[t]=a);return o.setStyleProp(e.style,c),c}},3670:function(e,t,n){var r=n(7294),o=n(484),i=n(4606),a=i.setStyleProp,l=i.canTextBeChildOfNode;function s(e){return i.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&i.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,n){for(var i,c,u,p,d,f=(n=n||{}).library||r,m=f.cloneElement,h=f.createElement,g=f.isValidElement,y=[],v="function"===typeof n.replace,b=n.trim,x=0,k=t.length;x<k;x++)if(i=t[x],v&&g(u=n.replace(i)))k>1&&(u=m(u,{key:u.key||x})),y.push(u);else if("text"!==i.type){switch(p=i.attribs,s(i)?a(p.style,p):p&&(p=o(p)),d=null,i.type){case"script":case"style":i.children[0]&&(p.dangerouslySetInnerHTML={__html:i.children[0].data});break;case"tag":"textarea"===i.name&&i.children[0]?p.defaultValue=i.children[0].data:i.children&&i.children.length&&(d=e(i.children,n));break;default:continue}k>1&&(p.key=x),y.push(h(i.name,p,d))}else{if((c=!i.data.trim().length)&&i.parent&&!l(i.parent))continue;if(b&&c)continue;y.push(i.data)}return 1===y.length?y[0]:y}},4606:function(e,t,n){var r=n(7294),o=n(1476).default;var i={reactCompat:!0};var a=r.version.split(".")[0]>=16,l=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);e.exports={PRESERVE_CUSTOM_ATTRIBUTES:a,invertObject:function(e,t){if(!e||"object"!==typeof e)throw new TypeError("First argument must be an object");var n,r,o="function"===typeof t,i={},a={};for(n in e)r=e[n],o&&(i=t(n,r))&&2===i.length?a[i[0]]=i[1]:"string"===typeof r&&(a[r]=n);return a},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}},setStyleProp:function(e,t){if(null!==e&&void 0!==e)try{t.style=o(e,i)}catch(n){t.style={}}},canTextBeChildOfNode:function(e){return!l.has(e.name)},elementsWithNoTextChildren:l}},8139:function(e){var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,s=/^\s+|\s+$/g,c="";function u(e){return e?e.replace(s,c):c}e.exports=function(e,s){if("string"!==typeof e)throw new TypeError("First argument must be a string");if(!e)return[];s=s||{};var p=1,d=1;function f(e){var t=e.match(n);t&&(p+=t.length);var r=e.lastIndexOf("\n");d=~r?e.length-r:d+e.length}function m(){var e={line:p,column:d};return function(t){return t.position=new h(e),b(),t}}function h(e){this.start=e,this.end={line:p,column:d},this.source=s.source}h.prototype.content=e;var g=[];function y(t){var n=new Error(s.source+":"+p+":"+d+": "+t);if(n.reason=t,n.filename=s.source,n.line=p,n.column=d,n.source=e,!s.silent)throw n;g.push(n)}function v(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function b(){v(r)}function x(e){var t;for(e=e||[];t=k();)!1!==t&&e.push(t);return e}function k(){var t=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;c!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,c===e.charAt(n-1))return y("End of comment missing");var r=e.slice(2,n-2);return d+=2,f(r),e=e.slice(n),d+=2,t({type:"comment",comment:r})}}function w(){var e=m(),n=v(o);if(n){if(k(),!v(i))return y("property missing ':'");var r=v(a),s=e({type:"declaration",property:u(n[0].replace(t,c)),value:r?u(r[0].replace(t,c)):c});return v(l),s}}return b(),function(){var e,t=[];for(x(t);e=w();)!1!==e&&(t.push(e),x(t));return t}()}},5726:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(s){l=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0});function i(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var a={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach((function(e){a[e]=new i(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=r(e,2),n=t[0],o=t[1];a[n]=new i(n,1,!1,o,null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){a[e]=new i(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){a[e]=new i(e,2,!1,e,null,!1,!1)})),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach((function(e){a[e]=new i(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){a[e]=new i(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){a[e]=new i(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){a[e]=new i(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){a[e]=new i(e,5,!1,e.toLowerCase(),null,!1,!1)}));var l=/[\-\:]([a-z])/g,s=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach((function(e){var t=e.replace(l,s);a[t]=new i(t,1,!1,e,null,!1,!1)})),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach((function(e){var t=e.replace(l,s);a[t]=new i(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(l,s);a[t]=new i(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){a[e]=new i(e,1,!1,e.toLowerCase(),null,!1,!1)}));a.xlinkHref=new i("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){a[e]=new i(e,1,!1,e.toLowerCase(),null,!0,!0)}));var c=n(8229),u=c.CAMELCASE,p=c.SAME,d=c.possibleStandardNames,f=RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),m=Object.keys(d).reduce((function(e,t){var n=d[t];return n===p?e[t]=t:n===u?e[t.toLowerCase()]=t:e[t]=n,e}),{});t.BOOLEAN=3,t.BOOLEANISH_STRING=2,t.NUMERIC=5,t.OVERLOADED_BOOLEAN=4,t.POSITIVE_NUMERIC=6,t.RESERVED=0,t.STRING=1,t.getPropertyInfo=function(e){return a.hasOwnProperty(e)?a[e]:null},t.isCustomAttribute=f,t.possibleStandardNames=m},8229:function(e,t){t.SAME=0;t.CAMELCASE=1,t.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1}},1476:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var o=r(n(7848)),i=n(6678);t.default=function(e,t){var n={};return e&&"string"===typeof e?(o.default(e,(function(e,r){e&&r&&(n[i.camelCase(e,t)]=r)})),n):n}},6678:function(e,t){"use strict";t.__esModule=!0,t.camelCase=void 0;var n=/^--[a-zA-Z0-9-]+$/,r=/-([a-z])/g,o=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=function(e,t){return t.toUpperCase()},l=function(e,t){return t+"-"};t.camelCase=function(e,t){return void 0===t&&(t={}),function(e){return!e||o.test(e)||n.test(e)}(e)?e:(e=e.toLowerCase(),t.reactCompat||(e=e.replace(i,l)),e.replace(r,a))}},7848:function(e,t,n){var r=n(8139);e.exports=function(e,t){var n,o=null;if(!e||"string"!==typeof e)return o;for(var i,a,l=r(e),s="function"===typeof t,c=0,u=l.length;c<u;c++)i=(n=l[c]).property,a=n.value,s?t(i,a,n):a&&(o||(o={}),o[i]=a);return o}},5935:function(e,t,n){"use strict";var r=n(488);r.domToReact,r.htmlToDOM,r.attributesToProps,r.Element;t.ZP=r}}]);