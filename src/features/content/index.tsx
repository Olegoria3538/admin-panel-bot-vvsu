import React from "react"
import styled from "styled-components"
import { Group } from "./directions/group"
import { $Store } from "../../model"
import { useStore } from "effector-react"
import { Scrollbar } from "react-scrollbars-custom"
import { scrollBar } from "./common/ui"
import { GeneralIssues } from "./general-issues"
import { InitData } from "../../model/init"

const DataContext = React.createContext(InitData)

const Content = () => {
  const data = useStore($Store)
  const { napravleniya } = data
  return (
    <Wrapper>
      <Scrollbar className="scroll_bar_bot">
        <DataContext.Provider value={data}>
          {napravleniya.map((el, index) => (
            <Group key={index} {...el} />
          ))}
          <GeneralIssues />
        </DataContext.Provider>
      </Scrollbar>
    </Wrapper>
  )
}

export { Content, DataContext }

const Wrapper = styled.div`
  height: 460px;
  padding-right: 5px;
  ${scrollBar};
`
