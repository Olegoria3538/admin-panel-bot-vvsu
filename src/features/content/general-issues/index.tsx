import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Button } from "../common/ui"
import { Question } from "./question"
import { DataContext } from ".."

const GeneralIssues = () => {
  const { main_questions } = useContext(DataContext)
  const [open, setOpen] = useState(false)
  return (
    <Wrapper>
      <Button onClick={() => setOpen(!open)}>Общие вопросы</Button>
      {open &&
        main_questions.map((el, index) => <Question key={index} {...el} />)}
    </Wrapper>
  )
}

export { GeneralIssues }

const Wrapper = styled.div`
  padding-right: 20px;
`
