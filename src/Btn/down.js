import React from 'react';
import styled from 'styled-components';

export const DownBtn = (props) => {
  const { onColor, toggle, witchBtn } = props;
  
  return(
    <DownButton id='down'>
      <Down id='down5' onClick={() => {toggle(5, "down")}}>
        {onColor === 5 ? <DownP witchBtn={witchBtn}>⬇︎</DownP> : <DownP >⬇︎</DownP> }
      </Down>
      <Down id='down4' onClick={() => {toggle(4, "down")}}>
        {onColor === 4 ? <DownP witchBtn={witchBtn}>⬇︎</DownP> : <DownP >⬇︎</DownP> }
      </Down>
      <Down id='down3' onClick={() => {toggle(3, "down")}}>
        {onColor === 3 ? <DownP witchBtn={witchBtn}>⬇︎</DownP> : <DownP >⬇︎</DownP> }
      </Down>
      <Down id='down2' onClick={() => {toggle(2, "down")}}>
        {onColor === 2 ? <DownP witchBtn={witchBtn}>⬇︎</DownP> : <DownP >⬇︎</DownP> }
      </Down>
      <NoUseDown ></NoUseDown>
    </DownButton>
  )
}


/* eslint-disable */

const DownButton = styled.div`
  width: 40%;
  text-align: center;
`;

const NoUseDown = styled.div`
  height: 80px;
  margin: 0 10px 5px 0;
  border-radius: 5px;
  background-color: #CCCCCC;
`;

const Down = styled.div`
  height: 80px;
  margin: 0 10px 5px 0;
`;

const DownP = styled.p`
  line-height: 80px;
  margin: 0 0 5px 0;
  border-radius: 5px;
  background-color: ${props => props.witchBtn === "down" ? "blue" : "#CCCCCC"};
`;

/* eslint-enable */