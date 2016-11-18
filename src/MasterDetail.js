import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';

class Master extends Component {
	render() {
		return (
			<Col md={4} className="bg-danger">
				
			</Col>
		);
	}
}

class Detail extends Component {
	render() {
		return (
			<Col md={8} className="bg-warning">
				
			</Col>
		);
	}
}

class MasterDetail extends Component {
	render() {
		return (
			<div class='container'>
				<Row>
					<Master />
					<Detail />
				</Row>
			</div>
		);
	}
}

export { Master, Detail, MasterDetail };