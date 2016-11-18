import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class PackageTile extends Component {
	render() {
		return (
			<div className="workpkg-tile">
				<Button>Large button</Button>
			</div>
		);
	}
}

class Dummy extends Component {
	render() {
		return (<h1>YOLO</h1>);
	}
}

export {PackageTile, Dummy};