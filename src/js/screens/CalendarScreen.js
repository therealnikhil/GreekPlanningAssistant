import React, { Component } from 'react';
import { Button, ButtonToolbar, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import SideBar from '../components/SideBar.js';
import Calendar from '../components/Calendar.js';
import '../../css/template.css';
import '../../css/CalendarScreen.css';

export default class CalendarScreen extends Component {
	addEventPressed() {

	}
	addTaskPressed() {

	}
	render() {
		return (
			<div>
				<SideBar activePage="Calendar" />
				<div className="non-sidebar-content">
					<div className="inner-container">
						<h1>Calendar</h1>
						<hr />
						<FormControl bsClass="search-bar" type="text" placeholder="Search for Event, Task, Date, Month etc." />
						<div>
							<div className="display-options">
								<span>Display:	</span>
								<DropdownButton title="Calendar View" id="bg-dropdown">
						      <MenuItem eventKey="1">Calendar View</MenuItem>
						      <MenuItem eventKey="2">Daily View</MenuItem>
						    </DropdownButton>
							</div>
							<ButtonToolbar className="add-to-cal-buttons">
								<Button
									bsStyle="primary"
									className="blue button"
									style={{"paddingTop" : 0, "paddingBottom" : 0}}
									onClick={this.addEventPressed.bind(this)}>
									<span className="add-plus">+</span>
									<span className="mid-align"> Event</span>
								</Button>
								<Button
									bsStyle="primary"
									className="blue button"
									style={{"paddingTop" : 0, "paddingBottom" : 0}}
									onClick={this.addTaskPressed.bind(this)}>
									<span className="add-plus">+</span>
									<span className="mid-align"> Task</span>
								</Button>
							</ButtonToolbar>
						</div>
						<Calendar />
					</div>
				</div>
			</div>
		);
	}
}
