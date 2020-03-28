import React, { useState } from "react"
import styled from "styled-components"
import { Button } from "../../../ui/ui"
import { Napravleniya } from "../../../type"
import { useStore } from "effector-react"
import { $Store } from "../../../model"
import { Question } from "./question"

const Group = ({ napravleniya_id, napravleniya }: Napravleniya) => {
  const { answer_sections } = useStore($Store)
  const [open, setOpen] = useState(false)
  return (
    <Wrapper key={napravleniya_id}>
      <Button onClick={() => setOpen(!open)}>{napravleniya}</Button>
      {open &&
        answer_sections?.map((el, index) => (
          <Question key={index} {...el} napravleniya_id={napravleniya_id} />
        ))}
    </Wrapper>
  )
}

export { Group }

const Wrapper = styled.div`
  padding-right: 20px;
`
