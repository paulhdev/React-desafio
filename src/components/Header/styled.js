import Styled from 'styled-components'

export const HeaderStyle = Styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px 10px;
    background-color: #444;

    a {
        font-weight: bold;
        color: #ddd;
        font-size: 1.4rem;
        text-decoration: none;
    }
    a:hover {
        color: #549cea;
        transition: all .7s ease;
    }
    
`

export const Navegacao = Styled.nav`
    padding-right: 30px;

    a {
        font-weight: 400;
        color: #fff;
        margin: 0 20px;
        text-decoration: none;
        font-size: 1.1rem;
    }
    a:hover {
        color: #549cea;
        transition: all .7s ease;
    }
`