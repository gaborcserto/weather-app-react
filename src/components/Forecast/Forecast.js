import React from 'react';
import ForecastData from './ForecastData/ForecastData'


const forecast = props => {
	return (
		<div className={`forecast${props.dayOrNight}`}>
			<h2 className="forecast__title">7 day weather forecast</h2>
			{
				props.weatherDailyData.map((value, index) => {
					if(index > 0) {
						return <ForecastData
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