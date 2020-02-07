import React from 'react';
import { connect } from "react-redux";

import { reserveAction, cancelAction } from "../../redux/actions";

import "./Reservation.css"

class Reservation extends React.Component {

  state = {
    table: '',
    time: ''
  };

  showTables = (tables = []) => {
    return (
      tables.map(table => <li key={table.id} className={'places_' + table.places}>
        Table: {table.id}
        <form id="timeline">
          <select form="timeline" onChange={this.onChangeTime} value={this.state.time}>
            <option value="select">Select a time</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
          </select>
          <button className="reserve" onClick={this.onReserve}>Reserve</button>
          <button className="cancel" onClick={this.onCancel}>Cancel</button>
        </form>
      </li>)
    );
  };

  onReserve = (event) => {
    event.preventDefault();
    const tableID = document.getElementById('reserveTable').value;
    this.props.reserveTable(this.state.table, tableID);
  };

  onCancel = (event) => {
    event.preventDefault();
    const tableID = document.getElementById('cancelTable').value;
    this.props.cancelTable(this.state.table, tableID);
  };

  onChangeTime = (event) => {
    event.preventDefault();
    this.setState({
      time: event.target.value
    })
  };

  render() {
    const { tables } = this.props;

    return (
      <React.Fragment>
        <div className="buttons">
          <form id="timeline">

          </form>
        </div>
        <ul>
          { this.showTables(tables) }
        </ul>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    tables: state.reducer.reservationReducer.tables
  }
};

const mapDispatchToProps = dispatch => {
  return {
    reserveTable: (table, time) => dispatch(reserveAction(table, time)),
    cancelTable: (table, time) => dispatch(cancelAction(table, time))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);