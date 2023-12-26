"use strict";(self.webpackChunkrent_car_ukraine_ts=self.webpackChunkrent_car_ukraine_ts||[]).push([[310],{7310:function(n,e,t){t.d(e,{Z:function(){return Ae}});var r,i=t(9439),o=t(2791),a=t(9085),l=t(168),c=t(7924),s=["title","titleId"];function d(){return d=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},d.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function f(n,e){var t=n.title,i=n.titleId,a=u(n,s);return o.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:18,height:18,fill:"none",ref:e,"aria-labelledby":i},a),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.8,strokeWidth:1.5,d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"})))}var p,h,m,x,g,b,v=o.forwardRef(f),w=(t.p,t(2231)),j=t(444),y=c.ZP.ul(p||(p=(0,l.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(\n    1,\n    ","\n  );\n  grid-template-rows: auto;\n  grid-row-gap: ",";\n  grid-column-gap: ",";\n\n  margin-bottom: ",";\n\n  @media screen and (min-width: ",") {\n    grid-template-columns: repeat(\n      2,\n      ","\n    );\n  }\n  @media screen and (min-width: ",") {\n    grid-template-columns: repeat(\n      4,\n      ","\n    );\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("236px",e.width,320)}),(function(n){var e=n.theme;return(0,j.fL)("50px",e.width)}),(function(n){var e=n.theme;return(0,j.fL)("28px",e.width)}),(function(n){var e=n.theme;return(0,j.fL)("100px",e.width)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("302px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("274px",e.width)})),Z=c.ZP.li(h||(h=(0,l.Z)(["\n  position: relative;\n\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5px;\n"]))),k=c.ZP.button(m||(m=(0,l.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  background-color: transparent;\n  border: none;\n\n  &:focus,\n  &:hover {\n    background-color: transparent;\n  }\n  &.liked {\n    color: rgba(52, 112, 255, 1);\n  }\n  &.non-liked {\n    color: transparent;\n  }\n"]))),P=(0,c.ZP)(v)(x||(x=(0,l.Z)(["\n  fill: currentColor;\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &.liked {\n    stroke: currentColor;\n  }\n  &.non-liked {\n    stroke: rgba(255, 255, 255, 0.8);\n  }\n  &:focus,\n  &:hover {\n    fill: rgba(52, 112, 255, 1);\n    stroke: currentColor;\n  }\n"]))),L=c.ZP.img(g||(g=(0,l.Z)(["\n  margin-bottom: 14px;\n  border-radius: 14px;\n  background: linear-gradient(\n      180deg,\n      rgba(18, 20, 23, 0.5) 2.5%,\n      rgba(18, 20, 23, 0) 41.07%\n    ),\n    #f3f3f2;\n  object-fit: cover;\n  object-position: 50% 50%;\n  overflow: hidden;\n"]))),T=c.ZP.button(b||(b=(0,l.Z)(["\n  width: 100%;\n  padding: 12px;\n  text-align: center;\n  margin-top: ",";\n"])),(function(n){var e=n.theme;return(0,j.fL)("28px",e.width)})),E=t(7762),O=function(n){var e=n.split(",");return{city:e[1],country:e[2]}},S=function(n){var e,t=n.address,r=n.rentalCompany,i=n.accessories,o=O(t),a=[o.city,o.country,r],l=(0,E.Z)(i);try{for(l.s();!(e=l.n()).done;){if(e.value.toLowerCase().includes("premium")){a.push("Premium");break}}}catch(c){l.e(c)}finally{l.f()}return a},z=function(n){var e=n.address,t=n.id,r=n.year,i=n.type,o=O(e);return[o.city,o.country,"id: ".concat(t),"Year: ".concat(r),"Type: ".concat(i)]},I=function(n){var e=n.fuelConsumption,t=n.engineSize;return["Fuel Consumption: ".concat(e),"Engine Size: ".concat(t)]};function C(n){return 10*Math.ceil(n/10)}var A,B,F,N,R,M,_,V=c.ZP.div(A||(A=(0,l.Z)(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  color: #121417;\n"]))),D=c.ZP.h2(B||(B=(0,l.Z)(["\n  margin-right: auto;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),K=c.ZP.span(F||(F=(0,l.Z)(["\n  color: #3470ff;\n"]))),$=c.ZP.span(N||(N=(0,l.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),G=t(3329),W=function(n){var e=n.car;return(0,G.jsxs)(V,{children:[(0,G.jsxs)(D,{children:[(0,G.jsxs)("span",{children:[e.make," "]}),(0,G.jsxs)(K,{children:[e.model,", "]}),(0,G.jsx)("span",{children:e.year})]}),(0,G.jsx)($,{children:e.rentalPrice})]})},q=c.ZP.ul(R||(R=(0,l.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: start;\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n\n  & > li {\n    padding-left: 6px;\n    padding-right: 6px;\n    white-space: nowrap;\n    border-right: 1px solid rgba(18, 20, 23, 0.1);\n  }\n  & > li:first-child {\n    padding-left: 0px;\n  }\n  & > li:last-child {\n    padding-right: 0px;\n    border-right: none;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]))),H=function(n){var e=n.carInfo;return(0,G.jsx)(q,{children:e.map((function(n,e){return(0,G.jsx)("li",{children:n},e)}))})},Q=t(2122),X=t(892),J=t(4164),Y=c.ZP.div(M||(M=(0,l.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(35, 38, 42, 0.5);\n  z-index: 100;\n  /* opacity: 0;\n  transition: opacity 2500ms ease-in-out;\n\n  &.opened {\n    opacity: 0.5;\n    transition: opacity 2500ms ease-in-out;\n  } */\n"]))),U=t(3433),nn=["title","titleId"];function en(){return en=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},en.apply(this,arguments)}function tn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function rn(n,e){var t=n.title,r=n.titleId,i=tn(n,nn);return o.createElement("svg",en({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,_||(_=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.8,d:"M18 6 6 18M6 6l12 12"})))}var on,an,ln,cn,sn,dn,un,fn,pn,hn,mn,xn,gn,bn,vn,wn,jn,yn,Zn,kn,Pn,Ln,Tn,En,On,Sn,zn,In,Cn,An=o.forwardRef(rn),Bn=(t.p,c.ZP.div(on||(on=(0,l.Z)(["\n  position: relative;\n  width: ",";\n  max-width: 100%;\n  max-height: 100vh;\n  box-sizing: border-box;\n  overflow-y: scroll;\n  padding: 40px;\n  border-radius: 24px;\n  background: #fff;\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("296px",e.width,320)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("620px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("541px",e.width)}))),Fn=c.ZP.img(an||(an=(0,l.Z)(["\n  width: 100%;\n  margin-bottom: 14px;\n  border-radius: 14px;\n\n  overflow: hidden;\n\n  object-fit: cover;\n  object-position: 50% 50%;\n"]))),Nn=c.ZP.button(ln||(ln=(0,l.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n\n  background-color: transparent;\n  border: none;\n\n  &:focus,\n  &:hover {\n    background-color: transparent;\n  }\n"]))),Rn=(0,c.ZP)(An)(cn||(cn=(0,l.Z)(["\n  stroke: #121417;\n\n  &:focus,\n  &:hover {\n    stroke: rgba(52, 112, 255, 1);\n  }\n"]))),Mn=((0,c.ZP)(W)(sn||(sn=(0,l.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.333;\n"]))),(0,c.ZP)(H)(dn||(dn=(0,l.Z)(["\n  margin-bottom: 4px;\n"])))),_n=(0,c.ZP)(H)(un||(un=(0,l.Z)(["\n  margin-bottom: 14px;\n"]))),Vn=c.ZP.p(fn||(fn=(0,l.Z)(["\n  margin-top: 14px;\n  margin-bottom: 24px;\n\n  color: #121417;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.42857;\n"]))),Dn=c.ZP.h3(pn||(pn=(0,l.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.42857;\n"]))),Kn=c.ZP.ul(hn||(hn=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n\n  & > li {\n    padding: 7px 14px;\n    border-radius: 35px;\n    background-color: #f9f9f9;\n\n    color: #363535;\n    font-family: Montserrat;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: -0.24px;\n\n    & > span {\n      color: #3470ff;\n    }\n  }\n"]))),$n=c.ZP.a(mn||(mn=(0,l.Z)(["\n  padding: 12px 50px;\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42857;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n  }\n"]))),Gn=t(948),Wn=function(n){var e=n.car,t=n.toggleModal,r=function(n){var e=n.rentalConditions,t=n.mileage,r=n.rentalPrice,i=e.split("\n"),o=i[0].slice(-2);return i=i.slice(1),[o].concat((0,U.Z)(i),[(0,G.jsx)(Gn.h3,{thousandSeparator:!0,displayType:"text",value:t}),(0,G.jsx)(Gn.h3,{valueIsNumericString:!0,thousandSeparator:!0,displayType:"text",suffix:"$",value:r})])}(e);return(0,G.jsxs)(Bn,{children:[(0,G.jsx)(Nn,{type:"button",onClick:function(){return t(e)},children:(0,G.jsx)(Rn,{width:24,height:24})}),(0,G.jsx)(Fn,{src:e.img,alt:"".concat(e.make," ").concat(e.model,", ").concat(e.year),width:"461"}),(0,G.jsx)(W,{car:e}),(0,G.jsx)(Mn,{carInfo:z(e)}),(0,G.jsx)(_n,{carInfo:I(e)}),(0,G.jsx)(Vn,{children:e.description}),(0,G.jsx)(Dn,{style:{marginBottom:8},children:"Accessories and functionalities:"}),(0,G.jsx)(H,{carInfo:e.accessories}),(0,G.jsx)(H,{carInfo:e.functionalities}),(0,G.jsx)(Dn,{style:{marginTop:24,marginBottom:8},children:"Rental Conditions:"}),(0,G.jsxs)(Kn,{children:[(0,G.jsxs)("li",{children:["Minimum age: ",(0,G.jsx)("span",{children:r[0]})]}),(0,G.jsx)("li",{children:r[1]}),(0,G.jsx)("li",{children:r[2]}),(0,G.jsxs)("li",{children:["Mileage: ",r[3]]}),(0,G.jsxs)("li",{children:["Price: ",r[4]]})]}),(0,G.jsx)($n,{href:"tel:+380730000000",children:"Rental car"})]})},qn=document.querySelector("#modal-root"),Hn=function(n){var e=n.car,t=n.toggleModal;(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&t(e)};window.addEventListener("keydown",n),document.body.classList.add("lock-scroll");var r=document.getElementById("modal");return r.classList.add("opened"),function(){window.removeEventListener("keydown",n),document.body.classList.remove("lock-scroll"),r.classList.remove("opened")}}),[t]);return(0,J.createPortal)((0,G.jsx)(Y,{id:"modal",onClick:function(n){n.target===n.currentTarget&&t(e)},children:(0,G.jsx)(Wn,{car:e,toggleModal:t})}),qn)},Qn=function(n){var e=n.cars,t=(0,c.Fg)(),r=(0,o.useState)(!1),a=(0,i.Z)(r,2),l=a[0],s=a[1],d=(0,o.useState)(e[0]),u=(0,i.Z)(d,2),f=u[0],p=u[1],h=function(n){s((function(n){return!n})),p(n)},m=(0,X.TL)();return(0,G.jsxs)(y,{children:[e.map((function(n){return(0,G.jsxs)(Z,{children:[(0,G.jsx)(k,{type:"button",className:n.favorite?"liked":"non-liked",onClick:function(){return e=n.id,void m((0,Q.o)(e));var e},children:(0,G.jsx)(P,{width:18,height:18,className:n.favorite?"liked":"non-liked"})}),(0,G.jsx)(L,{src:n.img,alt:"".concat(n.make," ").concat(n.model,", ").concat(n.year),width:(0,j.fL)(274,t.width),height:"268"}),(0,G.jsx)(W,{car:n}),(0,G.jsx)(H,{carInfo:S(n)}),(0,G.jsx)(H,{carInfo:(e=n,[e.type,e.model,e.mileage,e.functionalities[0]])}),(0,G.jsx)(T,{className:"accent-button",type:"button",onClick:function(){return h(n)},children:"Learn more"})]},n.id);var e})),l&&(0,G.jsx)(Hn,{car:f,toggleModal:h})]})},Xn=t(5705),Jn=t(1413),Yn=(0,c.ZP)(Xn.l0)(xn||(xn=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  justify-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  row-gap: 18px;\n  column-gap: 8px;\n  margin-bottom: ",";\n\n  @media screen and (min-width: ",") {\n    align-items: flex-end;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("50px",e.width)}),w.v.DESKTOP),Un=c.ZP.label(gn||(gn=(0,l.Z)(["\n  color: #8a8a89;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.28571;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),w.v.PRETABLET),ne=(0,c.ZP)(Xn.gN)(bn||(bn=(0,l.Z)(["\n  padding: 14px 18px;\n  margin-top: 8px;\n  box-sizing: border-box;\n  border-radius: 14px;\n  border: none;\n  background: #f7f7fb;\n  color: #121417;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  outline: none;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n  }\n"])),w.v.TABLET),ee=(0,c.ZP)(ne)(vn||(vn=(0,l.Z)(["\n  width: ",";\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n  &::placeholder {\n    color: #121417;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("124px",e.width,320)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("224px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("224px",e.width)})),te=c.ZP.ul(wn||(wn=(0,l.Z)(["\n  position: absolute;\n  top: 52px;\n  z-index: 1;\n\n  width: 100%;\n  height: 272px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  padding: 14px 18px;\n  color: rgba(18, 20, 23, 0.2);\n  background-color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.25;\n\n  border-radius: 14px;\n  border: 1px solid rgba(18, 20, 23, 0.05);\n  background: #fff;\n  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);\n\n  @media screen and (min-width: ",") {\n    font-size: 16px;\n  }\n\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(18, 20, 23, 0.05);\n    border-radius: 10px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #fff;\n  }\n\n  & > li:hover,\n  & > li:focus {\n    color: #121417;\n  }\n"])),w.v.TABLET),re=(0,c.ZP)((function(n){return(0,G.jsx)(Gn.h3,(0,Jn.Z)({valueIsNumericString:!0,thousandSeparator:!0,decimalScale:0,allowNegative:!1,prefix:n.prefix,suffix:n.suffix},n))}))(jn||(jn=(0,l.Z)(["\n  margin-top: 8px;\n  padding: 14px 14px;\n\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  outline: none;\n  box-sizing: border-box;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    padding: 14px 18px;\n  }\n"])),w.v.TABLET),ie=(0,c.ZP)(re)(yn||(yn=(0,l.Z)(["\n  width: ",";\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  @media screen and (min-width: ",") {\n    width: ",";\n  }\n\n  border-radius: 14px;\n  font-family: Manrope;\n\n  &::placeholder {\n    color: #121417;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("115px",e.width,320)}),w.v.TABLET,(function(n){var e=n.theme;return(0,j.fL)("125px",e.width,768)}),w.v.DESKTOP,(function(n){var e=n.theme;return(0,j.fL)("125px",e.width)})),oe=c.ZP.div(Zn||(Zn=(0,l.Z)(["\n  position: absolute;\n  width: 34px;\n  height: 20px;\n  z-index: 20;\n\n  top: 22px;\n  right: 0px;\n  background-color: #f7f7fb;\n  border: none;\n\n  pointer-events: none;\n\n  &:focus,\n  &:hover {\n    background-color: #f7f7fb;\n    border: none;\n  }\n"]))),ae=c.ZP.div(kn||(kn=(0,l.Z)(["\n  display: flex;\n"]))),le=c.ZP.div(Pn||(Pn=(0,l.Z)(["\n  position: relative;\n"]))),ce=(0,c.ZP)(re)(Ln||(Ln=(0,l.Z)(["\n  width: ",";\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  padding-left: ",";\n  @media screen and (min-width: ",") {\n    width: 160px;\n    padding-left: 70px;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("115px",e.width,320)}),(function(n){var e=n.theme;return(0,j.fL)("50px",e.width,320)}),w.v.TABLET),se=c.ZP.span(Tn||(Tn=(0,l.Z)(["\n  position: absolute;\n  top: 22px;\n  left: ",";\n\n  background: #f7f7fb;\n  border: none;\n  color: #121417;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.11111;\n  @media screen and (min-width: ",") {\n    left: 24px;\n    font-size: 18px;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("12px",e.width,320)}),w.v.TABLET),de=(0,c.ZP)(se)(En||(En=(0,l.Z)([""]))),ue=(0,c.ZP)(re)(On||(On=(0,l.Z)(["\n  width: ",";\n  border-top-right-radius: 14px;\n  border-bottom-right-radius: 14px;\n  padding-left: ",";\n  @media screen and (min-width: ",") {\n    width: 160px;\n    padding-left: 52px;\n  }\n"])),(function(n){var e=n.theme;return(0,j.fL)("115px",e.width,320)}),(function(n){var e=n.theme;return(0,j.fL)("32px",e.width,320)}),w.v.TABLET),fe=c.ZP.button(Sn||(Sn=(0,l.Z)(["\n  align-self: flex-end;\n  padding: 14px ",";\n  border-radius: 12px;\n  background-color: #3470ff;\n\n  @media screen and (min-width: ",") {\n    padding: 14px 44px;\n  }\n\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.42857;\n  text-align: center;\n"])),(function(n){var e=n.theme;return(0,j.fL)("34px",e.width,320)}),w.v.TABLET),pe=c.ZP.div(zn||(zn=(0,l.Z)(["\n  display: flex;\n  justify-content: space-around;\n  gap: 8px;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),w.v.PRETABLET),he=c.ZP.div(In||(In=(0,l.Z)(["\n  display: flex;\n  justify-content: space-around;\n  gap: 8px;\n\n  @media screen and (max-width: ",") {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])),w.v.PREDESKTOP),me=["title","titleId"];function xe(){return xe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},xe.apply(this,arguments)}function ge(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function be(n,e){var t=n.title,r=n.titleId,i=ge(n,me);return o.createElement("svg",xe({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,Cn||(Cn=o.createElement("path",{stroke:"#121417",d:"m5 12.5 5-5 5 5"})))}var ve,we=o.forwardRef(be),je=(t.p,["title","titleId"]);function ye(){return ye=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ye.apply(this,arguments)}function Ze(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function ke(n,e){var t=n.title,r=n.titleId,i=Ze(n,je);return o.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"none",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,ve||(ve=o.createElement("path",{stroke:"#121417",d:"m5 7.5 5 5 5-5"})))}var Pe,Le=o.forwardRef(ke),Te=(t.p,t(969)),Ee=t(8007),Oe={make:"",rentalPrice:"",mileageFrom:0,mileageTo:0},Se=function(n){var e=n.setQuery,t=(0,X.CG)(Te.H3),r=(0,X.CG)(Te.Wz),a=(0,o.useState)([]),l=(0,i.Z)(a,2),c=l[0],s=l[1],d=(0,o.useState)(!1),u=(0,i.Z)(d,2),f=u[0],p=u[1],h=(0,o.useState)(!1),m=(0,i.Z)(h,2),x=m[0],g=m[1];(0,o.useEffect)((function(){s(function(n){for(var e=n.map((function(n){var e=n.rentalPrice;return Number.parseInt(e.replaceAll(",","").replaceAll("$",""))})).reduce((function(n,e){return e<n.min&&(n.min=e),e>n.max&&(n.max=e),n}),{min:Number.MAX_SAFE_INTEGER,max:0}),t=C(e.min),r=C(e.max),i=[],o=t;o<=r;o+=10)i.push(o);return i}(r))}),[r]);var b=function(){p((function(n){return!n}))},v=function(){g((function(n){return!n}))},w=function(n,e,t){return n.map((function(n){return(0,G.jsx)("li",{onClick:function(){e(t,n)},children:n},n)}))};return(0,G.jsx)(Xn.J9,{initialValues:Oe,validationSchema:Ee.Ry().shape({make:Ee.Z_().oneOf(t,"Invalid make of car"),rentalPrice:Ee.Rx().transform((function(n){return isNaN(n)?void 0:n})).oneOf(c,"Invalid rental price of car"),mileageFrom:Ee.Rx().lessThan(Ee.iH("mileageTo"),"From should be < To"),mileageTo:Ee.Rx().transform((function(n){return isNaN(n)?Number.MAX_SAFE_INTEGER:n})).moreThan(Ee.iH("mileageFrom"),"To should be > From")}),onSubmit:function(n){e(n),p(!1),g(!1)},children:function(n){var r=n.values,i=n.setFieldValue;return(0,G.jsxs)(Yn,{children:[(0,G.jsxs)(pe,{children:[(0,G.jsxs)(Un,{children:["Car brand",(0,G.jsxs)(le,{children:[(0,G.jsx)(ee,{name:"make",type:"text",onClick:b,placeholder:"Enter the text",autoComplete:"off"}),f&&(0,G.jsxs)(te,{children:[" ",w(t,i,"make")]}),(0,G.jsx)(oe,{children:f?(0,G.jsx)(we,{width:20,height:20}):(0,G.jsx)(Le,{width:20,height:20})}),(0,G.jsx)(Xn.Bc,{name:"make"})]})]}),(0,G.jsxs)(Un,{children:["Price/1 hour",(0,G.jsxs)(le,{children:[(0,G.jsx)(ie,{onClick:v,value:r.rentalPrice,onValueChange:function(n){return i("rentalPrice",n.floatValue)},prefix:"To ",suffix:"$",placeholder:"To $",autoComplete:"off"}),x&&(0,G.jsx)(te,{children:w(c,i,"rentalPrice")}),(0,G.jsx)(oe,{children:x?(0,G.jsx)(we,{width:20,height:20}):(0,G.jsx)(Le,{width:20,height:20})}),(0,G.jsx)(Xn.Bc,{name:"rentalPrice"})]})]})]}),(0,G.jsxs)(Un,{children:["\u0421ar mileage/km",(0,G.jsxs)(ae,{children:[(0,G.jsxs)(le,{children:[(0,G.jsx)(se,{children:"From "}),(0,G.jsx)(ce,{value:r.mileageFrom,onValueChange:function(n){return i("mileageFrom",n.floatValue)}}),(0,G.jsx)(Xn.Bc,{name:"mileageFrom"})]}),(0,G.jsxs)(le,{children:[(0,G.jsx)(de,{children:"To "}),(0,G.jsx)(ue,{value:r.mileageTo,onValueChange:function(n){return i("mileageTo",n.floatValue)}}),(0,G.jsx)(Xn.Bc,{name:"mileageTo"})]})]})]}),(0,G.jsxs)(he,{children:[(0,G.jsx)(fe,{className:"accent-button",type:"submit",children:"Search"}),(0,G.jsx)(fe,{className:"accent-button",type:"reset",onClick:function(){e(Oe),p(!1),g(!1)},children:"Reset"})]})]})}})},ze=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,i=[];if(0===n.length)return{overallLength:n.length,carsFiltered:i};var o=e.make,a=e.rentalPrice,l=e.mileageFrom,c=e.mileageTo;i=(0,U.Z)(n),o&&(i=i.filter((function(n){return n.make===o}))),a&&(i=i.filter((function(n){return Number.parseInt(n.rentalPrice.replaceAll("$","").replaceAll(",",""))<=Number.parseInt(a)}))),l&&(i=i.filter((function(n){return n.mileage>=l}))),c&&(i=i.filter((function(n){return n.mileage<=c})));var s=t*r,d=i.slice(0,s);return{overallLength:i.length,carsFiltered:d}},Ie=c.ZP.button(Pe||(Pe=(0,l.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  color: #3470ff;\n  background-color: inherit;\n  border: none;\n\n  font-size: ",";\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n\n  cursor: pointer;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:focus,\n  &:hover {\n    background-color: inherit;\n    color: rgba(11, 68, 205, 1);\n    transform: scale(1.1);\n  }\n"])),(function(n){var e=n.theme;return(0,j.i)("16px",e.width)})),Ce=t(3050),Ae=function(n){var e=n.allCars,t=n.title,r=(0,o.useState)({make:"",rentalPrice:"",mileageFrom:0,mileageTo:0}),l=(0,i.Z)(r,2),c=l[0],s=l[1],d=(0,o.useState)(1),u=(0,i.Z)(d,2),f=u[0],p=u[1],h=(0,o.useState)([]),m=(0,i.Z)(h,2),x=m[0],g=m[1],b=(0,o.useRef)();(0,o.useEffect)((function(){p(1),g([]),b.current=!1}),[c]),(0,o.useEffect)((function(){var n=ze(e,c,f);g(n.carsFiltered),0===n.overallLength&&1===f&&(b.current=!0)}),[e,f,c]);return(0,G.jsxs)("section",{children:[(0,G.jsx)(Ce.ql,{children:(0,G.jsx)("title",{children:t})}),(0,G.jsx)(Se,{setQuery:s}),(0,G.jsx)(Qn,{cars:x}),!b.current&&(0,G.jsx)(Ie,{type:"button",onClick:function(){var n=ze(e,c,f);if(p((function(n){return n+1})),0===n.overallLength&&1===f)return a.Am.error("We didn't find any info on your request!"),void(b.current=!0);n.overallLength===n.carsFiltered.length&&(a.Am.warn("It's the end of the collection!"),b.current=!0),g(n.carsFiltered)},children:"Load more"})]})}}}]);
//# sourceMappingURL=310.64f72a77.chunk.js.map