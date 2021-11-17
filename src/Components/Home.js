import React ,{useEffect, useState} from 'react';
import DogCard from './DogCard';

const Home = (props) => {
	const [dogs, setDogs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/dogs')
			.then((res) => res.json())
			.then((data) => setDogs(data.data));
	}, []);

	let dogView = dogs.map((dog) => {
		return (
            <DogCard setDogs={setDogs} dog={dog} />
		
		);
	});


	return (
		<div>
			<h1> Dig, the dog database</h1>
			<ul>{dogView}</ul>
		</div>
	);
};

export default Home;
