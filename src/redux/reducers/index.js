function reservationReducer(tables = [], action) {
    switch (action.type) {
        case 'RESERVE': return tables.map(table => table.table === action.table ? table.reserved = true : table);
        case 'CANCEL': return [...tables].forEach(table => {
            if (table.table === action.table) {
                table.reserved = false;
            }
        });
        case 'RECEIVE_DATA': return action.data;
        default: return tables;
    }
}

export default reservationReducer;