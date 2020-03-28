import React, { useState, useContext } from "react"
import styled from "styled-components"
import { MainQuestion } from "../../../type"
import { Button } from "../common/ui"
import { Answers } from "../common/answers"
import { DataContext } from ".."

const Question = ({ questions, question_id }: MainQuestion) => {
  const { main_answers } = useContext(DataContext)
  const answer = main_answers.find(el => el.question_id === question_id)
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <WrapQuestuons>
        <Button onClick={() => setOpen(!open)}>{questions}</Button>
        {open && (
          <Answers
            //@ts-ignore
            answers={
              (!!answer?.answers ? answer?.answers : "") +
              " " +
              (!!answer?.url ? answer.url : "")
            }
            url={answer?.url}
          />
        )}
      </WrapQuestuons>
    </Wrapper>
  )
}

export { Question }

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
