import React from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyle, Navegacao } from './styled'

const Header = () => {
    return (
        <HeaderStyle>
            <Link to="/">ReactCliente</Link>
            <Navegacao>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
            </Navegacao>
        </HeaderStyle>
    )
}

export default Header