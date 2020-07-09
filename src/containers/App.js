import React from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import SearchBox from '../components/SearchBox/SearchBox';
import WeatherBox from '../components/WatherBox/WeatherBox';
import Forecast from '../components/Forecast/Forecast';
import Loader from '../components/Loader/Loader';
import cities from 'cities.json';
import moment from 'moment';
import './App.scss';

class App extends React.Component {

	state = {
		weatherDailyData: null,
		weatherCurrentData: null,
		city: 'Budapest',
		country: 'HU',
		lat: 47.498,
		lng: 19.0399,
		units: 'metric',
		lang: 'hu',
		isLoadedCurrent: false,
		isSearchLoading: false,
		options: [],
		selected: [],
		error: false,
	}

	handleCityChange = (item) => {
		if(item.length > 0) {
			this.setState({
				...this.state,
				city: item[0].name,
				country: item[0].country,
				lat: item[0].lat,
				lng: item[0].lng
			});

			this.getWeather(item[0].name, this.state.units, item[0].lat, item[0].lng);
		}
	}

	handleSearch = (query) => {
		this.setState({isSearchLoading: true});
		const result = cities.filter(city => city.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);

		if(result !== undefined) {
			const options = result.map((items) => ({
				name: items.name,
				country: items.country,
				lat: items.lat,
				lng: items.lng
			}));
			this.setState({options: options});
		}
		this.setState({isSearchLoading: false});
	}

	handleForceUpdate = () => {
		this.forceUpdate();
	}

	componentDidMount() {
		this.getWeather(this.state.city, this.state.units, this.state.lat, this.state.lng);
	}

	async getWeather(city, units, lat, lng) {
		const URL2 = `${process.env.REACT_APP_WEATHER_API_URL}/onecall?lat=${lat}&lon=${lng}&units=${units}&exclude=hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

		try {
			let result = await axios.get(URL2);
			let weatherAllData = result.data;

			this.setState({
				...this.state,
				weatherDailyData: weatherAllData.daily,
				weatherCurrentData: weatherAllData.current,
				isLoadedCurrent: true
			})
		} catch (error) {
			console.log(`😱 Axios request failed: ${error}`);
		}
	}

	render() {
		let boxContent = <Loader />;
		const currentTime = moment().valueOf();
		let dayOrNight = '',
			suffix = 'd';

		if (this.state.isLoadedCurrent) {
			if(this.state.weatherCurrentData.sunset > currentTime || this.state.weatherCurrentData.sunrise < currentTime) {
				dayOrNight = ' nightMode';
				suffix = 'n';
			}

			boxContent = (<React.Fragment>
				<Col className="main__content__col" md={12} lg={6}>
					<WeatherBox
					suffix={suffix}
					dayOrNight={dayOrNight}
					city={this.state.city}
					country={this.state.country}
					weatherCurrentData={this.state.weatherCurrentData}
					weatherDailyData={this.state.weatherDailyData}
					clicked={this.handleForceUpdate} />
				</Col>
				<Col className="main__content__col" md={12} lg={6}>
					<Forecast
						dayOrNight={dayOrNight}
						weatherCurrentData={this.state.weatherCurrentData}
						weatherDailyData={this.state.weatherDailyData}
					/>
				</Col>
				</React.Fragment>);
		}

		return (
			<div className="App">
				<Container className="main">
					<SearchBox
						{...this.state}
						loaded={this.state.isSearchLoading}
						searched={(e) => this.handleSearch(e)}
						changed={(e) => this.handleCityChange(e)}
						options={this.state.options}
					/>
					<Row className="main__content">
						{boxContent}
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;