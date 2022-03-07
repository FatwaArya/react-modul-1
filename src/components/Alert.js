import React, { Component } from 'react';
class Alert extends Component {
    constructor() {
        super();
        this.state = {
            hidden: true,
            type: "danger",
            header: "Fatal Error",
            content: "ini content dari alert"
        }
    }
    // fungsi untuk mengubah tipe  
    changeTypeAlert = (event) => {
        this.setState({ type: event.target.value });
    }
    // fungsi untuk mengubah header  
    changeHeaderAlert = (event) => {
        this.setState({ header: event.target.value });
        // fungsi untuk mengubah content  
    }
    changeContentAlert = (event) => {
        this.setState({ content: event.target.value });
    }

    render() {
        return (
            <div className={"alert alert-" + this.props.type}>
                <p className='p-0'> {this.props.children}</p>

            </div>
        );
    }
}


export default Alert;  
