import{j as e}from"./jsx-runtime-C4zCDkLe.js";import{D as i}from"./DeleteButton-oySHii0E.js";import{C as c,b as m}from"./Card-CE6kvH52.js";import{L as n}from"./LinkButton-7oDLRRfD.js";import{f as o}from"./date-BQzOIXEX.js";import"./iframe-BEZgAVHD.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-s-Onluod.js";import"./link-BSzWScDH.js";function d({blog:t}){return e.jsx(c,{children:e.jsxs(m,{children:[e.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-4",children:t.title}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"作成:"})," ",o(t.createdAt)]}),e.jsxs("div",{children:[e.jsx("span",{className:"font-medium",children:"更新:"})," ",o(t.updatedAt)]})]}),e.jsx("div",{className:"prose max-w-none mb-8",children:e.jsx("p",{className:"whitespace-pre-wrap text-gray-700",children:t.content})}),e.jsxs("div",{className:"flex gap-4 pt-6 border-t border-gray-200",children:[e.jsx(n,{href:`/blogs/${t.id}/edit`,variant:"primary",children:"編集"}),e.jsx(i,{blogId:t.id}),e.jsx(n,{href:"/blogs",variant:"secondary",children:"一覧に戻る"})]})]})})}d.__docgenInfo={description:"",methods:[],displayName:"BlogDetail",props:{blog:{required:!0,tsType:{name:"Blog"},description:""}}};const A={title:"Features/Blog/BlogDetail",component:d,args:{blog:{id:"1",title:"Next.js App Routerの完全ガイド",content:`Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。

Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。

主な特徴：
- Server Componentsによるパフォーマンス向上
- ネストされたレイアウトのサポート
- ストリーミングとSuspenseの統合
- より柔軟なデータフェッチング

これにより、開発者はより効率的でパフォーマンスの高いWebアプリケーションを構築できるようになりました。`,createdAt:"2024-01-15T10:00:00Z",updatedAt:"2024-01-16T14:30:00Z"}}},r={name:"基本表示"},a={name:"短い本文",args:{blog:{id:"2",title:"今日のランチ",content:"美味しいカレーを食べました。",createdAt:"2024-01-20T12:00:00Z",updatedAt:"2024-01-20T12:00:00Z"}}},s={name:"長いタイトル",args:{blog:{id:"3",title:"これは非常に長いタイトルの例です。タイトルが長い場合のレイアウトの確認のために用意されたストーリーです。",content:"本文の内容です。",createdAt:"2024-01-21T09:00:00Z",updatedAt:"2024-01-21T09:00:00Z"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '基本表示'
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '短い本文',
  args: {
    blog: {
      id: '2',
      title: '今日のランチ',
      content: '美味しいカレーを食べました。',
      createdAt: '2024-01-20T12:00:00Z',
      updatedAt: '2024-01-20T12:00:00Z'
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '長いタイトル',
  args: {
    blog: {
      id: '3',
      title: 'これは非常に長いタイトルの例です。タイトルが長い場合のレイアウトの確認のために用意されたストーリーです。',
      content: '本文の内容です。',
      createdAt: '2024-01-21T09:00:00Z',
      updatedAt: '2024-01-21T09:00:00Z'
    }
  }
}`,...s.parameters?.docs?.source}}};const T=["Default","ShortContent","LongTitle"];export{r as Default,s as LongTitle,a as ShortContent,T as __namedExportsOrder,A as default};
