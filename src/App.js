import React, { useEffect } from 'react'
import wpApi from './wpApi'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
} from 'react-router-dom'

import BaseLayout from './BaseLayout'

const App = () => {

	useEffect(() => {
		console.log(WP)
	}, [])

	return (
		<Router>
			<BaseLayout>
				<Switch>
					<Route exact path='/'>
						<div>
							Welcome to the React.js and WordPress Boilerplate!
							<br />
							To check if Boilerplate is set up correctly just open your web console!
						</div>
					</Route>
				</Switch>
			</BaseLayout>
		</Router>
	)
}

export default App
