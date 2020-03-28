import React, { useState } from "react"
import styled from "styled-components"
import { Result } from "./result"

const Search = () => {
  const [open, setOpen] = useState(false)
  const [request, setRequest] = useState("")
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Поиск"
        onChange={e => {
          setRequest(e.target.value)
          setOpen(true)
        }}
      />
      <Btn onClick={() => setOpen(true)} />
      {open && <Result request={request} close={() => setOpen(false)} />}
    </Wrapper>
  )
}

export { Search }

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin: auto;
  width: 250px;
  border-bottom: 1px solid #c2c2c2;
`

const Input = styled.input`
  width: 215px;
  border: none;
  font-size: 15px;
  padding: 6px 10px;
  color: #757575;
  &:focus {
    outline: none;
  }
`

const Btn = styled.button`
  padding: 0;
  width: 35px;
  height: 35px;
  transition: 0.5s;
  position: relative;
  border: none;
  border-radius: 100%;
  background-color: inherit;
  cursor: pointer;
  &:before {
    width: 13px;
    height: 13px;
    border: 1px solid #757575;
    border-radius: 100%;
    top: 8px;
    left: 6px;
  }
  &:after {
    left: 10px;
    width: 2px;
    height: 10px;
    margin-top: 0;
    transform: rotate(-45deg);
    top: 19px;
    left: 20px;
    background-color: #757575;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    transition: all 0.5s;
  }
  &:hover {
    &:before {
      border-color: black;
    }
    &:after {
      background-color: black;
    }
  }
  &:focus {
    outline: none;
  }
`
