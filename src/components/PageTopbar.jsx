import React from 'react';

export default class PageTopbar extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="editor-top">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <span>{this.props.title}</span>
      </React.StrictMode>
    );
  }
}
