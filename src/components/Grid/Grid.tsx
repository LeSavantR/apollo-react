import React, { ReactNode } from 'react';


export interface GridInterface {
	children: ReactNode
}

const Grid: React.FC<GridInterface> = ({ children }) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default Grid;

