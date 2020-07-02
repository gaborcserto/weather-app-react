import React from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';
import Box from '../components/WatherBox/WeatherBox'
import * as WeatherIcons from 'react-icons/wi';
import './App.scss';

class App extends React.Component {

	state = {
		weatherData: null,
		weatherTodayData: null,
		city: 'Budapest',
		units: 'metric',
		isLoaded: false,
		error: false
	}

	async componentDidMount() {
		const URL = `${process.env.REACT_APP_API_URL}/forecast/?q=${this.state.city}&units=${this.state.units}&APPID=${process.env.REACT_APP_API_KEY}`;
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

	render() {
		let boxContent;

		if (this.state.isLoaded) {
			boxContent = <Box weatherAllData={this.state.weatherData} weatherTodayData={this.state.weatherTodayData} />;
		} else {
			boxContent = <h1><WeatherIcons.WiAlien/></h1>;
		}

		return (
			<div className="App">
				<Container fluid className="main">
						{boxContent}
				</Container>
			</div>
		);
	}
}

export default App;
