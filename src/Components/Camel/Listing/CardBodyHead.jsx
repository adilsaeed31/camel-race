import React from 'react'
import Lang from '../../../Lang/arabic.json'

export default function CardBodyHead() {
	return (
		<header className="columns is-mobile is-marginless">
			<div className="column is-2 has-text-weight-bold">{Lang.category1}</div>
			<div className="column is-2 has-text-weight-bold">{Lang.category2}</div>
			<div className="column is-2 has-text-weight-bold">{Lang.category3}</div>
			<div className="column is-2 has-text-weight-bold">{Lang.category4}</div>
			<div className="column is-2 has-text-weight-bold">{Lang.category5}</div>
			<div className="column is-2">{Lang.age}</div>
		</header>
	)
}
