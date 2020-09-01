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

class EntriesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '',
        }
    }

    handleChangeInputURL = async event => {
        const url = event.target.value
        this.setState({ url })
    }

    handleIncludeEntry = async () => {
        const { url } = this.state
        const payload = { url }

        await api.insertEntry(payload).then(res => {
            window.alert(`Entry inserted successfully`)
            this.setState({
                url: '',
            })
        })
    }

    render() {
        const { url } = this.state
        return (
            <Wrapper>
                <Title>Create Entry</Title>

                <Label>URL: </Label>
                <InputText
                    type="text"
                    value={url}
                    onChange={this.handleChangeInputURL}
                />

                <Button onClick={this.handleIncludeEntry}>Add Entry</Button>
                <CancelButton href={'/entries/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EntriesInsert
