import React from 'react';
import styled from 'styled-components'
import { Scrollbar } from 'react-scrollbars-custom';
import { scrollBar } from '../../ui/ui'

type ResultType = {
    answer: string
    close: Function
}

const Answer = ({ answer, close }: ResultType) => {
    return (
        <Wrapper>
            <Scrollbar className="scroll_bar_bot">
                <WrapperItem>
                    <Down onClick={() => close()} />
                    {answer}
                </WrapperItem>
            </Scrollbar>
        </Wrapper>
    )
}

export { Answer };

const WrapperItem = styled.div`
    padding-right: 10px;
`

const Down = styled.div`
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
    float: left;
    border: 10px solid transparent;
    border-top-color: #757575;
    margin-left: 19px;
    cursor: pointer;
    -webkit-transition: .5s;
    transition: .5s;
    margin-top: 7px;
    transform: rotate(90deg) translateY(25px);
    &:before {
        content: "";
        width: 0;
        height: 0;
        display: inline-block;
        border: 20px solid transparent;
        border-top-color: #fff;
        margin-left: 10px;
        margin-top: 27px;
        transform: translate(-30px,-50px);
    }
    &:after {
        content: "";
        transition: all .5s;
        width: 2px;
        left: -1px;
        top: -22px;
        position: absolute;
    }
    &:hover{
        &:after {
            padding-bottom: 20px;
            background-color: #757575;
        }
    }
`

const Wrapper = styled.div`
    ${scrollBar};
    padding: 10px;
    position: absolute;
    left: 0;
    bottom: 35px;
    height: 50%;
    background-color: #fff;
    width: 330px;
    width: calc(100% - 20px);
    z-index: 9;
    border-top: 1px solid #bbb;
    overflow: hidden;
`
