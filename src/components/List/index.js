import React, { Component } from 'react'

import { Container, FormClient } from './styled'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameClient: ''
        }
    }

    render() {
        return (
            <Container>
                <FormClient>
                    <input type="text" value={this.state.nameClient} onChange={e => this.setState({ nameClient: e.target.value })} placeholder="Nome do cliente..." />
                    <button>Adicionar</button>
                </FormClient>
                <h1>{this.state.nameClient}</h1>
            </Container>
        )
    }
}

export default List