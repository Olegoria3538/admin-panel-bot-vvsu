import React from 'react';
import styled from 'styled-components'
import { Category } from './category'
import { $Store } from '../model/model'
import { useStore } from 'effector-react'

const App = () => {
  const { category, anq } = useStore($Store)
  return (
    <Wrapper className="App">
      {category.map((el, index) =>
        <Category
          key={index}
          text={el.name}
          // @ts-ignore
          questions={anq[el.kategory_id]}
        />
      )}

    </Wrapper>
  );
}

export { App };


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