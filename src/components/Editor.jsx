import React from 'react';
import PageTopbar from './PageTopbar';

export default class Editor extends React.Component {
  render() {
    return (
      <div id="editor-wrapper">
        <PageTopbar title={'editor'} />
        <textarea
          name="editor"
          id="editor"
          onChange={this.props.handleOnChange}
        />
      </div>
    );
  }
}
