import{j as e}from"./jsx-runtime-eW7MrNrX.js";import{B as p}from"./Button-B7bhBqUS.js";import{C as l,b as c}from"./Card-QiWaOcgE.js";import{I as f}from"./Input-sU_75WXV.js";import{T as g}from"./Textarea-CTGpAyI0.js";import"./iframe-DmdEU6Jh.js";import"./preload-helper-PPVm8Dsz.js";function o({formAction:s,defaultTitle:i,defaultContent:m,submitLabel:u,isPending:d}){return e.jsx(l,{children:e.jsx(c,{children:e.jsxs("form",{action:s,className:"space-y-4",children:[e.jsx(f,{name:"title",label:"タイトル",placeholder:"ブログのタイトルを入力",required:!0,defaultValue:i}),e.jsx(g,{name:"content",label:"本文",placeholder:"ブログの本文を入力",rows:10,required:!0,defaultValue:m}),e.jsx("div",{className:"flex gap-4",children:e.jsx(p,{type:"submit",variant:"primary",disabled:d,children:u})})]})})})}o.__docgenInfo={description:"",methods:[],displayName:"BlogForm",props:{formAction:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormData) => void",signature:{arguments:[{type:{name:"FormData"},name:"formData"}],return:{name:"void"}}},description:""},defaultTitle:{required:!1,tsType:{name:"string"},description:""},defaultContent:{required:!1,tsType:{name:"string"},description:""},submitLabel:{required:!0,tsType:{name:"string"},description:""},isPending:{required:!1,tsType:{name:"boolean"},description:""}}};const{action:b}=__STORYBOOK_MODULE_ACTIONS__,_={title:"Features/Blog/BlogForm",component:o,args:{formAction:s=>{b("form-submit")(Object.fromEntries(s))},submitLabel:"投稿"}},r={name:"新規作成"},t={name:"編集（既存データあり）",args:{submitLabel:"更新",defaultTitle:"既存のブログタイトル",defaultContent:"これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。"}},n={name:"編集（長い本文）",args:{submitLabel:"更新",defaultTitle:"Next.js App Routerの完全ガイド",defaultContent:`Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。

Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。

主な特徴：
- Server Componentsによるパフォーマンス向上
- ネストされたレイアウトのサポート
- ストリーミングとSuspenseの統合
- より柔軟なデータフェッチング

これにより、開発者はより効率的でパフォーマンスの高いWebアプリケーションを構築できるようになりました。`}},a={name:"送信中",args:{submitLabel:"投稿",isPending:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '新規作成'
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '編集（既存データあり）',
  args: {
    submitLabel: '更新',
    defaultTitle: '既存のブログタイトル',
    defaultContent: 'これは既存のブログ記事の本文です。編集モードでは、このようにデフォルト値が入力されています。'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '編集（長い本文）',
  args: {
    submitLabel: '更新',
    defaultTitle: 'Next.js App Routerの完全ガイド',
    defaultContent: \`Next.js 13で導入されたApp Routerは、従来のPages Routerに代わる新しいルーティングシステムです。

Server Componentsをデフォルトとし、より直感的なファイルベースのルーティングを提供します。

主な特徴：
- Server Componentsによるパフォーマンス向上
- ネストされたレイアウトのサポート
- ストリーミングとSuspenseの統合
- より柔軟なデータフェッチング

これにより、開発者はより効率的でパフォーマンスの高いWebアプリケーションを構築できるようになりました。\`
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '送信中',
  args: {
    submitLabel: '投稿',
    isPending: true
  }
}`,...a.parameters?.docs?.source}}};const h=["Create","Edit","EditLongContent","Pending"];export{r as Create,t as Edit,n as EditLongContent,a as Pending,h as __namedExportsOrder,_ as default};
