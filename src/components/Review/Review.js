import React, { Component } from 'react';
import { connect } from "react-redux";
import Axios from 'axios';
import { Link } from "react-router-dom";

class Review extends Component {

    addToData = () => {

        if (this.props.mainReducer.feeling === '' || this.props.mainReducer.understanding === '' || this.props.mainReducer.support === '' || this.props.mainReducer.comments === '') {
           return alert('input incomplete')
        } else {
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
                this.props.history.push('/lastPage')
            })
        }
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

                    <button onClick={this.addToData}>Submit</button>

                </ul>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapReduxStateToProps)(Review);