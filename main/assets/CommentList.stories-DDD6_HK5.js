import{j as e}from"./jsx-runtime-BkKeSj-c.js";import{C as a,b as o}from"./Card-BIulyFwn.js";import{f as c}from"./date-OWEcTYGZ.js";import"./iframe-QOUU0OvI.js";import"./preload-helper-PPVm8Dsz.js";function d(){return e.jsx(a,{children:e.jsx(o,{children:e.jsx("p",{className:"text-gray-500 text-center py-4",children:"コメントはまだありません"})})})}function m({comments:s}){return s.length===0?e.jsx(d,{}):e.jsx("div",{className:"space-y-4",children:s.map(r=>e.jsx(a,{children:e.jsxs(o,{children:[e.jsx("p",{className:"text-gray-800 whitespace-pre-wrap",children:r.content}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:c(r.createdAt)})]})},r.id))})}m.__docgenInfo={description:"",methods:[],displayName:"CommentList",props:{comments:{required:!0,tsType:{name:"Array",elements:[{name:"Comment"}],raw:"Comment[]"},description:""}}};const u={title:"Features/Comment/CommentList",component:m},t={name:"コメントなし",args:{comments:[]}},n={name:"コメントあり",args:{comments:[{id:"1",blogId:"1",content:"とても参考になりました！",createdAt:"2024-01-15T10:30:00Z"},{id:"2",blogId:"1",content:`続きが気になります。
次の記事も楽しみにしています。`,createdAt:"2024-01-15T14:20:00Z"},{id:"3",blogId:"1",content:"わかりやすい説明でした。",createdAt:"2024-01-16T09:15:00Z"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'コメントなし',
  args: {
    comments: []
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'コメントあり',
  args: {
    comments: [{
      id: '1',
      blogId: '1',
      content: 'とても参考になりました！',
      createdAt: '2024-01-15T10:30:00Z'
    }, {
      id: '2',
      blogId: '1',
      content: '続きが気になります。\\n次の記事も楽しみにしています。',
      createdAt: '2024-01-15T14:20:00Z'
    }, {
      id: '3',
      blogId: '1',
      content: 'わかりやすい説明でした。',
      createdAt: '2024-01-16T09:15:00Z'
    }]
  }
}`,...n.parameters?.docs?.source}}};const h=["Empty","WithComments"];export{t as Empty,n as WithComments,h as __namedExportsOrder,u as default};
