import React from "react";
import {reserveAction} from "../../redux/actions";
import {connect} from "react-redux";

class Pagination extends React.Component {

  render() {

    return (
      <ul className="pagination">
        <li className={''}>
          <button onClick={this.props.goBack}>Previous</button>
        </li>
        <li>
          {}
        </li>
        <li className={''}>
          <button onClick={this.props.goForward}>Next</button>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    menu: state.reducer.reservationReducer.menu
  }
};

const mapDispatchToProps = dispatch => {
  return {
    reserveTable: (menu, time) => dispatch(reserveAction(table, time))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);