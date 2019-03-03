import React from 'react'

export default function CardHeader(props) {
	return (
		<header
			className="camel-card-header columns is-mobile is-marginless is-vcentered"
			onClick={props.onClick}
		>
			<div className="column is-3">{props.totalPoints}</div>
			<div className="column is-2">{props.code}</div>
			<div className="column is-3 is-size-8-mobile">{props.name}</div>
			<div className="column is-2">{props.position}</div>
			<div className="column is-2">
				<img
					src={`/images/camel${props.position >= 3 ? 3 : props.position}.png`}
					width="30"
					alt="Position Icon"
				/>
			</div>
		</header>
	)
}
