import{j as t}from"./jsx-runtime-eW7MrNrX.js";import{o as C,a as E,n as u,s as i}from"./schemas-dqiBZp6A.js";import{A as S}from"./api-BExOi0Us.js";import{C as b,b as T}from"./Card-QiWaOcgE.js";import{P as Z}from"./Pagination-B8yj5XWY.js";import{f as w}from"./date-BCHHskfI.js";import{a as c}from"./iframe-DmdEU6Jh.js";import"./pagination-CF1oynzD.js";import"./link-CBFH3jca.js";import"./preload-helper-PPVm8Dsz.js";const N=C({id:i(),blog_id:i(),content:i(),created_at:i()}),L=C({total:u(),total_pages:u(),current_page:u(),data:E(N)}),v=e=>({id:e.id,blogId:e.blog_id,content:e.content,createdAt:e.created_at}),F=e=>({total:e.total,totalPages:e.total_pages,currentPage:e.current_page,comments:e.data.map(v)}),R=2;async function $(e,a=1){const n=await fetch(`${S}/api/blogs/${e}/comments?page=${a}&per_page=${R}`,{cache:"no-store"});if(!n.ok)throw new Error("Failed to fetch comments");const p=await n.json(),o=L.parse(p);return F(o)}async function q(e,a){try{return{success:!0,data:await $(e,a)}}catch(n){return console.error("Failed to get comments:",n),{success:!1,error:"コメントの取得に失敗しました"}}}function B(){return t.jsx(b,{children:t.jsx(T,{children:t.jsx("p",{className:"text-gray-500 text-center py-4",children:"コメントはまだありません"})})})}function y({blogId:e,initialComments:a,initialCurrentPage:n,initialTotalPages:p}){const[o,h]=c.useState(a),[I,x]=c.useState(n),[P,f]=c.useState(p),[A,_]=c.useTransition(),j=r=>{_(async()=>{const s=await q(e,r);s.success?(h(s.data.comments),x(s.data.currentPage),f(s.data.totalPages)):alert(s.error)})};return o.length===0?t.jsx(B,{}):t.jsxs("div",{className:"space-y-4",children:[t.jsx("div",{className:"space-y-4",children:o.map(r=>t.jsx(b,{children:t.jsxs(T,{children:[t.jsx("p",{className:"text-gray-800 whitespace-pre-wrap",children:r.content}),t.jsx("p",{className:"text-sm text-gray-500 mt-2",children:w(r.createdAt)})]})},r.id))}),P>1&&t.jsx("div",{className:A?"pointer-events-none opacity-50":"",children:t.jsx(Z,{currentPage:I,totalPages:P,onPageChange:j})})]})}y.__docgenInfo={description:"",methods:[],displayName:"CommentList",props:{blogId:{required:!0,tsType:{name:"string"},description:""},initialComments:{required:!0,tsType:{name:"Array",elements:[{name:"Comment"}],raw:"Comment[]"},description:""},initialCurrentPage:{required:!0,tsType:{name:"number"},description:""},initialTotalPages:{required:!0,tsType:{name:"number"},description:""}}};const Q={title:"Features/Comment/CommentList",component:y},m={name:"1ページ目",args:{blogId:"1",initialComments:[{id:"1",blogId:"1",content:"最初のコメントです",createdAt:"2025-12-11T10:00:00Z"},{id:"2",blogId:"1",content:"2番目のコメントです",createdAt:"2025-12-11T11:00:00Z"}],initialCurrentPage:1,initialTotalPages:3}},d={name:"中間ページ",args:{blogId:"1",initialComments:[{id:"3",blogId:"1",content:"3番目のコメントです",createdAt:"2025-12-11T12:00:00Z"},{id:"4",blogId:"1",content:"4番目のコメントです",createdAt:"2025-12-11T13:00:00Z"}],initialCurrentPage:2,initialTotalPages:3}},l={name:"最終ページ",args:{blogId:"1",initialComments:[{id:"5",blogId:"1",content:"5番目のコメントです",createdAt:"2025-12-11T14:00:00Z"}],initialCurrentPage:3,initialTotalPages:3}},g={name:"コメントなし",args:{blogId:"1",initialComments:[],initialCurrentPage:1,initialTotalPages:1}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '1ページ目',
  args: {
    blogId: '1',
    initialComments: [{
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
    initialCurrentPage: 1,
    initialTotalPages: 3
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '中間ページ',
  args: {
    blogId: '1',
    initialComments: [{
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
    initialCurrentPage: 2,
    initialTotalPages: 3
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '最終ページ',
  args: {
    blogId: '1',
    initialComments: [{
      id: '5',
      blogId: '1',
      content: '5番目のコメントです',
      createdAt: '2025-12-11T14:00:00Z'
    }],
    initialCurrentPage: 3,
    initialTotalPages: 3
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'コメントなし',
  args: {
    blogId: '1',
    initialComments: [],
    initialCurrentPage: 1,
    initialTotalPages: 1
  }
}`,...g.parameters?.docs?.source}}};const V=["FirstPage","MiddlePage","LastPage","Empty"];export{g as Empty,m as FirstPage,l as LastPage,d as MiddlePage,V as __namedExportsOrder,Q as default};
