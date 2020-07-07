import React from 'react';
import WeatherIcon from '../../WeatherIcon/WeatherIcon';
import moment from "moment";
import * as WeatherIcons from "react-icons/wi";
import BoxOtherData from "../../BoxOtherData/BoxOtherData";
import { Col, Row } from "react-bootstrap";

const forecastData = props => {
	const numberFormat = (number) => Math.round(number * 10) / 10;
	const day =  moment(props.forecastData.dt, "X").utcOffset(1).format('YYYY.MM.DD.');
	const dayName =  moment(props.forecastData.dt, "X").utcOffset(1).format('ddd');

	const tempMinMax = (
		<div className="minmax">
			<span>{numberFormat(props.forecastData.temp.min)}</span>
			<span>°C</span>
			<span>{numberFormat(props.forecastData.temp.max)}</span>
			<span>°C</span>
		</div>
	);

	return (
		<div className="forecast__data">
			<Row className="forecast__data__row">
				<Col>
					<div className="forecast__data__date">
						<h4>{dayName}</h4>
						<small>{day}</small>
					</div>
				</Col>
				<Col>
					<div className="forecast__data__weather">
					<WeatherIcon
						type={props.forecastData.weather[0].id}
						sufix={props.sufix} />
						<h3>{props.forecastData.weather[0].description}</h3>
					</div>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="temp forecast__data"
						data={tempMinMax}
						unit=""
						title="Temp"
						icon={<WeatherIcons.WiThermometer />}/>
				</Col>

				<Col>
					<BoxOtherData
						rootClass="forecast__data"
						data={props.forecastData.uvi}
						unit=""
						title="UV-index"
						icon={<WeatherIcons.WiDaySunny />}/>
				</Col>
				<Col>
					<BoxOtherData
						rootClass="forecast__data"
						data={props.forecastData.humidity}
						unit="%"
						title="Humidity"
						icon={<WeatherIcons.WiHumidity />}/>
				</Col>
			</Row>
		</div>
	)
}

export default forecastData;