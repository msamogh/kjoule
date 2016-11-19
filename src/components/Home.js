import React, { Component } from 'react';
import SplitPane from './SplitPane';

class Home extends Component {
	
	render() {
		const locations = [
			{href: '/myPosting', text: 'My Posting'},
			{href: '/reporting', text: 'Reporting'},
			{href: '/administration', text: 'Administration'},
			{href: '/accounting', text: 'Accounting'},
			{href: '/configuration', text: 'Configuration'},
		];
		return (
			<SplitPane locations={locations} />
		);
	}
}

export default Home;