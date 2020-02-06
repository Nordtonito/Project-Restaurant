import React from 'react';
import { connect } from "react-redux";

import { reserveAction, cancelAction } from "../../redux/actions";

class Reservation extends React.Component {

  showTables = (tables = []) => {
    return (
      tables.map(table => <li key={table.table}>Table: {table.table}</li>)
    );
  };

  onReserve = () => {
    const tableID = document.getElementById('reserveTable').value;
    console.log(tableID);
    this.props.reserveTable(tableID);
  };

  render() {
    const { tables } = this.props;

    return (
      <React.Fragment>
        <div className="buttons">
          <form action="">
            <input id="reserveTable" type="text" name="reservation" value="1"/>
            <button className="reserve" onClick={this.onReserve}>Reserve</button>
            <button className="cancel" onClick={this.cancel}>Cancel</button>
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
    tables: state.reducer.tables
  }
};

const mapDispatchToProps = dispatch => {
  return {
    reserveTable: (table) => dispatch(reserveAction(table))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);