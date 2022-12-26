import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Elevator = (props) => {
  const { onColor, array } = props;
  const { floor5, floor4, floor3, floor2, floor1} = props;


  const stayFloor = array.slice(-2)[0];
  const goFloor = array.slice(-1)[0];
  const math = stayFloor - goFloor;

  return (
    <Floor>
      <Efloor id='floor5'>
        {floor5 ? <OnEfloorP>5</OnEfloorP> : <EfloorP>5</EfloorP>}
      </Efloor>
      <Efloor id="floor4">
        {floor4 ? <OnEfloorP>4</OnEfloorP> : <EfloorP>4</EfloorP>}
      </Efloor>
      <Efloor id='floor3'>
        {floor3 ? <OnEfloorP>3</OnEfloorP> : <EfloorP>3</EfloorP>}
      </Efloor>
      <Efloor  id='floor2'>
        {floor2 ? <OnEfloorP>2</OnEfloorP> : <EfloorP>2</EfloorP>}
      </Efloor>
      <Efloor id='floor1'>
        {floor1 ? <OnEfloorP>1</OnEfloorP> : <EfloorP>1</EfloorP>}
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

const MoveEfloorP = styled.p`
  line-height: 80px;
  margin: 0 10px 5px 0;
  border-radius: 5px;
  background-color: yellow;
`;