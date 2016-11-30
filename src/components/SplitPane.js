import React, { Component } from 'react';
import { Button, Col, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';
import { browserHistory } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

import './SplitPane.css';

class SplitPane extends Component {

	handleClick(selectedKey) {
		this.state = {
			activeTab: selectedKey
		};
	}

	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.locations[0].href
		};
	}

	render() {
		const navMenuItems = this.props.locations.map(function(location, i) {
			return (
				<LinkContainer activeClassName='active' key={i} to={location.href}>
					<NavItem eventKey={location.href}>{location.text}</NavItem>
				</LinkContainer>
			);
		});

		return (
			<div className='container'>
				<Col md={4} className='bg-danger'>
					<Nav bsStyle="pills" stacked activeKey={this.state.activeTab} onSelect={this.handleClick}>
						{ navMenuItems }
					</Nav>
				</Col>
				<Col md={8} className='bg-warning'>
					<h3>Hello</h3>
				</Col>
			</div>
		);
	}
}

export default SplitPane;