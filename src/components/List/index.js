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
        this.addClient = this.addClient.bind(this)
        this.deleteClient = this.deleteClient.bind(this)
        this.updateClient = this.updateClient.bind(this)
    }

    // Adicionar cliente
    addClient(e) {
        let state = this.state
        if(this.clientInput.value !== "") {
            let newClient = {
                name: this.clientInput.value,
                key: Date.now()
            }
            this.setState({ clientList: [ ...state.clientList, newClient ] })
        }

        e.preventDefault()
        this.setState({ nameClient: '' })
    }

    // Deletar cliente
    deleteClient(key) {
       let clientFilter = this.state.clientList.filter(client => {
           return client.key !== key
       })

       this.setState({ clientList: clientFilter })
    }

    // Atualizar cliente
    updateClient(client) {
        this.setState({ nameClient: client.name })

        // let clientName = [ ...this.state.clientList ]
        // let filtro = clientName.filter(item => {
        //     if(item.key === client.key) {
        //         const newName = this.state.nameClient.value
        //         this.setState({ nameClient: newName })
        //     }
        // })
    }

    render() {
        return (
            <Container>
                <FormClient onSubmit={this.addClient}>
                    <input type="text" value={this.state.nameClient} onChange={e => this.setState({ nameClient: e.target.value })} placeholder="Nome do cliente..." ref={e => this.clientInput = e} />
                    <button type="submit">Salvar</button>
                </FormClient>
                <Title>Lista de Clientes</Title>
                <ClientList data={this.state.clientList} delete={this.deleteClient} update={this.updateClient} />
            </Container>
        )
    }
}

export default List