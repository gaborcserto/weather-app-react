import React from 'react';

const weatherBoxLocation = props => {
	return (
		<div className={`${props.rootClass}__location`}>
			<span>{props.city}</span>
			<span>{props.country}</span>
		</div>
	);
}

export default weatherBoxLocation;