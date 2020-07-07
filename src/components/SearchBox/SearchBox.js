import React from 'react';
import { FaSearchLocation } from 'react-icons/fa'
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { Col } from 'react-bootstrap';

const searchBox = props => {

	return (
		<Col className="searchBox" xs={12} md={6}>
			<AsyncTypeahead
				id="async-example"
				isLoading={props.loaded}
				labelKey="name"
				minLength={3}
				onChange={props.changed}
				onSearch={props.searched}
				options={props.options}
				placeholder="Enter city name..."
				renderMenuItemChildren={(option) => (
					<React.Fragment>
						<span>
							{option.name}
							<small>: {option.country}</small>
						</span>
					</React.Fragment>
				)}
			/>
			<div className="searchBox__icon"><FaSearchLocation /></div>
		</Col>
	)
}

export default searchBox;