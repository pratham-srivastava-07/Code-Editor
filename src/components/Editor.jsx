import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/dracula.css'

export default function Editor() {
  
  return (
    <CodeMirror
      value="console.log('hello world!');"
      height="400px"
      options={{
        mode: 'js',
        theme: 'dracula'
      }}
      
      // onChange={(value, viewUpdate)=>{
      //   console.log("value:", value)
      // }}
    />
  );
}
