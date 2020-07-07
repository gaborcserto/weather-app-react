import React from 'react';
import { FaSearchLocation } from 'react-icons/fa'
import { AsyncTypeahead } from "react-bootstrap-typeahead";

const searchBox = props => {

	return (
		<div className="searchBox">
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
		</div>
	)
}

export default searchBox;