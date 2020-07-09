import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherBoxTemp from './WeatherBoxTemp/WeatherBoxTemp';
import WeatherBoxLocation from './WeatherBoxLocation/WeatherBoxLocation';
import WeatherBoxDescription from './WeatherBoxDescription/WeatherBoxDescription';
import BoxOtherData from '../BoxOtherData/BoxOtherData';
import CurrentTime from '../CurrentTime/CurrentTime';
import { Col, Row, Button } from 'react-bootstrap';
import { AiOutlineReload, AiOutlineEye } from 'react-icons/ai';
import { MdUpdate } from 'react-icons/md';
import * as WeatherIcons from 'react-icons/wi';
import moment from "moment";

const weatherBox = props => {
	let convertedRainData = '0';
	const dataTime =  moment(props.weatherCurrentData.dt, "X").utcOffset(1).format('HH:mm:ss');
	const rainData = props.weatherCurrentData.rain;
	const numberFormat = (number) => Math.round(number * 10) / 10;

	const tempMinMax = (
		<React.Fragment>
			<span>{numberFormat(props.weatherDailyData[0].temp.min)}</span>
			<span>°C</span>
			<span>{numberFormat(props.weatherDailyData[0].temp.max)}</span>
			<span>°C</span>
		</React.Fragment>
	);

	if (rainData > 0) convertedRainData = rainData[Object.keys(rainData)[0]];

	return (
		<div className={`weatherBox${props.dayOrNight}`}>
			<Button variant="link" className="weatherBox__reloadButton" onClick={props.clicked}><AiOutlineReload /></Button>
			<div className="weatherBox__mainContent">
				<WeatherIcon
					type={props.weatherCurrentData.weather[0].id}
					suffix={props.suffix} />
				<WeatherBoxTemp
					rootClass="weatherBox__mainContent"
				    temp={numberFormat(props.weatherCurrentData.temp)}
				    feels={numberFormat(props.weatherCurrentData.feels_like)} unit="°C" />
				<CurrentTime rootClass="weatherBox__mainContent" />
				<WeatherBoxLocation
					rootClass="weatherBox__mainContent"
					city={props.city}
					country={props.country}
				/>
				<WeatherBoxDescription
					rootClass="weatherBox__mainContent"
					description={props.weatherCurrentData.weather[0].description} />
			</div>
			<Row className="weatherBox__otherData">
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.wind_speed}
						unit="m/s"
						title="Wind Flow"
						icon={<WeatherIcons.WiCloudyWindy />}/>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.pressure}
						unit="hPa"
						title="Air Pressure"
						icon={<WeatherIcons.WiBarometer />}/>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.humidity}
						unit="%"
						title="Humidity"
						icon={<WeatherIcons.WiHumidity />}/>
				</Col>
			</Row>
			<Row className="weatherBox__otherData">
				<Col>
					<BoxOtherData
						rootClass="temp weatherBox__otherData"
						data={tempMinMax}
						unit=""
						title="Temp"
						icon={<WeatherIcons.WiThermometer />}/>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.uvi}
						unit=""
						title="UV-index"
						icon={<WeatherIcons.WiSunrise />}/>
				</Col>
			</Row>
			<Row className="weatherBox__otherData">
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={props.weatherCurrentData.visibility}
						unit="m"
						title="Visibility"
						icon={<AiOutlineEye />}/>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={dataTime}
						unit=""
						title="Data"
						icon={<MdUpdate />}/>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="weatherBox__otherData"
						data={convertedRainData}
						unit="mm/h"
						title="Rain"
						icon={<WeatherIcons.WiRain />}/>
				</Col>
			</Row>
			<div className="random">{ Math.random() }</div>
		</div>
	);
}

export default weatherBox;