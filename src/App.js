import React from 'react';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from "react-redux";

import { fetchData } from './redux/actions';
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Reservation from "./pages/Reservation/Reservation";

class App extends React.Component {

  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path="/" component={ Home }/>
          <Route path="/contacts" component={ Contacts }/>
          <Route path="/reservation" component={ Reservation }/>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    tables: state.reducer.tables
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getInitialData: () => dispatch(fetchData())
  }
};

App.defaultProps = {
  tables: []
};

export default connect(mapStateToProps, mapDispatchToProps)(App);