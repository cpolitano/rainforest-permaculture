(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(153);a.default=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},150:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(4),r=t.n(c),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(151),l.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},151:function(e,a,t){var n;e.exports=(n=t(152))&&n.default||n},152:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),c=t(4),r=t.n(c),s=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=m},153:function(e,a,t){"use strict";var n=t(35),l=t.n(n),c=t(7),r=t.n(c),s=t(0),i=t.n(s),m=t(4),o=t.n(m),u=(t(154),t(150)),E=function(e){return i.a.createElement("header",{id:"header",className:"alt"},i.a.createElement(u.a,{to:"/",className:"logo"},i.a.createElement("strong",null,"Cocal")," ",i.a.createElement("span",null,"Restoration Project")),i.a.createElement("nav",null,i.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))};E.propTypes={onToggleMenu:o.a.func};var d=E,f=function(e){return i.a.createElement("nav",{id:"menu"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"links"},i.a.createElement("li",null,i.a.createElement(u.a,{onClick:e.onToggleMenu,to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(u.a,{onClick:e.onToggleMenu,to:"/landing"},"Landing")),i.a.createElement("li",null,i.a.createElement(u.a,{onClick:e.onToggleMenu,to:"/generic"},"Generic")),i.a.createElement("li",null,i.a.createElement(u.a,{onClick:e.onToggleMenu,to:"/elements"},"Elements"))),i.a.createElement("ul",{className:"actions vertical"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"button special fit"},"Get Started")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"button fit"},"Log In")))),i.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};f.propTypes={onToggleMenu:o.a.func};var p=f,h=function(e){return i.a.createElement("section",{id:"contact"},i.a.createElement("div",{className:"inner"},i.a.createElement("section",null,i.a.createElement("form",{method:"post",action:"#"},i.a.createElement("div",{className:"field half first"},i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"field half"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"text",name:"email",id:"email"})),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{name:"message",id:"message",rows:"6"})),i.a.createElement("ul",{className:"actions"},i.a.createElement("li",null,i.a.createElement("input",{type:"submit",value:"Send Message",className:"special"})),i.a.createElement("li",null,i.a.createElement("input",{type:"reset",value:"Clear"}))))),i.a.createElement("section",{className:"split"},i.a.createElement("section",null,i.a.createElement("div",{className:"contact-method"},i.a.createElement("span",{className:"icon alt fa-envelope"}),i.a.createElement("h3",null,"Email"),i.a.createElement("a",{href:"#"},"information@untitled.tld"))),i.a.createElement("section",null,i.a.createElement("div",{className:"contact-method"},i.a.createElement("span",{className:"icon alt fa-home"}),i.a.createElement("h3",null,"Address"),i.a.createElement("span",null,"Cocal, Los Planes",i.a.createElement("br",null),"Drake Bay, Osa",i.a.createElement("br",null),"Costa Rica"))))))},g=function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"inner"},i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon alt fa-twitter"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon alt fa-facebook"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon alt fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon alt fa-github"},i.a.createElement("span",{className:"label"},"GitHub"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon alt fa-linkedin"},i.a.createElement("span",{className:"label"},"LinkedIn")))),i.a.createElement("ul",{className:"copyright"},i.a.createElement("li",null,"© Cocal Restoration Project"),i.a.createElement("li",null,"Created By: ",i.a.createElement("a",{href:"http://clarepolitano.com"},"Clare Politano")))))},N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(l()(t)),t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(d,{onToggleMenu:this.handleToggleMenu}),e,i.a.createElement(h,null),i.a.createElement(g,null)),i.a.createElement(p,{onToggleMenu:this.handleToggleMenu}))},a}(i.a.Component);a.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js-cfd392023ee167b3b018.js.map