import{C as o}from"./CommentList-D7Em5QHx.js";import"./jsx-runtime-1Jf30tPh.js";import"./iframe-BJVYcx_L.js";import"./preload-helper-PPVm8Dsz.js";import"./Card-Dpe57IcQ.js";import"./Pagination-Dhu_DQWz.js";import"./pagination-CF1oynzD.js";import"./link-rnlyUcqQ.js";import"./date-w64JdHvI.js";const{action:s}=__STORYBOOK_MODULE_ACTIONS__,T={title:"Features/Comment/CommentList",component:o,args:{isPending:!1,onChangePage:s("onChangePage")}},e={name:"1ページ目",args:{comments:[{id:"1",blogId:"1",content:"最初のコメントです",createdAt:"2025-12-11T10:00:00Z"},{id:"2",blogId:"1",content:"2番目のコメントです",createdAt:"2025-12-11T11:00:00Z"}],currentPage:1,totalPages:3}},n={name:"中間ページ",args:{comments:[{id:"3",blogId:"1",content:"3番目のコメントです",createdAt:"2025-12-11T12:00:00Z"},{id:"4",blogId:"1",content:"4番目のコメントです",createdAt:"2025-12-11T13:00:00Z"}],currentPage:2,totalPages:3}},t={name:"最終ページ",args:{comments:[{id:"5",blogId:"1",content:"5番目のコメントです",createdAt:"2025-12-11T14:00:00Z"}],currentPage:3,totalPages:3}},a={name:"コメントなし",args:{comments:[],currentPage:1,totalPages:1}},r={name:"読み込み中",args:{comments:[{id:"1",blogId:"1",content:"最初のコメントです",createdAt:"2025-12-11T10:00:00Z"},{id:"2",blogId:"1",content:"2番目のコメントです",createdAt:"2025-12-11T11:00:00Z"}],currentPage:1,totalPages:3,isPending:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '1ページ目',
  args: {
    comments: [{
      id: '1',
      blogId: '1',
      content: '最初のコメントです',
      createdAt: '2025-12-11T10:00:00Z'
    }, {
      id: '2',
      blogId: '1',
      content: '2番目のコメントです',
      createdAt: '2025-12-11T11:00:00Z'
    }],
    currentPage: 1,
    totalPages: 3
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '中間ページ',
  args: {
    comments: [{
      id: '3',
      blogId: '1',
      content: '3番目のコメントです',
      createdAt: '2025-12-11T12:00:00Z'
    }, {
      id: '4',
      blogId: '1',
      content: '4番目のコメントです',
      createdAt: '2025-12-11T13:00:00Z'
    }],
    currentPage: 2,
    totalPages: 3
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '最終ページ',
  args: {
    comments: [{
      id: '5',
      blogId: '1',
      content: '5番目のコメントです',
      createdAt: '2025-12-11T14:00:00Z'
    }],
    currentPage: 3,
    totalPages: 3
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'コメントなし',
  args: {
    comments: [],
    currentPage: 1,
    totalPages: 1
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '読み込み中',
  args: {
    comments: [{
      id: '1',
      blogId: '1',
      content: '最初のコメントです',
      createdAt: '2025-12-11T10:00:00Z'
    }, {
      id: '2',
      blogId: '1',
      content: '2番目のコメントです',
      createdAt: '2025-12-11T11:00:00Z'
    }],
    currentPage: 1,
    totalPages: 3,
    isPending: true
  }
}`,...r.parameters?.docs?.source}}};const A=["FirstPage","MiddlePage","LastPage","Empty","Pending"];export{a as Empty,e as FirstPage,t as LastPage,n as MiddlePage,r as Pending,A as __namedExportsOrder,T as default};
