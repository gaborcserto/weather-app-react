import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherBoxTemp from './WeatherBoxTemp/WeatherBoxTemp';
import WeatherBoxLocation from './WeatherBoxLocation/WeatherBoxLocation';
import WeatherBoxDescription from './WeatherBoxDescription/WeatherBoxDescription';
import WeatherBoxOtherData from './WeatherBoxOtherData/WeatherBoxOtherData';
import CurrentTime from '../CurrentTime/CurrentTime';
import {Col, Row, Button} from 'react-bootstrap';
import {AiOutlineReload} from 'react-icons/ai'
import * as WeatherIcons from 'react-icons/wi';

const weatherBox = props => {
	let dayOrNight = '';
	const dataTime = props.weatherTodayData.dt_txt.split(' ');
	const rainData = props.weatherTodayData.rain;
	const tempMinMax = (
		<React.Fragment>
			<span>{props.weatherTodayData.main.temp_min}</span>
			<span>°C</span>
			<span>{props.weatherTodayData.main.temp_max}</span>
			<span>°C</span>
		</React.Fragment>
	);

	if (props.weatherTodayData.sys.pod !== 'd') dayOrNight = ' nightMode';

	return (
		<div className={`weatherBox${dayOrNight}`}>
			<Button variant="link" className="weatherBox__reloadButton" onClick={props.clicked}><AiOutlineReload /></Button>
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
						rootClass="weatherBox__otherData"
						data={props.weatherTodayData.wind.speed}
						unit="m/s"
						title="Wind Flow"
						icon={<WeatherIcons.WiStrongWind />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherTodayData.main.pressure}
						unit="hPa"
						title="Air Pressure"
						icon={<WeatherIcons.WiBarometer />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherTodayData.main.humidity}
						unit="%"
						title="Humidity"
						icon={<WeatherIcons.WiHumidity />}/>
				</Col>
			</Row>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData
						rootClass="temp weatherBox__otherData"
						data={tempMinMax}
						unit=""
						title="Temp"
						icon={<WeatherIcons.WiThermometer />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={dataTime[1]}
						unit=""
						title="Data"
						icon={<WeatherIcons.WiTime1 />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={rainData[Object.keys(rainData)[0]]}
						unit="mm"
						title="Rain"
						icon={<WeatherIcons.WiRaindrop />}/>
				</Col>
			</Row>
			<div className="random">{ Math.random() }</div>
		</div>
	);
}

export default weatherBox;