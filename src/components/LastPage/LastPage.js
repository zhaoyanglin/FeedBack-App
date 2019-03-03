import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LastPage extends Component {

    render() {

        return (
            <div>
                <h1>Feedback!</h1>
                <br/>
                <h2>Thank You!</h2>
                <Link to='/'>Leave New Feedback</Link>
            </div>
        );
    }
}

export default (LastPage);