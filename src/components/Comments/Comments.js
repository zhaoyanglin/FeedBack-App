import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Review from '../Review/Review';
import Header from '../Header/Header';

class Comments extends Component {

    state = {
        comments: ''
    }

    changeForFeeling = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    onNext = () => {
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments })
    }

    render() {
        return (
            <div>
                <Header />
                <br/>
                <h1>Any comments you want to leave?</h1>
                <input
                    placeholder='comments'
                    onChange={this.changeForFeeling}
                    value={this.state.comments}
                />
                <Link to='/review' onClick={this.onNext}>Next</Link>
                <br />
                <Review />
            </div>
        );
    }
}

export default connect()(Comments);