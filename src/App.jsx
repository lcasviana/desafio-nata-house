import React from "react"

import { connect } from "react-redux"

import { Grid } from "@material-ui/core"

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import Lime from "@material-ui/core/colors/lime"
import Red from "@material-ui/core/colors/red"
import Teal from "@material-ui/core/colors/teal"

import Column from "components/Column"

const theme = createMuiTheme({
    palette: {
        primary: Teal,
        secondary: Lime,
        error: Red,
    },
    typography: {
        useNextVariants: true,
    }
})

class App extends React.Component {

    render() {
        const { board } = this.props

        return (
            <MuiThemeProvider
                theme={theme}>
                <main
                    className="pa3"
                    style={{ minWidth: 1500, }}>
                    <Grid
                        className="flex justify-center h-100 w-100"
                        container>
                        {board.columns.map((column, columnIndex) => (
                            <Column
                                column={column}
                                columnIndex={columnIndex}
                                key={columnIndex} />
                        ))}
                    </Grid>
                </main>
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    return {
        board: state.Board,
    }
}

export default connect(mapStateToProps, null)(App)