import React from "react"
import styled, { css } from "styled-components"
import { Content } from "./content"
import { Search } from "./search/search"
import { useStore } from "effector-react"
import { $Store, $toggle } from "../model"
import { Toggle } from "./toogle"

const App = () => {
  const { complete } = useStore($Store)
  const toggle = useStore($toggle)
  if (!complete) {
    return null
  } else {
    return (
      <Wrapper toggle={toggle}>
        <Container>
          <Content />
          <Search />
        </Container>
        <Toggle toggle={toggle} />
      </Wrapper>
    )
  }
}

export { App }

const Container = styled.div`
  transition: 0.4s opacity;
`

const Wrapper = styled.div<{ toggle: boolean }>`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 350px;
  height: ${({ toggle }) => (toggle ? "500px" : "50px")};
  border: 1px solid #bbb;
  border-radius: 20px;
  overflow: hidden;
  transition: 1s;
  max-height: 500px;
  background-color: white;
  ${({ toggle }) =>
    !toggle &&
    css`
      animation: circle 1s ease-in-out;
      animation-delay: 1s;
      animation-fill-mode: forwards;
      ${Container} {
        opacity: 0;
      }
    `};

  @keyframes circle {
    from {
      width: 350px;
      border-radius: 20px;
    }
    to {
      width: 50px;
      border-radius: 50px;
    }
  }
`
