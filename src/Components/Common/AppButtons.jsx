import React from 'react'

export default function AppButtons() {
	return (
		<section className="section camel-buttons">
			<header className="columns is-mobile is-vcentered">
				<div className="column is-2">
					<span className="is-two navbar-burger burger has-text-white">
						<span className="span-hr-line" />
						<span className="span-hr-line center-thick" />
						<span className="span-hr-line span-hr-last" />
					</span>
				</div>
				<div className="column is-2">
					<button className="button camel-btn has-text-white">أرشيف</button>
				</div>
				<div className="column is-4">&nbsp;</div>
				<div className="column is-2">
					<i className="fas fa-plus-square" />
				</div>
				<div className="column is-2">
					<i className="fas fa-arrow-right" />
				</div>
			</header>
		</section>
	)
}
