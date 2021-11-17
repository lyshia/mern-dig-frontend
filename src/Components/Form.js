import React from 'react';
import { useState } from 'react';

const Form = () => {
	const [input, setInput] = useState({ name: '', breed: '' });

	const handleChange = (event) => {
		setInput({ ...input, [event.target.name]: event.target.value });
	};

 	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('submitted');

		fetch('http://localhost:4000/dogs/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(input),
		})
			.then(() => setInput({name: '', breed: ''}));
	};


	return (
		<div>
			<form onSubmit={handleSubmit}> 
				<input
					type='text'
					name='name'
					placeholder='Dog Name'
					value={input.name}
					onChange={handleChange}
				/>
				<input
					type='text'
					name='breed'
					placeholder='Dog Breed'
					value={input.breed}
					onChange={handleChange}
				/>
				<button type='submit'> Submit</button>
			</form>
		</div>
	);
};

export default Form;
