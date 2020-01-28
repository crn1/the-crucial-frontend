import React from 'react'

import {
	createMuiTheme,
	MuiThemeProvider,
	responsiveFontSizes,
	} from '@material-ui/core/styles'
import createPalette from '@material-ui/core/styles/createPalette'
import createTypography from '@material-ui/core/styles/createTypography'
import CssBaseline from '@material-ui/core/CssBaseline'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

const lightTheme = responsiveFontSizes(createMuiTheme({
  typography: createTypography(createPalette({}), {
    fontFamily: '"Roboto"',
  }),
	palette: {
		primary: { main: blue[500] },
		secondary: { main: grey[900] },
	},
}))

const Layout = props => (
	<MuiThemeProvider theme={lightTheme}>
		<CssBaseline />
		{ props.children }
	</MuiThemeProvider>
)

export default Layout
