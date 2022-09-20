import React, { useState, useEffect, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../graphql/mutations';

export interface LoginFormInterface {
	notifyError: FunctionStringCallback
	setToken: FunctionStringCallback
}

const LoginForm: React.FC<LoginFormInterface> = ({ notifyError, setToken }) => {

	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ login, results ] = useMutation(LOGIN, {
		onError: error => notifyError(error.graphQLErrors[0].message)
	});

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		login(username, password)
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					username
					<input
						value={username}
						onChange={({ target }) => setUsername(target.value)}
					/>
				</div>
				<div>
					password
					<input
						type={'password'}
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
				</div>
				<button type='submit'>login</button>
			</form>
		</div>
	);
};

export default LoginForm;

