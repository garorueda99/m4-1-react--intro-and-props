import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');
const wrapperAll = document.createElement('div');
const sideA = document.createElement('div');
const sideB = document.createElement('div');
wrapperAll.classList.add('wrapperAll');
rootElement.appendChild(wrapperAll);
sideA.classList.add("sideA")
sideB.classList.add("sideB")

wrapperAll.appendChild(sideA);
wrapperAll.appendChild(sideB);


ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} />,
  sideA
);

ReactDOM.render(
  <App currentUser= {data.currentUser2} conversation={data.conversation} />,
  sideB
);


