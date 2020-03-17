import React, { useState } from 'react';
import styled from 'styled-components'
import { Button } from '../../../ui/ui'
import { useStore } from 'effector-react'
import { $Store } from '../../../model'
import { Question } from './question'

const GeneralIssues = () => {
    const { main_questions } = useStore($Store)
    const [open, setOpen] = useState(false)
    return (
        <Wrapper>
            <Button onClick={() => setOpen(!open)}>Общие вопросы</Button>
            {open && main_questions?.map((el, index) =>
                <Question key={index} {...el}/>
            )}
        </Wrapper>
    );
}

export { GeneralIssues }


const Wrapper = styled.div`
    padding-right: 20px;
`