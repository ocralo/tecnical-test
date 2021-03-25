import Routes from "./Routes";

//import redux
import { Provider } from "react-redux";
import store from "./redux/storage/Storage";
function App() {
	return (
		<>
			<Provider store={store}>
				<Routes />
			</Provider>
		</>
	);
}

export default App;
