import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Review from '../Review/Review';
import Header from '../Header/Header';

class Support extends Component {

    state = {
        support: ''
    }

    changeForFeeling = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    onNext = () => {
        this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state.support })
    }



    render() {
        return (
            <div>
                <Header />
                <br />
                <h1>How well are you being supported?</h1>
                <input
                    placeholder='support'
                    onChange={this.changeForFeeling}
                    value={this.state.support}
                />
                <Link to='/comments' onClick={this.onNext}>Next</Link>
                <br />
                <Review />
            </div>
        );
    }
}

export default connect()(Support);