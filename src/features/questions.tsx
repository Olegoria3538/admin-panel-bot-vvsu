import React, { useState } from 'react';
import styled from 'styled-components'
import { Button } from '../ui/ui'
import { Answers } from './answers'

type QuestionType = {
    question: string
    answers: string
}

const Questions = ({ question, answers }: QuestionType) => {
    const [open, setOpen] = useState(false)
    return (
        <Wrapper className="App">
            <WrapQuestuons>
                <Button onClick={() => setOpen(!open)}>{question}</Button>
                {open &&
                    <Answers answers={answers} />
                }
            </WrapQuestuons>
        </Wrapper>
    );
}

export { Questions };


const Wrapper = styled.div`
    margin-left: 30px;
    padding-top: 1px;
    margin-top: -9px;   
`

const WrapQuestuons = styled.div`
    position: relative;
    &:before {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        position: absolute;
        background-color: #bbb;
        left: -6px;
        top: 0; 
    }
`