import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Components/Form';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/add-dog'> Add Dog</Link>
			</nav>

			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/add-dog' element={<Form />} />
			</Routes>
		</div>
	);
}

export default App;
