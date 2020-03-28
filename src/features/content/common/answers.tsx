import React from "react"
import styled from "styled-components"
import { ButtonAnswer } from "./ui"

type AnswersType = {
  answers: string
  url?: string
}

const Answers = ({ answers, url }: AnswersType) => {
  return (
    <Wrapper className="App">
      <Link url={url}>
        <ButtonAnswer>{answers}</ButtonAnswer>
      </Link>
    </Wrapper>
  )
}

type LinkType = React.FC<{ url?: string }>

//@ts-ignore
const Link: LinkType = ({ children, url }) => {
  if (url) {
    return <A href={url}>{children}</A>
  }
  return children
}

export { Answers }

const Wrapper = styled.div`
  margin-left: 20px;
  padding-left: 5px;
  position: relative;
  overflow: hidden;
  margin-top: -8px;
  &:before {
    content: "";
    display: block;
    width: 1px;
    height: calc(50% + 9px);
    position: absolute;
    background-color: #bbb;
    left: 0;
    top: -8px;
  }
`

const A = styled.a`
  text-decoration: none;
`
