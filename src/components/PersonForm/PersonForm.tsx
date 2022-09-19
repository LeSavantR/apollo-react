import React, { useState } from 'react';
import { useCreatePerson } from '../../services';


export interface PersonFormInterface {
	notifyError: FunctionStringCallback
	children?: React.ReactNode
}

const PersonForm: React.FC<PersonFormInterface> = ({ notifyError, children }) => {

	const [ name, setName ] = useState('')
	const [ phone, setPhone ] = useState('')
	const [ city, setCity ] = useState('')
	const [ street, setStreet ] = useState('')

	const [ createPerson ] = useCreatePerson(notifyError)

	const handleSubmit = (event: any) => {
		event.preventDefault()

		createPerson({variables: { name, phone, city, street }})

		setName('')
		setPhone('')
		setCity('')
		setStreet('')
	}

	return (
		<div>
			{children}
			<h2>Create New Person</h2>
			<form onSubmit={handleSubmit}>
				<input placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
				<input placeholder='Phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
				<input placeholder='City' value={city} onChange={(event) => setCity(event.target.value)} />
				<input placeholder='Street' value={street} onChange={(event) => setStreet(event.target.value)} />
				<input type={'submit'} value='Agregar' />
			</form>
		</div>
	);
};

export default PersonForm;

