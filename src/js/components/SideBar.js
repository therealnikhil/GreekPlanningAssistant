import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../../css/template.css';
import '../../css/SideBar.css';

let FEATURES = [
	{ name: "Calendar", lock: false },
	{ name: "My Events", lock: false },
	{ name: "Task Manager", lock: false },
	{ name: "Files and Links", lock: false },
	{ name: "Account Settings", lock: false },
	{ name: "Chapter Settings", lock: true },
	{ name: "Join Requests", lock: true }
]

export default class SideBar extends Component {
	static propTypes = {
		activePage : PropTypes.oneOf(FEATURES.name).isRequired
	}
	static defaultProps = {
		sidebarItems : FEATURES
	}
	navLinkPressed(sidebarItem) {

	}
	logoutButtonPressed() {

	}
	render() {
		return (
			<div className="navbar">
				<div className="scrollable-section">
					<div className="profile-section">
						<div className="profile-pic-container"></div>
						<div className="profile-info">
							<h4>Jackilynn Knight</h4>
							<h5>Gamma Phi Beta</h5>
							<h6>No Idea Chapter</h6>
						</div>
					</div>
					<ButtonGroup vertical className="navlinks">
						{
							this.props.sidebarItems.map((sidebarItem, i) => {
								return (
									<Button
										className={ (this.props.activePage === sidebarItem.name) ? "navlink-active" : "navlink-inactive" }
										style={{"borderRadius" : 0}}
										key={i}
										onClick={this.navLinkPressed.bind(this, sidebarItem.name)}
									>
									<div className={sidebarItem.lock && "admin-lock"}>{sidebarItem.name}</div>
									</Button>
								)
							})
						}
					</ButtonGroup>
				</div>
				<Button className="logout-button" bsStyle="danger" onClick={this.logoutButtonPressed.bind(this)}>LOG OUT</Button>
			</div>
		);
	}
}
