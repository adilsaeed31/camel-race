import React, { Component } from 'react'
import { connect } from 'react-redux'
import Listing from '../../Components/Camel/Listing'
import ACTIONS from '../../Store/Actions'

class Camel extends Component {
	componentDidMount() {
		fetch ('http://localhost:8000/graphql', {
			method: 'post',
			headers: {
				Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FtZWxyYWNlIn0.KmX0KBu3z2_EIBF1Fyd-p9zm1r3J5ixfD8R_5sSHfrs"
			}
		})
		.then(res => res.json())
		.then(res => {
			console.log(res, 'res')
			this.props.getList(require('../../data.json'))
		})
		.catch(err => console.log(err, 'Error in API'))
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
