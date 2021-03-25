import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "../user/reducers/userReducer";

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({ userReducer }),
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
