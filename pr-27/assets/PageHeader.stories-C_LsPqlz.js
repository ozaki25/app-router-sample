import{j as o}from"./jsx-runtime-DRqEDDDf.js";import"./iframe-YvxtgvvG.js";import"./preload-helper-PPVm8Dsz.js";function i({title:m,description:c,align:n="left"}){const l=n==="center"?"text-center":"",p=n==="center"?"text-4xl":"text-3xl";return o.jsxs("div",{className:`mb-8 ${l}`,children:[o.jsx("h1",{className:`${p} font-bold text-gray-900 mb-2`,children:m}),c&&o.jsx("p",{className:`text-gray-600 ${n==="center"?"text-xl":""}`,children:c})]})}i.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const x={title:"UI/PageHeader",component:i,args:{title:"ページタイトル"}},e={name:"デフォルト(左寄せ)"},r={name:"中央寄せ",args:{align:"center"}},t={name:"説明文あり",args:{description:"これはページの説明文です。"}},a={name:"中央寄せ(説明文あり)",args:{align:"center",description:"このページは中央寄せで表示されます。"}},s={name:"長いタイトル",args:{title:"これは非常に長いページタイトルの例です。複数行になる可能性があります。"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'デフォルト(左寄せ)'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '中央寄せ',
  args: {
    align: 'center'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '説明文あり',
  args: {
    description: 'これはページの説明文です。'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '中央寄せ(説明文あり)',
  args: {
    align: 'center',
    description: 'このページは中央寄せで表示されます。'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '長いタイトル',
  args: {
    title: 'これは非常に長いページタイトルの例です。複数行になる可能性があります。'
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","Center","WithDescription","CenterWithDescription","LongTitle"];export{r as Center,a as CenterWithDescription,e as Default,s as LongTitle,t as WithDescription,f as __namedExportsOrder,x as default};
