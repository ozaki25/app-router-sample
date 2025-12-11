import{j as e}from"./jsx-runtime-B75TxpPN.js";import{C as d,a as m,b as i,c as p}from"./Card-CjBciRyx.js";import{f as g}from"./date-DlkxJ79V.js";import{L as u}from"./link-aqNz74JQ.js";import"./iframe-YtKlQRst.js";import"./preload-helper-PPVm8Dsz.js";function x(){return e.jsx(d,{children:e.jsx(i,{children:e.jsx("p",{className:"text-gray-500 text-center py-8",children:"ブログ記事がありません"})})})}function l({blogs:c}){return c.length===0?e.jsx(x,{}):e.jsx("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:c.map(t=>e.jsxs(d,{children:[e.jsx(m,{children:e.jsx("h2",{className:"text-xl font-bold text-gray-900 line-clamp-2",children:t.title})}),e.jsxs(i,{children:[e.jsx("p",{className:"text-gray-600 line-clamp-3 mb-4",children:t.content}),e.jsx("p",{className:"text-sm text-gray-500",children:g(t.createdAt)})]}),e.jsx(p,{children:e.jsx(u,{href:`/blogs/${t.id}`,className:"inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",children:"続きを読む"})})]},t.id))})}l.__docgenInfo={description:"",methods:[],displayName:"BlogList",props:{blogs:{required:!0,tsType:{name:"Array",elements:[{name:"Blog"}],raw:"Blog[]"},description:""}}};const o=[{id:"1",title:"Next.js App Routerの基礎",content:"Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。",createdAt:"2024-01-15T10:00:00Z",updatedAt:"2024-01-15T10:00:00Z"},{id:"2",title:"TypeScriptで型安全な開発",content:"TypeScriptを使用することで、コンパイル時に型エラーを検出し、より安全で保守性の高いコードを書くことができます。",createdAt:"2024-01-16T12:30:00Z",updatedAt:"2024-01-16T12:30:00Z"},{id:"3",title:"Tailwind CSSでスタイリング",content:"Tailwind CSSはユーティリティファーストのCSSフレームワークで、クラス名を組み合わせることで素早くUIを構築できます。",createdAt:"2024-01-17T09:15:00Z",updatedAt:"2024-01-17T09:15:00Z"}],f={title:"Features/Blog/BlogList",component:l,args:{blogs:o}},r={name:"通常表示（複数記事）"},a={name:"1件のみ",args:{blogs:[o[0]]}},n={name:"空の状態",args:{blogs:[]}},s={name:"多数の記事",args:{blogs:[...o,{id:"4",title:"4つ目の記事",content:"これは4つ目の記事です。",createdAt:"2024-01-18T14:00:00Z",updatedAt:"2024-01-18T14:00:00Z"},{id:"5",title:"5つ目の記事",content:"これは5つ目の記事です。",createdAt:"2024-01-19T16:20:00Z",updatedAt:"2024-01-19T16:20:00Z"},{id:"6",title:"6つ目の記事",content:"これは6つ目の記事です。",createdAt:"2024-01-20T11:45:00Z",updatedAt:"2024-01-20T11:45:00Z"}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '通常表示（複数記事）'
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '1件のみ',
  args: {
    blogs: [mockBlogs[0]]
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '空の状態',
  args: {
    blogs: []
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '多数の記事',
  args: {
    blogs: [...mockBlogs, {
      id: '4',
      title: '4つ目の記事',
      content: 'これは4つ目の記事です。',
      createdAt: '2024-01-18T14:00:00Z',
      updatedAt: '2024-01-18T14:00:00Z'
    }, {
      id: '5',
      title: '5つ目の記事',
      content: 'これは5つ目の記事です。',
      createdAt: '2024-01-19T16:20:00Z',
      updatedAt: '2024-01-19T16:20:00Z'
    }, {
      id: '6',
      title: '6つ目の記事',
      content: 'これは6つ目の記事です。',
      createdAt: '2024-01-20T11:45:00Z',
      updatedAt: '2024-01-20T11:45:00Z'
    }]
  }
}`,...s.parameters?.docs?.source}}};const S=["Default","SingleBlog","Empty","ManyBlogs"];export{r as Default,n as Empty,s as ManyBlogs,a as SingleBlog,S as __namedExportsOrder,f as default};
