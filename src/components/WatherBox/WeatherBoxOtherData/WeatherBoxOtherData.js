import React from 'react';

const weatherBoxOtherData = props => {
	return (
		<React.Fragment>
			<div className={`${props.rootClass}__type`}>
				{props.data}
				<span className={`${props.rootClass}__type__unit`}>{props.unit}</span>
			</div>
			<div className={`${props.rootClass}__icon`}>{props.icon}</div>
			<h2 className={`${props.rootClass}__title`}>{props.title}</h2>
		</React.Fragment>
	);
}

export default weatherBoxOtherData;