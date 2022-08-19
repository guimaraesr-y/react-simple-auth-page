import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={ <Login /> } path='/login' />
				<Route element={ <Register /> } path='/register' />
			</Routes>
		</BrowserRouter>
	)
}

export default App;
