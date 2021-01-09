import React, { Component } from "react";

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }

    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

render(){
    if(this.state.hasError){
        <h1>ooops! that is no good...</h1>
    }
    else{
        return this.props.children
    }
}
   

}

export default ErrorBoundry;