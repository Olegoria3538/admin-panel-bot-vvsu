import React from 'react';
import styled from 'styled-components'
import { Category } from './category'
import { $Store } from '../../model/model'
import { useStore } from 'effector-react'
import { Scrollbar } from 'react-scrollbars-custom';
import { scrollBar } from '../../ui/ui'


const Content = () => {
  const { category, anq } = useStore($Store)
  return (
    <Wrapper>
      <Scrollbar className="scroll_bar_bot">
        {category.map((el, index) =>
          <Category
            key={index}
            text={el.name}
            // @ts-ignore
            questions={anq[el.kategory_id]}
          />
        )}
      </Scrollbar>
    </Wrapper>
  );
}

export { Content };


const Wrapper = styled.div`
    height: 460px;
    padding-right: 5px;
    ${scrollBar};
`