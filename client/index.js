
import React from 'react';
import ReactDOM from 'react-dom';
import aframe from 'aframe';
import {Entity, Scene} from 'aframe-react';

class ExampleScene extends React.Component {
  render () {
    return (
      <Scene>
		<Entity vive-controls="hand: right" buttonColor="blue" color="red" vive-cursor></Entity>
		<Entity geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" color="#EF2D5E"></Entity>
		<Entity geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" width="1" height="1" depth="1" color="blue"
		event-set__1 ="_event: click; material.color: red; scale: 2 2 2"></Entity>
		<Entity geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></Entity>
		<Entity geometry="primitive: plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<ExampleScene/>, document.querySelector('#app'));
