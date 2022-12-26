import React from 'react';

class UpBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onColor: false,
    }
  }

  reColor() {
    // 各DOMの値を設定
    const l = 5;
    const defaultColor = "#CCCCCC";
    for(let i = 0; i < l; i++) {
      const down = document.getElementById('down'+ [i]);
      const up = document.getElementById('up'+ [i]);
      const floor = document.getElementById('floor' + [i]);
      const light = document.getElementById('light' + [i]);
      floor.style.backgroundColor = defaultColor;
      light.style.backgroundColor = defaultColor;
      up.style.backgroundColor = defaultColor;
      down.style.backgroundColor = defaultColor;
     }
  }

  changeColor(num) {
    this.reColor();
    const up = document.getElementById('up'+ num);
    const floor = document.getElementById('floor' + num);
    const light = document.getElementById('light' + num);
    up.style.backgroundColor = 'yellow';
    floor.style.backgroundColor = 'yellow';
    light.style.backgroundColor = 'red';
  }
  
  render() {
    return (
      <div className='btns'>
        <div className='btn' id='up4'>
        </div>
        <div className='btn' id='up3'onClick={() => {this.changeColor(3)}}>
          <p>⬆︎</p>
        </div>
        <div className='btn' id='up2' onClick={() => {this.changeColor(2)}}>
          <p>⬆︎</p>
        </div>
        <div className='btn' id='up1' onClick={() => {this.changeColor(1)}}>
          <p>⬆︎</p>
        </div>
        <div className='btn' id='up0' onClick={() => {this.changeColor(0)}}>
          <p>⬆︎</p>
        </div>
      </div>
    )
  }
}

export default UpBtn;