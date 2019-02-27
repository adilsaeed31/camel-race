import React from 'react'
import Lang from '../../../Lang/arabic.json'

export default function Heading() {
	return (
		<header className="camel-headings">
			<div className="columns is-mobile">
				<div className="column is-3">{Lang.totalPoints}</div>
				<div className="column is-2">{Lang.code}</div>
				<div className="column is-3">{Lang.name}</div>
				<div className="column is-2">{Lang.position}</div>
				<div className="column is-2">&nbsp;</div>
			</div>
		</header>
	)
}
