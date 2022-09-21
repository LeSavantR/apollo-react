import { Persons } from '@/models';
import { useFindPerson } from '@/services';
import React, { useEffect, useState } from 'react';

export interface PersonInterface {
	persons: Persons[]
}

const Person: React.FC<PersonInterface> = ({ persons }) => {

	const [ person, setPerson ] = useState<Persons | null>(null)

	const [ getPerson, result ] = useFindPerson();

	const showPerson = (name: string) => {
		getPerson({ variables: { name }})
	}

	useEffect(() => {
		if (result.data) {
			setPerson(result.data.findPerson)
		}
	}, [result])

	if (person) {
		return (
			<div>
				<h2>{person.name}</h2>
				<p>{person.phone} <br /></p>
				<p>{person.address.city}/{person.address.street}<br /></p>
				<p>{person.id}<br /></p>
				<button onClick={() => setPerson(null)}>Close</button>
			</div>
		);
	}

	return (
		<>
			{
				persons.map((person: Persons) => (
					<div key={person.id} onClick={() => showPerson(person.name)}>
						<h2>{person.name}</h2>
						<p>{person.id}</p>
						<p>{person.phone}</p>
					</div>
				))
			}
		</>
	);
};

export default Person;

