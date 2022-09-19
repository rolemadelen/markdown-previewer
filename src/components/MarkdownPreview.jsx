import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Editor from './Editor';
import Preview from './Preview';
import './MarkdownPreviewer.css';

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: '',
    };

    this.handleContent = this.handleContent.bind(this);
  }

  componentDidMount() {
    let content = `# Hello

[rolemadelen blog](https://rolemadelen.com)

\`code\`

\`\`\`cpp
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

- list1
- list2

**bold text**

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| col A | col B |
|:-----:|:-----:|
| Item 1| Item 2|
| Item 3| Item 4|
`;

    document.querySelector('#editor').innerHTML = content;
    this.setState({
      markdown: content,
    });
  }

  handleContent(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  render() {
    return (
      <React.StrictMode>
        <div id="wrapper">
          <Header />
          <Editor handleOnChange={this.handleContent} />
          <Preview markdown={this.state.markdown} />
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
}
