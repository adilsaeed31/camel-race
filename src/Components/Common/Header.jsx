import React from 'react'

export default function Header() {
	return (
		<article className="camel-header">
			<section className="columns is-mobile is-vcentered">
				<div className="column is-3 has-text-left">
					<img src="logo.png" alt="Company Logo" />
				</div>
				<div className="column is-6 has-text-centered camel-font-3">
					بيرق أبناء القبائل
				</div>
				<div className="column is-2 has-text-right camel-right-padding-0">
					<i className="fas fa-2x fa-bars has-text-black camel-burger" />
				</div>
			</section>
		</article>
	)
}
