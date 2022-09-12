import React from 'react';
import DOMPurify from 'dompurify';
import Header from './Header';
import Footer from './Footer';
import { marked } from 'marked';
import "./MarkdownPreviewer.css";

export default class MarkdownPreview extends React.Component {
    constructor(props) {
        super(props);

        this.handleContent = this.handleContent.bind(this);
    }

    componentDidMount() {
        let content = "# Hello \n\n [rolemadelen blog](https://rolemadelen.com) \n\n `code` \n\n ```cpp\ncodeblock\n``` \n\n - list1 \n - list2 \n\n > quote \n\n **bold text**";
        document.querySelector("#editor").innerHTML = content;
        document.querySelector("#preview").innerHTML = DOMPurify.sanitize(marked.parse(content));
    }

    handleContent(event) {
        document.querySelector("#preview").innerHTML = DOMPurify.sanitize(marked.parse(event.target.value));
    }

    render() {
        return (
            <React.StrictMode>
                <div id="wrapper">
                    <Header />
                    <div id="editor-wrapper">
                        <div className="editor-top">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <textarea name="editor" id="editor" onChange={this.handleContent} />
                    </div>
                    <div id="preview-wrapper">
                        <div className="editor-top">
                            <span className="red"></span>
                            <span className="yellow"></span>
                            <span className="green"></span>
                        </div>
                        <div id="preview">
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.StrictMode>
        )
    }
}