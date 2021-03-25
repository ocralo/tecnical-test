import {
	createStore,
	applyMiddleware,
	combineReducers,
	compose,
} from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "../user/reducers/userReducer";
import chatReducer from "../chat/reducers/chatReducer";

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({ userReducer, chatReducer }),
	composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
