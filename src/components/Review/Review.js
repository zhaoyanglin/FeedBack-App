import React, { Component } from 'react';
import { connect } from "react-redux";
import Axios from 'axios';
import { Link } from "react-router-dom";

class Review extends Component {

    addToData = () => {
        Axios({
            method: 'POST',
            url: '/feedBack',
            data: {
                feeling: this.props.mainReducer.feeling,
                understanding: this.props.mainReducer.understanding,
                support: this.props.mainReducer.support,
                comments: this.props.mainReducer.comments,
            }
        }).then((response) => {
            console.log(response);
        })
    }

    render() {

        return (
            <div>
                <h1>Review Your Feedback</h1>
                <ul>
                    <p>Feeling:{this.props.mainReducer.feeling}</p>
                    <p>Understanding:{this.props.mainReducer.understanding}</p>
                    <p>Support:{this.props.mainReducer.support}</p>
                    <p>Comments:{this.props.mainReducer.comments}</p>

                    <Link to='/lastPage' onClick={this.addToData}>Submit</Link>

                </ul>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Review);