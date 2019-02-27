import React from 'react'
import Lang from '../../../Lang/arabic.json'

export default function CardAccordion(props) {
	return (
		<article className="accordion">
			<div className="accordion-header toggle">
				<p className="accordion-title">{props.eventName}</p>
				<p className="has-text-weight-bold">{props.points}</p>
				<i
					className="fas fa-chevron-down toggle camel-chevron-font-margin"
					aria-label="toggle"
				/>
			</div>
			<div className="accordion-body" style={{ backgroundColor: props.color }}>
				<div className="accordion-content">
					<div className="columns is-mobile">
						<div className="column has-text-weight-bold">{Lang.date}</div>
						<div className="column has-text-weight-bold">{Lang.rounds}</div>
						<div className="column has-text-weight-bold">{Lang.position}</div>
					</div>
					<div className="columns is-mobile">
						<div className="column">{props.date}</div>
						<div className="column">{props.rounds}</div>
						<div className="column">{props.position}</div>
					</div>
					<div className="columns is-mobile">
						<div className="column has-text-weight-bold">{Lang.points}</div>
						<div className="column has-text-weight-bold">{Lang.time}</div>
						<div className="column has-text-weight-bold">{Lang.age}</div>
					</div>
					<div className="columns is-mobile">
						<div className="column">{props.points}</div>
						<div className="column">{props.time}</div>
						<div className="column">{props.age}</div>
					</div>
				</div>
			</div>
		</article>
	)
}
