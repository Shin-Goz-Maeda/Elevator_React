import React from 'react';
import { UpBtn } from "./up";
import { DownBtn } from "./down";
import styled from 'styled-components';

export const Btns = (props) => {
  const { onColor, witchBtn, toggle } = props;

  return (
    <BtnBox id='btnBox'>
      <UpBtn onColor={onColor} witchBtn={witchBtn} toggle={toggle}/>
      <DownBtn onColor={onColor} witchBtn={witchBtn} toggle={toggle}/>
    </BtnBox>
  )
}

/* eslint-disable */

const BtnBox = styled.div`
  display: flex;
  width: 30%;
`;

/* eslint-enable */