import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

class Admin extends Component {

    state = {
        info: []
    }

    componentDidMount() {
        this.refreshFeedback();
    }

    refreshFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedBack'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                info: response.data
            })
        });
    }

    mapingFunction = () => {
        let newInfo =  this.state.info.map((element, i) => {
           return <tr key={i}>
                <td>{element.feeling}</td>
                <td>{element.understanding}</td>
                <td>{element.support}</td>
                <td>{element.comments}</td>
            </tr>
        });
        return newInfo 
    }

    render() {

        return (
            <div>
                <h1>Admin</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapingFunction()}
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Admin);