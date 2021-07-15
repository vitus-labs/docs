(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[414],{63946:function(e,t,n){"use strict";n.d(t,{zt:function(){return r.zt},JX:function(){return C},W2:function(){return g},X2:function(){return y},rS:function(){return k}});var r=n(63165),o=n(67294),i=n(85019);const l="@vitus-labs/coolgrid",c=["columns","size","gap","padding","gutter","colCss","colComponent","rowCss","rowComponent","contentAlignX"],s=e=>Number.isFinite(e),a=e=>s(e)&&e>0,u=e=>(0,i.CE)(e,c);var d=(0,o.createContext)({});const f=e=>{const{theme:t}=(0,o.useContext)(r.Do),n=((e,t)=>(0,i.ei)(e,t))(e,c);return{...((e={},t={})=>({columns:(0,i.U2)(e,"columns")||(0,i.U2)(t,"grid.columns")||(0,i.U2)(t,"coolgrid.columns"),containerWidth:(0,i.U2)(e,"width")||(0,i.U2)(t,"grid.container")||(0,i.U2)(t,"coolgrid.container")}))(n,t),...n}};var p=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>t`
  max-width: ${(0,r.S3)([e.width],n)};
  ${(0,r.wV)(e.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;const g=({children:e,component:t,css:n,width:r,...i})=>{const{containerWidth:l={},...c}=f(i);let s=l;return r&&(s="function"===typeof r?r(l):r),o.createElement(p,{...u(i),as:t,$coolgrid:{width:s,extraStyles:n}},o.createElement(d.Provider,{value:c},e))},m=`${l}/Container`;g.displayName=m,g.pkgName=l,g.VITUS_LABS__COMPONENT=m;var v=(0,o.createContext)({});var h=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  flex-direction: row;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{gap:o,gutter:l,contentAlignX:c,extraStyles:a}=e;return t`
    ${(({gap:e,gutter:t},{rootSize:n})=>{if(!s(e))return"";const o=e=>(0,r.S3)([e],n),l=e/2*-1,c=s(t)?t-e/2:e/2;return i.vc.css`
    margin: ${o(c)} ${o(l)};
  `})({gap:o,gutter:l},{rootSize:n})};
    ${u=c,u?i.vc.css`
    justify-content: ${r.cP[u]};
  `:""};
    ${(0,r.wV)(a)};
  `;var u},css:i.vc.css,normalize:!0})};
`;const y=({children:e,component:t,css:n,contentAlignX:r,...i})=>{const l=(0,o.useContext)(d),{columns:c,gap:s,gutter:a,rowComponent:p,rowCss:g,contentAlignX:m,...y}=f({...l,...i}),b={...u(i),as:t||p,$coolgrid:{contentAlignX:r||m,columns:c,gap:s,gutter:a,extraStyles:n||g}};return o.createElement(h,{...b},o.createElement(v.Provider,{value:{...y,columns:c,gap:s,gutter:a}},e))},b=`${l}/Row`;y.displayName=b,y.pkgName=l,y.VITUS_LABS__COMPONENT=b;const w=({size:e,columns:t,gap:n,RNparentWidth:o},{rootSize:l})=>{if(!((e,t)=>a(e)&&a(t))(e,t))return"";const c=e/t*100,s=a(n)?`calc(${c}% - ${n}px)`:`${c}%`;return i.vc.css`
      flex-grow: 0;
      flex-shrink: 0;
      max-width: ${(0,r.S3)([s],l)};
      flex-basis: ${(0,r.S3)([s],l)};
    `},x=(e,t,n)=>{if(!s(t))return"";const o=`${e}: ${(0,r.S3)([t/2],n)}`;return i.vc.css`
      ${o};
    `};var E=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  position: relative;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-direction: column;
  justify-content: stretch;

  ${(0,r.EL)({key:"$coolgrid",styles:({theme:e,css:t,rootSize:n})=>{const{size:o,columns:i,gap:l,padding:c,extraStyles:a,RNparentWidth:u}=e;var d;return s(d=o)&&0!==d||void 0===d?t`
      left: initial;
      position: relative;
      ${w({size:o,columns:i,gap:l,RNparentWidth:u},{rootSize:n})};
      ${x("padding",c,n)};
      ${x("margin",l,n)};
      ${(0,r.wV)(a)};
    `:t`
    left: -9999px;
    position: fixed;
    margin: 0;
    padding: 0;
  `},css:i.vc.css,normalize:!0})};
`;const C=({children:e,component:t,css:n,...r})=>{const i=(0,o.useContext)(v),{colCss:l,colComponent:c,columns:s,gap:a,size:d,padding:p}=f({...i,...r});return o.createElement(E,{...u(r),as:t||c,$coolgrid:{columns:s,gap:a,size:d,padding:p,extraStyles:n||l}},e)},$=`${l}/Col`;C.displayName=$,C.pkgName=l,C.VITUS_LABS__COMPONENT=$;var k={rootSize:16,breakpoints:{xs:0,sm:576,md:768,lg:992,xl:1200},grid:{columns:12,container:{xs:"100%",sm:540,md:720,lg:960,xl:1140}}}},55957:function(e,t,n){"use strict";n.d(t,{W_:function(){return h},aV:function(){return x},C6:function(){return k},h_:function(){return C},xv:function(){return L}});var r=n(63165),o=n(67294),i=n(85019),l=n(73935);const c="@vitus-labs/elements",s={button:!0,fieldset:!0,legend:!0},a=i.vc.css`
    box-sizing: border-box;
  `;var u=i.vc.styled(i.vc.component)`
  position: relative;
  ${a};

  ${({$isInner:e})=>e&&i.vc.css`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  `};

  ${(0,r.EL)({key:"$element",styles:({theme:e,css:t})=>t`
    ${"block"===e.contentAlignY&&t`
      height: 100%;
    `};

    ${t`
      ${({$isInner:n})=>!n&&t`
          display: ${e.block?"flex":"inline-flex"};
        `};

      ${({$needsFix:n})=>n&&e.block&&t`
          flex-direction: column;
          width: 100%;
        `};
    `};

    ${"block"===e.contentAlignY&&t`
      height: 100%;
    `};

    ${(0,r.Kv)({direction:e.direction,alignX:e.alignX,alignY:e.alignY})};

    ${e.extraStyles&&(0,r.wV)(e.extraStyles)};
  `,css:i.vc.css,normalize:!0})};
`;const d=(0,o.forwardRef)((({children:e,tag:t,block:n,extendCss:r,direction:i,alignX:l,alignY:c,equalCols:a,isInline:d,...f},p)=>{const g={},m={...f,...g,ref:p,as:t};return!f.dangerouslySetInnerHTML&&t&&(e=>s[e])(t)?o.createElement(u,{...m,$needsFix:!0,$element:{block:n,extraStyles:r}},o.createElement(u,{as:d?"span":"div",$isInner:!0,$element:{direction:i,alignX:l,alignY:c,equalCols:a}},e)):o.createElement(u,{...m,$element:{block:n,direction:i,alignX:l,alignY:c,equalCols:a,extraStyles:r}},e)}));var f=i.vc.styled(i.vc.component)`
  ${i.vc.css`
      box-sizing: border-box;
    `};

  display: flex;
  align-self: stretch;
  flex-wrap: wrap;

  ${({$contentType:e})=>"content"===e&&i.vc.css`
    flex: 1;
  `};

  ${(0,r.EL)({key:"$element",styles:({css:e,theme:t,rootSize:n})=>e`
  ${(0,r.Kv)({direction:t.direction,alignX:t.alignX,alignY:t.alignY})};

  ${t.equalCols&&e`
    flex: 1;
  `};

  ${t.gap&&e`
    ${({$contentType:o})=>(({direction:e,type:t,value:n,css:r})=>{if(!e||!t)return;return r`
    ${`${{inline:{before:"margin-right",after:"margin-left"},rows:{before:"margin-bottom",after:"margin-top"}}[e][t]}: ${n};`};
  `})({direction:t.parentDirection,type:o,value:(0,r.S3)([t.gap],n),css:e})}
  `};

  ${t.extraStyles&&(0,r.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!0})};
`;var p=(0,o.memo)((({contentType:e,tag:t,parentDirection:n,direction:r,alignX:i,alignY:l,equalCols:c,gap:s,extendCss:a,...u})=>{const d={};return o.createElement(f,{as:t,$contentType:e,$element:{parentDirection:n,direction:r,alignX:i,alignY:l,equalCols:c,gap:s,extraStyles:a},...d,...u})}));const g={span:!0,a:!0,button:!0,input:!0,label:!0,select:!0,textarea:!0,br:!0,img:!0,strong:!0,small:!0,code:!0,b:!0,big:!0,i:!0,tt:!0,abbr:!0,acronym:!0,cite:!0,dfn:!0,em:!0,kbd:!0,samp:!0,var:!0,bdo:!0,map:!0,object:!0,q:!0,script:!0,sub:!0,sup:!0},m={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,source:!0,track:!0,wbr:!0},v="inline",h=(0,o.forwardRef)((({innerRef:e,tag:t,label:n,content:r,children:l,beforeContent:c,afterContent:s,block:a,equalCols:u,gap:f,vertical:h,direction:y,alignX:b="left",alignY:w="center",css:x,contentCss:E,beforeContentCss:C,afterContentCss:$,contentDirection:k="inline",contentAlignX:S="left",contentAlignY:N="center",beforeContentDirection:L="inline",beforeContentAlignX:O="left",beforeContentAlignY:_="center",afterContentDirection:z="inline",afterContentAlignX:R="left",afterContentAlignY:A="center",...X},P)=>{const T=!!X.dangerouslySetInnerHTML||t&&(e=>m[e])(t),U={ref:P||e,extendCss:x,tag:t,block:a,contentDirection:k,alignX:S,alignY:N,as:void 0};if(T)return o.createElement(d,{...U,...X});const I=!c&&!s,Y=l||r||n,M=(e=>g[e])(t),D=M?"span":void 0,{wrapperDirection:V,wrapperAlignX:j,wrapperAlignY:q}=(()=>{let e,t=b,n=w;return I?(k&&(e=k),S&&(t=S),N&&(n=N)):e=y||(void 0!==h&&null!==h?(e=>{if(null==e)return;const t=typeof e;return"boolean"===t?e?"rows":"inline":Array.isArray(e)?e.map((e=>e?"rows":"inline")):"object"===t?Object.keys(e).reduce(((t,n)=>(t[n]=e[n]?"rows":"inline",t)),{}):void 0})(h):v),{wrapperDirection:e,wrapperAlignX:t,wrapperAlignY:n}})(),B=(0,o.useMemo)((()=>(0,i.UE)(c)),[c]),W=(0,o.useMemo)((()=>(0,i.UE)(s)),[s]);return o.createElement(d,{...X,...U,isInline:M,direction:V,alignX:j,alignY:q},c&&o.createElement(p,{tag:D,contentType:"before",parentDirection:V,extendCss:C,direction:L,alignX:O,alignY:_,equalCols:u,gap:f},B),I?(0,i.UE)(Y):o.createElement(p,{tag:D,contentType:"content",parentDirection:V,extendCss:E,direction:k,alignX:S,alignY:N,equalCols:u},(0,i.UE)(Y)),s&&o.createElement(p,{tag:D,contentType:"after",parentDirection:V,extendCss:$,direction:z,alignX:R,alignY:A,equalCols:u,gap:f},(0,i.UE)(W)))})),y=`${c}/Element`;h.displayName=y,h.pkgName=c,h.VITUS_LABS__COMPONENT=y;const b=({i:e,length:t})=>{const n=e+1;return{index:e,first:1===n,last:n===t,odd:n%2===1,even:n%2===0,position:n}},w=e=>{const{itemKey:t,valueName:n,children:r,component:l,data:c,wrapComponent:s,wrapProps:a,itemProps:u}=e,d=(e,t)=>(0,i.UE)(e,t),f="function"===typeof u?(e,t)=>u(e,t):()=>u,p="function"===typeof a?(e,t)=>a(e,t):()=>a,g=e=>{const r=e.filter((e=>null!==e||void 0!==e)),{length:i}=r;if(0===r.length)return null;return r.map(((e,r)=>{const c=((e,n)=>"function"===typeof t?t(e,n):n)(e,r),g=n||"children",m=b({i:r,length:i}),v={...u?f({[g]:e},m):{},[g]:e},h=a?p({[g]:e},m):{};return s?o.createElement(s,{key:c,...h},d(l,v)):d(l,{key:c,...v})}))},m=e=>{const n=e.filter((e=>!(0,i.xb)(e))),{length:r}=n;if(0===n.length)return null;return n.map(((e,n)=>{const{component:i,...c}=e,g=i||l,m=((e,n)=>t?"function"===typeof t?t(e,n):"string"===typeof t?e[t]:n:e.key||e.id||e.itemId||n)(c,n),v=b({i:n,length:r}),h={...u?f(e,v):{},...c},y=a?p(e,v):{};return s&&!i?o.createElement(s,{key:m,...y},d(g,h)):d(g,{key:m,...h})}))};return(()=>{if(r)return(()=>{const{length:e}=r;return u||s?o.Children.map(r,((t,n)=>{const r=n,l=b({i:n,length:e}),c=u?f({},l):{},g=a?p({},l):{};return s?o.createElement(s,{key:r,...g},d(t,c)):(0,i.UE)(t,{key:n,...c})})):r})();if(l&&Array.isArray(c)){const e=c.filter((e=>null!==e&&void 0!==e));if(e.every((e=>"string"===typeof e||"number"===typeof e)))return g(e);return e.every((e=>"object"===typeof e))?m(e):null}return null})()};w.isIterator=!0,w.RESERVED_PROPS=["children","component","wrapComponent","data","itemKey","valueName","itemProps","wrapProps"],w.displayName="vitus-labs/elements/Iterator";const x=(0,o.forwardRef)((({rootElement:e=!1,...t},n)=>{const r=o.createElement(w,{...(0,i.ei)(t,w.RESERVED_PROPS)});return e?o.createElement(h,{ref:n,...(0,i.CE)(t,w.RESERVED_PROPS)},r):r})),E=`${c}/List`;x.displayName=E,x.pkgName=c,x.VITUS_LABS__COMPONENT=E;const C=({position:e=document.body,tag:t="div",children:n})=>{const[r]=(0,o.useState)(document.createElement(t));return(0,o.useEffect)((()=>(e.appendChild(r),()=>{e.removeChild(r)})),[t,e]),l.createPortal(n,r)},$=`${c}/Portal`;C.displayName=$,C.pkgName=c,C.VITUS_LABS__COMPONENT=$;const k=({children:e,trigger:t,DOMLocation:n,refName:l="ref",triggerRefName:c,contentRefName:s,isOpen:a=!1,openOn:u="click",closeOn:d="click",type:f="dropdown",align:p="bottom",position:g="fixed",alignX:m="left",alignY:v="bottom",offsetX:h=0,offsetY:y=0,throttleDelay:b=200})=>{const{rootSize:w}=(0,o.useContext)(i.Do),[x,E]=(0,o.useState)(a),[$,k]=(0,o.useState)(p),[S,N]=(0,o.useState)(m),[L,O]=(0,o.useState)(v),_=(0,o.useRef)(),z=(0,o.useRef)();(0,o.useEffect)((()=>{x&&P()}),[x]),(0,o.useEffect)((()=>("click"!==u&&"click"!==d&&"triggerClick"!==d||window.addEventListener("click",T,!1),"hover"!==u&&"hover"!==d||window.addEventListener("mousemove",I,!1),window.addEventListener("resize",U,!1),window.addEventListener("scroll",U,!1),window.addEventListener("scroll",I,!1),()=>{window.removeEventListener("resize",U,!1),window.removeEventListener("scroll",U,!1),window.removeEventListener("scroll",I,!1),window.removeEventListener("click",T,!1),window.removeEventListener("mousemove",I,!1)})),[u,d,x]);const R=e=>!!(e&&e.target&&_.current)&&(_.current.contains(e.target)||e.target===_.current),A=()=>{E(!0),"modal"===f&&document.body&&(document.body.style.overflow="hidden")},X=()=>{E(!1),"modal"===f&&document.body&&(document.body.style.overflow="auto")},P=()=>{if(!x)return;if(!_.current||!z.current)return;const e=_.current.getBoundingClientRect(),t=z.current.getBoundingClientRect(),n={position:g};if(["dropdown","tooltip","popover"].includes(f)){if(["top","bottom"].includes(p)){const r=e.top-y-t.height,o=e.bottom+y,i=e.left-h,l=e.right+h-t.width;if("top"===p){const e=r>=0;k(e?"top":"bottom"),n.top=e?r:o}else{const e=o+t.height<=window.innerHeight;k(e?"bottom":"top"),n.top=e?o:r}switch(m){case"right":{const e=l>=0;N(e?"right":"left"),n.left=e?l:i;break}case"center":n.left=e.left+(e.right-e.left)/2-t.width/2;break;case"left":default:{const e=i+t.width<=window.innerWidth;N(e?"left":"right"),n.left=e?i:l;break}}}else if(["left","right"].includes(p)){const r=e.left-h-t.width,o=e.right+h,i=e.top+y,l=e.bottom-y-t.height;if("left"===p){const e=r>=0;k(e?"left":"right"),n.left=e?r:o}else{const e=o+t.width<=window.innerWidth;k(e?"right":"left"),n.left=e?o:r}switch(v){case"top":{const e=i+t.height<=window.innerHeight;O(e?"top":"bottom"),n.top=e?i:l;break}case"center":n.top=e.top-y+(e.bottom-e.top)/2-t.height/2;break;case"bottom":default:{const e=l>=0;O(e?"bottom":"top"),n.top=e?l:i}}}}else if("modal"===f){switch(m){case"right":n.right=h;break;case"left":n.left=h;break;case"center":default:n.left=window.innerWidth/2-t.width/2}switch(v){case"top":n.top=y;break;case"center":n.top=window.innerHeight/2-t.height/2;break;case"bottom":default:n.bottom=y}}z.current.style.position=n.position,z.current.style.top=(0,r.S3)([n.top],w),z.current.style.bottom=(0,r.S3)([n.bottom],w),z.current.style.left=(0,r.S3)([n.left],w),z.current.style.right=(0,r.S3)([n.right],w)},T=e=>{x||("hover"===u&&"mousemove"===e.type&&R(e)&&A(),"click"===u&&"click"===e.type&&R(e)&&A()),x&&("hover"===d&&"mousemove"===e.type&&(R(e)||(e=>!!(e&&e.target&&z.current)&&(z.current.contains(e.target)||e.target===z.current))(e)||X()),"hover"===d&&"scroll"===e.type&&X(),"click"===d&&"click"===e.type&&X(),"triggerClick"===d&&"click"===e.type&&R(e)&&X())},U=(0,i.P2)(P,b),I=(0,i.P2)(T,b),Y="manual"===u||"manual"===d;return o.createElement(o.Fragment,null,(0,i.UE)(t,{[c||l]:_,active:x,...Y?{showContent:A,hideContent:X}:{}}),x&&o.createElement(C,{position:n},(0,i.UE)(e,{[s||l]:z,active:x,align:$,alignX:S,alignY:L,...Y?{showContent:A,hideContent:X}:{}})))},S=`${c}/Ovelay`;k.displayName=S,k.pkgName=c,k.VITUS_LABS__COMPONENT=S;var N=i.vc.styled(i.vc.textComponent)`
  color: inherit;
  font-weight: normal;
  line-height: 1;

  ${(0,r.EL)({key:"$text",styles:({css:e,theme:t})=>e`
  ${t.extraStyles&&(0,r.wV)(t.extraStyles)};
`,css:i.vc.css,normalize:!1})};
`;const L=(0,o.forwardRef)((({paragraph:e,label:t,children:n,tag:r,extendCss:i,...l},c)=>{return s=e?"p":r,o.createElement(N,{ref:c,as:s,$text:{extraStyles:i},...l},n||t);var s})),O=`${c}/Text`;L.displayName=O,L.pkgName=c,L.VITUS_LABS__COMPONENT=O,L.isText=!0},92167:function(e,t,n){"use strict";var r=n(53848),o=n(69448);t.default=void 0;var i=o(n(67294)),l=n(29414),c=n(34651),s=n(7426),a={};function u(e,t,n,r){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;a[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=(0,c.useRouter)(),d=i.default.useMemo((function(){var t=(0,l.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,l.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,p=d.as,g=e.children,m=e.replace,v=e.shallow,h=e.scroll,y=e.locale;"string"===typeof g&&(g=i.default.createElement("a",null,g));var b=(t=i.Children.only(g))&&"object"===typeof t&&t.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),x=r(w,2),E=x[0],C=x[1],$=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);(0,i.useEffect)((function(){var e=C&&n&&(0,l.isLocalURL)(f),t="undefined"!==typeof y?y:o&&o.locale,r=a[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,f,p,{locale:t})}),[p,f,C,y,n,o]);var k={ref:$,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,o,f,p,m,v,h,y)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof y?y:o&&o.locale,N=o&&o.isLocaleDomain&&(0,l.getDomainLocale)(p,S,o&&o.locales,o&&o.domainLocales);k.href=N||(0,l.addBasePath)((0,l.addLocale)(p,S,o&&o.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7426:function(e,t,n){"use strict";var r=n(53848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,s=(0,o.useRef)(),a=(0,o.useState)(!1),u=r(a,2),d=u[0],f=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,l=r.elements;return l.set(e,t),i.observe(e),function(){l.delete(e),i.unobserve(e),0===l.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,o.useEffect)((function(){if(!l&&!d){var e=(0,i.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[d]),[p,d]};var o=n(67294),i=n(73447),l="undefined"!==typeof IntersectionObserver;var c=new Map},41664:function(e,t,n){e.exports=n(92167)},38347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},11163:function(e,t,n){e.exports=n(34651)}}]);