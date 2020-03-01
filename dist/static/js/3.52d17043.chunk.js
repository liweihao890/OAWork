(this["webpackJsonptomato-work"]=this["webpackJsonptomato-work"]||[]).push([[3],{787:function(e,t,n){"use strict";var r=n(0),o=n(2),a=n.n(o),c=n(50);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){return r.createElement(c.a,null,(function(t){var n,o=t.getPrefixCls,c=e.prefixCls,u=e.type,f=void 0===u?"horizontal":u,p=e.orientation,d=void 0===p?"center":p,h=e.className,b=e.children,y=e.dashed,m=s(e,["prefixCls","type","orientation","className","children","dashed"]),v=o("divider",c),O=d.length>0?"-".concat(d):d,k=a()(h,v,"".concat(v,"-").concat(f),(l(n={},"".concat(v,"-with-text").concat(O),b),l(n,"".concat(v,"-dashed"),!!y),n));return r.createElement("div",i({className:k},m,{role:"separator"}),b&&r.createElement("span",{className:"".concat(v,"-inner-text")},b))}))}},791:function(e,t,n){},792:function(e,t,n){e.exports=n(793)},793:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),c=n.n(a),i=n(9);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(2),y=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=f(t).call(this,e),n=!o||"object"!==typeof o&&"function"!==typeof o?d(r):o,h(d(d(n)),"handleClick",(function(e){var t=n.state.checked,r=n.props.onClick,o=!t;n.setChecked(o,e),r&&r(o,e)})),h(d(d(n)),"handleKeyDown",(function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)})),h(d(d(n)),"handleMouseUp",(function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)})),h(d(d(n)),"saveNode",(function(e){n.node=e}));var a=!1;return a="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:a},n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,a=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,o=n.onChange;r||("checked"in this.props||this.setState({checked:e}),o&&o(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,a=t.disabled,c=t.loadingIcon,i=t.checkedChildren,u=t.unCheckedChildren,f=s(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),p=this.state.checked,d=b((h(e={},n,!!n),h(e,r,!0),h(e,"".concat(r,"-checked"),p),h(e,"".concat(r,"-disabled"),a),e));return o.a.createElement("button",l({},f,{type:"button",role:"switch","aria-checked":p,disabled:a,className:d,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),c,o.a.createElement("span",{className:"".concat(r,"-inner")},p?i:u))}}])&&u(n.prototype,r),a&&u(n,a),t}(r.Component);y.propTypes={className:c.a.string,prefixCls:c.a.string,disabled:c.a.bool,checkedChildren:c.a.any,unCheckedChildren:c.a.any,onChange:c.a.func,onMouseUp:c.a.func,onClick:c.a.func,tabIndex:c.a.number,checked:c.a.bool,defaultChecked:c.a.bool,autoFocus:c.a.bool,loadingIcon:c.a.node},y.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(i.polyfill)(y),t.default=y},797:function(e,t,n){"use strict";n.r(t);var r=n(23),o=n(197),a=n(14),c=n(0),i=n.n(c),l=(n(791),n(787)),s=n(1),u=n(792),f=n.n(u),p=n(2),d=n.n(p),h=n(19),b=n(127),y=n(10),m=n(50),v=n(15);function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=C(this,j(t).call(this,e))).saveSwitch=function(e){n.rcSwitch=e},n.renderSwitch=function(e){var t,r=e.getPrefixCls,o=n.props,a=o.prefixCls,i=o.size,l=o.loading,s=o.className,u=void 0===s?"":s,p=o.disabled,m=r("switch",a),v=d()(u,(g(t={},"".concat(m,"-small"),"small"===i),g(t,"".concat(m,"-loading"),l),t)),O=l?c.createElement(y.a,{type:"loading",className:"".concat(m,"-loading-icon")}):null;return c.createElement(b.a,{insertExtraNode:!0},c.createElement(f.a,k({},Object(h.a)(n.props,["loading"]),{prefixCls:m,className:v,disabled:p||l,ref:n.saveSwitch,loadingIcon:O})))},Object(v.a)("checked"in e||!("value"in e),"Switch","`value` is not validate prop, do you mean `checked`?"),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return c.createElement(m.a,null,this.renderSwitch)}}])&&w(n.prototype,r),o&&w(n,o),t}(c.Component);E.__ANT_SWITCH=!0,E.propTypes={prefixCls:s.string,size:s.oneOf(["small","default","large"]),className:s.string};var P=n(13);t.default=function(){var e=Object(c.useState)({isMatterNotify:!0,isTaskNotify:!0}),t=Object(a.a)(e,2),n=t[0],s=t[1];function u(e,t){var a={0:"isTaskNotify",1:"isMatterNotify"};Object(P.J)(Object(o.a)({},a[e],t)).then((function(c){c.data.success&&s(Object(r.a)({},n,Object(o.a)({},a[e],t)))}))}return Object(c.useEffect)((function(){Object(P.x)().then((function(e){e.data.success&&s(e.data.data)}))}),[]),i.a.createElement("div",{className:"notification"},i.a.createElement(l.a,{orientation:"left"},"\u6d88\u606f\u901a\u77e5"),i.a.createElement("div",{className:"list"},i.a.createElement("div",{className:"left"},i.a.createElement("h4",{className:"title"},"\u5f85\u529e\u4efb\u52a1"),i.a.createElement("p",{className:"description"},"\u5f00\u901a\u540e\u5c06\u4ee5\u7ad9\u5185\u4fe1\u7684\u5f62\u5f0f\u901a\u77e5\u5e76\u4e14\u901a\u77e5\u5230\u90ae\u7bb1\uff0c \u5426\u5219\u53ea\u4f1a\u7ad9\u5185\u4fe1\u901a\u77e5")),i.a.createElement(E,{checked:n.isTaskNotify,onChange:u.bind(null,0)})),i.a.createElement("div",{className:"list"},i.a.createElement("div",{className:"left"},i.a.createElement("h4",{className:"title"},"\u63d0\u9192\u4e8b\u9879"),i.a.createElement("p",{className:"description"},"\u5f00\u901a\u540e\u5c06\u4ee5\u7ad9\u5185\u4fe1\u7684\u5f62\u5f0f\u901a\u77e5\u5e76\u4e14\u901a\u77e5\u5230\u90ae\u7bb1\uff0c \u5426\u5219\u53ea\u4f1a\u7ad9\u5185\u4fe1\u901a\u77e5")),i.a.createElement(E,{checked:n.isMatterNotify,onChange:u.bind(null,1)})))}}}]);
//# sourceMappingURL=3.52d17043.chunk.js.map