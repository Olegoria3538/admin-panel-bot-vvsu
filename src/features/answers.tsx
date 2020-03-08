import React from 'react';
import styled from 'styled-components'
import { ButtonAnswer } from '../ui/ui'

type AnswersType = {
    answers: string
}

const Answers = ({ answers }: AnswersType) => {
    return (
        <Wrapper className="App">
            <ButtonAnswer>{answers}</ButtonAnswer>
        </Wrapper>
    );
}

export { Answers };


const Wrapper = styled.div`
    margin-left: 20px;
    padding-left: 5px;
    position: relative;
    overflow: hidden;
    margin-top: -8px;
    &:before {
    content: "";
    display: block;
    width: 1px;
    height: calc(50% + 9px);
    position: absolute;
    background-color: #bbb;
    left: 0;
    top: -8px;
}
`