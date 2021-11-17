import React, { useState } from 'react';
import { Navigate } from 'react-router';

const DogCard = (props) => {
	const handleDelete = (id) => {
		fetch(`http://localhost:4000/dogs/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data);
				props.setDogs(data.data);
			});
	};

	return (
		<li key={props.dog._id}>
			Name: {props.dog.name} - Breed: {props.dog.breed}
			{/* <button"> Update</button> */}
			<button onClick={() => handleDelete(props.dog._id)}> Delete</button>
		</li>
	);
};

export default DogCard;
