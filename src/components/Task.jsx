import React from "react"

import { connect } from "react-redux"

import { Card, Divider, Icon, IconButton, InputBase } from "@material-ui/core"

class Task extends React.Component {

    render() {
        const { columnIndex, cardIndex, card } = this.props

        return (
            <Card
                className="ma3 pl2 pr2"
                style={{ background: "#FFFF99", }}>
                <InputBase
                    fullWidth
                    onChange={(event) => this.props.cardTitle(columnIndex, cardIndex, event.target.value)}
                    placeholder="Title"
                    value={card.title} />
                <Divider />
                <InputBase
                    fullWidth
                    multiline
                    onChange={(event) => this.props.cardDescription(columnIndex, cardIndex, event.target.value)}
                    placeholder="Description"
                    rows="5"
                    value={card.description} />
                <Divider />
                <div
                    className="flex justify-end">
                    <IconButton
                        disabled={columnIndex === 0}
                        onClick={() => this.props.cardMove({ column: columnIndex, card: cardIndex }, { column: columnIndex - 1, card: card })}>
                        <Icon>arrow_back</Icon>
                    </IconButton>
                    <IconButton
                        disabled={columnIndex === 4}
                        onClick={() => this.props.cardMove({ column: columnIndex, card: cardIndex }, { column: columnIndex + 1, card: card })}>
                        <Icon>arrow_forward</Icon>
                    </IconButton>
                    <IconButton
                        onClick={() => this.props.cardRemove(columnIndex, cardIndex)}>
                        <Icon>delete</Icon>
                    </IconButton>
                </div>
            </Card>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardRemove: (column, card) => { dispatch({ type: "CARD_REMOVE", column, card }) },
        cardTitle: (column, card, title) => { dispatch({ type: "CARD_TITLE", column, card, title }) },
        cardDescription: (column, card, description) => { dispatch({ type: "CARD_DESCRIPTION", column, card, description }) },
        cardMove: (from, to) => { dispatch({ type: "CARD_MOVE", from, to }) },
    }
}

export default connect(null, mapDispatchToProps)(Task)