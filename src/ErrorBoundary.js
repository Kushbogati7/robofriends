import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch() { // it will catch the error only from child of ErrorBoundary i.e worklist.js
        this.setState({hasError : true})
            
    }

    render() {
        if (this.state.hasError) { //if the hasError come true then the <h1> will return, so to make hasError true
                                   //only when there is mistake we use componentDidCatch and give hasError value to true.
           return <h1>Opps that is not good...please wait a moment</h1>
        }
        return this.props.children //this indicates Errorboundary
    }
}
export default ErrorBoundary;