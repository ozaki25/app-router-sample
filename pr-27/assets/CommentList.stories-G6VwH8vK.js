import{j as e}from"./jsx-runtime-CIYrQA5i.js";import{C as m,b as i}from"./Card-Dam9hU3P.js";import{P}from"./Pagination-CCKJA6LZ.js";import{f as x}from"./date-BdpUxnwX.js";import"./iframe-DsiD5ge8.js";import"./preload-helper-PPVm8Dsz.js";import"./pagination-CF1oynzD.js";import"./link-Dgk_LhEn.js";function T(){return e.jsx(m,{children:e.jsx(i,{children:e.jsx("p",{className:"text-gray-500 text-center py-4",children:"コメントはまだありません"})})})}function g({comments:c,currentPage:p,totalPages:d,isPending:u,onChangePage:l}){return c.length===0?e.jsx(T,{}):e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"space-y-4",children:c.map(o=>e.jsx(m,{children:e.jsxs(i,{children:[e.jsx("p",{className:"text-gray-800 whitespace-pre-wrap",children:o.content}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:x(o.createdAt)})]})},o.id))}),d>1&&e.jsx("div",{className:u?"pointer-events-none opacity-50":"",children:e.jsx(P,{currentPage:p,totalPages:d,onChangePage:l})})]})}g.__docgenInfo={description:"",methods:[],displayName:"CommentList",props:{comments:{required:!0,tsType:{name:"Array",elements:[{name:"Comment"}],raw:"Comment[]"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},isPending:{required:!0,tsType:{name:"boolean"},description:""},onChangePage:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}};const{action:b}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Features/Comment/CommentList",component:g,args:{isPending:!1,onChangePage:b("onChangePage")}},n={name:"1ページ目",args:{comments:[{id:"1",blogId:"1",content:"最初のコメントです",createdAt:"2025-12-11T10:00:00Z"},{id:"2",blogId:"1",content:"2番目のコメントです",createdAt:"2025-12-11T11:00:00Z"}],currentPage:1,totalPages:3}},t={name:"中間ページ",args:{comments:[{id:"3",blogId:"1",content:"3番目のコメントです",createdAt:"2025-12-11T12:00:00Z"},{id:"4",blogId:"1",content:"4番目のコメントです",createdAt:"2025-12-11T13:00:00Z"}],currentPage:2,totalPages:3}},r={name:"最終ページ",args:{comments:[{id:"5",blogId:"1",content:"5番目のコメントです",createdAt:"2025-12-11T14:00:00Z"}],currentPage:3,totalPages:3}},a={name:"コメントなし",args:{comments:[],currentPage:1,totalPages:1}},s={name:"読み込み中",args:{comments:[{id:"1",blogId:"1",content:"最初のコメントです",createdAt:"2025-12-11T10:00:00Z"},{id:"2",blogId:"1",content:"2番目のコメントです",createdAt:"2025-12-11T11:00:00Z"}],currentPage:1,totalPages:3,isPending:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'コメントなし',
  args: {
    comments: [],
    currentPage: 1,
    totalPages: 1
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const N=["FirstPage","MiddlePage","LastPage","Empty","Pending"];export{a as Empty,n as FirstPage,r as LastPage,t as MiddlePage,s as Pending,N as __namedExportsOrder,_ as default};
