import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Review from '../Review/Review';
import Header from '../Header/Header';

class Understanding extends Component {

    state = {
        understanding: ''
    }

    changeForFeeling = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }

    onNext = () => {
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state.understanding })
    }



    render() {

        return (
            <div>
                <Header />
                <br />
                <h1>How well are you understanding the content?</h1>
                <input
                    placeholder='understanding'
                    onChange={this.changeForFeeling}
                    value={this.state.understanding}
                />
                <Link to='/support' onClick={this.onNext}>Next</Link>
                <br />
                <Review />
            </div>
        );
    }
}

export default connect()(Understanding);