import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './MarkdownPreviewer.css';
import PageTopbar from './PageTopbar';
// import Prism from 'prismjs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: '',
    };
    this.handleContent = this.handleContent.bind(this);
  }

  componentDidMount() {
    let content = `
# Hello

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

| a | b |
| - | - |
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
          <div id="editor-wrapper">
            <PageTopbar title={'editor'} />
            <textarea
              name="editor"
              id="editor"
              onChange={this.handleContent}
            />
          </div>
          <div id="preview-wrapper">
            <PageTopbar title={'preview'} />
            <ReactMarkdown
              children={this.state.markdown}
              remarkPlugins={[remarkGfm]}
              components={{
                code({
                  node,
                  inline,
                  className,
                  children,
                  ...props
                }) {
                  const match = /language-(\w+)/.exec(
                    className || ''
                  );
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            ></ReactMarkdown>
          </div>
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
}
