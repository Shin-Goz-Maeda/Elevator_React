import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { Elevator } from './elevator/elevator';
import { Display } from './Display/Display';
import { Btns } from './Btn/btns';
import styled from 'styled-components';

const Content = () => {
  const [ onColor, setOnColor ] = useState([1,1]);
  const [ witchBtn, setWitchBtn ] = useState("up");

  const [ floor1 , setFloor1 ] = useState(false);
  const [ floor2 , setFloor2 ] = useState(false);
  const [ floor3 , setFloor3 ] = useState(false);
  const [ floor4 , setFloor4 ] = useState(false);
  const [ floor5 , setFloor5 ] = useState(false);

  console.log(onColor);

  const moveElevator = () => {
    const onElevator = onColor.slice(-2)[0];
    const goingElevator = onColor.slice(-1)[0];

    console.log(goingElevator);
    if (onElevator === 5 && goingElevator === 1) {
      setFloor5(true);
      setTimeout(() => {
        setFloor5(false);
        setFloor4(true);
      }, 1000);
      setTimeout(() => {
        setFloor4(false);
        setFloor3(true);
      }, 2000);
      setTimeout(() => {
        setFloor3(false);
        setFloor2(true);
      }, 3000);
      setTimeout(() => {
        setFloor2(false);
        setFloor1(true);
      }, 4000);
    } else if (onElevator === 5 && goingElevator === 2) {
      setFloor5(true);
      setTimeout(() => {
        setFloor5(false);
        setFloor4(true);
      }, 1000);
      setTimeout(() => {
        setFloor4(false);
        setFloor3(true);
      }, 2000);
      setTimeout(() => {
        setFloor3(false);
        setFloor2(true);
      }, 3000);
    } else if (onElevator === 5 && goingElevator === 3) {
      setFloor5(true);
      setTimeout(() => {
        setFloor5(false);
        setFloor4(true);
      }, 1000);
      setTimeout(() => {
        setFloor4(false);
        setFloor3(true);
      }, 2000);
    } else if (onElevator === 5 && goingElevator === 4) {
      setFloor5(true);
      setTimeout(() => {
        setFloor5(false);
        setFloor4(true);
      }, 1000);
    }
  };

  const toggle = (a, b) => {
    setOnColor([...onColor, a]);
    setWitchBtn(b);
    moveElevator();
  };

  return (
    <>
    <Title>Elevator made of React</Title>
    <Contents>
      <Elevator
        onColor={onColor.slice(-1)[0]}
        moveElevator={moveElevator}
        array={onColor}
        floor5={floor5}
        floor4={floor4}
        floor3={floor3}
        floor2={floor2}
        floor1={floor1}
        />
      <Display
        onColor={onColor.slice(-1)[0]}
        array={onColor}
      />
      <Btns
        onColor={onColor.slice(-1)[0]}
        witchBtn={witchBtn}
        array={onColor}
        toggle={toggle}
      />
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