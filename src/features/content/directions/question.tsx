import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Button } from "../common/ui"
import { Answers } from "../common/answers"
import { DataContext } from "../"

type CategoryType = {
  section_answer_id: string
  section_answer: string
  napravleniya_id: string
}

const Question = ({
  napravleniya_id,
  section_answer_id,
  section_answer
}: CategoryType) => {
  const { answers } = useContext(DataContext)
  const answersFilter = answers.filter(
    el =>
      el.section_answer_id === section_answer_id &&
      el.napravleniya_id === napravleniya_id
  )

  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <WrapQuestuons>
        <Button onClick={() => setOpen(!open)}>{section_answer}</Button>
        {open &&
          answersFilter.map((el, index) => (
            <Answers key={index} answers={el.answer} />
          ))}
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
