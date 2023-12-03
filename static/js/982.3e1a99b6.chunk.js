"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[982],{9571:function(n,e,i){i.d(e,{G:function(){return On}});var t,r,o,a,l,c,d,s,p,u,x,h,f,g,m,v,b=i(9439),j=i(168),Z=i(6487),y=Z.ZP.ul(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  width: 100%;\n  margin-bottom: 28px;\n  max-height: 40px;\n  color: var(--semiblack);\n"]))),w=Z.ZP.li(r||(r=(0,j.Z)(["\n  position: relative;\n  &:not(:last-child) {\n    margin-right: 12px;\n  }\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 1px;\n    background-color: rgba(18, 20, 23, 0.1);\n    height: 18px;\n    top: 2px;\n    right: -6px;\n  }\n"]))),k=i(184),P=function(n){var e=n.city,i=n.country,t=n.rentalCompany,r=n.type,o=n.model,a=n.id,l=n.functionalities;return(0,k.jsxs)(y,{children:[(0,k.jsx)(w,{children:e}),(0,k.jsx)(w,{children:i}),(0,k.jsx)(w,{children:t}),(0,k.jsx)(w,{children:r}),(0,k.jsx)(w,{children:o}),(0,k.jsx)(w,{children:a}),(0,k.jsx)(w,{children:l[0]})]})},C=Z.ZP.li(o||(o=(0,j.Z)(["\n  width: 274px;\n"]))),z=Z.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),M=Z.ZP.div(l||(l=(0,j.Z)(["\n  position: relative;\n  overflow: hidden;\n  border-radius: 14px;\n  width: 274px;\n  height: 268px;\n  margin-bottom: 14px;\n"]))),S=Z.ZP.img(c||(c=(0,j.Z)(["\n  width: 274px;\n  height: 268px;\n  object-fit: cover;\n  border-radius: 14px;\n  cursor: pointer;\n  transform: scale(1);\n  transition: 0.3s ease-in-out;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),T=Z.ZP.div(d||(d=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),L=Z.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),E=Z.ZP.p(p||(p=(0,j.Z)(["\n  color: var(--black);\n  max-width: 235px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),_=Z.ZP.span(u||(u=(0,j.Z)(["\n  color: var(--blue);\n"]))),q=Z.ZP.p(x||(x=(0,j.Z)(["\n  color: var(--black);\n"]))),I=function(n){var e=null===n||void 0===n?void 0:n.split(","),i=(0,b.Z)(e,3);return{street:i[0],city:i[1],country:i[2]}},A=Z.ZP.button(h||(h=(0,j.Z)(["\n  color: var(--white);\n  font-family: 'Manrope', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  background: var(--blue);\n  padding: ",";\n  border-radius: 12px;\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  transition: background 300ms var(--transition);\n\n  &:hover,\n  &:focus {\n    background: var(--accent);\n  }\n"])),(function(n){return n.padding})),N=function(n){var e=n.type,i=n.padding,t=n.text,r=n.handleClick;return(0,k.jsx)(A,{type:e,padding:i,onClick:r,children:t})},O=i(2791),R=i(4164),U=Z.ZP.div(f||(f=(0,j.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(18, 20, 23, 0.5);\n  z-index: 100;\n"]))),W=Z.ZP.div(g||(g=(0,j.Z)(["\n  position: absolute;\n  overflow-y: auto;\n  display: flex;\n  justify-content: center;\n  border-radius: 24px;\n  background-color: var(--white);\n"]))),$=Z.ZP.button(m||(m=(0,j.Z)(["\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background-color: transparent;\n  border: none;\n  z-index: 200;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n"]))),F=Z.ZP.svg(v||(v=(0,j.Z)(["\n  width: 100%;\n  height: 100%;\n  scale: 1;\n  stroke: var(--black);\n\n  transition: scale 200ms var(--transition), stroke 200ms var(--transition);\n\n  &:hover,\n  &:focus {\n    stroke: var(--blue);\n    scale: 1.2;\n  }\n"])));var G,Q,Y,B,D,H,J,K,V,X,nn,en,tn,rn,on,an,ln,cn,dn=i.p+"static/media/sprite.d1fe6dbc2b12a40d8464ce43b8ec3c24.svg",sn=function(n){var e=n.handleCloseModal;return(0,k.jsx)($,{type:"button",onClick:e,children:(0,k.jsx)(F,{children:(0,k.jsx)("use",{href:dn+"#close"})})})},pn=document.querySelector("#modal-root"),un=function(n){var e=n.children,i=n.handleModalToggle;(0,O.useEffect)((function(){var n=function(n){"Escape"===n.code&&i()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[i]);return(0,R.createPortal)((0,k.jsx)(U,{onClick:function(n){n.currentTarget===n.target&&i()},children:(0,k.jsxs)(W,{children:[(0,k.jsx)(sn,{handleCloseModal:i}),e]})}),pn)},xn=Z.ZP.div(G||(G=(0,j.Z)(["\n  /* max-width: 300px; */\n  max-height: 40px;\n  margin-bottom: 14px;\n"]))),hn=Z.ZP.ul(Q||(Q=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  width: 100%;\n  color: var(--semiblack);\n"]))),fn=Z.ZP.li(Y||(Y=(0,j.Z)(["\n  position: relative;\n  &:not(:last-child) {\n    margin-right: 12px;\n  }\n  &:not(:last-child)::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 1px;\n    background-color: rgba(18, 20, 23, 0.1);\n    height: 18px;\n    top: 2px;\n    right: -6px;\n  }\n"]))),gn=function(n){var e=n.city,i=n.country,t=n.type,r=n.id,o=n.year,a=n.fuelConsumption,l=n.engineSize;return(0,k.jsx)(xn,{children:(0,k.jsxs)(hn,{children:[(0,k.jsx)(fn,{children:e}),(0,k.jsx)(fn,{children:i}),(0,k.jsxs)(fn,{children:["Id: ",r]}),(0,k.jsxs)(fn,{children:["Year: ",o]}),(0,k.jsxs)(fn,{children:["Type: ",t]}),(0,k.jsxs)(fn,{children:["Fuel Consumption: ",a]}),(0,k.jsxs)(fn,{children:["Engine Size: ",l]})]})})},mn=Z.ZP.div(B||(B=(0,j.Z)(["\n  padding: 40px;\n  width: 549px;\n"]))),vn=Z.ZP.img(D||(D=(0,j.Z)(["\n  width: 469px;\n  height: 248px;\n  border-radius: 14px;\n  object-fit: cover;\n  margin-bottom: 14px;\n"]))),bn=Z.ZP.div(H||(H=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.33;\n"]))),jn=Z.ZP.p(J||(J=(0,j.Z)(["\n  color: var(--black);\n"]))),Zn=Z.ZP.span(K||(K=(0,j.Z)(["\n  color: var(--blue);\n"]))),yn=Z.ZP.p(V||(V=(0,j.Z)(["\n  color: var(--black);\n  line-height: 1.42;\n  margin-bottom: 24px;\n"]))),wn=Z.ZP.p(X||(X=(0,j.Z)(["\n  color: var(--black);\n  line-height: 1.42;\n  font-weight: 500;\n  margin-bottom: 8px;\n"]))),kn=Z.ZP.div(nn||(nn=(0,j.Z)(["\n  margin-bottom: 4px;\n"]))),Pn=Z.ZP.div(en||(en=(0,j.Z)(["\n  margin-bottom: 24px;\n"]))),Cn=Z.ZP.ul(tn||(tn=(0,j.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 24px;\n"]))),zn=Z.ZP.li(rn||(rn=(0,j.Z)(["\n  display: inline-block;\n  padding: 7px 14px;\n  border-radius: 35px;\n  background: #f9f9f9;\n  color: #363535;\n"]))),Mn=Z.ZP.span(on||(on=(0,j.Z)(["\n  font-weight: 600;\n  color: var(--blue);\n"]))),Sn=function(n){return Number(n).toLocaleString("en-US")},Tn=function(n){var e=n.handleModalToggle,i=n.car,t=i.id,r=i.make,o=i.model,a=i.year,l=i.rentalPrice,c=i.rentalCompany,d=i.type,s=i.functionalities,p=i.address,u=i.description,x=i.accessories,h=i.fuelConsumption,f=i.engineSize,g=i.rentalConditions,m=i.mileage,v=I(p),j=v.city,Z=v.country,y=function(n){var e=n.split("\n"),i=(0,b.Z)(e,3);return{age:i[0],licence:i[1],required:i[2]}}(g),w=y.age,P=y.licence,C=y.required,z=w.split(":");return(0,k.jsxs)(mn,{children:[(0,k.jsx)(vn,{src:i.img,alt:"Car"}),(0,k.jsx)(bn,{children:(0,k.jsxs)(jn,{children:[r," ",(0,k.jsx)(Zn,{children:o}),", ",a]})}),(0,k.jsx)(gn,{city:j,country:Z,rentalCompany:c,type:d,model:o,id:t,functionalities:s,year:a,fuelConsumption:h,engineSize:f}),(0,k.jsx)(yn,{children:u}),(0,k.jsx)(wn,{children:"Accessories and functionalities:"}),(0,k.jsx)(kn,{children:(0,k.jsx)(hn,{children:x.map((function(n,e){return(0,k.jsx)(fn,{children:n},e)}))})}),(0,k.jsx)(Pn,{children:(0,k.jsx)(hn,{children:s.map((function(n,e){return(0,k.jsx)(fn,{children:n},e)}))})}),(0,k.jsx)(wn,{children:"Rental Conditions:"}),(0,k.jsxs)(Cn,{children:[(0,k.jsxs)(zn,{children:[z[0],": ",(0,k.jsx)(Mn,{children:z[1]})]}),(0,k.jsx)(zn,{children:P}),(0,k.jsx)(zn,{children:C}),(0,k.jsxs)(zn,{children:["Mileage: ",(0,k.jsx)(Mn,{children:Sn(m)})]}),(0,k.jsxs)(zn,{children:["Price: ",(0,k.jsx)(Mn,{children:l})]})]}),(0,k.jsx)(N,{padding:"12px 50px",text:"Rental car",type:"button",handleClick:function(){window.location.href="tel:".concat("+380730000000"),e()}})]})},Ln=Z.ZP.button(an||(an=(0,j.Z)(["\n  position: absolute;\n  /* padding: 5px; */\n  top: 14px;\n  right: 14px;\n  border: none;\n  background: transparent;\n  z-index: 1;\n"]))),En=Z.ZP.svg(ln||(ln=(0,j.Z)(["\n  width: 18px;\n  height: 18px;\n  stroke: var(--white);\n  fill: transparent;\n"]))),_n=Z.ZP.svg(cn||(cn=(0,j.Z)(["\n  width: 18px;\n  height: 18px;\n  fill: var(--blue);\n  stroke: var(--blue);\n"]))),qn=i(9434),In=i(6351),An=i(2437),Nn=function(n){var e=n.car,i=(0,qn.I0)(),t=(0,qn.v9)(In.Tc).find((function(n){return n.id===e.id}));return(0,k.jsx)(Ln,{type:"button",onClick:function(){i(t?(0,An.Ni)(e):(0,An.a3)(e))},children:t?(0,k.jsx)(_n,{children:(0,k.jsx)("use",{href:dn+"#heart"})}):(0,k.jsx)(En,{children:(0,k.jsx)("use",{href:dn+"#heart"})})})},On=function(n){var e=n.car,i=e.id,t=e.make,r=e.model,o=e.year,a=e.img,l=e.rentalPrice,c=e.rentalCompany,d=e.type,s=e.functionalities,p=e.address,u=(0,O.useState)(!1),x=(0,b.Z)(u,2),h=x[0],f=x[1],g=function(){f((function(n){return!n})),document.body.classList.toggle("body-scroll-lock")},m=I(p),v=m.city,j=m.country;return(0,k.jsx)(C,{children:(0,k.jsxs)(z,{children:[(0,k.jsxs)(M,{children:[(0,k.jsx)(Nn,{car:e}),(0,k.jsx)(S,{src:a,alt:r})]}),(0,k.jsxs)(T,{children:[(0,k.jsxs)(L,{children:[(0,k.jsxs)(E,{children:[t," ",(0,k.jsx)(_,{children:r}),", ",o]}),(0,k.jsx)(q,{children:l})]}),(0,k.jsx)(P,{city:v,country:j,rentalCompany:c,type:d,model:r,id:i,functionalities:s})]}),(0,k.jsx)(N,{padding:"12px 98px",type:"button",text:"Learn more",handleClick:g}),h&&(0,k.jsx)(un,{handleModalToggle:g,children:(0,k.jsx)(Tn,{handleModalToggle:g,car:e})})]})})}},3623:function(n,e,i){i.d(e,{W:function(){return l}});var t,r=i(168),o=i(6487).ZP.div(t||(t=(0,r.Z)(["\n  width: 100vw;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 0 15px;\n\n  @media (min-width: 375px) {\n    width: 375px;\n  }\n\n  @media (min-width: 768px) {\n    width: 768px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 1214px;\n  }\n"]))),a=i(184),l=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},9677:function(n,e,i){i.d(e,{$:function(){return l}});var t,r=i(168),o=i(6487).ZP.div(t||(t=(0,r.Z)(["\n  padding-top: 50px;\n  padding-bottom: 50px;\n"]))),a=i(184),l=function(n){var e=n.children;return(0,a.jsx)(o,{children:e})}},6351:function(n,e,i){i.d(e,{Qx:function(){return c},Tc:function(){return a},Wz:function(){return r},gg:function(){return l},xU:function(){return o}});var t=i(3433),r=function(n){return n.cars.items},o=function(n){return n.cars.isLoading},a=function(n){return n.cars.favorites},l=function(n){var e=r(n).map((function(n){return n.make})).filter((function(n,e,i){return i.indexOf(n)===e}));return Array.from(e).map((function(n){return{value:n.toLowerCase(),label:n}}))},c=function(n){for(var e=r(n).map((function(n){return parseInt(n.rentalPrice.replace("$",""),10)})).filter((function(n,e,i){return i.indexOf(n)===e})),i=Math.max.apply(Math,(0,t.Z)(e)),o=[],a=30;a<=i;a+=10)o.push({value:a,label:a.toString()});return o}}}]);
//# sourceMappingURL=982.3e1a99b6.chunk.js.map