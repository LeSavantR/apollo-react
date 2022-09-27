import { useReducer } from 'react';

type FormReducerAction = {
	type: 'change_value',
	payload: {
		inputName: string,
		inputValue: string
	}
} | {
	type: 'clear'
}

type StateReducer = {
	name: string,
	phone: string,
	city: string,
	street: string
}

const INITIAL_STATE = {
	name: '',
	phone: '',
	city: '',
	street: ''
}

const formReducer = (state: StateReducer, action: FormReducerAction) => {
	switch (action.type) {
		case 'change_value':
			const { inputName, inputValue } = action.payload
			return {
				... state, [inputName]:inputValue
			}

		case 'clear':
			return INITIAL_STATE
	}
}

const useReducers = () => {
	return useReducer(formReducer, INITIAL_STATE);
};

export default useReducers;

