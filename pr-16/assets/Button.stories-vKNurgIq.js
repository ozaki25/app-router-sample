import{B as s}from"./Button-s-Onluod.js";import"./jsx-runtime-C4zCDkLe.js";import"./iframe-BEZgAVHD.js";import"./preload-helper-PPVm8Dsz.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,d={title:"UI/Button",component:s,args:{children:"ボタン",variant:"primary",onClick:o("click")}},r={name:"Primaryボタン",args:{variant:"primary"}},a={name:"Secondaryボタン",args:{variant:"secondary"}},e={name:"Dangerボタン",args:{variant:"danger"}},n={name:"disabledなボタン",args:{disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Primaryボタン',
  args: {
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Secondaryボタン',
  args: {
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Dangerボタン',
  args: {
    variant: 'danger'
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'disabledなボタン',
  args: {
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};const p=["Primary","Secondary","Danger","Disabled"];export{e as Danger,n as Disabled,r as Primary,a as Secondary,p as __namedExportsOrder,d as default};
