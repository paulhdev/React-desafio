import Styled from 'styled-components'

export const ListStyle = Styled.ul`
    list-style: none;
    margin-left: -35px;

    li {
        font-size: 1.1rem;
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0;
        background-color: #fff;
        box-shadow: 2px 2px 5px #ddd;
        padding: 10px 5px;
        align-items: center;
        justify-content: space-between;
    }
`

export const AreaBtn = Styled.span`
    button {
        border: none; 
        background: none;
        font-size: 1.1rem;
        outline: none;
    }

    #updateBtn {
        margin: 0 15px;
        color: #1cbfb5;
        cursor: pointer;
    }

    #deleteBtn {
        color: #ff4040;
        cursor: pointer;
    }
`