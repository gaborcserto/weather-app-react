import React from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {FaSearchLocation} from 'react-icons/fa'

const searchBox = props => {
	return (
		<InputGroup className="searchBox">
			<FormControl
				placeholder="City"
				aria-label="City"
				aria-describedby="basic-addon2"
			/>
			<InputGroup.Append>
				<Button variant="link"><FaSearchLocation /></Button>
			</InputGroup.Append>
		</InputGroup>
	);
}

export default searchBox;