import React from 'react';
import axios from 'axios';
import {Container, Row} from 'react-bootstrap';
import SearchBox from '../components/SearchBox/SearchBox';
import Box from '../components/WatherBox/WeatherBox';
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
		city: 'Budapest',
		lat: 47.498,
		lon: 19.0399,
		units: 'metric',
		lang: 'hu',
		isLoaded: false,
		error: false
	}

	async componentDidMount() {
		const URL = `${process.env.REACT_APP_WEATHER_API_URL}/forecast/?q=${this.state.city}&units=${this.state.units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
		console.log(URL);
		try {
			let result = await axios.get(URL);
			let weatherData = result.data;
			this.setState({
				weatherData: weatherData,
				weatherTodayData: weatherData.list[0],
				isLoaded: true
			});
		} catch (error) {
			console.log(`😱 Axios request failed: ${error}`);
		}
	}

	forceUpdateHandler(){
		this.forceUpdate();
	};

	render() {
		let boxContent;
		console.log(this.state);

		if (this.state.isLoaded) {
			boxContent = <Box weatherAllData={this.state.weatherData} weatherTodayData={this.state.weatherTodayData} clicked={this.forceUpdateHandler} />;
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
