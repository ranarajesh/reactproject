import React from "react";

export default class StringRefComp extends React.Component{

    componentDidMount(){
        this.refs.username.focus();
    }
    render(){
        return <input type="text" ref="username" name="username" />;
    }
}