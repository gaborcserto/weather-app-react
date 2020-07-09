import React from 'react';
import * as WeatherIcons from "react-icons/wi";

const weatherIcon = props => {
	let weatherType = <WeatherIcons.WiNa/>;

	if (props.type) weatherType = <i className={`owf owf-3x owf-${props.type}-${props.suffix}`} />;

	return <div className="weatherIcon">{weatherType}</div>;
}

export default weatherIcon;