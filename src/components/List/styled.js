import Styled from 'styled-components'

export const Container = Styled.div`
    display: flex;
    flex: 1,
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px 5%;
`

export const FormClient = Styled.form`
    display: flex;
    flex-direction: row;

    input {
        outline: none;
        border-radius: 2px;
        font-size: 1.1rem;
        color: #444;
        padding: 5px;
        border: none;
        border-bottom: 1px solid #ddd;
        border-left: 1px solid #ddd;
        margin-right: 5px;
    }

    button {
        border: none;
        border-radius: 2px;
        background-color: #1cbfb5;
        padding: 10px 20px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
    }
`