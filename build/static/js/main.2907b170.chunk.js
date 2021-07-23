(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,c){},114:function(e,t,c){},122:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(54),i=c.n(s),a=(c(112),c(113),c(114),c(13)),o=c(14),l=c(5),d=c(2),j=Object(n.createContext)();function u(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),r=c[0],s=c[1];return Object(d.jsx)(j.Provider,{value:{toggleCartModal:function(){return s(!r)},isModalOpen:r,setIsModalOpen:s},children:e.children})}var b=c(95),O=c.n(b),h=c(27);c(53);function m(){var e=Object(o.c)(),t=e.cartCount,c=e.formattedTotalPrice,r=Object(n.useContext)(j).toggleCartModal;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"nav-cart",onClick:r,style:{cursor:"pointer"},children:Object(d.jsxs)("div",{className:"cart-amount-container",children:[Object(d.jsx)("p",{className:"cart-total",children:c}),Object(d.jsx)("span",{className:"material-icons",children:"shopping_cart"}),Object(d.jsxs)("p",{className:"cart-amount",children:["(",t,")"]})]})})})}c(122);var x=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{className:"nav-header",children:Object(d.jsx)(h.b,{to:"/shop",style:{fontWeight:600},children:"rekkids n merch"})}),Object(d.jsx)("div",{className:"nav-checkout",children:Object(d.jsx)(m,{})})]})},p=c(37),f=c.n(p),v=c(174),g=Object(n.createContext)();function N(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),r=c[0],s=c[1],i=Object(v.a)("Products",(function(){return f()("/api/products").then((function(e){return s(e.data.products)}))})),a=(i.data,i.isLoading);var o=function(e){var t=[];return e.filter((function(e){return e.genre})).map((function(e){return e.genre})).forEach((function(e){e.forEach((function(e){t.includes(e)||t.push(e)}))})),t}(r);return Object(d.jsx)(g.Provider,{value:{allProducts:r,isLoading:a,allGenres:o},children:e.children})}var k=c(169),y=c(170),C=c(171),S=(c(144),c(145),c(146),function(e){var t=e.stock;return Object(d.jsx)("p",{className:"product-card-stock",style:t?{color:"inherit"}:{color:"red"},children:t?"In Stock":"Sold Out"})});function I(e){return Object(o.b)({value:e.price,currency:e.currency,language:navigator.language})}function L(e){var t=e.product,c=t.stock,r=t.id,s=Object(o.c)(),i=s.addItem,a=s.cartDetails,l=Object(n.useContext)(j).setIsModalOpen;return Object(d.jsx)(d.Fragment,{children:(a[r]?c-a[r].quantity:c)>0&&Object(d.jsx)("span",{className:"material-icons card-cart",onClick:function(e){return function(){i(e),setTimeout((function(){return l(!0)}),100)}}(t),style:{cursor:"pointer"},children:"add_shopping_cart"})})}function M(e){var t=e.product,c=t.image,n=t.artist,r=t.name,s=t.type,i=t.stock,a="/shop/"+r.replaceAll(" ","-"),o=I(t);return Object(d.jsxs)("div",{className:"product-card",children:[Object(d.jsx)(h.b,{to:a,children:Object(d.jsx)("img",{src:c,alt:"",className:"product-card-img"})}),Object(d.jsxs)("div",{className:"product-card-bottom",children:[Object(d.jsxs)("div",{className:"product-card-bottom-left",children:[Object(d.jsx)(h.b,{to:a,children:Object(d.jsx)("h2",{className:"product-artist",children:n||""})}),Object(d.jsx)(h.b,{to:a,children:Object(d.jsxs)("h3",{className:"product-title",children:[" ",r," "]})}),Object(d.jsxs)("p",{className:"product-card-type",children:["Type: ",s]}),Object(d.jsx)(S,{stock:i})]}),Object(d.jsxs)("div",{className:"product-card-bottom-right",children:[Object(d.jsx)(L,{product:t}),Object(d.jsx)("p",{className:"product-card-price",children:o})]})]})]})}var E=function(e){var t=e.products;return e.isLoading?Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"LOADING..."})}):Object(d.jsx)("div",{className:"products-grid",children:t.map((function(e){return Object(d.jsx)(M,{product:e},e.id)}))})},P=function(e){var t=e.content;return Object(d.jsxs)(C.b,{style:{display:"flex",flexDirection:"row"},children:[t,Object(d.jsx)("span",{class:"material-icons",children:"expand_more"})]})};function D(){var e=Object(n.useContext)(g),t=e.allProducts,c=e.isLoading,r=e.allGenres,s=Object(n.useState)(t),i=Object(l.a)(s,2),a=i[0],o=i[1],j=Object(n.useState)(!1),u=Object(l.a)(j,2),b=u[0],O=u[1],h=Object(n.useState)("All"),m=Object(l.a)(h,2),x=m[0],p=m[1],f=Object(n.useState)("Latest"),v=Object(l.a)(f,2),N=v[0],S=v[1],I=Object(n.useState)("Genre"),L=Object(l.a)(I,2),M=L[0],D=L[1];if(Object(n.useEffect)((function(){w(x)}),[x]),Object(n.useEffect)((function(){var e;o("Lowest"===(e=N)?a.slice().sort((function(e,t){return e.price-t.price})):"Highest"===e?a.slice().sort((function(e,t){return t.price-e.price})):a.slice().sort((function(e,t){return e.id-t.id})))}),[N]),Object(n.useEffect)((function(){"all"===M?w("Music"):o(t.filter((function(e){return"Music"===e.category&&e.genre.includes(M)})))}),[M]),Object(n.useEffect)((function(){return document.title="shop - rekkids n merch"})),c)return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"LOADING..."})});function w(e){O("Music"===e),"All"===e?o(t):(console.log(e),o(t.filter((function(t){return t.category===e}))))}return Object(d.jsxs)("div",{className:"shop-wrapper",children:[Object(d.jsx)("h1",{style:{fontSize:"2.5em",fontWeight:"600",fontStyle:"italic",paddingBottom:".5em"},children:"Shop"}),Object(d.jsxs)(k.a,{paddingBottom:"1em",width:"350px",children:[Object(d.jsx)("p",{children:"Sort By:"}),Object(d.jsx)(y.a,{}),Object(d.jsxs)(C.a,{children:[Object(d.jsx)(P,{content:x}),Object(d.jsxs)(C.d,{style:{border:"1px solid black",borderRadius:"0",padding:"0"},children:[Object(d.jsx)(C.c,{onClick:function(){return p("Music")},children:"Music"}),Object(d.jsx)(C.c,{onClick:function(){return p("Merch")},children:"Merch"}),Object(d.jsx)(C.c,{onClick:function(){return p("All")},children:"All"})]})]}),Object(d.jsx)(y.a,{}),Object(d.jsxs)(C.a,{children:[Object(d.jsx)(P,{content:N}),Object(d.jsxs)(C.d,{style:{border:"1px solid black",borderRadius:"0",padding:"0"},children:[Object(d.jsx)(C.c,{onClick:function(){return S("Highest")},children:"Price: Highest"}),Object(d.jsx)(C.c,{onClick:function(){return S("Lowest")},children:"Price: Lowest"}),Object(d.jsx)(C.c,{onClick:function(){return S("Latest")},children:"Latest"})]})]}),Object(d.jsx)(y.a,{}),b&&Object(d.jsxs)(C.a,{children:[Object(d.jsx)(P,{content:M}),Object(d.jsxs)(C.d,{style:{border:"1px solid black",borderRadius:"0",padding:"0"},children:[r.map((function(e){return Object(d.jsx)(C.c,{onClick:function(){return D(e)},children:e},e)})),Object(d.jsx)(C.c,{onClick:function(){return D("all")},children:"all"})]})]})]}),Object(d.jsx)(E,{products:a.length?a:t,isLoading:c})]})}c(150);function w(){var e,t=Object(o.c)(),c=t.addItem,r=t.cartDetails,s=Object(n.useContext)(g).allProducts,i=Object(n.useState)(1),u=Object(l.a)(i,2),b=u[0],O=u[1],h=Object(n.useState)(!1),m=Object(l.a)(h,2),x=m[0],p=m[1],N=Object(n.useContext)(j).setIsModalOpen,k=function(){p(!x)},y=Object(a.g)().item;Object(n.useEffect)((function(){return document.title="".concat(y.replaceAll("-"," ")," - rekkids n merch")}));var C=Object(v.a)(["Product",y],(function(){return f()("/api/products/".concat(y)).then((function(e){return e.data.product}))})),L=C.data,M=C.isLoading,P=C.isError,D=C.error;if(M)return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"LOADING..."})});if(P)return Object(d.jsx)("div",{children:D.message});var w=L.image,A=L.name,q=L.year,R=L.condition,T=L.artist,G=L.stock,_=L.description,F=L.category,B=L.genre,H=L.id,U="Music"===F,J=I(L);function z(){return r[H]?G-r[H].quantity:G}return Object(d.jsxs)("div",{className:"product-page",children:[x&&Object(d.jsx)("div",{className:"image-large-overlay",onClick:k,children:Object(d.jsxs)("div",{className:"image-large-modal",children:[Object(d.jsx)("p",{onClick:k,children:"x"}),Object(d.jsx)("img",{src:w,alt:A,className:"large-img"})]})}),Object(d.jsx)("h1",{style:{fontSize:"2.5em",fontWeight:"600",fontStyle:"italic",paddingBottom:".5em"},children:A}),Object(d.jsxs)("div",{className:"product-wrapper",children:[Object(d.jsxs)("div",{className:"product-left",children:[Object(d.jsx)("img",{src:w,alt:A,className:"product-img",onClick:k}),U&&Object(d.jsxs)("div",{className:"product-year-condition",children:[Object(d.jsxs)("p",{className:"product-info",children:[Object(d.jsx)("span",{children:"Year:"}),q]}),Object(d.jsxs)("p",{className:"product-info",children:[Object(d.jsx)("span",{children:"Condition:"}),R]})]})]}),Object(d.jsxs)("div",{className:"product-right",children:[Object(d.jsx)("h3",{className:"product-artist",children:T}),Object(d.jsxs)("div",{className:"product-stock",children:[null!==(e=G>0)&&void 0!==e?e:G," ",Object(d.jsx)(S,{stock:G})]}),Object(d.jsxs)("div",{className:"incrementer-and-button",children:[z()>0&&Object(d.jsxs)("div",{className:"cart-item-quantity",children:[Object(d.jsx)("button",{className:"cart-quantity-button",onClick:function(){b>1&&O(b-1)},children:"-"}),Object(d.jsx)("div",{className:"cart-quantity",children:Object(d.jsx)("input",{type:"number",value:b,min:1,max:z(),className:"product-quantity"})}),Object(d.jsx)("button",{className:"cart-quantity-button",onClick:function(){O(b+1)},disabled:b>=z(),children:"+"})]}),Object(d.jsxs)("button",{className:"product-big-cart-button",disabled:!z(),onClick:function(){c(L,{count:Number(b)}),setTimeout((function(){return N(!0)}),100),O(1)},children:[G>0&&Object(d.jsxs)("p",{children:["$",Number(J.slice(2))*b]}),G?z()?"Add To Cart":"Max Added":"Out Of Stock"]})]}),Object(d.jsx)("div",{className:"product-description",children:Object(d.jsx)("p",{className:"product-description",children:_})}),U&&Object(d.jsxs)("div",{className:"genres",children:[Object(d.jsx)("span",{style:{textDecoration:"underline"},children:"Genres:"}),B.map((function(e){return Object(d.jsx)("p",{style:{display:"inline"},className:"genre-link",children:e},e)}))]})]})]}),Object(d.jsxs)("div",{className:"similar-items",children:[Object(d.jsx)("h3",{style:{fontWeight:"500"},children:"Similar items:"}),Object(d.jsx)(E,{products:function(e){return e.filter((function(e){return e.category===F&&e.id!==H}))}(s)})]})]})}c(151);function A(e){var t=e.cartItem,c=e.itemRemoved,n=e.itemUpdated,r=Object(o.c)(),s=r.removeItem,i=r.incrementItem,a=r.decrementItem,l=t.image,j=t.name,u=t.stock,b=t.quantity,O=t.id,h=t.formattedValue;function m(e,t){"remove"===e?(s(t),c()):"increment"===e?(i(t),n()):(a(t),n())}var x=I(t);return Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsx)("div",{className:"cart-img-container",children:Object(d.jsx)("img",{src:l,alt:j,className:"cart-img"})}),Object(d.jsxs)("div",{className:"cart-item-info",children:[Object(d.jsxs)("div",{className:"cart-item-info-top",children:[Object(d.jsxs)("div",{className:"info-top-left",children:[Object(d.jsx)("h3",{className:"cart-item-name",children:j}),Object(d.jsxs)("p",{className:"cart-item-price",children:[x," x ",b]})]}),Object(d.jsx)("div",{className:"info-top-right",children:Object(d.jsx)("div",{className:"remove-item",onClick:function(){return m("remove",O)},children:Object(d.jsx)("span",{className:"material-icons",children:"delete"})})})]}),Object(d.jsxs)("div",{className:"cart-item-bottom",children:[Object(d.jsxs)("div",{className:"cart-item-quantity",children:[Object(d.jsx)("button",{className:"cart-quantity-button",onClick:function(){return m("decrement",O)},children:"-"}),Object(d.jsx)("div",{className:"cart-quantity",children:b}),Object(d.jsx)("button",{className:"cart-quantity-button",onClick:function(){return m("increment",O)},disabled:b>=u,children:"+"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"item-total",children:h.slice(1)})})]})]})]})}c(152);var q=c(16),R=c.n(q),T=c(33);var G=c(68),_=function(){return Object(G.b)("Item Updated")},F=function(){return Object(G.b)("Item Removed")};function B(e){var t=Object(o.c)(),c=t.cartDetails,r=t.clearCart,s=t.formattedTotalPrice,i=Object(n.useContext)(j),a=i.toggleCartModal,l=(i.isModalOpen,Object.keys(c).map((function(e){return c[e]}))),u=function(){var e=Object(o.c)(),t=e.redirectToCheckout,c=e.cartDetails;function n(){return(n=Object(T.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/checkout-sessions",c).then((function(e){return e.data})).catch((function(e){console.log("Error During Checkout",e)}));case 2:(n=e.sent)&&(console.log(n),t({sessionId:n.id}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return n.apply(this,arguments)}}();return console.log(e),Object(d.jsxs)("div",{className:"cart-modal-wrap",children:[Object(d.jsx)("div",{className:"cart-modal-overlay",onClick:a}),Object(d.jsxs)("div",{className:"cart-modal",children:[Object(d.jsxs)("div",{className:"cart-modal-top",children:[Object(d.jsx)(G.a,{toastOptions:{className:"",duration:1e3,style:{border:"1px solid black",borderRadius:"0"}},containerStyle:{position:"absolute",top:0,right:0}}),Object(d.jsx)("h2",{className:"cart-modal-heading",children:"Your Cart"}),Object(d.jsx)("span",{className:"close-modal",onClick:a,style:{cursor:"pointer",fontWeight:"600"},children:"X"})]}),Object(d.jsx)("div",{className:"cart-item-grid",children:l.map((function(e){return Object(d.jsx)(A,{cartItem:e,itemUpdated:_,itemRemoved:F},e.id)}))}),Object(d.jsxs)("div",{className:"cart-modal-bottom",children:[Object(d.jsxs)("div",{className:"cart-modal-subtotal-div",children:[Object(d.jsx)("p",{children:"Subtotal:"}),Object(d.jsx)("p",{className:"cart-modal-subtotal",children:s})]}),Object(d.jsxs)("div",{className:"bottom-buttons",children:[Object(d.jsx)("button",{className:"cart-modal-button",onClick:u,children:"Checkout"}),Object(d.jsx)("button",{className:"cart-modal-button",onClick:a,children:"Continue Shopping"}),Object(d.jsx)("button",{className:"cart-modal-button",onClick:r,style:{cursor:"pointer"},children:"Clear Cart"})]})]})]})]})}var H=function(){var e=Object(o.c)(),t=e.clearCart,c=e.cartCount,n=new URLSearchParams(Object(a.f)().search).get("session_id"),r=Object(v.a)("Result",(function(){return n?f()("/api/checkout-sessions/".concat(n)).then((function(e){return e.data})):null})),s=r.data,i=r.isLoading,l=r.isError;if(s&&c>0&&t(),i)return Object(d.jsx)("div",{children:"Loading..."});if(!s&&!i)return Object(d.jsx)("div",{children:"No purchase found."});if(l)return Object(d.jsx)("div",{children:"Error loading result page"});var j=Object(o.b)({value:s.amount_total,currency:s.currency,language:navigator.language});return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Thanks for your purchase! Your order is being processed."}),Object(d.jsxs)("p",{children:["Total: ",j]}),Object(d.jsxs)("p",{children:["Email: ",s.customer_details.email]})]})};var U=function(){var e=Object(n.useContext)(j).isModalOpen;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{mode:"checkout-session",stripe:"pk_test_51JEYLzI5axcIykJko2VXlodil22iVSjZ58IFvODU039VdHUKC9MxGLPLfZP9dn1aagi131H5BDoNOJsKuj2AvgJj00KNnHunqn",currency:"AUD",children:[e&&Object(d.jsx)(B,{}),Object(d.jsx)(x,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(O.a,{style:{height:"2em",fontStyle:"italic",fontSize:"2em",zIndex:0},speed:"50",gradient:!1,children:"FREE SHIPPING ON ORDERS OVER $100!"}),Object(d.jsxs)(a.c,{children:[Object(d.jsx)(a.a,{exact:!0,path:"/",children:Object(d.jsx)(D,{})}),Object(d.jsx)(a.a,{path:"/shop/:item",children:Object(d.jsx)(w,{})}),Object(d.jsx)(a.a,{path:"/shop",children:Object(d.jsx)(D,{})}),Object(d.jsx)(a.a,{path:"/result",children:Object(d.jsx)(H,{})})]})]})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,175)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))},z=c(173),V=c(96),W=c(172),Y=new z.a;i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(V.a,{client:Y,children:Object(d.jsx)(h.a,{children:Object(d.jsx)(W.a,{children:Object(d.jsx)(u,{children:Object(d.jsx)(N,{children:Object(d.jsx)(U,{})})})})})})}),document.getElementById("root")),J()}},[[153,1,2]]]);
//# sourceMappingURL=main.2907b170.chunk.js.map