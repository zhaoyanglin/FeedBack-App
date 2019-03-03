import React, { Component } from 'react';
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import LastPage from '../LastPage/LastPage';
import Admin from '../Admin/Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <Router>
          <div>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/understanding" component={Understanding} />
            <Route exact path="/support" component={Support} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/lastPage" component={LastPage} />
            <Route exact path="/admin" component={Admin} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
