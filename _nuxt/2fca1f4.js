(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6,7],{346:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n={APPLICATION:"APPLICATION",FOLDER:"FOLDER",LINK:"LINK"}},348:function(t,e,o){"use strict";e.a={BLOB:"BLOB",ABOUT:"ABOUT",IMAGE:"IMAGE",SHUTDOWN:"SHUTDOWN",MACPLUS:"MACPLUS",FOLDER:"FOLDER",TETRIS:"TETRIS"}},354:function(t,e,o){var content=o(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("9c33ac38",content,!0,{sourceMap:!1})},355:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},356:function(t,e,o){"use strict";var n=o(20);o(50);function r(t){if("function"!=typeof t.getRootNode){for(;t.parentNode;)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}function c(){return!0}function l(t,e,o){if(!t||!1===f(t,o))return!1;var c=r(e);if("undefined"!=typeof ShadowRoot&&c instanceof ShadowRoot&&c.host===t.target)return!1;var l=("object"===Object(n.a)(o.value)&&o.value.include||function(){return[]})();return l.push(e),!l.some((function(e){return e.contains(t.target)}))}function f(t,e){return("object"===Object(n.a)(e.value)&&e.value.closeConditional||c)(t)}function m(t,e){var o=r(t);e(document),"undefined"!=typeof ShadowRoot&&o instanceof ShadowRoot&&e(o)}var d={inserted:function(t,e,o){var n=function(o){return function(t,e,o,n){var r="function"==typeof o.value?o.value:o.value.handler;e._clickOutside.lastMousedownWasOutside&&l(t,e,o)&&setTimeout((function(){f(t,o)&&r&&r(t)}),0)}(o,t,e)},r=function(o){t._clickOutside.lastMousedownWasOutside=l(o,t,e)};m(t,(function(t){t.addEventListener("click",n,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[o.context._uid]={onClick:n,onMousedown:r}},unbind:function(t,e,o){t._clickOutside&&(m(t,(function(e){var n;if(e&&null!=(n=t._clickOutside)&&n[o.context._uid]){var r=t._clickOutside[o.context._uid],c=r.onClick,l=r.onMousedown;e.removeEventListener("click",c,!0),e.removeEventListener("mousedown",l,!0)}})),delete t._clickOutside[o.context._uid])}};e.a=d},357:function(t,e,o){"use strict";o.r(e);o(50);var n=o(70),r=o.n(n),c={name:"DesktopIcon",props:{icon:{type:String,required:!1,default:void 0},label:{type:String,required:!0}},data:function(){return{isFocused:!1,isReadyForDoubleClick:!1,doubleClickTimeout:void 0}},computed:{className:function(){return r()("desktop-icon",{"desktop-icon--focused":this.isFocused})}},beforeDestroy:function(){clearTimeout(this.doubleClickTimeout)},methods:{handleClick:function(){var t=this;this.isFocused=!0,this.isReadyForDoubleClick?(this.isReadyForDoubleClick=!1,this.isFocused=!1,this.$emit("open")):(this.isReadyForDoubleClick=!0,this.doubleClickTimeout=setTimeout((function(){t.isReadyForDoubleClick&&(t.isReadyForDoubleClick=!1)}),500))},handleClickMobile:function(){var t=this;this.isFocused=!0,this.$emit("open"),this.doubleClickTimeout=setTimeout((function(){t.isFocused=!1}),500)},handleClickOutside:function(){this.isFocused&&(this.isFocused=!1)}}},l=(o(362),o(12)),f=o(355),m=o.n(f),d=o(356),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$vuetify.breakpoint.smAndDown?o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.handleClickOutside,expression:"handleClickOutside"}],class:t.className,on:{click:t.handleClickMobile}},[o("div",{staticClass:"desktop-icon__icon"},[o("img",{attrs:{src:t.icon}})]),t._v(" "),o("span",{staticClass:"desktop-icon__name"},[t._v(t._s(t.label))])]):o("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.handleClickOutside,expression:"handleClickOutside"}],class:t.className,on:{click:t.handleClick}},[o("div",{staticClass:"desktop-icon__icon"},[o("img",{attrs:{src:t.icon}})]),t._v(" "),o("span",{staticClass:"desktop-icon__name"},[t._v(t._s(t.label))])])}),[],!1,null,null,null);e.default=component.exports;m()(component,{ClickOutside:d.a})},359:function(t,e,o){var content=o(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("0580bb16",content,!0,{sourceMap:!1})},361:function(t,e,o){t.exports=o.p+"img/santiago.4b9ab4f.png"},362:function(t,e,o){"use strict";o(354)},363:function(t,e,o){var n=o(28),r=o(59),c=o(60),l=o(61),f=n(!1),m=r(c),d=r(l);f.push([t.i,"@-webkit-keyframes flicker{0%{opacity:.1612434025}5%{opacity:.6160813162}10%{opacity:.9801444874}15%{opacity:.3584531061}20%{opacity:.5784422224}25%{opacity:.5906110447}30%{opacity:.0605728381}35%{opacity:.1490146608}40%{opacity:.251082049}45%{opacity:.1831240415}50%{opacity:.542635812}55%{opacity:.1239027573}60%{opacity:.3737515378}65%{opacity:.0310391075}70%{opacity:.2874159731}75%{opacity:.7187368076}80%{opacity:.3367394054}85%{opacity:.0078685394}90%{opacity:.5466677884}95%{opacity:.774295952}to{opacity:.0041025386}}@keyframes flicker{0%{opacity:.1612434025}5%{opacity:.6160813162}10%{opacity:.9801444874}15%{opacity:.3584531061}20%{opacity:.5784422224}25%{opacity:.5906110447}30%{opacity:.0605728381}35%{opacity:.1490146608}40%{opacity:.251082049}45%{opacity:.1831240415}50%{opacity:.542635812}55%{opacity:.1239027573}60%{opacity:.3737515378}65%{opacity:.0310391075}70%{opacity:.2874159731}75%{opacity:.7187368076}80%{opacity:.3367394054}85%{opacity:.0078685394}90%{opacity:.5466677884}95%{opacity:.774295952}to{opacity:.0041025386}}@-webkit-keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@-webkit-keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@-webkit-keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}@keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}body{position:fixed;cursor:url("+m+"),auto;background:#000!important}body,html{height:100dvh;width:100dvw;margin:0;padding:0;overflow:hidden}.desktop-icon,a:hover,button:hover{cursor:url("+d+') 10 10,auto}.desktop-icon{width:100%;max-width:64px;display:flex;flex-direction:column;align-items:center;text-align:center}.desktop-icon__name{color:#fafafa;font-family:"Reactor7",sans-serif;padding:2px;font-size:18px;line-height:12px;text-shadow:-1px 0 #000,0 1px #000,1px 0 #000,0 -1px #000,1px 2px 2px #000}.desktop-icon__icon,.desktop-icon__name{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.desktop-icon__icon{min-height:32px;min-width:32px;max-height:32px;max-width:32px}.desktop-icon__icon img{height:32px;width:32px;-o-object-fit:contain;object-fit:contain}.desktop-icon__icon,.desktop-icon__name{border:1px dashed transparent}.desktop-icon--focused .desktop-icon__icon,.desktop-icon--focused .desktop-icon__name{background:rgba(102,200,168,.5);border-color:#68cdae}',""]),t.exports=f},364:function(t,e,o){"use strict";o(14),o(13),o(18),o(25),o(17),o(26);var n=o(3),r=(o(27),o(41)),c=o(346);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={methods:f(f({},Object(r.b)({registerWindow:"windowManager/registerWindow"})),{},{handleOpenApplication:function(t){var e=f(f({},this),t);switch(e.type){case c.a.LINK:window.open(e.href,"_blank");break;case c.a.FOLDER:this.$emit("openFolder",e.name);break;case c.a.IMAGE:case c.a.APPLICATION:this.registerWindow({name:e.name,label:e.label,component:e.component,icon:e.icon||e.url,url:e.url,metadata:e.metadata,maximizable:e.maximizable,minimizable:e.minimizable,modal:e.modal})}}})}},368:function(t,e,o){var content=o(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("34d4a546",content,!0,{sourceMap:!1})},369:function(t,e,o){t.exports=o.p+"img/clippy.b2eebe9.gif"},370:function(t,e,o){"use strict";o(359)},371:function(t,e,o){var n=o(28),r=o(59),c=o(60),l=o(61),f=n(!1),m=r(c),d=r(l);f.push([t.i,"@-webkit-keyframes flicker{0%{opacity:.7192562759}5%{opacity:.8112003352}10%{opacity:.7014921321}15%{opacity:.0140245327}20%{opacity:.6159981875}25%{opacity:.0468063987}30%{opacity:.1264318681}35%{opacity:.1260691761}40%{opacity:.7240664693}45%{opacity:.5492650742}50%{opacity:.1076349125}55%{opacity:.6928690314}60%{opacity:.4346726123}65%{opacity:.1458917924}70%{opacity:.0087492543}75%{opacity:.4744959988}80%{opacity:.7063599482}85%{opacity:.3348855774}90%{opacity:.390915348}95%{opacity:.0761475007}to{opacity:.0472249096}}@keyframes flicker{0%{opacity:.7192562759}5%{opacity:.8112003352}10%{opacity:.7014921321}15%{opacity:.0140245327}20%{opacity:.6159981875}25%{opacity:.0468063987}30%{opacity:.1264318681}35%{opacity:.1260691761}40%{opacity:.7240664693}45%{opacity:.5492650742}50%{opacity:.1076349125}55%{opacity:.6928690314}60%{opacity:.4346726123}65%{opacity:.1458917924}70%{opacity:.0087492543}75%{opacity:.4744959988}80%{opacity:.7063599482}85%{opacity:.3348855774}90%{opacity:.390915348}95%{opacity:.0761475007}to{opacity:.0472249096}}@-webkit-keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@-webkit-keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@-webkit-keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}@keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}body{position:fixed;cursor:url("+m+"),auto;background:#000!important}body,html{height:100dvh;width:100dvw;margin:0;padding:0;overflow:hidden}a:hover,button:hover{cursor:url("+d+") 10 10,auto}.clippy{pointer-events:none;display:block;position:absolute;right:0;bottom:0;width:100px}",""]),t.exports=f},384:function(t,e,o){t.exports=o.p+"img/folder_generic.08eaef5.png"},386:function(t,e,o){"use strict";o.r(e);var n=o(369),r=o.n(n),c={name:"Clippy",data:function(){return{Clippy:r.a}}},l=(o(370),o(12)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"clippy",attrs:{src:t.Clippy}})}),[],!1,null,null,null);e.default=component.exports},388:function(t,e,o){t.exports=o.p+"img/mail.470321a.png"},389:function(t,e,o){t.exports=o.p+"img/instagram.ad8529d.png"},390:function(t,e,o){t.exports=o.p+"img/linkedin.0899987.png"},391:function(t,e,o){t.exports=o.p+"img/github.4c652e6.png"},392:function(t,e,o){t.exports=o.p+"img/leetcode.cc7f1b0.png"},393:function(t,e,o){t.exports=o.p+"img/lastfm.7c9b2e6.png"},394:function(t,e,o){t.exports=o.p+"img/discogs.5ad8d3c.png"},395:function(t,e,o){t.exports=o.p+"img/macplus.04ddfc0.png"},396:function(t,e,o){t.exports=o.p+"img/shutdown.e121b48.png"},397:function(t,e,o){t.exports=o.p+"img/tetris.2b7d2b5.png"},398:function(t,e,o){"use strict";o(368)},399:function(t,e,o){var n=o(28),r=o(59),c=o(60),l=o(61),f=n(!1),m=r(c),d=r(l);f.push([t.i,"@-webkit-keyframes flicker{0%{opacity:.3608967596}5%{opacity:.3232202236}10%{opacity:.0139942979}15%{opacity:.6059160484}20%{opacity:.604746623}25%{opacity:.6033208706}30%{opacity:.614861087}35%{opacity:.3895672802}40%{opacity:.1639071417}45%{opacity:.7300331542}50%{opacity:.5038344199}55%{opacity:.9018572152}60%{opacity:.2436867352}65%{opacity:.667469358}70%{opacity:.4057745017}75%{opacity:.8442414161}80%{opacity:.8215973488}85%{opacity:.3174145365}90%{opacity:.0317477853}95%{opacity:.9922286249}to{opacity:.1502855515}}@keyframes flicker{0%{opacity:.3608967596}5%{opacity:.3232202236}10%{opacity:.0139942979}15%{opacity:.6059160484}20%{opacity:.604746623}25%{opacity:.6033208706}30%{opacity:.614861087}35%{opacity:.3895672802}40%{opacity:.1639071417}45%{opacity:.7300331542}50%{opacity:.5038344199}55%{opacity:.9018572152}60%{opacity:.2436867352}65%{opacity:.667469358}70%{opacity:.4057745017}75%{opacity:.8442414161}80%{opacity:.8215973488}85%{opacity:.3174145365}90%{opacity:.0317477853}95%{opacity:.9922286249}to{opacity:.1502855515}}@-webkit-keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@-webkit-keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@-webkit-keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}@keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}body{position:fixed;cursor:url("+m+"),auto;background:#000!important}body,html{height:100dvh;width:100dvw;margin:0;padding:0;overflow:hidden}a:hover,button:hover{cursor:url("+d+") 10 10,auto}.desktop-manager{position:relative;min-height:calc(100dvh - 32px);max-height:calc(100dvh - 32px);width:100%;padding:8px;display:flex;flex-flow:column wrap;align-content:flex-start;-moz-columns:64px;columns:64px}.desktop-manager>*{flex:0 0 64px;margin:4px}.desktop-manager-mobile{min-height:calc(100dvh - 42px);max-height:calc(100dvh - 42px)}",""]),t.exports=f},429:function(t,e,o){"use strict";o.r(e);var n=o(70),r=o.n(n),c=o(357),l=o(361),f=o.n(l),m=o(346),d=o(348),y={name:"Hello!",label:"About me",component:d.a.ABOUT,icon:f.a,type:m.a.APPLICATION,minimizable:!1,maximizable:!1},h=o(388),k={name:"Mail",label:"Mail me!",icon:o.n(h).a,type:m.a.LINK,href:"mailto:santiago.gustavo.mail@gmail.com"},v=o(389),w={name:"Instagram",icon:o.n(v).a,type:m.a.LINK,href:"https://www.instagram.com/santiagogustavoo/"},x=o(390),O={name:"LinkedIn",icon:o.n(x).a,type:m.a.LINK,href:"https://www.linkedin.com/in/santiago-gustavo/"},_=o(391),C={name:"GitHub",icon:o.n(_).a,type:m.a.LINK,href:"https://github.com/santiagogustavo"},I=o(392),Z={name:"LeetCode",icon:o.n(I).a,type:m.a.LINK,href:"https://leetcode.com/santiagogustavo/"},L=o(393),N={name:"last.fm",icon:o.n(L).a,type:m.a.LINK,href:"https://www.last.fm/user/santiago-re"},D=o(394),T={name:"Discogs",icon:o.n(D).a,type:m.a.LINK,href:"https://www.discogs.com/user/santiagogustavo"},A=o(395),z=o.n(A),P={name:"MacPlus",label:"macintosh plus",component:d.a.MACPLUS,icon:z.a,type:m.a.APPLICATION,minimizable:!0,maximizable:!1},F=o(396),M=o.n(F),Y={name:"Turn off computer",component:d.a.SHUTDOWN,icon:M.a,type:m.a.APPLICATION,minimizable:!1,maximizable:!1,modal:!0},R=o(384),j=o.n(R),E={name:"Folder",component:d.a.FOLDER,icon:j.a,type:m.a.APPLICATION,minimizable:!0,maximizable:!0},S=o(397),K=o.n(S),U=[y,k,w,O,C,Z,N,T,P,{name:"Tetris",label:"Tetris",component:d.a.TETRIS,icon:K.a,type:m.a.APPLICATION,minimizable:!0,maximizable:!1},E,Y],W=o(364),$={name:"DesktopManager",components:{DesktopIcon:c.default},mixins:[W.a],data:function(){return{DesktopFiles:U}},computed:{className:function(){return r()("desktop-manager",{"desktop-manager-mobile":this.$vuetify.breakpoint.smAndDown})}}},B=(o(398),o(12)),component=Object(B.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.className},[t._l(t.DesktopFiles,(function(e){return o("DesktopIcon",t._b({key:e.name,attrs:{label:e.label||e.name},on:{open:function(o){return t.handleOpenApplication(e)}}},"DesktopIcon",e,!1))})),t._v(" "),o("Clippy")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DesktopIcon:o(357).default,Clippy:o(386).default})}}]);