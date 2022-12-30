import React from 'react';
import styled from 'styled-components';

export const Display = (props) => {
  const { onColor, witchBtn } = props;

  return (
    <FloorLight >
      <Light >
        { onColor === 5 ? <LightP witchBtn={witchBtn}>5</LightP> : <LightP witchBtn={""}>5</LightP> }
      </Light>
      <Light >
        { onColor === 4 ? <LightP witchBtn={witchBtn}>4</LightP> : <LightP witchBtn={""}>4</LightP> }
      </Light>
      <Light >
        { onColor === 3 ? <LightP witchBtn={witchBtn}>3</LightP> : <LightP witchBtn={""}>3</LightP> }
      </Light>
      <Light >
        { onColor === 2 ? <LightP witchBtn={witchBtn}>2</LightP> : <LightP witchBtn={""}>2</LightP> }
      </Light>
      <Light >
        { onColor === 1 ? <LightP witchBtn={witchBtn}>1</LightP> : <LightP witchBtn={""}>1</LightP> }
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
  background-color: ${props => props.witchBtn === "" ? "#CCCCCC" : "red"};
`;

/* eslint-enable */