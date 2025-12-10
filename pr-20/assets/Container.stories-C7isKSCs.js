import{j as e}from"./jsx-runtime-1LN5D7Kx.js";import"./iframe-CBE4tfgm.js";import"./preload-helper-PPVm8Dsz.js";const o={sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl",full:"max-w-full"};function n({children:l,maxWidth:a}){const t=a?o[a]:"",i=a?`${t} mx-auto`:"";return e.jsx("main",{className:"container mx-auto px-4 py-8",children:a?e.jsx("div",{className:i,children:l}):l})}n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'full'"}]},description:""}}};const p={title:"UI/Container",component:n,args:{children:e.jsxs("div",{className:"bg-gray-100 p-4 rounded",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"コンテナ内のコンテンツ"}),e.jsx("p",{children:"このコンテンツはContainerコンポーネントで包まれています。"})]})}},s={name:"デフォルト(max-width: 1200px)"},m={name:"Medium(max-width: 960px)",args:{maxWidth:"md"}},r={name:"Small(max-width: 720px)",args:{maxWidth:"sm"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'デフォルト(max-width: 1200px)'
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Medium(max-width: 960px)',
  args: {
    maxWidth: 'md'
  }
}`,...m.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Small(max-width: 720px)',
  args: {
    maxWidth: 'sm'
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","Medium","Small"];export{s as Default,m as Medium,r as Small,u as __namedExportsOrder,p as default};
