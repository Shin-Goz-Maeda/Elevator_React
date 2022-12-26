import React from 'react';
class DownBtn extends React.Component {
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
    const down = document.getElementById('down'+ num);
    const floor = document.getElementById('floor' + num);
    const light = document.getElementById('light' + num);
    down.style.backgroundColor = 'yellow';
    floor.style.backgroundColor = 'yellow';
    light.style.backgroundColor = 'red';
  }

  render() {
    return (
      <div className='btns'>
        <div className='btn' id='down4' onClick={() => {this.changeColor(4)}}>
          <p>⬇︎</p>
        </div>
        <div className='btn' id='down3' onClick={() => {this.changeColor(3)}}>
          <p>⬇︎</p>
        </div>
        <div className='btn' id='down2' onClick={() => {this.changeColor(2)}}>
          <p>⬇︎</p>
        </div>
        <div className='btn' id='down1' onClick={() => {this.changeColor(1)}}>
          <p>⬇︎</p>
        </div>
        <div className='btn' id='down0'>
        </div>
      </div>
    )
  }
}

export default DownBtn;