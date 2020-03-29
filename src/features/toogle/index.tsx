import React from "react"
import styled, { css } from "styled-components"
import { toggleEvent } from "../../model/index"

const Toggle = ({ toggle }: { toggle: boolean }) => {
  return (
    <Wrapper toggle={toggle}>
      <CloseBlock onClick={() => toggleEvent()} />
    </Wrapper>
  )
}

export { Toggle }

const CloseBlock = styled.div`
  width: 20px;
  height: 20px;
  opacity: 0.3;
  cursor: pointer;
  transition: 0.3s opacity;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 20px;
    width: 2px;
    background-color: #333;
    transition: 1s left, 1s right;
  }
  &:before {
    transform: rotate(45deg);
    left: 9px;
  }
  &:after {
    transform: rotate(-45deg);
    right: 8px;
  }
`

const Wrapper = styled.div<{ toggle: boolean }>`
  position: absolute;
  right: ${({ toggle }) => (toggle ? "25px" : "16px")};
  top: ${({ toggle }) => (toggle ? "10px" : "14px")};
  transition: 0.5s left, 0.5s right;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ toggle }) =>
    !toggle &&
    css`
      ${CloseBlock} {
        &:before {
          left: 3px;
        }
        &:after {
          right: 2px;
        }
      }
    `};
`
