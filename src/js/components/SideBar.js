import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../../css/template.css';
import '../../css/SideBar.css';

let FEATURES = [ "Calendar", "My Events", "Task Manager", "Files and Links", "Account Settings", "Chapter Settings", "Join Requests" ]

export default class SideBar extends Component {
	static propTypes = {
		activePage : PropTypes.oneOf(FEATURES).isRequired
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
										className={ (this.props.activePage === sidebarItem) ? "navlink-active" : "navlink-inactive" }
										style={{"borderRadius" : 0}}
										key={i}
										onClick={this.navLinkPressed.bind(this, sidebarItem)}
									>
									{sidebarItem}
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
