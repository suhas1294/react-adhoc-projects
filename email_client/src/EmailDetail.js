import { Component } from "react";
import parse from 'html-react-parser';

class EmailDetail extends Component{
    render(){
        debugger
        return(
            <div>
                <strong>From: </strong> {this.props.detail.from.name} &lt; {this.props.detail.from.email}&gt; <br />
                <strong>Date: </strong> {this.props.detail.formatedDate}, {this.props.detail.formatedTime} <br />
                <strong>Subject: </strong> {this.props.detail.subject} <br />
                <hr />
                <p>Content:</p>
                {parse(this.props.detail.body)}
            </div>
        )
    }
}

export default EmailDetail;