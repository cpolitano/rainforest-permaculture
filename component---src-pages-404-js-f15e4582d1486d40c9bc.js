(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(156);a.default=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))))}},153:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(4),r=t.n(c),o=t(33),s=t.n(o);t.d(a,"a",function(){return s.a});t(154),l.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},154:function(e,a,t){var n;e.exports=(n=t(155))&&n.default||n},155:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),c=t(4),r=t.n(c),o=t(55),s=t(2),i=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=i},156:function(e,a,t){"use strict";var n=t(35),l=t.n(n),c=t(7),r=t.n(c),o=t(0),s=t.n(o),i=t(4),u=t.n(i),m=(t(157),t(153)),E=function(e){return s.a.createElement("header",{id:"header",className:"alt"},s.a.createElement(m.a,{to:"/",className:"logo"},s.a.createElement("strong",null,"Cocoterra")," ",s.a.createElement("span",null,"Rainforest Permaculture")),s.a.createElement("nav",null,s.a.createElement("a",{className:"menu-link",onClick:e.onToggleMenu,href:"javascript:;"},"Menu")))};E.propTypes={onToggleMenu:u.a.func};var d=E,g=function(e){return s.a.createElement("nav",{id:"menu"},s.a.createElement("div",{className:"inner"},s.a.createElement("ul",{className:"links"},s.a.createElement("li",null,s.a.createElement(m.a,{onClick:e.onToggleMenu,to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(m.a,{onClick:e.onToggleMenu,to:"/about"},"About")),s.a.createElement("li",null,s.a.createElement(m.a,{onClick:e.onToggleMenu,to:"/permaculture"},"Permaculture")),s.a.createElement("li",null,s.a.createElement(m.a,{onClick:e.onToggleMenu,to:"/donate"},"Donate")))),s.a.createElement("a",{className:"close",onClick:e.onToggleMenu,href:"javascript:;"},"Close"))};g.propTypes={onToggleMenu:u.a.func};var h=g,f=function(e){return s.a.createElement("section",{id:"contact"},s.a.createElement("div",{className:"inner"},s.a.createElement("section",null,s.a.createElement("section",null,s.a.createElement("div",{className:"contact-method"},s.a.createElement("span",{className:"icon alt fa-envelope"}),s.a.createElement("h3",null,"Email"),s.a.createElement("a",{href:"#"},"volunteer@rainforestpermaculture.org"))),s.a.createElement("section",null,s.a.createElement("div",{className:"contact-method"},s.a.createElement("span",{className:"icon alt fa-home"}),s.a.createElement("h3",null,"Address"),s.a.createElement("span",null,"Cocoterra, Los Planes",s.a.createElement("br",null),"Drake Bay, Osa",s.a.createElement("br",null),"Costa Rica"))))))},p=function(e){return s.a.createElement("footer",{id:"footer"},s.a.createElement("div",{className:"inner"},s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.facebook.com/oceanforestecolodge/",className:"icon alt fa-facebook"},s.a.createElement("span",{className:"label"},"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.instagram.com/ocean_forest_ecolodge/",className:"icon alt fa-instagram"},s.a.createElement("span",{className:"label"},"Instagram"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.youtube.com/channel/UChLj_xFXVDo1PURQB8rWaRg",className:"icon alt fa-youtube"},s.a.createElement("span",{className:"label"},"Youtube")))),s.a.createElement("ul",{className:"copyright"},s.a.createElement("li",null,"© Cocoterra Rainforest Permaculture"),s.a.createElement("li",null,"Website Created By: ",s.a.createElement("a",{href:"http://clarepolitano.com"},"Clare Politano")))))},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isMenuVisible:!1,loading:"is-loading"},t.handleToggleMenu=t.handleToggleMenu.bind(l()(t)),t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.handleToggleMenu=function(){this.setState({isMenuVisible:!this.state.isMenuVisible})},t.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isMenuVisible?"is-menu-visible":"")},s.a.createElement("div",{id:"wrapper"},s.a.createElement(d,{onToggleMenu:this.handleToggleMenu}),e,s.a.createElement(f,null),s.a.createElement(p,null)),s.a.createElement(h,{onToggleMenu:this.handleToggleMenu}))},a}(s.a.Component);a.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-f15e4582d1486d40c9bc.js.map