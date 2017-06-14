import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row, Table } from 'react-bootstrap';
import '../../css/template.css';
import '../../css/Calendar.css';

let MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
let NUM_OF_DAYS_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

export default class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			calendar: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
			currentMonth: PropTypes.number,
			currentYear: PropTypes.number
		}
	}
	componentWillMount() {
		let todaysDate = new Date();
		let currentMonth = todaysDate.getMonth();
		let currentYear = todaysDate.getFullYear();
		let dayOfFirstOfMonth = this.getDayOfFirstOfMonth(currentMonth, currentYear);
		this.generateCalendarData(dayOfFirstOfMonth, currentMonth, currentYear);
	}
	getDayOfFirstOfMonth(month, year) {
		let firstOfMonth = new Date(year, month, 1, 0, 0, 0, 1);
		let dayOfFirstOfMonth = firstOfMonth.getDay();
		return dayOfFirstOfMonth;
	}
	generateCalendarData(dayOfFirst, month, year) {
		// console.log(dayOfFirst);
		var cal = [];
		var numDays = NUM_OF_DAYS_IN_MONTH[month];
		if ((((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) && month === 1) {
			numDays += 1;
		}
		var dateValue = PropTypes.number;
		dateValue = 0;
		for (var i = 0; i < Math.floor((dayOfFirst + numDays) / 6); i++) {
			var week = [];
			for (var j = 0; j < 7; j++) {
				if (i === 0) {
					if (j >= dayOfFirst) {
						dateValue += 1;
					}
				} else {
					if (dateValue === numDays) {
						dateValue = 0;
					}
					if (dateValue !== 0) {
						dateValue += 1;
					}
				}
				week[j] = dateValue;
			}
			cal[i] = week;
		}
		this.setState({
			calendar: cal,
			currentMonth: month,
			currentYear: year
		});
	}
	onClickPrev() {
		let newMonth = this.state.currentMonth;
		let newYear = this.state.currentYear;
		if (this.state.currentMonth > 0) {
			newMonth--;
		} else {
			newMonth = 11;
			newYear--;
		}
		this.generateCalendarData(this.getDayOfFirstOfMonth(newMonth, newYear) ,newMonth, newYear);
		this.setState({
			currentMonth: newMonth,
			currentYear: newYear
		});
	}
	onClickNext() {
		console.log("Before: " + this.state.currentMonth);
		let newMonth = this.state.currentMonth;
		let newYear = this.state.currentYear;
		if (this.state.currentMonth < 11) {
			newMonth++;
		} else {
			newMonth = 0;
			newYear++;
		}
		this.generateCalendarData(this.getDayOfFirstOfMonth(newMonth, newYear) ,newMonth, newYear);
		this.setState({
			currentMonth: newMonth,
			currentYear: newYear
		});
	}
	render() {
		return (
			<div className="calendar-widget">
				<Row className="calendar-title">
					<Col xs={1}>
						<div className="left-arrow" onClick={this.onClickPrev.bind(this)}></div>
					</Col>
					<Col xs={10}>
						<h2 className="month-and-year">{MONTHS[this.state.currentMonth]} {this.state.currentYear}</h2>
					</Col>
					<Col xs={1}>
						<div className="right-arrow" onClick={this.onClickNext.bind(this)}></div>
					</Col>
				</Row>
				<Table responsive className="calendar-table">
					<thead>
						<tr>
							<th>Sun</th>
							<th>Mon</th>
							<th>Tue</th>
							<th>Wed</th>
							<th>Thu</th>
							<th>Fri</th>
							<th>Sat</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.calendar.map((rows, i) => {
								return <tr>{ rows.map((date, j) => { return <td className={ (date == 0) && "no-date" }>{ (date !== 0) && date }</td>}) }</tr>
							})
						}
					</tbody>
				</Table>
			</div>
		);
	}
}
