import React from "react"

import { connect } from "react-redux"

import { Button, Card, Divider, Grid, Icon, Typography } from "@material-ui/core"

import Task from "components/Task"

class Column extends React.Component {

    render() {
        const { columnIndex, column } = this.props

        return (
            <Grid
                className="h-100"
                item
                key={columnIndex}
                xs={2}>
                <Card
                    className="ma2 tc">
                    <Typography
                        className="tc"
                        style={{ margin: "1rem 0", }}
                        variant="h5">
                        {column.title}
                    </Typography>
                    <Divider />
                    <Button
                        color="primary"
                        onClick={() => this.props.cardInsert(columnIndex)}
                        style={{ margin: "0.5rem", }}
                        variant="outlined">
                        <Icon>add</Icon>
                        Add Task
                    </Button>
                    <Divider />
                    {column.list.map((card, cardIndex) =>
                        <Task
                            card={card}
                            cardIndex={cardIndex}
                            columnIndex={columnIndex}
                            key={cardIndex} />
                    )}
                </Card>
            </Grid>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardInsert: (column) => { dispatch({ type: "CARD_INSERT", column }) },
    }
}

export default connect(null, mapDispatchToProps)(Column)