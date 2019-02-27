import React, { useState, useEffect, Fragment } from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
// Init BulmaAccordion
import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js'

export default function Card(props) {
	// get vars from props with destruction way
	let { total, rows, ranks, color, index } = props
	// Using hooks here to set state
	const [click, setClick] = useState(false) // handle click
	const [first, setFirst] = useState(false) // handle first record to open always
	// Using hooks useEffect to rerender dom after state update
	useEffect(() => {
		// to keep open first record condition
		if (index === 0 && !first) {
			setClick(true)
			setFirst(true)
		}
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
				<Fragment>
					<CardBody ranks={ranks} />

					<CardFooter events={rows} />
				</Fragment>
			)}
		</section>
	)
}
