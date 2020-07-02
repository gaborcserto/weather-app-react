import React from 'react';

const weatherBoxLocation = props => {
	return (
		<div className={`${props.rootClass}__location`}>
			<span>{props.location.name}</span>
			<span>{props.location.country}</span>
		</div>
	);
}

export default weatherBoxLocation;