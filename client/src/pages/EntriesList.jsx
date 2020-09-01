import React, { Component } from 'react'
import ReactTable from 'react-table-v6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-v6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateEntry extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/entries/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteEntry extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the entry  ${this.props.id} permanently?`,
            )
        ) {
            api.deleteEntryById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class EntriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: [],
            columns: [],
            isLoading: false,
        }
    }


    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getEntries().then(entries => {
            this.setState({
                entries: entries.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { entries, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'URL',
                accessor: 'url',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteEntry id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateEntry id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        console.log(entries.data)
        if (!entries.data) {
            showTable = false
            console.log('w')
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={entries.data}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default EntriesList
