import React, { memo } from 'react';
import styled from 'styled-components';

export const Elevator = memo((props) => {
  // const { witchBtn, goingColorFloor } = props;
  const { floor } = props;

  return (
    <Floor>
      <Efloor id='floor5'>
        {floor === 5 ? <OnEfloorP >5</OnEfloorP> : <EfloorP>5</EfloorP>}
      </Efloor>
      <Efloor id="floor4">
        {floor === 4 ? <OnEfloorP >4</OnEfloorP> : <EfloorP>4</EfloorP>}
      </Efloor>
      <Efloor id='floor3'>
        {floor === 3 ? <OnEfloorP >3</OnEfloorP> : <EfloorP>3</EfloorP>}
      </Efloor>
      <Efloor  id='floor2'>
        {floor === 2 ? <OnEfloorP >2</OnEfloorP> : <EfloorP>2</EfloorP>}
      </Efloor>
      <Efloor id='floor1'>
        {floor === 1 ? <OnEfloorP >1</OnEfloorP> : <EfloorP>1</EfloorP>}
      </Efloor>
    </Floor>
  )
});


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
  background-color: yellow;
`;