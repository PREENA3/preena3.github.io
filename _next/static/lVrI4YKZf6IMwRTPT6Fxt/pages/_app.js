(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=a(n("q1tI")),o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=c,t.useAmp=function(){return c(i.default.useContext(o.AmpStateContext))}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"0iUn":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("8Kt/"),o=n.n(i),c=n("XXOK"),u=n.n(c),s=n("p0XB"),l=n.n(s),f=n("XVgq"),p=n.n(f),d=n("Z7t5"),v=n.n(d),h=n("d04V"),m=n.n(h),b=n("pbKT"),y=n.n(b);var g=n("yLu3"),x=n.n(g);function E(e){return function(e){if(l()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(x()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return m()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var w=n("0iUn"),k=n("sLSF"),O=n("AT/M"),j=n("MI3g"),S=n("a7VT"),_=n("Tit0"),C=n("vYYK"),N=n("nOHt"),T=n.n(N),P=n("wx14"),I=n("zLVn"),D=n("TSYQ"),A=n.n(D),L=(n("K9S6"),n("JCAc")),K=(n("QA0p"),a.a.createContext({}));K.Consumer,K.Provider;function R(e,t){var n=Object(r.useContext)(K);return e||n[t]||t}var M=a.a.createContext(null),q=a.a.createContext(null),V=n("Zeqi"),z=n("YGJp"),F=n("lcWJ"),U=a.a.createContext(null),X=a.a.createContext(),J=function(e,t){return null!=e?String(e):t||null},Y=X,Z=a.a.createContext(null),G=function(){},W=a.a.forwardRef((function(e,t){var n,i,o=e.as,c=void 0===o?"ul":o,u=e.onSelect,s=e.activeKey,l=e.role,f=e.onKeyDown,p=Object(I.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),d=Object(z.a)(),v=Object(r.useRef)(!1),h=Object(r.useContext)(Y),m=Object(r.useContext)(Z);m&&(l=l||"tablist",s=m.activeKey,n=m.getControlledId,i=m.getControllerId);var b=Object(r.useRef)(null),y=function(e){if(!b.current)return null;var t=Object(V.a)(b.current,"[data-rb-event-key]:not(.disabled)"),n=b.current.querySelector(".active"),r=t.indexOf(n);if(-1===r)return null;var a=r+e;return a>=t.length&&(a=0),a<0&&(a=t.length-1),t[a]},g=function(e,t){null!=e&&(u&&u(e,t),h&&h(e,t))};Object(r.useEffect)((function(){if(b.current&&v.current){var e=b.current.querySelector("[data-rb-event-key].active");e&&e.focus()}v.current=!1}));var x=Object(F.a)(t,b);return a.a.createElement(Y.Provider,{value:g},a.a.createElement(U.Provider,{value:{role:l,activeKey:J(s),getControlledId:n||G,getControllerId:i||G}},a.a.createElement(c,Object(P.a)({},p,{onKeyDown:function(e){var t;switch(f&&f(e),e.key){case"ArrowLeft":case"ArrowUp":t=y(-1);break;case"ArrowRight":case"ArrowDown":t=y(1);break;default:return}t&&(e.preventDefault(),g(t.dataset.rbEventKey,e),v.current=!0,d())},ref:x,role:l}))))})),B=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,o=e.as,c=void 0===o?"div":o,u=Object(I.a)(e,["bsPrefix","className","children","as"]);return n=R(n,"nav-item"),a.a.createElement(c,Object(P.a)({},u,{ref:t,className:A()(r,n)}),i)}));B.displayName="NavItem";var H=B;var Q=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function $(e){return!e||"#"===e.trim()}var ee=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,i=e.disabled,o=e.onKeyDown,c=Object(I.a)(e,["as","disabled","onKeyDown"]),u=function(e){var t=c.href,n=c.onClick;(i||$(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return $(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),i&&(c.tabIndex=-1,c["aria-disabled"]=!0),a.a.createElement(r,Object(P.a)({ref:t},c,{onClick:u,onKeyDown:Q((function(e){" "===e.key&&(e.preventDefault(),u(e))}),o)}))}));ee.displayName="SafeAnchor";var te=ee,ne=n("ZCiN"),re=a.a.forwardRef((function(e,t){var n=e.active,i=e.className,o=e.tabIndex,c=e.eventKey,u=e.onSelect,s=e.onClick,l=e.as,f=Object(I.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),p=J(c,f.href),d=Object(r.useContext)(Y),v=Object(r.useContext)(U),h=n;v&&(f.role||"tablist"!==v.role||(f.role="tab"),f["data-rb-event-key"]=p,f.id=v.getControllerId(p),f["aria-controls"]=v.getControlledId(p),h=null==n&&null!=p?v.activeKey===p:n),"tab"===f.role&&(f.tabIndex=h?o:-1,f["aria-selected"]=h);var m=Object(ne.a)((function(e){s&&s(e),null!=p&&(u&&u(p,e),d&&d(p,e))}));return a.a.createElement(l,Object(P.a)({},f,{ref:t,onClick:m,className:A()(i,h&&"active")}))}));re.defaultProps={disabled:!1};var ae=re,ie={disabled:!1,as:te},oe=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,i=e.className,o=e.href,c=e.eventKey,u=e.onSelect,s=e.as,l=Object(I.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=R(n,"nav-link"),a.a.createElement(ae,Object(P.a)({},l,{href:o,ref:t,eventKey:c,as:s,disabled:r,onSelect:u,className:A()(i,n,r&&"disabled")}))}));oe.displayName="NavLink",oe.defaultProps=ie;var ce=oe,ue=a.a.forwardRef((function(e,t){var n,i,o,c=Object(L.a)(e,{activeKey:"onSelect"}),u=c.as,s=void 0===u?"div":u,l=c.bsPrefix,f=c.variant,p=c.fill,d=c.justify,v=c.navbar,h=c.className,m=c.children,b=c.activeKey,y=Object(I.a)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);l=R(l,"nav");var g=Object(r.useContext)(M),x=Object(r.useContext)(q);return g?(i=g.bsPrefix,v=null==v||v):x&&(o=x.cardHeaderBsPrefix),a.a.createElement(W,Object(P.a)({as:s,ref:t,activeKey:b,className:A()(h,(n={},n[l]=!v,n[i+"-nav"]=v,n[o+"-"+f]=!!o,n[l+"-"+f]=!!f,n[l+"-fill"]=p,n[l+"-justified"]=d,n))},y),m)}));ue.displayName="Nav",ue.defaultProps={justify:!1,fill:!1},ue.Item=H,ue.Link=ce;var se=ue,le=/-(.)/g;var fe=function(e){return e[0].toUpperCase()+(t=e,t.replace(le,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var pe=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.as,o=Object(I.a)(e,["bsPrefix","className","as"]);n=R(n,"navbar-brand");var c=i||(o.href?"a":"span");return a.a.createElement(c,Object(P.a)({},o,{ref:t,className:A()(r,n)}))}));pe.displayName="NavbarBrand";var de=pe,ve=n("dI71"),he=n("7j6X"),me=n("SJxq"),be=n("GEtZ"),ye=me.a&&"ontransitionend"in window;function ge(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(be.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}var xe=function(e,t,n){return ye?(null==n&&(n=function(e){var t=Object(he.a)(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0),ge(e,n),Object(be.a)(e,"transitionend",t)):ge(e,0,0)},Ee=(n("17x9"),n("i8i4")),we=n.n(Ee),ke=!1,Oe=a.a.createContext(null),je="unmounted",Se="exited",_e="entering",Ce="entered",Ne=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a=Se,r.appearStatus=_e):a=Ce:a=t.unmountOnExit||t.mountOnEnter?je:Se,r.state={status:a},r.nextCallback=null,r}Object(ve.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===je?{status:Se}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==_e&&n!==Ce&&(t=_e):n!==_e&&n!==Ce||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=we.a.findDOMNode(this);t===_e?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===Se&&this.setState({status:je})},n.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:t,i=this.getTimeouts(),o=a?i.appear:i.enter;!t&&!r||ke?this.safeSetState({status:Ce},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,a),this.safeSetState({status:_e},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:Ce},(function(){n.props.onEntered(e,a)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!ke?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:Se},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:Se},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===je)return null;var t=this.props,n=t.children,r=Object(I.a)(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return a.a.createElement(Oe.Provider,{value:null},n(e,r));var i=a.a.Children.only(n);return a.a.createElement(Oe.Provider,{value:null},a.a.cloneElement(i,r))},t}(a.a.Component);function Te(){}Ne.contextType=Oe,Ne.propTypes={},Ne.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Te,onEntering:Te,onEntered:Te,onExit:Te,onExiting:Te,onExited:Te},Ne.UNMOUNTED=0,Ne.EXITED=1,Ne.ENTERING=2,Ne.ENTERED=3,Ne.EXITING=4;var Pe,Ie=Ne;var De={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var Ae=((Pe={})[Se]="collapse",Pe.exiting="collapsing",Pe[_e]="collapsing",Pe[Ce]="collapse show",Pe),Le={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=De[e];return n+parseInt(Object(he.a)(t,r[0]),10)+parseInt(Object(he.a)(t,r[1]),10)}},Ke=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(ve.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,r=t.onEntering,i=t.onEntered,o=t.onExit,c=t.onExiting,u=t.className,s=t.children,l=Object(I.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete l.dimension,delete l.getDimensionValue;var f=Q(this.handleEnter,n),p=Q(this.handleEntering,r),d=Q(this.handleEntered,i),v=Q(this.handleExit,o),h=Q(this.handleExiting,c);return a.a.createElement(Ie,Object(P.a)({addEndListener:xe},l,{"aria-expanded":l.role?l.in:null,onEnter:f,onEntering:p,onEntered:d,onExit:v,onExiting:h}),(function(t,n){return a.a.cloneElement(s,Object(P.a)({},n,{className:A()(u,s.props.className,Ae[t],"width"===e.getDimension()&&"width")}))}))},t}(a.a.Component);Ke.defaultProps=Le;var Re=Ke,Me=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,i=Object(I.a)(e,["children","bsPrefix"]);return r=R(r,"navbar-collapse"),a.a.createElement(M.Consumer,null,(function(e){return a.a.createElement(Re,Object(P.a)({in:!(!e||!e.expanded)},i),a.a.createElement("div",{ref:t,className:r},n))}))}));Me.displayName="NavbarCollapse";var qe=Me,Ve=a.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.children,c=e.label,u=e.as,s=void 0===u?"button":u,l=e.onClick,f=Object(I.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=R(n,"navbar-toggler");var p=Object(r.useContext)(M)||{},d=p.onToggle,v=p.expanded,h=Object(ne.a)((function(e){l&&l(e),d&&d()}));return"button"===s&&(f.type="button"),a.a.createElement(s,Object(P.a)({},f,{ref:t,onClick:h,"aria-label":c,className:A()(i,n,!v&&"collapsed")}),o||a.a.createElement("span",{className:n+"-icon"}))}));Ve.displayName="NavbarToggle",Ve.defaultProps={label:"Toggle navigation"};var ze=Ve,Fe=a.a.forwardRef((function(e,t){var n=Object(L.a)(e,{expanded:"onToggle"}),i=n.bsPrefix,o=n.expand,c=n.variant,u=n.bg,s=n.fixed,l=n.sticky,f=n.className,p=n.children,d=n.as,v=void 0===d?"nav":d,h=n.expanded,m=n.onToggle,b=n.onSelect,y=n.collapseOnSelect,g=Object(I.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);i=R(i,"navbar");var x=Object(r.useCallback)((function(){b&&b.apply(void 0,arguments),y&&h&&m(!1)}),[b,y,h,m]);void 0===g.role&&"nav"!==v&&(g.role="navigation");var E=i+"-expand";"string"===typeof o&&(E=E+"-"+o);var w=Object(r.useMemo)((function(){return{onToggle:function(){return m(!h)},bsPrefix:i,expanded:h}}),[i,h,m]);return a.a.createElement(M.Provider,{value:w},a.a.createElement(Y.Provider,{value:x},a.a.createElement(v,Object(P.a)({ref:t},g,{className:A()(f,i,o&&E,c&&i+"-"+c,u&&"bg-"+u,l&&"sticky-"+l,s&&"fixed-"+s)}),p)))}));Fe.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Fe.displayName="Navbar",Fe.Brand=de,Fe.Toggle=ze,Fe.Collapse=qe,Fe.Text=function(e,t){var n=void 0===t?{}:t,r=n.displayName,i=void 0===r?fe(e):r,o=n.Component,c=void 0===o?"div":o,u=n.defaultProps,s=a.a.forwardRef((function(t,n){var r=t.className,i=t.bsPrefix,o=t.as,u=void 0===o?c:o,s=Object(I.a)(t,["className","bsPrefix","as"]),l=R(i,e);return a.a.createElement(u,Object(P.a)({ref:n,className:A()(r,l)},s))}));return s.defaultProps=u,s.displayName=i,s}("navbar-text",{Component:"span"});var Ue=Fe,Xe=a.a.createElement;function Je(e){if("undefined"===typeof v.a||null==e[p.a]){if(l()(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return Ye(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return m()(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ye(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,i=!0,o=!1;return{s:function(){r=u()(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw a}}}}function Ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ze(){if("undefined"===typeof Reflect||!y.a)return!1;if(y.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(y()(Date,[],(function(){}))),!0}catch(e){return!1}}var Ge=function(e){Object(_.a)(r,e);var t,n=(t=r,function(){var e,n=Object(S.a)(t);if(Ze()){var r=Object(S.a)(this).constructor;e=y()(n,arguments,r)}else e=n.apply(this,arguments);return Object(j.a)(this,e)});function r(){var e;Object(w.a)(this,r);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return e=n.call.apply(n,[this].concat(a)),Object(C.a)(Object(O.a)(e),"state",{menuItems:[{key:"classic",path:"/",label:"Classic Solitaire",active:!1},{key:"spider",path:"/spider",label:"Spider Solitaire",active:!1},{key:"freecell",path:"/freecell",label:"Freecell Solitaire",active:!1},{key:"pyramid",path:"/pyramid",label:"Pyramid Solitaire",active:!1}]}),e}return Object(k.a)(r,[{key:"componentDidMount",value:function(e){var t,n=E(this.state.menuItems),r=Je(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.path===T.a.pathname&&(a.active=!0)}}catch(i){r.e(i)}finally{r.f()}this.setState({menuItems:n})}},{key:"render",value:function(){var e=this.state.menuItems.map((function(e){var t=e.key,n=e.path,r=e.label,a=e.active?" current":"";return Xe(se.Link,{key:t,href:n,className:"menu-item"+a},r)}));return Xe(Ue,{collapseOnSelect:!0,expand:"lg",variant:"dark",className:"align-items-stretch"},Xe(Ue.Brand,null,Xe("a",{href:"/"},Xe("img",{src:"/logo.png",className:"img-fluid logo",alt:"SOLITAIRE100 Logo"}))),Xe(Ue.Toggle,{"aria-controls":"responsive-navbar-nav"}),Xe(Ue.Collapse,{id:"responsive-navbar-nav",className:"justify-content-between align-items-stretch w-100"},Xe(se,{className:"menu-items navbar-nav mx-auto text-center align-items-center"},e),Xe(se,{className:"flex-row justify-content-center align-items-flex-start flex-nowrap"},Xe(se.Link,{rel:"noopener",href:"https://www.facebook.com/SOLITAIRE100official",target:"_blank"},Xe("img",{className:"social-icon img-fluid",src:"/social/facebook.png",alt:"Facebook Link"})),Xe(se.Link,{rel:"noopener",href:"https://twitter.com/SOLITAIRE100_",target:"_blank"},Xe("img",{className:"social-icon img-fluid",src:"/social/twitter.png",alt:"Twitter Link"})),Xe(se.Link,{rel:"noopener",href:"https://www.instagram.com/solitaire100_/",target:"_blank"},Xe("img",{className:"social-icon img-fluid",src:"/social/instagram.png",alt:"Instagram Link"})))))}}]),r}(r.Component),We=a.a.createElement;function Be(){if("undefined"===typeof Reflect||!y.a)return!1;if(y.a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(y()(Date,[],(function(){}))),!0}catch(e){return!1}}var He=function(e){Object(_.a)(r,e);var t,n=(t=r,function(){var e,n=Object(S.a)(t);if(Be()){var r=Object(S.a)(this).constructor;e=y()(n,arguments,r)}else e=n.apply(this,arguments);return Object(j.a)(this,e)});function r(){return Object(w.a)(this,r),n.apply(this,arguments)}return Object(k.a)(r,[{key:"render",value:function(){return We(Ue,{variant:"dark",className:"mt-auto"},We(se,{className:"navbar-nav text-center w-100 footer-menu justify-content-end"},We(se.Link,{href:"/about",className:"menu-item"},"About"),We(se.Link,{href:"/blog",className:"menu-item"},"Blog"),We(se.Link,{href:"/cookies",className:"menu-item"},"Cookies"),We(se.Link,{href:"/privacy",className:"menu-item"},"Privacy"),We(se.Link,{href:"/terms",className:"menu-item"},"Terms")))}}]),r}(r.Component),Qe=a.a.createElement,$e=function(e){var t=e.pageName,n=void 0===t?"default":t,r=e.children;return Qe("div",{className:"layout layout-".concat(n)},Qe("div",{className:"d-flex flex-column h-100"},Qe("main",{className:"flex-shrink-0"},Qe(Ge,null),r),Qe(He,null)))},et=(n("uVvT"),a.a.createElement);t.default=function(e){var t=e.Component,n=e.pageProps,r=n.title,i=n.description,c=n.keywords;return et(a.a.Fragment,null,et(o.a,null,et("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),et("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),et("meta",{name:"theme-color",content:"#000000"}),et("meta",{name:"robots",content:"index, follow"}),et("link",{rel:"icon",href:"/icons/favicon.ico"}),et("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"}),et("link",{rel:"preconnect",href:"https://adservice.google.mk"}),et("link",{rel:"preconnect",href:"https://adservice.google.com"}),et("link",{rel:"preconnect",href:"http://ajax.googleapis.com"}),et("link",{rel:"preconnect",href:"http://cookie-script.com"}),et("script",{"data-ad-client":"ca-pub-8160014187918469",async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}),et("script",{async:!0,crossOrigin:"anonymous",src:"//cookie-script.com/s/1585fc872fa92d28180e2a6e9ead9e0b.js"}),et("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/icons/apple-icon-57x57.png"}),et("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/icons/apple-icon-60x60.png"}),et("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/apple-icon-72x72.png"}),et("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/icons/apple-icon-76x76.png"}),et("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/icons/apple-icon-114x114.png"}),et("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/icons/apple-icon-120x120.png"}),et("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/apple-icon-144x144.png"}),et("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/icons/apple-icon-152x152.png"}),et("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/icons/apple-icon-180x180.png"}),et("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/icons/android-icon-192x192.png"}),et("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/icons/favicon-32x32.png"}),et("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/icons/favicon-96x96.png"}),et("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/icons/favicon-16x16.png"}),et("link",{rel:"manifest",href:"/manifest.json"}),et("meta",{name:"description",content:i}),et("meta",{name:"keywords",content:c}),et("title",null,r)),et($e,{pageName:t.name.toLowerCase()},et(t,n)))}},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!u.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),a=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var o=i(n("q1tI")),c=i(n("Xuae")),u=n("lwAK"),s=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,a={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var l=d[u];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=i.props[l],p=a[l]||new r;p.has(f)?o=!1:(p.add(f),a[l]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=c.default();function m(e){var t=e.children;return o.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=h.rewind,t.default=m},"8iia":function(e,t,n){var r=n("QMMT"),a=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return a(this)}}},"AT/M":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),a=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(s){}var c=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!i){var o=r.once,c=r.capture,u=n;!i&&o&&(u=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=u),e.addEventListener(t,u,a?r:c)}e.addEventListener(t,n,r)};var u=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){u(e,t,n,r)}}},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},JCAc:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var s,l=n,f=l[o(u)],p=l[u],d=Object(a.a)(l,[o(u),u].map(c)),v=t[u],h=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&o!==t&&c(t),[u?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(p,f,e[v]),m=h[0],b=h[1];return Object(r.a)({},d,((s={})[u]=m,s[v]=b,s))}),e)}n("dI71");function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function l(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}s.__suppressDeprecationWarning=!0,l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,n.d(t,"a",(function(){return u}))},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},MI3g:function(e,t,n){"use strict";var r=n("XVgq"),a=n.n(r),i=n("Z7t5"),o=n.n(i);function c(e){return(c="function"===typeof o.a&&"symbol"===typeof a.a?function(e){return typeof e}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":typeof e})(e)}function u(e){return(u="function"===typeof o.a&&"symbol"===c(a.a)?function(e){return c(e)}:function(e){return e&&"function"===typeof o.a&&e.constructor===o.a&&e!==o.a.prototype?"symbol":c(e)})(e)}var s=n("AT/M");function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?Object(s.a)(e):t}n.d(t,"a",(function(){return l}))},PQJW:function(e,t,n){var r=n("d04V"),a=n("yLu3");e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,i=n.defaultProps,o=n.allowFallback,c=void 0!==o&&o,u=n.displayName,s=void 0===u?e.name||e.displayName:u,l=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!c?a.default.forwardRef(l):function(e){return l(e,null)},{displayName:s,propTypes:r,defaultProps:i})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,a,i,o,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},TbGu:function(e,t,n){var r=n("fGSI"),a=n("PQJW"),i=n("2PDY");e.exports=function(e){return r(e)||a(e)||i()}},Tit0:function(e,t,n){"use strict";var r=n("SqZg"),a=n.n(r),i=n("TRZx"),o=n.n(i);function c(e,t){return(c=o.a||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=a()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}n.d(t,"a",(function(){return u}))},"V+O7":function(e,t,n){n("aPfg")("Set")},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,a=n("oVml"),i=n("XJU/"),o=n("2GTP"),c=n("EXMj"),u=n("oioR"),s=n("MPFp"),l=n("UO39"),f=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,v=n("n3ko"),h=p?"_s":"size",m=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,s){var l=e((function(e,r){c(e,l,t,"_i"),e._t=t,e._i=a(null),e._f=void 0,e._l=void 0,e[h]=0,void 0!=r&&u(r,n,e[s],e)}));return i(l.prototype,{clear:function(){for(var e=v(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=v(this,t),r=m(n,e);if(r){var a=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=a),a&&(a.p=i),n._f==r&&(n._f=a),n._l==r&&(n._l=i),n[h]--}return!!r},forEach:function(e){v(this,t);for(var n,r=o(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(v(this,t),e)}}),p&&r(l.prototype,"size",{get:function(){return v(this,t)[h]}}),l},def:function(e,t,n){var r,a,i=m(e,t);return i?i.v=n:(e._l=i={i:a=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[h]++,"F"!==a&&(e._i[a]=i)),e},getEntry:m,setStrong:function(e,t,n){s(e,t,(function(e,n){this._t=v(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(t)}}},Xuae:function(e,t,n){"use strict";var r=n("pbKT"),a=n("/HRN"),i=n("K47E"),o=n("WaGi"),c=n("ZDA2"),u=n("/+P4"),s=n("N9n2"),l=n("TbGu"),f=n("ttDY");function p(){if("undefined"===typeof Reflect||!r)return!1;if(r.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(r(Date,[],(function(){}))),!0}catch(e){return!1}}n("hfKm")(t,"__esModule",{value:!0});var d=n("q1tI"),v=!1;t.default=function(){var e,t=new f;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){s(h,l);var f,d=(f=h,function(){var e,t=u(f);if(p()){var n=u(this).constructor;e=r(t,arguments,n)}else e=t.apply(this,arguments);return c(this,e)});function h(e){var r;return a(this,h),r=d.call(this,e),v&&(t.add(i(r)),n(i(r))),r}return o(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(d.Component)}},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,n){"use strict";var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n.d(t,"a",(function(){return i}))},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},a7VT:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("Bhuq"),a=n.n(r),i=n("TRZx"),o=n.n(i);function c(e){return(c=o.a?a.a:function(e){return e.__proto__||a()(e)})(e)}},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=a(n("q1tI"));t.AmpStateContext=i.createContext({})},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",u=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+u+"` was not specified in `"+c+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,u].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},sLSF:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("hfKm"),a=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),a()(e,r.key,r)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},ttDY:function(e,t,n){e.exports=n("+iuc")},vYYK:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("hfKm"),a=n.n(r);function i(e,t,n){return t in e?a()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},xvv9:function(e,t,n){n("cHUd")("Set")},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[[0,0,1,27,29,26]]]);