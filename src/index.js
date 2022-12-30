import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import { Elevator } from './elevator/elevator';
import { Display } from './Display/Display';
import { Btns } from './Btn/btns';
import styled from 'styled-components';

const Content = () => {
  const [ currentColorFloor, setCurrentColorFloor ] = useState(1);
  const [ goingColorFloor, setGoingColorFloor ] = useState();
  const [ witchBtn, setWitchBtn ] = useState("up");

  const [ floor1 , setFloor1 ] = useState(true);
  const [ floor2 , setFloor2 ] = useState(false);
  const [ floor3 , setFloor3 ] = useState(false);
  const [ floor4 , setFloor4 ] = useState(false);
  const [ floor5 , setFloor5 ] = useState(false);

  const [ active, setActive ] = useState(true);
  const [loopCount, setLoopCount] = useState(0);

  console.log(loopCount);

  const moveElevator = () => {
    if (active) {
      /* down→downのみではなく、down→upを選択する可能性もあるため以下に変更。
       * currentFloorより上の階を選択する場合は、すべて正数になる。
       * currentFloorより下の階を選択する場合は、すべて負数になる。
       *
       * down   up
       * 1<-5=setLoopCount(-4) 5<-1=4
       * 2<-5=-3 5<-2=3
       * 3<-5=-2 5<-3=2
       * 4<-5=-1 5<-4=1
       * 5<-5=0  5<-5=0
      */
        setLoopCount(goingColorFloor - currentColorFloor);
        if (witchBtn === "up") {
          showMovingUp();
        } else {
          showMovingDown();
        }
      // if (currentColorFloor === 5 && goingColorFloor === 1) {
      //   setLoopCount(currentColorFloor - goingColorFloor);
      //   showMovingDown();
      // } else if (currentColorFloor === 5 && goingColorFloor === 2) {
      //   setFloor5(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor5(false);
      //     setFloor4(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor3(true);
      //   }, 2000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor2(true);
      //     setActive(true);
      //   }, 3000);
      // } else if (currentColorFloor === 5 && goingColorFloor === 3) {
      //   setFloor5(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor5(false);
      //     setFloor4(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor3(true);
      //     setActive(true);
      //   }, 2000);
      // } else if (currentColorFloor === 5 && goingColorFloor === 4) {
      //   setFloor5(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor5(false);
      //     setFloor4(true);
      //     setActive(true);
      //   }, 1000);
  
      // } else if (currentColorFloor === 4 && goingColorFloor === 1) {
      //   setFloor4(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor3(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor2(true);
      //   }, 2000);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor1(true);
      //     setActive(true);
      //   }, 3000);
      // } else if (currentColorFloor === 4 && goingColorFloor === 2) {
      //   setFloor4(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor3(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor2(true);
      //     setActive(true);
      //   }, 2000);
      // } else if (currentColorFloor === 4 && goingColorFloor === 3) {
      //   setFloor4(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor3(true);
      //     setActive(true);
      //   }, 1000);
      // } else if (currentColorFloor === 4 && goingColorFloor === 5) {
      //   setFloor4(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor5(true);
      //     setActive(true);
      //   }, 1000);

      // } else if (currentColorFloor === 3 && goingColorFloor === 1) {
      //   setFloor3(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor2(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor1(true);
      //     setActive(true);
      //   }, 2000);
      // } else if (currentColorFloor === 3 && goingColorFloor === 2) {
      //   setFloor3(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor2(true);
      //     setActive(true);
      //   }, 1000);
      // } else if (currentColorFloor === 3 && goingColorFloor === 4) {
      //   setFloor3(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor4(true);
      //     setActive(true);
      //   }, 1000);
      // } else if (currentColorFloor === 3 && goingColorFloor === 5) {
      //   setFloor3(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor4(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor5(true);
      //     setActive(true);
      //   }, 2000);

      // } else if (currentColorFloor === 2 && goingColorFloor === 1) {
      //   setFloor2(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor1(true);
      //     setActive(true);
      //   }, 1000);
      // } else if (currentColorFloor === 2 && goingColorFloor === 3) {
      //   setFloor2(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor3(true);
      //     setActive(true);
      //   }, 1000);
      // } else if (currentColorFloor === 2 && goingColorFloor === 4) {
      //   setFloor2(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor3(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor4(true);
      //     setActive(true);
      //   }, 2000);
      // } else if (currentColorFloor === 2 && goingColorFloor === 5) {
      //   setFloor2(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor3(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor4(true);
      //   }, 2000);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor5(true);
      //     setActive(true);
      //   }, 3000);

      // } else if (currentColorFloor === 1 && goingColorFloor === 2) {
      //   setFloor1(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor1(false);
      //     setFloor2(true);
      //     setActive(true);
      //   }, 1000);
      // } else if (currentColorFloor === 1 && goingColorFloor === 3) {
      //   setFloor1(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor1(false);
      //     setFloor2(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor3(true);
      //     setActive(true);
      //   }, 2000);
      // } else if (currentColorFloor === 1 && goingColorFloor === 4) {
      //   setFloor1(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor1(false);
      //     setFloor2(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor3(true);
      //   }, 2000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor4(true);
      //     setActive(true);
      //   }, 3000);
      // } else if (currentColorFloor === 1 && goingColorFloor === 5) {
      //   setFloor1(true);
      //   setActive(false);
      //   setTimeout(() => {
      //     setFloor1(false);
      //     setFloor2(true);
      //   }, 1000);
      //   setTimeout(() => {
      //     setFloor2(false);
      //     setFloor3(true);
      //   }, 2000);
      //   setTimeout(() => {
      //     setFloor3(false);
      //     setFloor4(true);
      //   }, 3000);
      //   setTimeout(() => {
      //     setFloor4(false);
      //     setFloor5(true);
      //     setActive(true);
      //   }, 4000);
      // }
    }
    setCurrentColorFloor(goingColorFloor);
  }

  const setFloor = (before, after) => {
    setFloorBefore(before);
    setFloorAfter(after);
  };

  const showMovingUp = () => {
    setActive(false);
    for (let i = 0; i < loopCount; i++) {
      setFloor(currentColorFloor + i, currentColorFloor + i + 1);
      setTimeout(() => {
      }, 1000);
      if ( currentColorFloor + i <= goingColorFloor ) {
        break;
      };
    }
    setActive(true);
  }

  const showMovingDown = () => {
    setActive(false);
    for (let i = 0; i > loopCount; i++) {
      setFloor(currentColorFloor - i, currentColorFloor - i - 1);
      setTimeout(() => {
      }, 1000);
      if ( currentColorFloor - i <= goingColorFloor ) {
        break;
      };
    }
    setActive(true);
  }

  const setFloorBefore = (before) => {
    switch (before) {
      case 5:
        setFloor5(false);
        break;
      case -5:
        setFloor5(false);
        break;
      case 4:
        setFloor4(false);
        break;
      case -4:
        setFloor4(false);
        break;
      case 3:
        setFloor3(false);
        break;
      case -3:
        setFloor4(false);
        break;
      case 2:
        setFloor2(false);
        break;
      case -2:
        setFloor2(false);
        break;
      case 1:
        setFloor1(false);
        break;
      case -1:
        setFloor1(false);
        break;
      default :
        break;
    }
  }

  const setFloorAfter = (after) => {
    switch (after) {
      case 5:
        setFloor5(true);
        break;
      case -5:
        setFloor5(true);
        break;
      case 4:
        setFloor4(true);
        break;
      case -4:
        setFloor4(true);
        break;
      case 3:
        setFloor3(true);
        break;
      case -3:
        setFloor4(true);
        break;
      case 2:
        setFloor2(true);
        break;
      case -2:
        setFloor2(true);
        break;
      case 1:
        setFloor1(true);
        break;
      case -1:
        setFloor1(true);
        break;
      default :
        break;
    }
  }

  const toggle = (a, b) => {
    if (active) {
      setGoingColorFloor(a);
      setWitchBtn(b);
    }
  };

  useEffect(() => {
    moveElevator();
  }, [currentColorFloor, goingColorFloor]);

  return (
    <>
    <Title>Elevator made of React</Title>
    <Contents>
      <Elevator
        floor5={floor5}
        floor4={floor4}
        floor3={floor3}
        floor2={floor2}
        floor1={floor1}
        />
      <Display
        witchBtn={witchBtn}
        onColor={currentColorFloor}
      />
      <Btns
        onColor={currentColorFloor}
        witchBtn={witchBtn}
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