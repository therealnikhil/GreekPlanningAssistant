import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import '../../css/template.css';
import '../../css/SideBar.css';

export default class Sidebar extends Component {
	loginButtonPressed() {

	}
	render() {
		return (
			<div className="navbar">
				<div className="profile-section">
					<div className="profile-pic-container"></div>
					<div className="profile-info">
						<h4>Jackilynn Knight</h4>
						<h5>Gamma Phi Beta</h5>
						<h6>No Idea Chapter</h6>
					</div>
				</div>
				<ButtonGroup vertical className="navlinks">
					<Button className="navlink-active" style={{"border-radius": 0}}>Calendar</Button>
					<Button className="navlink-inactive">My Events</Button>
					<Button className="navlink-inactive">Task Manager</Button>
					<Button className="navlink-inactive">Files and Links</Button>
					<Button className="navlink-inactive">Account Settings</Button>
					<Button className="navlink-inactive">Chapter Settings</Button>
					<Button className="navlink-inactive" style={{"border-radius": 0}}>Join Requests</Button>
				</ButtonGroup>
				<Button className="logout-button" bsStyle="danger">LOG OUT</Button>
			</div>
		);
	}
}
