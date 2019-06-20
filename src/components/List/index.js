import React, { Component } from 'react'

import { Container, FormClient, Title } from './styled'

import ClientList from '../ClientList'

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nameClient: '',
            clientList: []
        }
    }

    render() {
        return (
            <Container>
                <FormClient>
                    <input type="text" value={this.state.nameClient} onChange={e => this.setState({ nameClient: e.target.value })} placeholder="Nome do cliente..." />
                    <button>Adicionar</button>
                </FormClient>
                <Title>Lista de Clientes</Title>
                <ClientList data={this.state.nameClient} />
            </Container>
        )
    }
}

export default List