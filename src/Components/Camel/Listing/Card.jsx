import React, { useState, useEffect } from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
// Init BulmaAccordion
import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js'

export default function Card(props) {
	let { total, rows, ranks, color } = props
	const [click, setClick] = useState(false)

	useEffect(() => {
		if (click) {
			bulmaAccordion.attach()
		}
	})

	return (
		<section className="camel-card" style={{ backgroundColor: color }}>
			<CardHeader
				onClick={() => setClick(!click)}
				name={total.name}
				totalPoints={total.totalPoints}
				code={total.code}
				position={total.position}
			/>
			{click && (
				<React.Fragment>
					<CardBody ranks={ranks} />

					<CardFooter events={rows} />
				</React.Fragment>
			)}
		</section>
	)
}
