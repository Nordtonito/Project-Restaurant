function reservationReducer(tables = {}, action) {
  switch (action.type) {
    case 'RESERVE': return tables.map(table => table.id === action.table && !table.reserved[action.time] ? table.reserved[action.time] = true : table);
    case 'CANCEL': return tables.map(table => table.id === action.table && table.reserved[action.time] ? table.reserved[action.time] = false : table);
    case 'RECEIVE_DATA': return action.data;
    default: return tables;
  }
}

export default reservationReducer;