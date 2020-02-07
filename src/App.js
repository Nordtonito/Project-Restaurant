import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from "react-redux";

import { fetchData } from './redux/actions';
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Reservation from "./pages/Reservation/Reservation";
import Menu from "./pages/Menu/Menu";
import Profile from "./pages/Profile/Profile";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

class App extends React.Component {

  componentDidMount() {
    this.props.getInitialData();
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Route exact path="/" component={ Home }/>
          <Route component={ Navigation }/>
          <Route component={ Header }/>
          <Route path="/contacts" component={ Contacts }/>
          <Route path="/reservation" component={ Reservation }/>
          <Route path="/menu" component={ Menu }/>
          <Route path="/profile" component={ Profile }/>
          <Route component={ Footer }/>
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