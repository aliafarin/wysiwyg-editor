import React from 'react';
import JoditEditor from "jodit-react";

class Home extends React.Component {
  
  state = { content: 'بسمه تعلی' };

  constructor() {
    super();
    this.config = {
      readonly: false, // all options from https://xdsoft.net/jodit/doc/
      direction: "rtl",
      "buttons": "|,bold,strikethrough,underline,|,|,ul,ol,|,|,font,fontsize,brush,paragraph,|,image,file,table,link,|,align,undo,redo,\n,selectall,copy,|"
    }
  }
  render() {
    console.log(this.state.content);
    return (
      <JoditEditor
        value={this.state.content}
        config={this.config}
        tabIndex={1} // tabIndex of textarea
        onChange={newContent => this.setState({ content: newContent })}
      />
    );
  }	
}

export default Home;
