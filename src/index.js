import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, memo } from "react";
import { Elevator } from './elevator/elevator';
import { Display } from './Display/Display';
import { Btns } from './Btn/btns';
import styled from 'styled-components';

const Content = memo(() => {
  const [ onFloor, setOnFloor ] = useState([0, 1]);
  const [ witchBtn, setWitchBtn ] = useState("up");
  const [ loopCount, setLoopCount ] = useState(0);
  const [ active, setActive ] = useState(true);

  const [ floor , setFloor ] = useState();
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

  console.log(onFloor);

  const moveElevator = () => {
    if (loopCount > 0) {
      showMovingUp();
      console.log("up");
    } else {
      showMovingDown();
      console.log("down");
    }
  };

  const showMovingUp = () => {
    for (let i = 0; i <= loopCount; i++) {
      setFloor(currentColorFloor + i);
      console.log(i);
      // setTimeout(() => {}, 1000);
      if ( currentColorFloor + i === goingColorFloor) {
        break;
      }
    }
  };

  const showMovingDown = () => {
    for (let i = 0; i >= loopCount; i--) {
      setFloor(currentColorFloor + i);
      // setTimeout(() => {}, 1000);
      if ( currentColorFloor + i === goingColorFloor) {
        break;
      }
    }
  };

  const toggle = (a, b) => {
    setOnFloor([...onFloor, a]);
    setWitchBtn(b);
  };

  useEffect(() => {
    setLoopCount(goingColorFloor - currentColorFloor);
    moveElevator();
  }, [onFloor, loopCount]);

  return (
    <>
    <Title>Elevator made of React</Title>
    <Contents>
      <Elevator
        floor={floor}
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
});

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
