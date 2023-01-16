
import '../App.css';
import React, { useRef } from 'react';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { Editor } from '@tinymce/tinymce-react';


function TextEditor() {
  const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  return (
    <div className="App">
      <header className="App-header">
      <GrammarlyEditorPlugin 
           clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}
            config={
              { activation: "immediate",
                autocomplete: "on" 
              }
              
            }
          >
         
             <Editor 
                  apiKey='68359yh8f399mkd0ksu0jpehearuoh1tpmmrv6owxv8i25do'
                  onInit={(evt, editor) => editorRef.current = editor}
                  initialValue="<p>This is the initial content of the editor.</p>"
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                /> 
            {/* <button onClick={log}>Log editor content</button */}
            
       </GrammarlyEditorPlugin>
        
      </header>
    </div>
  );
}

export default TextEditor;

