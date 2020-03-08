import React, { useState } from 'react';
import styled from 'styled-components'
import { Button } from '../ui/ui'
import { Questions } from './questions'
import { anqType } from '../type/type'

type CategoryType = {
    text: string
    questions: anqType[]
}

const Category = ({ text, questions }: CategoryType) => {
    const [open, setOpen] = useState(false)
    return (
        <Wrapper className="App">
            <Button onClick={() => setOpen(!open)}>{text}</Button>
            {open &&
                questions.map((el, index) =>
                    <Questions
                        key={index}
                        question={el.answer}
                        answers={el.question}
                    />
                )
            }
        </Wrapper>
    );
}

export { Category };


const Wrapper = styled.div``