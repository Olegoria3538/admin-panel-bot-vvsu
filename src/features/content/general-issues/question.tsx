import React, { useState } from 'react';
import styled from 'styled-components'
import { MainQuestion } from '../../../type'
import { useStore } from 'effector-react'
import { $Store } from '../../../model'
import { Button } from '../../../ui/ui'
import { Answers } from '../answers'

const Question = ({ questions, question_id }: MainQuestion) => {
    const { main_answers } = useStore($Store)
    const answer = main_answers?.find(el => el.question_id === question_id)
    const [open, setOpen] = useState(false)
    return (
        <Wrapper>
            <WrapQuestuons>
                <Button onClick={() => setOpen(!open)}>{questions}</Button>
                {open && <Answers
                    //@ts-ignore
                    answers={answer?.answers}
                />
                }
            </WrapQuestuons>
        </Wrapper>
    );
}

export { Question };

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