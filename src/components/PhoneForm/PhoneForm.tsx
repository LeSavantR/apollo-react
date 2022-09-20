import React, { FormEvent, useEffect, useState } from 'react';
import { useUpdatePhone } from '../../services/persons.mutations.service';


export interface PhoneFormInterface {
	notifyError: FunctionStringCallback
}

const PhoneForm: React.FC<PhoneFormInterface> = ({ notifyError }) => {
	const [ id, setId ] = useState('');
	const [ phone, setPhone ] = useState('');

	const [ changeNumber, results ] = useUpdatePhone(notifyError);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		changeNumber({
			variables: {
				id, phone
			}
		});

		setId('');
		setPhone('');
	}
	useEffect(() => {
		if (results.data && results.data.editPhone === null) {
			notifyError('Person Not Found!')
		}
	}, [results.data])

	return (
		<div>
			<h2>Edit Phone Person</h2>
			<form onSubmit={handleSubmit}>
				<input placeholder='ID' value={id} onChange={(event) => setId(event.target.value)} />
				<input placeholder='Phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
				<input type={'submit'} value='Update Phone' />
			</form>
		</div>
	);
};

export default PhoneForm;

