import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="camel-container">
				<div className="camel-header">
					<div className="columns is-mobile is-vcentered">
						<div className="column is-2 has-text-left">
							<img src="logo.png" alt="Logo" />
						</div>
						<div className="column is-8 has-text-centered camel-font-3">
							بيرق أبناء القبائل
						</div>
						<div className="column is-2 has-text-right camel-right-padding-0">
							<i className="fas fa-3x fa-bars has-text-black camel-burger" />
						</div>
					</div>
				</div>

				<div className="section camel-note has-text-white has-text-centered">
					ملاحظه: لا تعد النتائج المذكوره أدناه نهائية وتعتمد بشكل رئيسي
				</div>

				<div className="section camel-body has-text-white has-text-centered">
					<div className="section camel-buttons">
						<div className="columns is-mobile is-vcentered">
							<div className="column is-2">
								<span class="is-two navbar-burger burger has-text-white">
									<span className="span-hr-line" />
									<span className="span-hr-line center-thick" />
									<span className="span-hr-line span-hr-last" />
								</span>
							</div>
							<div className="column is-2">
								<button class="button camel-btn has-text-white">أرشيف</button>
							</div>
							<div className="column is-4">&nbsp;</div>
							<div className="column is-2">
								<i className="fas fa-plus-square" />
							</div>
							<div className="column is-2">
								<i className="fas fa-arrow-right" />
							</div>
						</div>
					</div>

					<div className="section camel-listing">
						<div className="camel-headings">
							<div className="columns is-mobile">
								<div className="column is-2">Points</div>
								<div className="column is-2">Code</div>
								<div className="column is-4">Name</div>
								<div className="column is-2">Position</div>
								<div className="column is-2">&nbsp;</div>
							</div>
						</div>

						<div className="camel-table">
							<div className="columns is-mobile">
								<div className="column is-2">Points</div>
								<div className="column is-2">Code</div>
								<div className="column is-4">Name</div>
								<div className="column is-2">Position</div>
								<div className="column is-2">&nbsp;</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
