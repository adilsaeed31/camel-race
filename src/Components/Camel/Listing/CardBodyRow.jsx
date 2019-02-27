import React from 'react'
import Lang from '../../../Lang/arabic.json'

export default function CardBodyRow(props) {
	console.log(props.position, 'position')
	return (
		<div className="columns is-mobile is-marginless is-top-border-thick">
			<div className="column is-2 has-text-weight-bold">{props.category1}</div>
			<div className="column is-2 has-text-weight-bold">{props.category2}</div>
			<div className="column is-2 has-text-weight-bold">{props.category3}</div>
			<div className="column is-2 has-text-weight-bold">{props.category4}</div>
			<div className="column is-2 has-text-weight-bold">{props.category5}</div>
			<div className="column is-2">{Lang[`${props.position}`]}</div>
		</div>
	)
}
