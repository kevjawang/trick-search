import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class EntriesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            url: '',
        }
    }

    handleChangeInputURL = async event => {
        const url = event.target.value
        this.setState({ url })
    }

    handleUpdateEntry = async () => {
        const { id, url } = this.state
        const payload = { url }
        console.log(payload);

        await api.updateEntryById(id, payload).then(res => {
            window.alert(`Entry updated successfully`)
            this.setState({
                url: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const entry = await api.getEntryById(id)

        this.setState({
            url: entry.data.data.url,
        })
    }

    render() {
        const { url } = this.state
        return (
            <Wrapper>
                <Title>Update Entry</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={url}
                    onChange={this.handleChangeInputURL}
                />

                <Button onClick={this.handleUpdateEntry}>Update Entry</Button>
                <CancelButton href={'/entries/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EntriesUpdate
