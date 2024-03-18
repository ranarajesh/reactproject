import React from "react";

export default class HelloClass extends React.Component{
    render() {
        return <div> Hello Class component {this.props.name}</div>
    }
}
