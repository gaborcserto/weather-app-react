import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherBoxTemp from './WeatherBoxTemp/WeatherBoxTemp';
import WeatherBoxLocation from './WeatherBoxLocation/WeatherBoxLocation';
import WeatherBoxDescription from './WeatherBoxDescription/WeatherBoxDescription';
import WeatherBoxOtherData from './WeatherBoxOtherData/WeatherBoxOtherData';
import CurrentTime from '../CurrentTime/CurrentTime';
import { Col, Row, Button } from 'react-bootstrap';
import { AiOutlineReload, AiOutlineEye } from 'react-icons/ai';
import { MdUpdate } from 'react-icons/md';
import * as WeatherIcons from 'react-icons/wi';
import moment from "moment";

const weatherBox = props => {
	let dayOrNight = '',
		sufix = 'd',
		convertedRainData = '0';
	const dataTime =  moment(props.weatherCurrentData.dt, "X").utcOffset(1).format('HH:mm:ss');
	const rainData = props.weatherTodayData.rain;
	const numberFormat = (number) => Math.round(number * 10) / 10;
	const currentTime = moment().valueOf();

	const tempMinMax = (
		<React.Fragment>
			<span>{numberFormat(props.weatherTodayData.main.temp_min)}</span>
			<span>°C</span>
			<span>{numberFormat(props.weatherTodayData.main.temp_max)}</span>
			<span>°C</span>
		</React.Fragment>
	);

	if (props.weatherTodayData.rain) convertedRainData = rainData[Object.keys(rainData)[0]];

	if(props.weatherCurrentData.sunset > currentTime || props.weatherCurrentData.sunsrise < currentTime) {
		dayOrNight = ' nightMode';
		sufix = 'n';
	}

	return (
		<div className={`weatherBox${dayOrNight}`}>
			<Button variant="link" className="weatherBox__reloadButton" onClick={props.clicked}><AiOutlineReload /></Button>
			<div className="weatherBox__mainContent">
				<WeatherIcon
					type={props.weatherCurrentData.weather[0].id}
					sufix={sufix} />
				<WeatherBoxTemp
					rootClass="weatherBox__mainContent"
				    location={props.weatherAllData.city}
				    temp={numberFormat(props.weatherCurrentData.temp)}
				    feels={numberFormat(props.weatherCurrentData.feels_like)} unit="°C" />
				<CurrentTime rootClass="weatherBox__mainContent" />
				<WeatherBoxLocation
					rootClass="weatherBox__mainContent"
					location={props.weatherAllData.city} />
				<WeatherBoxDescription
					rootClass="weatherBox__mainContent"
					description={props.weatherCurrentData.weather[0].description} />
			</div>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.wind_speed}
						unit="m/s"
						title="Wind Flow"
						icon={<WeatherIcons.WiCloudyWindy />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.pressure}
						unit="hPa"
						title="Air Pressure"
						icon={<WeatherIcons.WiBarometer />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.humidity}
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
						data={props.weatherCurrentData.uvi}
						unit=""
						title="UV-index"
						icon={<WeatherIcons.WiDaySunny />}/>
				</Col>
			</Row>
			<Row className="weatherBox__otherData">
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.visibility}
						unit="m"
						title="Visibility"
						icon={<AiOutlineEye />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={dataTime}
						unit=""
						title="Data"
						icon={<MdUpdate />}/>
				</Col>
				<Col>
					<WeatherBoxOtherData
						rootClass="weatherBox__otherData"
						data={convertedRainData}
						unit="mm/h"
						title="Rain"
						icon={<WeatherIcons.WiRain />}/>
				</Col>
			</Row>
			<div className="random">test{ Math.random() }</div>
		</div>
	);
}

export default weatherBox;