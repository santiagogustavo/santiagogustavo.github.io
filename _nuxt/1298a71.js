(window.webpackJsonp=window.webpackJsonp||[]).push([[17,18],{350:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("6b715e77",content,!0,{sourceMap:!1})},351:function(t,e,n){var o=n(28)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},367:function(t,e,n){"use strict";n(14),n(13),n(18),n(25),n(17),n(26);var o,r=n(3),c=(n(347),n(71),n(79),n(155),n(98),n(236),n(47),n(350),n(352)),l=n(349),d=n(353),h=n(157),m=n(7),f=n(0),w=n(156);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var y=Object(w.a)(c.a,l.a,d.a,h.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(m.l)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(m.i)(t).find((function(e){return t[e]}));return e&&o[e]||Object(m.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:A({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=A(A({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=A(A({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=f.a.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,o?[o]:n)}})},381:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4135ecd1",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n.r(e);var o={name:"Watcher",mounted:function(){this.$emit("created")}},r=n(12),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("span")}),[],!1,null,null,null);e.default=component.exports},421:function(t,e,n){"use strict";n(381)},422:function(t,e,n){var o=n(28),r=n(59),c=n(60),l=n(61),d=n(423),h=n(424),m=o(!1),f=r(c),w=r(l),v=r(d),A=r(h);m.push([t.i,"@-webkit-keyframes flicker{0%{opacity:.2350879783}5%{opacity:.921895397}10%{opacity:.0039123673}15%{opacity:.6205947785}20%{opacity:.3027351372}25%{opacity:.8361581777}30%{opacity:.8904562278}35%{opacity:.4095126164}40%{opacity:.4331614557}45%{opacity:.7895173687}50%{opacity:.7055454103}55%{opacity:.1885571362}60%{opacity:.5786891119}65%{opacity:.2956032092}70%{opacity:.9531330796}75%{opacity:.8789871736}80%{opacity:.0789090086}85%{opacity:.2292089674}90%{opacity:.8719440229}95%{opacity:.9425187495}to{opacity:.3199098821}}@keyframes flicker{0%{opacity:.2350879783}5%{opacity:.921895397}10%{opacity:.0039123673}15%{opacity:.6205947785}20%{opacity:.3027351372}25%{opacity:.8361581777}30%{opacity:.8904562278}35%{opacity:.4095126164}40%{opacity:.4331614557}45%{opacity:.7895173687}50%{opacity:.7055454103}55%{opacity:.1885571362}60%{opacity:.5786891119}65%{opacity:.2956032092}70%{opacity:.9531330796}75%{opacity:.8789871736}80%{opacity:.0789090086}85%{opacity:.2292089674}90%{opacity:.8719440229}95%{opacity:.9425187495}to{opacity:.3199098821}}@-webkit-keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@keyframes turn-on{0%{transform:scaleY(.8) translateZ(0);filter:brightness(30);opacity:1}3.5%{transform:scaleY(.8) translate3d(0,100%,0)}3.6%{transform:scaleY(.8) translate3d(0,-100%,0);opacity:1}9%{transform:scale(1.3,.6) translate3d(0,100%,0);filter:brightness(30);opacity:0}11%{transform:scale(1) translateZ(0);filter:contrast(0) brightness(0);opacity:0}to{transform:scale(1) translateZ(0);filter:contrast(1) brightness(1.2) saturate(1.3);opacity:1}}@-webkit-keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@keyframes turn-off{0%{transform:scaleY(1.3) translateZ(0);filter:brightness(1);opacity:1}60%{transform:scale(1.3,.001) translateZ(0);filter:brightness(10)}to{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:scale(0,.0001) translateZ(0);filter:brightness(50)}}@-webkit-keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}@keyframes show-up{0%{transform:scale(.85)}to{transform:scale(1)}}body{position:fixed;cursor:url("+f+"),auto;background:#000!important}body,html{height:100dvh;width:100dvw;margin:0;padding:0;overflow:hidden}a:hover,button:hover{cursor:url("+w+") 10 10,auto}@-webkit-keyframes open{0%{transform:scale(.95);transform-origin:center;opacity:0}to{transform:scale(1);transform-origin:center;opacity:1;filter:brightness(1)}}@keyframes open{0%{transform:scale(.95);transform-origin:center;opacity:0}to{transform:scale(1);transform-origin:center;opacity:1;filter:brightness(1)}}@-webkit-keyframes open-modal{0%{transform:scale(.95) translateY(-50%);transform-origin:center;opacity:0}to{transform:scale(1) translateY(-50%);transform-origin:center;opacity:1;filter:brightness(1)}}@keyframes open-modal{0%{transform:scale(.95) translateY(-50%);transform-origin:center;opacity:0}to{transform:scale(1) translateY(-50%);transform-origin:center;opacity:1;filter:brightness(1)}}.window{border:4px solid #000;top:var(--position-y);left:var(--position-x);box-shadow:10px 10px 0 0 rgba(0,0,0,.5);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-animation:open .25s cubic-bezier(.25,1,.5,1);animation:open .25s cubic-bezier(.25,1,.5,1);display:flex;flex-direction:column}.window,.window--mobile{position:absolute;background:url("+v+');color:#000;min-height:var(--min-height);min-width:var(--min-width);max-width:100%;max-height:100%;overflow:hidden;z-index:2}.window--inactive{filter:brightness(.85);z-index:1}.window--minimized{pointer-events:none;transform:scale(.75) translate(-16px,16px);transform-origin:bottom left;opacity:0}.window--maximized,.window--minimized{transition:all .5s cubic-bezier(.25,1,.5,1)}.window--maximized{top:0;left:0;min-height:calc(100dvh - 32px);min-width:100%}.window--restored{transition:all .5s cubic-bezier(.25,1,.5,1)}.window--closed{pointer-events:none;transform:scale(.95);transform-origin:center;opacity:0;transition:all .25s cubic-bezier(.25,1,.5,1)}.window__header{display:flex;background-color:#4c98ff;color:#fafafa;border-bottom:4px solid #000;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.window__header__icon{height:14px;width:14px;-o-object-fit:cover;object-fit:cover;margin-right:2px}.window__header__name{width:100%;height:auto;padding:8px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Reactor7",sans-serif;font-size:22px;line-height:12px}.window__header__name:hover{cursor:url('+A+") 10 10,auto}.window__header__buttons{display:flex;border-left:4px solid #a7d7ff}.window__header__buttons button{border-radius:0;color:#fafafa!important}.window--maximized .window__header__name:hover{cursor:url("+f+'),auto}.window--mobile{top:0;left:0;width:100%;min-height:calc(100dvh - 42px);max-height:calc(100dvh - 42px);overflow-y:auto;-webkit-animation:open .5s cubic-bezier(.25,1,.5,1);animation:open .5s cubic-bezier(.25,1,.5,1);transition:z-index .5s cubic-bezier(0,1,1,0),transform .5s cubic-bezier(.25,1,.5,1),opacity .5s cubic-bezier(.25,1,.5,1)}.window--mobile__header{position:sticky;top:0;display:flex;background-color:#4c98ff;color:#fafafa;border-bottom:4px solid #a7d7ff;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.window--mobile__header__icon{height:24px;width:24px;-o-object-fit:cover;object-fit:cover;margin-right:2px;transform:translateY(4px)}.window--mobile__header__name{width:100%;height:auto;padding:0 8px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Reactor7",sans-serif;font-size:28px}.window--mobile__header__buttons{display:flex;align-items:center;border-left:4px solid #a7d7ff}.window--mobile__header__buttons button{border-radius:0;color:#fafafa!important}.window--mobile--inactive{transform:scale(.95);opacity:0;z-index:1}.window--mobile--minimized{pointer-events:none;opacity:1!important;transform:translateY(100%)!important;transform-origin:bottom}.window--mobile--restored{transform-origin:bottom}.window--mobile--closed,.window--mobile--modal--closed{pointer-events:none;transform-origin:center;opacity:0;transition:all .5s cubic-bezier(.25,1,.5,1)}.window--mobile--closed{transform:scale(.95)}.window--mobile--modal--closed{transform:scale(.95) translateY(-50%)!important}.window--mobile--modal{min-height:0;-webkit-animation:open-modal .5s cubic-bezier(.25,1,.5,1);animation:open-modal .5s cubic-bezier(.25,1,.5,1);transform:translateY(-50%);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;top:50%}',""]),t.exports=m},423:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpUUqDnZQcchQnVoQFXGUKhbBQmkrtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEzc1J0UVK/F9SaBHjwXE/3t173L0DhGaVqWbPBKBqlpFOxMVcflUMvCKIYfgRxZDETD2ZWczCc3zdw8fXuxjP8j735+hXCiYDfCLxHNMNi3iDeGbT0jnvE4dZWVKIz4mjBl2Q+JHrsstvnEsOCzwzbGTT88RhYrHUxXIXs7KhEk8TRxRVo3wh57LCeYuzWq2z9j35C0MFbSXDdZqjSGAJSaQgQkYdFVRhIUarRoqJNO3HPfwjjj9FLplcFTByLKAGFZLjB/+D392axalJNykUB3pfbPtjDAjsAq2GbX8f23brBPA/A1dax19rArOfpDc6WuQIGNgGLq47mrwHXO4AQ0+6ZEiO5KcpFIvA+xl9Ux4YvAX61tze2vs4fQCy1NXyDXBwCIyXKHvd493B7t7+PdPu7weQuXKzoEtpigAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UIGQM2B4ICycoAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAiklEQVRYw+2XQQqAMAwEU/Ga/78wL+gD9FQoATWgkSizt5Y9pOlu2m1mtsmE3vu8FFWVMzzNX6QY2uiQr9zDnySLX65DFBTWEC6LdggNOazjTt/WyhG/Xod8hdEJm8VnMH7PZVcuGPtR19zlM6kR9X9dxn+I1IHLSB28ZaQOUgepg9RB6mBSU1AKdviQpS42gcO+AAAAAElFTkSuQmCC"},424:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCBkIACJMT2MZAAAAlUlEQVRIx+2UwRKAIAhEWcf//2U6aEoGiNmt9lLjyJOWTSJFzLQjZuI4AvfyssQEPACc5XEErPIoIg8dVGrcxQZgpnpeMbC/+10kvXn5jf5Ekl8+R0AOTpTIDa6d8E/vshDbHWQitC70Kfh5SGWzZ7QfpzpGGzFL4xDl0YPlKOPyjAT63b9RIqL3gWbb0o1kIX79+poOhpNJFofFnNQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMjVUMDg6MDA6MzQrMDM6MDCOBg0VAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTI1VDA4OjAwOjM0KzAzOjAw/1u1qQAAAABJRU5ErkJggg=="},430:function(t,e,n){"use strict";n.r(e);n(14),n(13),n(18),n(25),n(17),n(26);var o=n(3),r=n(41),c=n(70),l=n.n(c),d=n(387),h=function(t,e,n){return Math.min(Math.max(t,e),n)};function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={name:"Window",components:{Watcher:d.default},props:{id:{type:String,required:!0},name:{type:String,required:!0},icon:{type:String,default:void 0},active:{type:Boolean,required:!0},closed:{type:Boolean,required:!0},minimized:{type:Boolean,required:!0},minimizable:{type:Boolean,default:!1},maximizable:{type:Boolean,default:!1},modal:{type:Boolean,default:!1}},data:function(){return{isMaximized:!1,isRestored:!1,isDragging:!1,window:{innerHeight:window.innerHeight,innerWidth:window.innerWidth},position:{x:0,y:0},dimensions:{width:0,height:0},cursorPosition:{x:0,y:0}}},computed:{className:function(){return l()("window",{"window--inactive":!this.active,"window--minimized":this.minimized,"window--maximized":this.isMaximized,"window--restored":this.isRestored,"window--closed":this.closed})},classNameMobile:function(){return l()("window--mobile",{"window--mobile--minimized":this.minimized,"window--mobile--inactive":!this.active,"window--mobile--restored":this.isRestored,"window--mobile--closed":this.closed&&!this.modal,"window--mobile--modal":this.modal,"window--mobile--modal--closed":this.closed&&this.modal})},cssVars:function(){return{"--position-x":"".concat(this.position.x,"px"),"--position-y":"".concat(this.position.y,"px"),"--min-height":"".concat(this.dimensions.height,"px"),"--min-width":"".concat(this.dimensions.width,"px")}}},watch:{minimized:function(t){t&&(this.isRestored=!0)},closed:function(t){t&&this.modal&&this.$nuxt.$emit("modal",!1)}},created:function(){this.modal&&this.$nuxt.$emit("modal",!0)},mounted:function(){var t=this;this.refreshDimensions(),this.centralize(),this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:f(f({},Object(r.b)({registerWindow:"windowManager/registerWindow",minimizeWindow:"windowManager/minimizeWindow",closeWindow:"windowManager/closeWindow",setActiveWindow:"windowManager/setActiveWindow"})),{},{handleActiveWindow:function(){this.active||this.setActiveWindow(this.id)},handleMinimizeWindow:function(){this.minimizeWindow(this.id)},handleMaximizeWindow:function(){this.handleActiveWindow(),this.isMaximized=!0,this.isRestored=!1},handleRestoreWindow:function(){this.handleActiveWindow(),this.isMaximized=!1,this.isRestored=!0},handleToggleMaximize:function(){this.isMaximized?this.handleRestoreWindow():this.handleMaximizeWindow()},handleCloseWindow:function(){this.closeWindow(this.id)},handleMouseDown:function(t){this.isMaximized||(t.preventDefault(),this.isRestored=!1,this.isDragging=!0,this.handleActiveWindow(),this.updateCursorPosition(t.pageX,t.pageY),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp))},handleMouseMove:function(t){if(this.isDragging){var e=t.pageX-this.cursorPosition.x,n=t.pageY-this.cursorPosition.y,o=h(0,this.position.x+e,this.window.innerWidth-this.dimensions.width),r=h(0,this.position.y+n,this.window.innerHeight-this.dimensions.height);this.updatePosition(o,r),this.updateCursorPosition(t.pageX,t.pageY)}},handleMouseUp:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp),this.isDragging=!1},updatePosition:function(t,e){this.position={x:t,y:e}},updateCursorPosition:function(t,e){this.cursorPosition={x:t,y:e}},onResize:function(){this.window={innerHeight:window.innerHeight,innerWidth:window.innerWidth}},centralize:function(){this.$refs.window&&this.updatePosition((window.innerWidth-this.$refs.window.clientWidth)/2,(window.innerHeight-this.$refs.window.clientHeight)/2)},refreshDimensions:function(){var t,e;this.dimensions={width:null===(t=this.$refs.window)||void 0===t?void 0:t.clientWidth,height:null===(e=this.$refs.window)||void 0===e?void 0:e.clientHeight}}})},v=(n(421),n(12)),A=n(51),y=n.n(A),x=n(485),_=n(367),component=Object(v.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$vuetify.breakpoint.smAndDown?n("div",{class:t.classNameMobile},[n("div",{staticClass:"window--mobile__header"},[n("div",{staticClass:"window--mobile__header__name"},[t.icon?n("img",{staticClass:"window--mobile__header__icon",attrs:{src:t.icon}}):t._e(),t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"window--mobile__header__buttons"},[n("v-btn",{attrs:{icon:"",medium:""},on:{click:function(e){return e.stopPropagation(),t.handleCloseWindow.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-window-close")])],1)],1)]),t._v(" "),t._t("default")],2):n("div",{ref:"window",class:t.className,style:t.cssVars,on:{click:t.handleActiveWindow}},[n("Watcher",{on:{created:t.refreshDimensions}}),t._v(" "),n("div",{staticClass:"window__header"},[n("div",{staticClass:"window__header__name",on:{mousedown:t.handleMouseDown}},[t.icon?n("img",{staticClass:"window__header__icon",attrs:{src:t.icon}}):t._e(),t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"window__header__buttons",on:{click:t.handleActiveWindow}},[t.minimizable&&!t.modal?n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.handleMinimizeWindow.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-window-minimize")])],1):t._e(),t._v(" "),t.maximizable&&!t.modal?n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.handleToggleMaximize.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-"+t._s(t.isMaximized?"window-restore":"window-maximize"))])],1):t._e(),t._v(" "),n("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){return e.stopPropagation(),t.handleCloseWindow.apply(null,arguments)}}},[n("v-icon",[t._v("mdi-window-close")])],1)],1)]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;y()(component,{VBtn:x.a,VIcon:_.a})}}]);