import React, { Component } from 'react'
import { connect } from 'react-redux'
import Listing from '../../Components/Camel/Listing'
import ACTIONS from '../../Store/Actions'

class Camel extends Component {
	componentDidMount() {
		this.props.getList(require('../../data.json'))
	}
	render() {
		let { lists } = this.props

		if (lists.length > 0) {
			return <Listing data={lists} />
		}

		return <i className="fas fa-2x fa-spinner fa-pulse" />
	}
}

const mapStateToProps = state => ({
	lists: state.lists
})

const mapDispatchToProps = dispatch => ({
	getList: lists => dispatch(ACTIONS.getList(lists))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Camel)
