import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="camel-container">
				<div className="camel-header">
					<div className="columns is-mobile is-top-padding-10">
						<div className="column is-one-third has-text-left">Camel Race</div>
						<div className="column is-one-third has-text-centered">
							Program Title
						</div>
						<div className="column is-one-third has-text-right camel-right-padding-0">
							<i className="fas fa-3x fa-bars has-text-black camel-burger" />
						</div>
					</div>
				</div>

				<div className="section camel-note has-text-white has-text-centered">
					Note: This is the special note of an application
				</div>

				<div className="section camel-body has-text-white has-text-centered">
					<div className="section camel-buttons">
						<div className="columns is-mobile is-vcentered">
							<div className="column">
								<span class="is-two navbar-burger burger has-text-white">
									<span className="span-hr-line" />
									<span className="span-hr-line center-thick" />
									<span className="span-hr-line span-hr-last" />
								</span>
							</div>
							<div className="column">
								<button class="button camel-btn has-text-white">Primary</button>
							</div>
							<div className="column">
								<i className="fas fa-plus-square" />
							</div>
							<div className="column">
								<i className="fas fa-arrow-right" />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
