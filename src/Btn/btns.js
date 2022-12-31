import React, { memo } from 'react';
import { UpBtn } from "./up";
import { DownBtn } from "./down";
import styled from 'styled-components';

export const Btns = memo((props) => {
  const { goingColorFloor, witchBtn, toggle } = props;

  return (
    <BtnBox id='btnBox'>
      <UpBtn goingColorFloor={goingColorFloor} witchBtn={witchBtn} toggle={toggle}/>
      <DownBtn goingColorFloor={goingColorFloor} witchBtn={witchBtn} toggle={toggle}/>
    </BtnBox>
  )
});

/* eslint-disable */

const BtnBox = styled.div`
  display: flex;
  width: 30%;
`;

/* eslint-enable */