import React from 'react';
import moment from 'moment';

class currentTime extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: moment().format('HH:mm:ss'),
			currentDate: moment().format('YYYY.MM.DD.')
		};
	}
	componentDidMount() {
		this.intervalID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}
	tick() {
		this.setState({
			currentTime: moment().format('HH:mm:ss'),
			currentDate: moment().format('YYYY.MM.DD.')
		});
	}

	render() {
		return (
			<div className={`${this.props.rootClass}__times`}>
				<p className={`${this.props.rootClass}__times__time`}>{this.state.currentTime}</p>
				<p className={`${this.props.rootClass}__times__date`}>{this.state.currentDate}</p>
			</div>
		)
	}
}

export default currentTime