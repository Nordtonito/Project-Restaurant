export function reserveAction(table, time) {
    return { type: 'RESERVE', table, time }
}

export function cancelAction(table, time) {
     return { type: 'CANCEL', table, time }
}

export function receiveData(data) {
  return { type: 'RECEIVE_DATA', data }
}

export function fetchData() {
  console.log('fetchD works');
    return async dispatch => {
        const responseData = await fetch('https://my-json-server.typicode.com/Nordtonito/JSONPlaceHolderData/db', {
        method: 'GET',
        //mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });
        const parsedData = await responseData.json();
        dispatch(receiveData(parsedData));
    }
}