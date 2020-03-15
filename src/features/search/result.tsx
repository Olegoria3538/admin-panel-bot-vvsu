import React, { useState } from 'react';
import styled from 'styled-components'
import { $SearchArray } from '../../model/search'
import { useStore } from 'effector-react'
import { Button, scrollBar } from '../../ui/ui'
import { Answer } from './answer'
import { Scrollbar } from 'react-scrollbars-custom';

type ResultType = {
    request: string
    close: Function
}

const Result = ({ request, close }: ResultType) => {
    const SearchArray = useStore($SearchArray)
    const [answer, setAnswer] = useState({ answer: '', open: false })
    if (!request || request?.trim() === '') return null
    const filter = SearchArray.filter(el =>
        el.answer.toLowerCase().includes(request.toLowerCase())
    )
    return (
        <>
            <Hidden onClick={() => close()} />
            <Wrapper>
                <Scrollbar className="scroll_bar_bot">
                    <WrapperItem>
                        {!filter.length ? 'Мы ничего не нашли(' :
                            filter.map(el => <Button
                                key={el.answer}
                                onClick={() => setAnswer({ answer: el.question, open: true })}>
                                {el.answer}
                            </Button>
                            )}
                    </WrapperItem>
                </Scrollbar>
            </Wrapper>
            {answer.open &&
                <Answer answer={answer.answer} close={() => setAnswer({ ...answer, open: false })} />
            }
        </>
    )
}

export { Result };

const WrapperItem = styled.div`
    padding-right: 10px;
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
    ${Button} {
        margin-left: 0;
        &:before{
            display: none;
        }
    }
`

const Hidden = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background-color: rgba(0,0,0,.1);
    bottom: 35px;
    cursor: pointer;
`