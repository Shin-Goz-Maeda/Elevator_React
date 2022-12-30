import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import { Elevator } from './elevator/elevator';
import { Display } from './Display/Display';
import { Btns } from './Btn/btns';
import styled from 'styled-components';

const Content = () => {
  const [ onFloor, setOnFloor ] = useState([0, 1]);
  const [ witchBtn, setWitchBtn ] = useState("up");
  const [ loopCount, setLoopCount ] = useState(0);
  const [ active, setActive ] = useState(true);

  const [ floor1 , setFloor1 ] = useState(true);
  const [ floor2 , setFloor2 ] = useState(false);
  const [ floor3 , setFloor3 ] = useState(false);
  const [ floor4 , setFloor4 ] = useState(false);
  const [ floor5 , setFloor5 ] = useState(false);

  // 現在いるフロア
  const currentColorFloor = onFloor.slice(-2)[0];
  // 行こうとしているフロア
  const goingColorFloor = onFloor.slice(-1)[0];

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

  const moveElevator = () => {
    setLoopCount(goingColorFloor - currentColorFloor);
    if (loopCount >= 0) {
      showMovingUp();
      console.log("up");
    } else {
      showMovingDown();
      console.log("down");
    }
  };

  const showMovingUp = () => {
    for (let i = 0; i <= loopCount; i++) {
      if ( currentColorFloor + i === loopCount ) {
        setActive(true);
        console.log(active);
        break;
      };
      setTimeout(() => {
        setFloor(currentColorFloor + i, currentColorFloor + i + 1);
      }, 1000);
    }
  }

    const showMovingDown = () => {
    for (let i = 0; i >= loopCount; i--) {
      if ( currentColorFloor - i === loopCount ) {
        setActive(true);
        break;
      };
      setTimeout(() => {
        setFloor(currentColorFloor - i, currentColorFloor - i - 1);
      }, 1000);
    }
  }

  const setFloor = (before, after) => {
    setFloorBefore(before);
    setFloorAfter(after);
  };

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
    setOnFloor([...onFloor, a]);
    setWitchBtn(b);
  };

  useEffect(() => {
    moveElevator();
  }, [onFloor, loopCount]);

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
        // witchBtn={witchBtn}
        // goingColorFloor={goingColorFloor}
      />
      <Display
        witchBtn={witchBtn}
        goingColorFloor={goingColorFloor}
      />
      <Btns
        goingColorFloor={goingColorFloor}
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


  // console.log("floor1=>" + floor1);
  // console.log("floor2=>" + floor2);
  // console.log("floor3=>" + floor3);
  // console.log("floor4=>" + floor4);
  // console.log("floor5=>" + floor5);

  // console.log("active=>" + active);




