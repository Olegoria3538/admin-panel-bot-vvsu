import React from 'react';
import styled from 'styled-components'

const App = () => {
  return (
    <Wrapper className="App">
      f
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