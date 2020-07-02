import React from 'react';

const weatherBoxTemp = props => {
	return (
		<div className={`${props.rootClass}__temp`}>
			{props.temp}
			<span className={`${props.rootClass}__temp__unit`}>{props.unit}</span>
			<p className={`${props.rootClass}__temp__feels`}>
				Feels Like: {props.feels}
				<span className={`${props.rootClass}__temp__feels__unit`}>{props.unit}</span>
			</p>
		</div>
	);
}

export default weatherBoxTemp;