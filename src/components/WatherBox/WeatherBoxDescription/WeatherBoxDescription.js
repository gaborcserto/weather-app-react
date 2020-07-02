import React from 'react';

const weatherBoxDescription = props => {
	return (
		<div className={`${props.rootClass}__description`}>
			{props.description}
		</div>
	);
}

export default weatherBoxDescription;