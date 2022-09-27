import React, { FormEvent, useReducer, useState } from 'react';
import { useCreatePerson } from '@/services';
import { useReducers } from '@/hooks';


export interface PersonFormInterface {
	notifyError: FunctionStringCallback
	children?: React.ReactNode
}

const PersonForm: React.FC<PersonFormInterface> = ({ notifyError }) => {

	const [ inputValues, dispatch ] = useReducers();

	const [ createPerson ] = useCreatePerson(notifyError);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		createPerson({variables: inputValues});

		dispatch({ type: 'clear' });
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		dispatch({
			type: 'change_value', payload: {
				inputName: name,
				inputValue: value
			}
		})
	};

	return (
		<div>
			<h2>Create New Person</h2>
			<form onSubmit={handleSubmit}>
				<input placeholder='Name' name='name' value={inputValues.name} onChange={handleChange} />
				<input placeholder='Phone' name='phone' value={inputValues.phone} onChange={handleChange} />
				<input placeholder='City' name='city' value={inputValues.city} onChange={handleChange} />
				<input placeholder='Street' name='street' value={inputValues.street} onChange={handleChange} />
				<input type={'submit'} value='Agregar' />
			</form>
		</div>
	);
};

export default PersonForm;

