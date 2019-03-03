import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Review from '../Review/Review';
import Header from '../Header/Header';

class Feeling extends Component {

    state = {
        feeling:''
    }

    changeForFeeling = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    onNext = () => {
        this.props.dispatch({type:'SET_FEELING', payload:this.state.feeling})
    }

    render() {
        
        return (
            <div>
                <Header />
                <br />
                <h1>How are you feeling today?</h1>
                <input 
                placeholder='feeling'
                onChange={this.changeForFeeling}
                value={this.state.feeling}
                />
                <Link to='/understanding' onClick={this.onNext}>Next</Link>
                <br/>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Feeling);