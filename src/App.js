import React, { Component } from 'react'
// Components
import Header from './Components/Common/Header'
import Note from './Components/Common/Note'
import AppButtons from './Components/Common/AppButtons'
import Camel from './Pages/Camel'
// Sass file
import './App.scss'

class App extends Component {
	render() {
		return (
			<div className="camel-container">
				<Header />

				<Note />

				<article className="section camel-body has-text-white has-text-centered">
					<AppButtons />

					<Camel />
				</article>
			</div>
		)
	}
}

export default App
