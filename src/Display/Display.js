import React from 'react';
import styled from 'styled-components';

export const Display = (props) => {
  const { onColor, array } = props;

  return (
    <FloorLight >
      <Light >
        {onColor === 5 ? <OnLightP>5</OnLightP> : <LightP>5</LightP>}
      </Light>
      <Light >
        {onColor === 4 ? <OnLightP>4</OnLightP> : <LightP>4</LightP>}
      </Light>
      <Light >
        {onColor === 3 ? <OnLightP>3</OnLightP> : <LightP>3</LightP>}
      </Light>
      <Light >
        {onColor === 2 ? <OnLightP>2</OnLightP> : <LightP>2</LightP>}
      </Light>
      <Light >
        {onColor === 1 ? <OnLightP>1</OnLightP> : <LightP>1</LightP>}
      </Light>
    </FloorLight>
  )
}


/* eslint-disable */
const FloorLight = styled.div`
  width: 10%;
  text-align: center;
`;

const Light = styled.div`
  height: 80px;
  margin: 0 10px 5px 0;
  border-radius: 15px;
  background-color: #CCCCCC;
`;

const LightP = styled.p`
  line-height: 80px;
  margin: 0 0 5px 0;
  border-radius: 15px;
  background-color: #CCCCCC;
`;

const OnLightP = styled.p`
  line-height: 80px;
  margin: 0 0 5px 0;
  border-radius: 15px;
  background-color: red;
`;
/* eslint-enable */