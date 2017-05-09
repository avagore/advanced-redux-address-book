
import {createStore} from "redux";
//we need our data to put in the database
import state from "./state";
import reducers from "./reducers";

var store = createStore(reducers, state);

export default store;