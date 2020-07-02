import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherBoxTemp from './WeatherBoxTemp/WeatherBoxTemp';
import WeatherBoxLocation from './WeatherBoxLocation/WeatherBoxLocation';
import WeatherBoxDescription from './WeatherBoxDescription/WeatherBoxDescription';
import WeatherBoxOtherData from './WeatherBoxOtherData/WeatherBoxOtherData';
import CurrentTime from '../CurrentTime/CurrentTime';
import {Col, Row} from 'react-bootstrap';
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
				<WeatherBoxTemp
					rootClass="weatherBox__mainContent"
				    location={props.weatherAllData.city}
				    temp={props.weatherTodayData.main.temp}
				    feels={props.weatherTodayData.main.feels_like} unit="°C" />
				<CurrentTime rootClass="weatherBox__mainContent" />
				<WeatherBoxLocation
					rootClass="weatherBox__mainContent"
					location={props.weatherAllData.city} />
				<WeatherBoxDescription
					rootClass="weatherBox__mainContent"
					description={props.weatherTodayData.weather[0].description} />
			</div>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData
						data={props.weatherTodayData.main.humidity}
						unit="Km/h"
						title="Wind Flow"
						icon={<WeatherIcons.WiHumidity />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						data={props.weatherTodayData.wind.speed}
						unit="%"
						title="Humidity"
						icon={<WeatherIcons.WiStrongWind />}/>
				</Col>
			</Row>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData
						data={props.weatherTodayData.main.temp_min}
						unit="°C"
						title="Min"
						icon={<WeatherIcons.WiThermometer />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						data={dataTime[1]}
						unit=""
						title="Data"
						icon={<WeatherIcons.WiTime1 />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						data={props.weatherTodayData.main.temp_max}
						unit="°C"
						title="Max"
						icon={<WeatherIcons.WiThermometer />}/>
				</Col>
			</Row>
		</div>
	);
}

export default weatherBox;