import React from 'react';
import * as WeatherIcons from "react-icons/wi";

const weatherIcon = props => {
	let weatherType;
	const iconType = props.type;

	const thunderstormIcons = (iconId, sufix) => {
		switch (iconId) {
			case 200:
				// thunderstorm with light rain
				break;
			case 201:
				// 	thunderstorm with rain
				if(sufix === 'd') return <WeatherIcons.WiDayLightning/>;
				return <WeatherIcons.WiNightAltLightning/>;
			case 202:
				// thunderstorm with heavy rain
				if(sufix === 'd') return <WeatherIcons.WiDayLightning/>;
				return <WeatherIcons.WiNightAltLightning/>;
			case 210:
				// light thunderstorm
				if(sufix === 'd') return <WeatherIcons.WiDayLightning/>;
				return <WeatherIcons.WiNightAltLightning/>;
			case 230:
				// thunderstorm with light drizzle
				if(sufix === 'd') return <WeatherIcons.WiDayStormShowers/>;
				return <WeatherIcons.WiNightAltStormShowers/>;
			case 231:
				// thunderstorm with drizzle
				if(sufix === 'd') return <WeatherIcons.WiDayStormShowers/>;
				return <WeatherIcons.WiNightAltStormShowers/>;
			case 232:
				// thunderstorm with heavy drizzle 232
				if(sufix === 'd') return <WeatherIcons.WiDayStormShowers/>;
				return <WeatherIcons.WiNightAltStormShowers/>;
			default:
				// thunderstorm 211
				// ragged thunderstorm 221
				if(sufix === 'd') return <WeatherIcons.WiDayLightning/>;
				return <WeatherIcons.WiNightAltLightning/>;

		}
	}

	const drizzleIcons  = (iconId, sufix) => {
		// light intensity drizzle 300
		// light intensity drizzle 301
		// drizzle 302
		// light intensity drizzle rain 310
		// drizzle rain 311
		// heavy intensity drizzle rain 312
		// shower rain and drizzle 313
		// heavy shower rain and drizzle 314
		// shower drizzle 321
		if(sufix === 'd') return <WeatherIcons.WiDayShowers/>;
		return <WeatherIcons.WiNightAltShowers/>;
	}

	const rainIcons  = (iconId, sufix) => {
		switch (iconId) {
			case 500:
				// light rain
				if(sufix === 'd') return <WeatherIcons.WiDayRainMix/>;
				return <WeatherIcons.WiNightAltRainMix/>;
			case 501:
				// moderate rain
				if(sufix === 'd') return <WeatherIcons.WiDayRainWind/>;
				return <WeatherIcons.WiNightAltRainWind/>;
			case 502:
				// heavy intensity rain
				if(sufix === 'd') return <WeatherIcons.WiDayHail/>;
				return <WeatherIcons.WiNightAltHail/>
			case 503:
				// very heavy rain
				if(sufix === 'd') return <WeatherIcons.WiDayShowers/>;
				return <WeatherIcons.WiNightAltShowers/>;
			case 504:
				// extreme rain
				if(sufix === 'd') return <WeatherIcons.WiDayRain/>;
				return <WeatherIcons.WiNightAltRain/>;
			case 511:
				// freezing rain
				if(sufix === 'd') return <WeatherIcons.WiDaySleet/>;
				return <WeatherIcons.WiNightAltSleet/>;
			case 520:
				// light intensity shower rain
				return <WeatherIcons.WiHail/>;
			case 521:
				// shower rain and drizzle
				return <WeatherIcons.WiRainMix/>;
			case 522:
				// heavy shower rain and drizzle
				return <WeatherIcons.WiShowers/>;
			case 531:
				// ragged shower rain
				return <WeatherIcons.WiRain/>;
		}
	}

	const snowIcons  = (iconId, sufix) => {
		switch (iconId) {
			case 622:
				// heavy shower snow
				if(sufix === 'd') return <WeatherIcons.WiDaySnowWind/>;
				return <WeatherIcons.WiNightAltSnowWind/>;
			default:
				// light snow 600
				// snow 601
				// heavy snow  602
				// sleet 611
				// light shower sleet 612
				// shower sleet 613
				// light intensity shower rain 615
				// rain and snow 616
				// light shower snow 620
				// shower snow 621
				if(sufix === 'd') return <WeatherIcons.WiDaySnow/>;
				return <WeatherIcons.WiNightAltSnow/>;
		}
	}

	const atmosphereIcons  = (iconId, sufix) => {
		switch (iconId) {
			case 701:
				// mist
				if(sufix === 'd') return <WeatherIcons.WiDayFog/>;
				return <WeatherIcons.WiNightFog/>;
			case 711:
				// smoke
				return <WeatherIcons.WiSmoke/>;
			case 721:
				// haze
				return <WeatherIcons.WiDayHaze/>;
			case 731:
				// sand/ dust whirls
				return <WeatherIcons.WiSandstorm/>;
			case 741:
				// fog
				return <WeatherIcons.WiFog/>;
			case 751:
				// sand
				return <WeatherIcons.WiSandstorm/>;
			case 761:
				// dust
				return <WeatherIcons.WiDust/>;
			case 762:
				// volcanic ash
				return <WeatherIcons.WiVolcano/>;
			case 771:
				// squalls
				if(sufix === 'd') return <WeatherIcons.WiDayWindy/>;
				return <WeatherIcons.WiStrongWind/>;
			case 781:
				// tornado
				return <WeatherIcons.WiTornado/>;
		}
	}

	const cloudIcons  = (iconId, sufix) => {
		switch (iconId) {
			case 800:
				// clear
				if(sufix === 'd') return <WeatherIcons.WiDaySunny/>;
				return <WeatherIcons.WiNightClear/>;
			case 801:
				// few clouds: 11-25%
				if(sufix === 'd') return <WeatherIcons.WiDayCloudy/>;
				return <WeatherIcons.WiNightAltPartlyCloudy/>;
			case 802:
				// scattered clouds: 25-50%
				if(sufix === 'd') return <WeatherIcons.WiDayCloudy/>;
				return <WeatherIcons.WiNightAltCloudy/>;
			case 803:
				// broken clouds: 51-84%
				if(sufix === 'd') return <WeatherIcons.WiDayCloudyHigh/>;
				return <WeatherIcons.WiNightCloudyHigh/>;
			case 804:
				// overcast clouds: 85-100%
				return <WeatherIcons.WiCloudy/>;
		}
	}

	const icons = (iconId, sufix) =>	{
		if(iconId > 199 && iconId < 300) return thunderstormIcons(iconId, sufix);
		if(iconId > 299 && iconId < 400) return drizzleIcons(iconId, sufix);
		if(iconId > 499 && iconId < 600) return rainIcons(iconId, sufix);
		if(iconId > 599 && iconId < 700) return snowIcons(iconId, sufix);
		if(iconId > 699 && iconId < 800) return atmosphereIcons(iconId, sufix);
		if(iconId > 799) return cloudIcons(iconId, sufix);
	}


	if (iconType) {
		weatherType = icons(iconType, props.sufix)
	} else {
		weatherType = <WeatherIcons.WiAlien/>;
	}

	return <div className="weatherIcon">{weatherType}</div>;
}

export default weatherIcon;