import React, { Component } from 'react'
import Listing from '../../Components/Camel/Listing'

export default class Camel extends Component {
	render() {
		return <Listing data={require('../../data.json')} />
	}
}
