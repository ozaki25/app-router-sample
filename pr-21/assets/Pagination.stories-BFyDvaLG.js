import{j as a}from"./jsx-runtime-1LN5D7Kx.js";import{P as y,a as x}from"./pagination-CAZTe_Wf.js";import{L as b}from"./link-BrGH3hWB.js";import"./iframe-CBE4tfgm.js";import"./preload-helper-PPVm8Dsz.js";function j(e,s){if(s<=y)return[...Array(s)].map((r,d)=>d+1);const n=[],t=Math.max(e-x,1),o=Math.min(e+x,s);n.push(1),t>2&&n.push("ellipsis");for(let r=t;r<=o;r++)r!==1&&r!==s&&n.push(r);return o<s-1&&n.push("ellipsis"),s>1&&n.push(s),n}function P({nextPage:e,text:s}){return a.jsx(b,{href:`/blogs?page=${e}`,className:"px-3 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500",scroll:!0,children:s})}function f({text:e}){return a.jsx("span",{className:"px-3 py-2 rounded border border-gray-300 text-gray-400 cursor-not-allowed",children:e})}function S(){return a.jsx("span",{className:"px-2 text-gray-500",children:"..."})}function N({page:e}){return a.jsx("span",{className:"px-3 py-2 rounded bg-blue-600 text-white font-medium","aria-current":"page",children:e})}function h({currentPage:e,totalPages:s}){const n=j(e,s),t=e>1,o=e<s;return a.jsxs("nav",{"aria-label":"ページネーション",className:"flex items-center justify-center gap-2",children:[t?a.jsx(P,{nextPage:e-1,text:"前へ"}):a.jsx(f,{text:"前へ"}),a.jsx("div",{className:"flex items-center gap-1",children:n.map((r,d)=>r==="ellipsis"?a.jsx(S,{},`ellipsis-${d}`):r===e?a.jsx(N,{page:r},r):a.jsx(P,{nextPage:r,text:String(r)},r))}),o?a.jsx(P,{nextPage:e+1,text:"次へ"}):a.jsx(f,{text:"次へ"})]})}h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""}}};const T={title:"UI/Pagination",component:h},c={name:"最初のページ (3ページ中)",args:{currentPage:1,totalPages:3}},i={name:"中間ページ (3ページ中)",args:{currentPage:2,totalPages:3}},g={name:"最後のページ (3ページ中)",args:{currentPage:3,totalPages:3}},m={name:"多数ページ - 最初",args:{currentPage:1,totalPages:10}},u={name:"多数ページ - 中間",args:{currentPage:5,totalPages:10}},p={name:"多数ページ - 最後",args:{currentPage:10,totalPages:10}},l={name:"単一ページ",args:{currentPage:1,totalPages:1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '最初のページ (3ページ中)',
  args: {
    currentPage: 1,
    totalPages: 3
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '中間ページ (3ページ中)',
  args: {
    currentPage: 2,
    totalPages: 3
  }
}`,...i.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '最後のページ (3ページ中)',
  args: {
    currentPage: 3,
    totalPages: 3
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '多数ページ - 最初',
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: '多数ページ - 中間',
  args: {
    currentPage: 5,
    totalPages: 10
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '多数ページ - 最後',
  args: {
    currentPage: 10,
    totalPages: 10
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '単一ページ',
  args: {
    currentPage: 1,
    totalPages: 1
  }
}`,...l.parameters?.docs?.source}}};const v=["FirstPage","MiddlePage","LastPage","ManyPagesFirst","ManyPagesMiddle","ManyPagesLast","SinglePage"];export{c as FirstPage,g as LastPage,m as ManyPagesFirst,p as ManyPagesLast,u as ManyPagesMiddle,i as MiddlePage,l as SinglePage,v as __namedExportsOrder,T as default};
