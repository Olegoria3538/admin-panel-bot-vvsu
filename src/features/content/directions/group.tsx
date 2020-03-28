import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Button } from "../common/ui"
import { Napravleniya } from "../../../type"
import { Question } from "./question"
import { DataContext } from "../"

const Group = ({ napravleniya_id, napravleniya }: Napravleniya) => {
  const { answer_sections } = useContext(DataContext)
  const [open, setOpen] = useState(false)
  return (
    <Wrapper key={napravleniya_id}>
      <Button onClick={() => setOpen(!open)}>{napravleniya}</Button>
      {open &&
        answer_sections.map((el, index) => (
          <Question key={index} {...el} napravleniya_id={napravleniya_id} />
        ))}
    </Wrapper>
  )
}

export { Group }

const Wrapper = styled.div`
  padding-right: 20px;
`
