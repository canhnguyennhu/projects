import './App.css';
import Routes from './sceen/routes';
import store from "./stores/Store";
import { Provider } from 'react-redux'

function App() {
  return (
		<Provider store={store}>
			<div className="App">
				<Routes></Routes>
			</div>
		</Provider>	
  );
}

export default App;
