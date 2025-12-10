import{j as p}from"./jsx-runtime-BbfJuEgr.js";import{b as o}from"./pagination-CAZTe_Wf.js";import"./iframe-n0STz_eR.js";import"./preload-helper-PPVm8Dsz.js";function c({currentPage:n,total:s}){const m=(n-1)*o+1,i=Math.min(n*o,s);return p.jsxs("div",{className:"text-sm text-gray-600",children:[m,"-",i,"件目 / 全",s,"件"]})}c.__docgenInfo={description:"",methods:[],displayName:"PaginationInfo",props:{currentPage:{required:!0,tsType:{name:"number"},description:""},total:{required:!0,tsType:{name:"number"},description:""}}};const l={title:"UI/PaginationInfo",component:c},e={name:"最初のページ",args:{currentPage:1,total:10}},r={name:"2ページ目",args:{currentPage:2,total:10}},a={name:"最後のページ",args:{currentPage:3,total:10}},t={name:"多数の項目",args:{currentPage:5,total:100}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '最初のページ',
  args: {
    currentPage: 1,
    total: 10
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '2ページ目',
  args: {
    currentPage: 2,
    total: 10
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '最後のページ',
  args: {
    currentPage: 3,
    total: 10
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '多数の項目',
  args: {
    currentPage: 5,
    total: 100
  }
}`,...t.parameters?.docs?.source}}};const I=["FirstPage","SecondPage","LastPage","ManyItems"];export{e as FirstPage,a as LastPage,t as ManyItems,r as SecondPage,I as __namedExportsOrder,l as default};
