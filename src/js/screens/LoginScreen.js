import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../../css/template.css';
import '../../css/LoginScreen.css';

export default class LoginScreen extends Component {
	loginButtonPressed() {

	}
	render() {
		return (
			<div>
				<div className="left-half greek-house-pic"></div>
				<div className="right-half container">
					<div className="inner-container">
						<h1>Log In</h1>
						<hr />
						<p>If your Chapter uses Greek Planning Assistant and you have a GPA account, log in below.</p>
						<p>If you don’t have an account, click <a href="#">here</a> to request your Chapter to send you an invite.</p>
						<form>
							<FormGroup>
								<ControlLabel>Email Address</ControlLabel>
								<FormControl
						      id="formControlsEmail"
						      type="email"
						      placeholder="e.g. example@university.edu"
						    />
							</FormGroup>
							<FormGroup>
								<ControlLabel>Password</ControlLabel>
						    <FormControl id="formControlsPassword" type="password" />
							</FormGroup>
						</form>
						<p className="right-align"><a href="#">Forgot your Password?</a></p>
						<Button bsStyle="primary" className="blue button" onClick={this.loginButtonPressed.bind(this)}>Log In</Button>
						<h1>Use GPA in Your Chapter</h1>
						<hr />
						<p>
							Greek Planning Assistant is a great tool that can be used to organize events and delegate tasks within your Chapter, and plan events with other fraternities and sororities in your university. Click <a href="#">here</a> to learn more about GPA.
						</p>
						<p>
							Done your research and came here to use GPA in your Chapter? That’s great news! Click below to get started.
						</p>
						<p>Happy planning!</p>
						<Button bsStyle="primary" className="blue button" onClick={this.loginButtonPressed.bind(this)}>Register Your Chapter</Button>
					</div>
				</div>
			</div>
		);
	}
}
