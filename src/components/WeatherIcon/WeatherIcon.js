import React from 'react';
import * as WeatherIcons from "react-icons/wi";

const weatherIcon = props => {
	let weatherType;

	if (props.type) {
		weatherType = <i className={`owf owf-3x owf-${props.type}-d`} />;
	} else {
		weatherType = <WeatherIcons.WiAlien/>;
	}

	return <div className="weatherIcon">{weatherType}</div>;
}

export default weatherIcon;