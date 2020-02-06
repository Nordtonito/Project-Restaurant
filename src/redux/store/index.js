import { createStore } from "redux";
import reducer from "../reducers";
import tables from "../../data/hall";

const initialState = tables;

const store = createStore(reducer, initialState);

export default store;