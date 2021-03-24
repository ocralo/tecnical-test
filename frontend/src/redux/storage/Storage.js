import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import userReducer from "../user/reducers/userReducer";

const store = createStore(
	combineReducers({ userReducer }),
	composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
