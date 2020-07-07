import React from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import SearchBox from '../components/SearchBox/SearchBox';
import WeatherBox from '../components/WatherBox/WeatherBox';
import Loader from '../components/Loader/Loader';
import cities from 'cities.json';
import './App.scss';

class App extends React.Component {

	state = {
		weatherData: null,
		weatherTodayData: null,
		weatherDailyData: null,
		weatherCurrentData: null,
		city: 'Budapest',
		country: 'HU',
		lat: 47.498,
		lng: 19.0399,
		units: 'metric',
		lang: 'hu',
		isLoaded: false,
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
			console.log(result);
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
		const URL1 = `${process.env.REACT_APP_WEATHER_API_URL}/forecast/?q=${city}&units=${units}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
		const URL2 = `${process.env.REACT_APP_WEATHER_API_URL}/onecall?lat=${lat}&lon=${lng}&units=${units}&exclude=hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
		try {
			let result = await axios.get(URL1);
			let weatherData = result.data;

			this.setState({
				...this.state,
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
		let boxContent;

		if (this.state.isLoaded && this.state.isLoadedCurrent) {
			boxContent = <WeatherBox
				weatherAllData={this.state.weatherData}
				weatherTodayData={this.state.weatherTodayData}
				weatherCurrentData={this.state.weatherCurrentData}
				clicked={this.handleForceUpdate} />;
		} else {
			boxContent = <Loader />;
		}

		return (
			<div className="App">
				<Container fluid className="main">
					<Row className="main__content">
						<SearchBox
							{...this.state}
							loaded={this.state.isSearchLoading}
							searched={(e) => this.handleSearch(e)}
							changed={(e) => this.handleCityChange(e)}
							options={this.state.options}
						/>
						<div className="clearfix" />
						{boxContent}
					</Row>
				</Container>
			</div>
		);
	}
}

export default App;