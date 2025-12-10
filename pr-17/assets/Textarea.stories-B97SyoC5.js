import{T as n}from"./Textarea-BiiXlcYm.js";import"./jsx-runtime-BExSnzUr.js";import"./iframe-CTaZlYBk.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"UI/Textarea",component:n,args:{name:"textareaField",label:"テキストエリア",placeholder:"本文を入力してください",rows:5}},e={name:"デフォルト"},a={name:"ラベルあり",args:{label:"本文"}},r={name:"初期値あり",args:{label:"投稿内容",defaultValue:`これはサンプルテキストです。
複数行にわたる内容を入力できます。`}},s={name:"大きいテキストエリア",args:{label:"詳細説明",rows:10}},o={name:"必須フィールド",args:{label:"コメント",required:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'デフォルト'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'ラベルあり',
  args: {
    label: '本文'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '初期値あり',
  args: {
    label: '投稿内容',
    defaultValue: 'これはサンプルテキストです。\\n複数行にわたる内容を入力できます。'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '大きいテキストエリア',
  args: {
    label: '詳細説明',
    rows: 10
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '必須フィールド',
  args: {
    label: 'コメント',
    required: true
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","WithLabel","WithValue","LargeRows","Required"];export{e as Default,s as LargeRows,o as Required,a as WithLabel,r as WithValue,p as __namedExportsOrder,u as default};
