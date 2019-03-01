import React from 'react'
import CardAccordion from './CardAccordion'

export default function CardFooter(props) {
	return (
		<footer className="accordions camel-accordion">
			{props.events.map((event, key) => (
				<CardAccordion
					key={key}
					eventName={event.eventName}
					date={event.date}
					rounds={event.rounds}
					position={event.position}
					points={event.points}
					time={event.time}
					age={event.age}
				/>
			))}
		</footer>
	)
}
