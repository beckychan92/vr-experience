
import React from 'react';
import ReactDOM from 'react-dom';
import aframe from 'aframe';

export default class Client extends React.Component {
  render () {
    return (
      <a-scene>
		<a-entity vive-controls="hand: right" buttonColor="blue" color="red" vive-cursor></a-entity>
		<a-sphere geometry="primitive: sphere" position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
		<a-box geometry="primitive: box" position="-1 0.5 -3" rotation="0 45 0" width="1" height="1" depth="1" color="blue"
		event-set__1 ="_event: click; material.color: red; scale: 2 2 2"></a-box>
		<a-cylinder geometry="primitive: cylinder" position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
		<a-plane geometry="primitive: plane" position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      </a-scene>
    );
  }
}
