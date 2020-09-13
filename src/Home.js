import React from 'react';
// import JoditEditor from "jodit-react";

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

class Home extends React.Component {
  
  state = { content: 'بسمه تعلی' };

  constructor() {
    super();

  }

  handleChange = (content) => {
    this.setState({ content });
  }

  render() {
    console.log(this.state.content);
    return (
      <SunEditor
        setContents={this.state.content}
        setOptions={{
          height: 500, 
          buttonList: [['undo', 'redo'], ['formatBlock', 'font', 'align', 'fontSize', 'bold', 'underline', 'strike','fontColor', 'hiliteColor'], ['list', 'link'], ['indent', 'outdent'],['image', 'video'], ['table'], ['print']],
          font: [
          'Arial',
          'tohoma',
          'Courier New,Courier'
          ]
          }}
        setDefaultStyle="direction: rtl; text-align: right; font-size: 20px"  
        onChange={this.handleChange}
      />
    );
  }	
}

export default Home;
