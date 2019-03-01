import React from 'react'
import Heading from './Heading'
import Card from './Card'

export default function Listing(props) {
	return (
		<section className="section camel-listing">
			<Heading />
			{props.data.map((item, key) => (
				<Card key={key} {...item} index={key} />
			))}
		</section>
	)
}
