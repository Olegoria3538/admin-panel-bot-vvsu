import React from "react"
import styled from "styled-components"
import { Content } from "./content"
import { Search } from "./search/search"
import { useStore } from "effector-react"
import { $Store } from "../model"

const App = () => {
  const { complete } = useStore($Store)
  if (!complete) {
    return null
  } else {
    return (
      <Wrapper>
        <Content />
        <Search />
      </Wrapper>
    )
  }
}

export { App }

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 350px;
  height: 500px;
  border: 1px solid #bbb;
  border-radius: 20px;
  overflow: hidden;
  -webkit-transition: 1s;
  transition: 1s;
  max-height: 500px;
`
