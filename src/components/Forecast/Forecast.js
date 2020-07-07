import React from 'react';
import moment from "moment";
import ForecastData from './ForecastData/ForecastData'


const forecast = props => {
	let dayOrNight = '',
		sufix = 'd';
	const currentTime = moment().valueOf();

	if(props.weatherCurrentData.sunset > currentTime || props.weatherCurrentData.sunsrise < currentTime) {
		dayOrNight = ' nightMode';
		sufix = 'n';
	}

	return (
		<div className={`forecast${dayOrNight}`}>
			<h2 className="forecast__title">7 day weather forecast</h2>
			{
				props.weatherDailyData.map((value, index) => {
					if(index > 0) {
						return <ForecastData
							sufix={sufix}
							forecastData={value}
							key={index}/>;
					} else {
						return '';
					}
				})
			}
		</div>
	)
}

export default forecast;