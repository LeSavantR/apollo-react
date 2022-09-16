import React from 'react';
import { Person } from '../../Models/person';


export interface PersonInterface {
	person: Person
}

const Person: React.FC<PersonInterface> = ({ person }) => {
	return (
		<div>
			<h2>{person.name}</h2>
			<p>{person.phone}</p>
		</div>
	);
};

export default Person;

