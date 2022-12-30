import React from 'react';
import styled from 'styled-components';

export const UpBtn = (props) => {
  const { onColor, toggle, witchBtn } = props;

  return(
    <UpButton >
      <NoUseUp ></NoUseUp>
      <Up id='up4' onClick={() => {toggle(4, "up")}}>
        { onColor === 4 ? <UpP witchBtn={witchBtn} >⬆︎</UpP> : <UpP >⬆︎</UpP> }
      </Up>
      <Up id='up3' onClick={() => {toggle(3, "up")}}>
        { onColor === 3 ? <UpP witchBtn={witchBtn} >⬆︎</UpP> : <UpP >⬆︎</UpP> }
      </Up>
      <Up id='up2' onClick={() => {toggle(2, "up")}}>
        { onColor === 2 ? <UpP witchBtn={witchBtn} >⬆︎</UpP> : <UpP >⬆︎</UpP> }
      </Up>
      <Up id='up1' onClick={() => {toggle(1, "up")}}>
        { onColor === 1 ? <UpP witchBtn={witchBtn} >⬆︎</UpP> : <UpP >⬆︎</UpP> }
      </Up>
    </UpButton>
  )
}


/* eslint-disable */

const UpButton = styled.div`
  width: 40%;
  text-align: center;
`;

const NoUseUp = styled.div`
  height: 80px;
  margin: 0 10px 5px 0;
  border-radius: 5px;
  background-color: #CCCCCC;
`;

const Up = styled.div`
  height: 80px;
  margin: 0 10px 5px 0;
`;

const UpP = styled.p`
  line-height: 80px;
  margin: 0 0 5px 0;
  border-radius: 5px;
  background-color: ${props => props.witchBtn === "up" ? "blue" : "#CCCCCC"};
`;

/* eslint-enable */