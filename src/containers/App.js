import React from 'react';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';
import SearchBox from '../components/SearchBox/SearchBox';
import WeatherBox from '../components/WatherBox/WeatherBox';
import * as WeatherIcons from 'react-icons/wi';
import './App.scss';

class App extends React.Component {

	constructor(){
		super();
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
	};

	state = {
		weatherData: null,
		weatherTodayData: null,
		weatherCurrentData: null,
		city: 'Budapest',
		lat: 47.498,
		lng: 19.0399,
		units: 'metric',
		lang: 'hu',
		isLoaded: false,
		isLoadedCurrent: false,
		error: false
	}

	async componentDidMount() {
		const URL1 = `${process.env.REACT_APP_WEATHER_API_URL}/forecast/?q=${this.state.city}&units=${this.state.units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
		const URL2 = `${process.env.REACT_APP_WEATHER_API_URL}/onecall?lat=${this.state.lat}&lon=${this.state.lng}&units=${this.state.units}&exclude=hourly,daily&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
		try {
			let result = await axios.get(URL1);
			let weatherData = result.data;

			this.setState({
				weatherData: weatherData,
				weatherTodayData: weatherData.list[0],
				isLoaded: true
			});
		} catch (error) {
			console.log(`😱 Axios request failed: ${error}`);
		}

		try {
			let result = await axios.get(URL2);
			let weatherAllData = result.data;

			this.setState({
				weatherCurrentData: weatherAllData.current,
				isLoadedCurrent: true
			})
		} catch (error) {
			console.log(`😱 Axios request failed: ${error}`);
		}
	}

	forceUpdateHandler(){
		this.forceUpdate();
	};

	render() {
		let boxContent;

		if (this.state.isLoaded && this.state.isLoadedCurrent) {
			boxContent = <WeatherBox
				weatherAllData={this.state.weatherData}
				weatherTodayData={this.state.weatherTodayData}
				weatherCurrentData={this.state.weatherCurrentData}
				clicked={this.forceUpdateHandler} />;
		} else {
			boxContent = <h1><WeatherIcons.WiAlien/></h1>;
		}

		return (
			<div className="App">
				<Container fluid className="main">
					<Row className="main__content">
						<SearchBox />
						<div className="clearfix" />
						{boxContent}
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;
