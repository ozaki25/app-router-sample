import{j as a}from"./jsx-runtime-1Jf30tPh.js";import{o as C,a as S,n as p,s as o,C as h}from"./CommentForm-CoMwrosl.js";import{A as x}from"./api-BYQIk8pS.js";import{C as y}from"./CommentList-D7Em5QHx.js";import{a as P}from"./iframe-BJVYcx_L.js";import"./Button-CE-yBANW.js";import"./Card-Dpe57IcQ.js";import"./Textarea-B63o3aPt.js";import"./Pagination-Dhu_DQWz.js";import"./pagination-CF1oynzD.js";import"./link-rnlyUcqQ.js";import"./date-w64JdHvI.js";import"./preload-helper-PPVm8Dsz.js";const A=C({id:o(),blog_id:o(),content:o(),created_at:o()}),T=C({total:p(),total_pages:p(),current_page:p(),data:S(A)}),E=t=>({id:t.id,blogId:t.blog_id,content:t.content,createdAt:t.created_at}),j=t=>({total:t.total,totalPages:t.total_pages,currentPage:t.current_page,comments:t.data.map(E)}),w=2;async function Z(t,n=1){const e=await fetch(`${x}/api/blogs/${t}/comments?page=${n}&per_page=${w}`,{cache:"no-store"});if(!e.ok)throw new Error("Failed to fetch comments");const i=await e.json(),g=T.parse(i);return j(g)}async function R(t,n){try{return{success:!0,data:await Z(t,n)}}catch(e){return console.error("Failed to get comments:",e),{success:!1,error:"コメントの取得に失敗しました"}}}function b({blogId:t,initialPaginatedComments:n}){const[e,i]=P.useState(n),[g,f]=P.useTransition(),u=d=>{f(async()=>{const l=await R(t,d);l.success?i(l.data):alert(l.error)})},I=d=>{u(d)},_=()=>{u(e.currentPage)};return a.jsxs("section",{className:"pt-8 flex flex-col gap-8",children:[a.jsx("h2",{className:"text-2xl font-bold",children:"コメント"}),a.jsx(y,{comments:e.comments,currentPage:e.currentPage,totalPages:e.totalPages,isPending:g,onChangePage:I}),a.jsx(h,{blogId:t,onPosted:_})]})}b.__docgenInfo={description:"",methods:[],displayName:"CommentSection",props:{blogId:{required:!0,tsType:{name:"string"},description:""},initialPaginatedComments:{required:!0,tsType:{name:"PaginatedComments"},description:""}}};const H={title:"Features/Comment/CommentSection",component:b,args:{blogId:"1"}},F={comments:[{id:"1",blogId:"1",content:"これは最初のコメントです。",createdAt:"2024-01-01T10:00:00Z"},{id:"2",blogId:"1",content:"これは2番目のコメントです。",createdAt:"2024-01-01T11:00:00Z"}],total:5,totalPages:3,currentPage:1},s={name:"デフォルト",args:{blogId:"1",initialPaginatedComments:F}},r={name:"空の状態",args:{blogId:"1",initialPaginatedComments:{comments:[],total:0,totalPages:0,currentPage:1}}},m={name:"1ページのみ",args:{blogId:"1",initialPaginatedComments:{comments:[{id:"1",blogId:"1",content:"これは唯一のコメントです。",createdAt:"2024-01-01T10:00:00Z"}],total:1,totalPages:1,currentPage:1}}},c={name:"最終ページ",args:{blogId:"1",initialPaginatedComments:{comments:[{id:"5",blogId:"1",content:"これは最後のコメントです。",createdAt:"2024-01-01T14:00:00Z"}],total:5,totalPages:3,currentPage:3}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'デフォルト',
  args: {
    blogId: '1',
    initialPaginatedComments: mockComments
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '空の状態',
  args: {
    blogId: '1',
    initialPaginatedComments: {
      comments: [],
      total: 0,
      totalPages: 0,
      currentPage: 1
    }
  }
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '1ページのみ',
  args: {
    blogId: '1',
    initialPaginatedComments: {
      comments: [{
        id: '1',
        blogId: '1',
        content: 'これは唯一のコメントです。',
        createdAt: '2024-01-01T10:00:00Z'
      }],
      total: 1,
      totalPages: 1,
      currentPage: 1
    }
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '最終ページ',
  args: {
    blogId: '1',
    initialPaginatedComments: {
      comments: [{
        id: '5',
        blogId: '1',
        content: 'これは最後のコメントです。',
        createdAt: '2024-01-01T14:00:00Z'
      }],
      total: 5,
      totalPages: 3,
      currentPage: 3
    }
  }
}`,...c.parameters?.docs?.source}}};const J=["Default","Empty","SinglePage","LastPage"];export{s as Default,r as Empty,c as LastPage,m as SinglePage,J as __namedExportsOrder,H as default};
