import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.StrictMode>
                <footer>
                    <p>by rolemadelen</p>
                    <a href="https://github.com/rolemadelen/markdown-previewer" target={"_blank"}>
                        <i className={"fa fa-github icon-github"} />
                    </a>
                    <a href="https://twitter.com/rolemadelen" target={"_blank"}>
                        <i className={"fa fa-twitter icon-twitter"} />
                    </a>
                </footer>
            </React.StrictMode>
        )
    }
}