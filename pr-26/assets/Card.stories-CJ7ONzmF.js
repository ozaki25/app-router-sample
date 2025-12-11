import{j as r}from"./jsx-runtime-BlInPGCW.js";import{C as c,a as d,b as o,c as t}from"./Card-DVizkszt.js";import"./iframe-D4tqTFFr.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"UI/Card",component:c,args:{children:r.jsxs(r.Fragment,{children:[r.jsx(d,{children:r.jsx("h3",{children:"カードタイトル"})}),r.jsx(o,{children:r.jsx("p",{children:"カードの本文です。ここにコンテンツが入ります。"})}),r.jsx(t,{children:r.jsx("p",{className:"text-sm text-gray-500",children:"フッター情報"})})]})}},e={name:"デフォルトのカード"},a={name:"ヘッダーのみ",args:{children:r.jsx(d,{children:r.jsx("h3",{children:"ヘッダーのみのカード"})})}},n={name:"ボディのみ",args:{children:r.jsx(o,{children:r.jsx("p",{children:"本文のみのカードです。"})})}},s={name:"フッターなし",args:{children:r.jsxs(r.Fragment,{children:[r.jsx(d,{children:r.jsx("h3",{children:"フッターなしのカード"})}),r.jsx(o,{children:r.jsx("p",{children:"フッターがないカードです。"})})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'デフォルトのカード'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'ヘッダーのみ',
  args: {
    children: <CardHeader>
        <h3>ヘッダーのみのカード</h3>
      </CardHeader>
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'ボディのみ',
  args: {
    children: <CardBody>
        <p>本文のみのカードです。</p>
      </CardBody>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'フッターなし',
  args: {
    children: <>
        <CardHeader>
          <h3>フッターなしのカード</h3>
        </CardHeader>
        <CardBody>
          <p>フッターがないカードです。</p>
        </CardBody>
      </>
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","WithHeaderOnly","WithBodyOnly","WithoutFooter"];export{e as Default,n as WithBodyOnly,a as WithHeaderOnly,s as WithoutFooter,x as __namedExportsOrder,p as default};
