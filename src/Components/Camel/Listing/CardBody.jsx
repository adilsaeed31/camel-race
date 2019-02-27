import React from 'react'
import CardBodyHead from './CardBodyHead'
import CardBodyRow from './CardBodyRow'

export default function CardBody(props) {
	return (
		<section className="camel-card-body is-top-border">
			<CardBodyHead />
			{props.ranks.map((row, key) => (
				<CardBodyRow key={key} {...row} />
			))}
		</section>
	)
}
