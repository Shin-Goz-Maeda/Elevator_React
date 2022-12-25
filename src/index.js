import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { Elevator } from './elevator/elevator';
import { Display } from './Display/Display';
import { Btns } from './Btn/btns';
import styled from 'styled-components';

const Content = () => {
  const [ onColor, setOnColor ] = useState(1);
  const [ witchBtn, setWitchBtn ] = useState("up");
  const [ stayFloor, setStayFloor ] = useState(1);

  // const movingE = () => {
  //   const floor5 = document.getElementById('floor5');
  //   const floor4 = document.getElementById('floor4');
  //   const floor3 = document.getElementById('floor3');
  //   const floor2 = document.getElementById('floor2');
  //   const floor1 = document.getElementById('floor1');

  //   const up5 = document.getElementById('up5');
  //   const up4 = document.getElementById('up4');
  //   const up3 = document.getElementById('up3');
  //   const up2 = document.getElementById('up2');
  //   const up1 = document.getElementById('up1');

  //   const down5 = document.getElementById('down5');
  //   const down4 = document.getElementById('down4');
  //   const down3 = document.getElementById('down3');
  //   const down2 = document.getElementById('down2');
  //   const down1 = document.getElementById('down1');

  //   const defaultColor = "#CCCCCC";
  //   const currentFloorColor = "blue";
  //   const currentLightColor = "red";
  //   const currentBtnColor = "yellow";
  // };

  const toggle = (a, b) => {
    setOnColor(a);
    setWitchBtn(b);
  };

  return (
    <>
    <Title>Elevator made of React</Title>
    <Contents>
      <Elevator onColor={onColor}/>
      <Display onColor={onColor}/>
      <Btns onColor={onColor} witchBtn={witchBtn} toggle={toggle}/>
    </Contents>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Content />);

/* eslint-disable */
const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Contents = styled.div`
  display: flex;
  margin: 50px;
`;
/* eslint-enable */