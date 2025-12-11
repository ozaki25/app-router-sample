import{P as c}from"./Pagination-CCKJA6LZ.js";import"./jsx-runtime-CIYrQA5i.js";import"./iframe-DsiD5ge8.js";import"./preload-helper-PPVm8Dsz.js";import"./pagination-CF1oynzD.js";import"./link-Dgk_LhEn.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,S={title:"UI/Pagination",component:c},a={name:"最初のページ (3ページ中)",args:{currentPage:1,totalPages:3}},e={name:"中間ページ (3ページ中)",args:{currentPage:2,totalPages:3}},r={name:"最後のページ (3ページ中)",args:{currentPage:3,totalPages:3}},s={name:"多数ページ - 最初",args:{currentPage:1,totalPages:10}},n={name:"多数ページ - 中間",args:{currentPage:5,totalPages:10}},t={name:"多数ページ - 最後",args:{currentPage:10,totalPages:10}},o={name:"単一ページ",args:{currentPage:1,totalPages:1}},g={name:"ボタンの場合",args:{currentPage:2,totalPages:5,onChangePage:m("onChangePage")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '最初のページ (3ページ中)',
  args: {
    currentPage: 1,
    totalPages: 3
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '中間ページ (3ページ中)',
  args: {
    currentPage: 2,
    totalPages: 3
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '最後のページ (3ページ中)',
  args: {
    currentPage: 3,
    totalPages: 3
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '多数ページ - 最初',
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '多数ページ - 中間',
  args: {
    currentPage: 5,
    totalPages: 10
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '多数ページ - 最後',
  args: {
    currentPage: 10,
    totalPages: 10
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '単一ページ',
  args: {
    currentPage: 1,
    totalPages: 1
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'ボタンの場合',
  args: {
    currentPage: 2,
    totalPages: 5,
    onChangePage: action('onChangePage')
  }
}`,...g.parameters?.docs?.source}}};const M=["FirstPage","MiddlePage","LastPage","ManyPagesFirst","ManyPagesMiddle","ManyPagesLast","SinglePage","WithonChangePage"];export{a as FirstPage,r as LastPage,s as ManyPagesFirst,t as ManyPagesLast,n as ManyPagesMiddle,e as MiddlePage,o as SinglePage,g as WithonChangePage,M as __namedExportsOrder,S as default};
