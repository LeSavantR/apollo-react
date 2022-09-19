import React from 'react';


export interface NotifyInterface {
	errorMessage: string
}

const Notify: React.FC<NotifyInterface> = ({ errorMessage }) => {
	if (!errorMessage) return null
	return (
		<div style={{ color: 'red', width: '100%' }}>
			{errorMessage}
		</div>
	);
};

export default Notify;

