import styled from 'styled-components'

export const Button = styled.button`
    font-family: Arial;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-color: initial;
    border-radius: 4px;
    border: 1px solid #bbb;
    word-break: break-word!important;
    max-width: inherit;
    height: auto;
    line-height: 1.5em;
    padding: 5px;
    min-width: 100px;
    font-size: 15px;
    cursor: pointer;
    margin: 8px 0 8px 10px;
    position: relative;
    white-space: normal;
    word-break: break-all;
    letter-spacing: normal;
    &:hover{
        border-color: black;
    }
    &:focus{
        outline: none;
    }
    &:before {
        content: "";
        display: block;
        width: 17px;
        height: 1px;
        position: absolute;
        background-color: #bbb;
        left: -17px;
    }
`
export const ButtonAnswer = styled(Button)`
    background-color: #33c3f0;
    color: #fff;
    border: none;
`