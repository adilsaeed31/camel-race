import React from 'react'

export default function CardHeader(props) {
	return (
		<header
			className="camel-card-header columns is-mobile is-marginless is-vcentered"
			onClick={props.onClick}
		>
			<div className="column is-3 has-text-weight-bold">
				{props.totalPoints}
			</div>
			<div className="column is-2 has-text-weight-bold">{props.code}</div>
			<div className="column is-3 has-text-weight-bold is-size-7-mobile">
				{props.name}
			</div>
			<div className="column is-2 has-text-weight-bold">{props.position}</div>
			<div className="column is-2 has-text-weight-bold">&nbsp;</div>
		</header>
	)
}
