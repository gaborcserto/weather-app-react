import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherBoxOtherData from './WeatherBoxOtherData/WeatherBoxOtherData';
import {Col, Row} from 'react-bootstrap';
import moment from 'moment';
import * as WeatherIcons from 'react-icons/wi';

const weatherBox = props => {
	let dayOrNight = '';
	const dataTime = props.weatherTodayData.dt_txt.split(' ');

	if (props.weatherTodayData.sys.pod !== 'd') dayOrNight = ' nightMode';

	return (
		<div className={`weatherBox${dayOrNight}`}>
			<div className="weatherBox__mainContent">
				<WeatherIcon
				type={props.weatherTodayData.weather[0].id}
				sufix={props.weatherTodayData.sys.pod} />
				<div className="weatherBox__mainContent__temp">
					{props.weatherTodayData.main.temp}°
					<span className="weatherBox__mainContent__temp__unit">C</span>
					<p className="weatherBox__mainContent__temp__feels">
						Feels Like: {props.weatherTodayData.main.feels_like}
						<span className="weatherBox__mainContent__temp__feels__unit">°C</span>
					</p>
				</div>
				<div className="weatherBox__mainContent__times">
					<p className="weatherBox__mainContent__times__time">{moment().format('HH:mm')}</p>
					<p className="weatherBox__mainContent__times__date">{moment().format('YYYY.MM.DD.')}</p>
				</div>
				<div className="weatherBox__mainContent__location">
					{props.weatherAllData.city.name}, {props.weatherAllData.city.country}
				</div>
				<div className="weatherBox__mainContent__description">
					{props.weatherTodayData.weather[0].description}
				</div>
			</div>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData data={props.weatherTodayData.main.humidity} unit="Km/h" title="Wind Flow" icon={<WeatherIcons.WiHumidity />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData data={props.weatherTodayData.wind.speed} unit="%" title="Humidity" icon={<WeatherIcons.WiStrongWind />}/>
				</Col>
			</Row>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData data={props.weatherTodayData.main.temp_min} unit="°C" title="Min" icon={<WeatherIcons.WiThermometer />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData data={dataTime[1]} unit="" title="Data" icon={<WeatherIcons.WiTime1 />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData data={props.weatherTodayData.main.temp_max} unit="°C" title="Max" icon={<WeatherIcons.WiThermometer />}/>
				</Col>
			</Row>
		</div>
	);
}

export default weatherBox;