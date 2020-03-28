import React from "react"
import styled from "styled-components"
import { Group } from "./directions/group"
import { $Store } from "../../model"
import { useStore } from "effector-react"
import { Scrollbar } from "react-scrollbars-custom"
import { scrollBar } from "../../ui/ui"
import { GeneralIssues } from "./general-issues"

const Content = () => {
  const { napravleniya } = useStore($Store)
  return (
    <Wrapper>
      <Scrollbar className="scroll_bar_bot">
        <>
          {napravleniya?.map((el, index) => (
            <Group key={index} {...el} />
          ))}
          <GeneralIssues />
        </>
      </Scrollbar>
    </Wrapper>
  )
}

export { Content }

const Wrapper = styled.div`
  height: 460px;
  padding-right: 5px;
  ${scrollBar};
`
