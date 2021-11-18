import React, { useState } from 'react';
import { Navigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

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
		<Col>
			<Card style={{ width: '18rem' }}>
				<Card.Body>
					<Card.Title>{props.dog.name}</Card.Title>
					<Card.Text>{props.dog.breed}</Card.Text>
					<Button onClick={() => handleDelete(props.dog._id)} variant='primary'>
						Delete
					</Button>
				</Card.Body>
			</Card>
		</Col>
		// <li key={props.dog._id}>
		// 	Name: {props.dog.name} - Breed: {props.dog.breed}
		// 	{/* <button"> Update</button> */}
		// 	<button onClick={() => handleDelete(props.dog._id)}> Delete</button>
		// </li>
	);
};

export default DogCard;
