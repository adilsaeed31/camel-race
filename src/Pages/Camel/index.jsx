import React, { Component } from 'react'
import { connect } from 'react-redux'
import Listing from '../../Components/Camel/Listing'
import ACTIONS from '../../Store/Actions'

class Camel extends Component {
	componentDidMount() {
		const graphQLQuery = {
			query: `
					query {
						races {
							_id
							name
							totalPoints,
							code,
							position,
							color,
							ranks {
								position
								category1
								category2
								category3
								category4
								category5
							}
							events{
								eventName
								points
								rounds
								date
								position
								time
								age
							}
						}
					}`
		}

		fetch('http://localhost:8000/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2FtZWxyYWNlIn0.KmX0KBu3z2_EIBF1Fyd-p9zm1r3J5ixfD8R_5sSHfrs'
			},
			body: JSON.stringify(graphQLQuery)
		})
			.then(res => res.json())
			.then(res => {
				if (res.data && res.data.races) {
					this.props.getList(res.data.races)
				} else {
					this.props.getList([])
				}
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
