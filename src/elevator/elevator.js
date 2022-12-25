import React from 'react';
import styled from 'styled-components';

export const Elevator = (props) => {
  const { onColor } = props;

  return (
    <Floor>
      <Efloor id='floor5'>
        {onColor === 5 ? <OnEfloorP>5</OnEfloorP> : <EfloorP>5</EfloorP>}
      </Efloor>
      <Efloor id="floor4">
        {onColor === 4 ? <OnEfloorP>4</OnEfloorP> : <EfloorP>4</EfloorP>}
      </Efloor>
      <Efloor id='floor3'>
        {onColor === 3 ? <OnEfloorP>3</OnEfloorP> : <EfloorP>3</EfloorP>}
      </Efloor>
      <Efloor  id='floor2'>
        {onColor === 2 ? <OnEfloorP>2</OnEfloorP> : <EfloorP>2</EfloorP>}
      </Efloor>
      <Efloor id='floor1'>
        {onColor === 1 ? <OnEfloorP>1</OnEfloorP> : <EfloorP>1</EfloorP>}
      </Efloor>
    </Floor>
  )
}


const Floor = styled.div`
  width: 60%;
  text-align: center;
`;

const Efloor = styled.div`
  height: 80px;
  margin: 0 10px 5px 0;
`;

const EfloorP = styled.p`
  line-height: 80px;
  margin: 0 10px 5px 0;
  border-radius: 5px;
  background-color: #CCCCCC;
`;

const OnEfloorP = styled.p`
  line-height: 80px;
  margin: 0 10px 5px 0;
  border-radius: 5px;
  background-color: blue;
`;