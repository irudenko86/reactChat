import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// import {createStore} from './createStore'
import {createStore} from 'redux'
import { rootReducer } from './redux/rootReducer';
import { DECREMENT, INCREMENT } from './redux/types';
import { decrement, increment } from './redux/actions';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// for redux

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0); // у этого объекта уже есть 3 метода. Но чтоб store работал, нужно передать rootReducer. Но передаем просто как атрибут, а не вызов. 0 - counter

// window.store = store; // проверял в консоли как работают методы редюсера


if (addBtn, counter, subBtn) {

console.log(addBtn);

addBtn.addEventListener('click', () => {
  store.dispatch( increment());
})

subBtn.addEventListener('click', () => {
  store.dispatch( decrement());
})

store.subscribe( () => {
  const state = store.getState();   // подписались на изменения, получили state. 
  console.log(state);
  counter.textContent = state;      // отрисовываем в шаблоне результат
})

store.dispatch( {type: 'INIT__APPLICATION'})

// asyncBtn.addEventListener('click', () => {

// })

// подписываемся на изменения, следим за ними. Проверил в консоли что работает
// store.subscribe( () => console.log(store.getState())) 

themeBtn.addEventListener('click', () => {
  document.querySelector('.wrapper-theme').classList.toggle('dark');
})
}









