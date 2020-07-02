import React from 'react';

const weatherBoxOtherData = props => {
	return (
		<React.Fragment>
			<div className="weatherBox__otherData__type">
				{props.data}
				<span className="weatherBox__otherData__type__unit">{props.unit}</span>
			</div>
			<div className="weatherBox__otherData__icon">{props.icon}</div>
			<h2 className="weatherBox__otherData__title">{props.title}</h2>
		</React.Fragment>
	);
}

export default weatherBoxOtherData;