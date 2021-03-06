import React, { Component } from 'react'

import happyBee from '../assets/bee/happy_bee.png';
import angryBee from '../assets/bee/angry_bee.png';
import happyBeeMirror from '../assets/bee/happy_bee_mirror.png';
import angryBeeMirror from '../assets/bee/angry_bee_mirror.png';

const happySpeed = 1050;
const angrySpeed = 425;

export class Bee extends Component  {
  constructor(props) {
    super(props);
    //methods
    this.returnWindowDimension = this.returnWindowDimension.bind(this);
    this.generateRandomPosition = this.generateRandomPosition.bind(this);
    this.tickBeeTimer = this.tickBeeTimer.bind(this);
    this.changeBeeMood = this.changeBeeMood.bind(this);
  }

  tickBeeTimer() {
    setInterval(() => {
      const beeSpeed = (this.props.bee.happy) ? happySpeed : angrySpeed;
        this.generateRandomPosition();
    }, (this.props.bee.happy) ? happySpeed : angrySpeed);
  }

  returnWindowDimension() {
    const windowSize = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
    return windowSize;
  }

  generateRandomPosition() {
    const windowSize = this.returnWindowDimension();
    const randomXPosition = (Math.ceil((Math.random() - 0.2) * windowSize.width));
    const randomYPosition = (Math.ceil((Math.random() - 0.2) * windowSize.height));
    const position = {x: randomXPosition, y: randomYPosition};
    const data = {bee: this.props.bee, position}
    console.log('llegué');
    this.props.changeBeePosition(data);
  }

  changeBeeTimer() {
    this.props.changeBeeTimer(this.props.bee);
  }

  changeBeeMood() {
    this.props.changeBeeMood(this.props.bee);
  }

  returnBeeImage(windowDimension, bee) {
    let halfWindow = windowDimension.width / 2;
    switch (bee.happy) {
      case true:
        return (bee.x < halfWindow) ? happyBee : happyBeeMirror;
        break;
      case false:
        return (bee.x < halfWindow) ? angryBee : angryBeeMirror;
        break;
      default:
        return happyBee;
    }

  }

  componentDidMount() {
    this.tickBeeTimer();
  }

  render () {
    let beeSpeed = (this.props.bee.happy) ? happySpeed : angrySpeed;
    let beeCyanPercentage = (this.props.bee.happy) ? 0 : 1;
    let beeSaturatePercentage = (this.props.bee.happy) ? 100 : 0;
    let windowDimension = this.returnWindowDimension();
    return(
      <div
        onClick={() => this.changeBeeMood()}
        key={this.props.bee.id}
        style={
          { position: 'absolute',
            top: this.props.bee.y,
            left: this.props.bee.x,
            transition: `all linear ${beeSpeed}ms`,
            MozUserSelect: 'none',
            WebkitUserSelect:'none',
            msUserSelect:'none',
            cursor: 'pointer',
          }
        }>
        <img
        draggable="false"
        src={this.returnBeeImage(windowDimension, this.props.bee)}
        style={{
          height: 'auto',
          width: '100px',
          MozUserSelect: 'none',
          WebkitUserSelect:'none',
          msUserSelect:'none',
        }}/>
      </div>
    );
  }
};
