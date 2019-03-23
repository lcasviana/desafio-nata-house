const cardDefault = { title: "", description: "", }

const boardDefault = {
    columns: [
        { title: "Backlog", list: [], },
        { title: "To Do", list: [], },
        { title: "In Progress", list: [], },
        { title: "Testing", list: [], },
        { title: "Done", list: [], },
    ]
}

function reducer(state = boardDefault, action) {

    switch (action.type) {

        case "CARD_INSERT":
            return {
                columns: state.columns.map((column, columnIndex) =>
                    action.column === columnIndex
                        ? {
                            ...column,
                            list: [...column.list, cardDefault]
                        }
                        : column
                )
            }

        case "CARD_REMOVE":
            return {
                columns: state.columns.map((column, columnIndex) =>
                    action.column === columnIndex
                        ? {
                            ...column,
                            list: column.list.filter((card, cardIndex) => action.card !== cardIndex)
                        }
                        : column
                )
            }

        case "CARD_TITLE":
            return {
                columns: state.columns.map((column, columnIndex) =>
                    action.column === columnIndex
                        ? {
                            ...column,
                            list: column.list.map((card, cardIndex) =>
                                action.card === cardIndex
                                    ? {
                                        ...card,
                                        title: action.title
                                    }
                                    : card
                            )
                        }
                        : column
                )
            }

        case "CARD_DESCRIPTION":
            return {
                columns: state.columns.map((column, columnIndex) =>
                    action.column === columnIndex
                        ? {
                            ...column,
                            list: column.list.map((card, cardIndex) =>
                                action.card === cardIndex
                                    ? {
                                        ...card,
                                        description: action.description
                                    }
                                    : card
                            )
                        }
                        : column
                )
            }

        case "CARD_MOVE":
            return {
                columns: state.columns.map((column, columnIndex) =>
                    action.from.column === columnIndex
                        ? {
                            ...column,
                            list: column.list.filter((card, cardIndex) => action.from.card !== cardIndex)
                        }
                        : action.to.column === columnIndex
                            ? {
                                ...column,
                                list: [...column.list, action.to.card]
                            }
                            : column
                )
            }

        default:
            return {
                ...state,
            }
    }
}

export default reducer