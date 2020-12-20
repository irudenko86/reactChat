import React from 'react';

export const ReduxPractice = () => {
    
    return (
    <div className="wrapper-theme">
        <div className="container pt-5">
            <h1 className="heading">
                <span>Redux</span> 
                <button className="btn btn-info" id="theme">Поменять цвет темы</button>
            </h1>
            
            <hr/>

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Счетчик: <span id="counter"></span></h5>
                    <button className="btn btn-primary" id="add">Добавить</button>
                    <button className="btn btn-danger" id="sub">Убрать</button>
                    <button className="btn btn-success" id="async">Async</button>
                </div>
            </div>

            <hr/>
            <br/>

            <h5>Заметка:</h5>
            <ul>
                <li>Сначала в файле index.js реализовал работу счетчика на чистом js. Затем перенес всю логику в native.js и продолжил работать с index, но уже реализуя логику с помощью Redux</li>
                <li>Есть начальное состояние, его рендерим в шаблон. При клике на кнопку - напрямую меняем модель и сразу рендерим. Храним State в компоненте, что не очень хорошо в больших проектах или при изменениях верстки</li>
                <hr/>
                <li>Создаю объект который является Store - <strong>createStore</strong></li>
                <li><strong>getState()</strong> - возвращаю состояние, <strong>subscribe()</strong> - все слушатели, что слушают этот объект, должны что-то поменять. Передаем callback, эта ф-ия выполниться тогда, когда что-то произойдет</li>
                <li><strong>dispatch(action)</strong> - из компонента в Store прилетает Action, мы его диспатчим и меняем его State через Reducer</li>
                <li><strong>action</strong> - объект у которого есть type. <strong>Reducer</strong> - для каждого приложеня должен быть свой Reducer. Правило Reducer - на выходе получаем объект</li>
                <li>в консоли применил метод dispatch и менял type - state поменялся </li>
                <hr/>
                <li>чтобы понять в компоненте что что-то изменилось - мы можем подписаться на эти изменения. т.к. store идет по паттерну observer, </li>
                <li>Реализовал уже отрисовку counter в шаблоне. Но при перезагрузке страницы ничего не будет в поле counter. Нужно его отрисовать по умолчанию </li>
                <li>после того как подписались на store - задиспатчить ему тип который не объявили, потому по дефолту вернется 0 (store.dispatch передам type: 'INIT_APPLICATION') </li>
                <li><strong>могу сказать что разобрался с redux написав свой кастомный redux)). Это реально очень интересно и круто</strong></li>
                <hr/>
                <li>После чего я установил библиотеку redux и разбирался с ней</li>
                <li>Создал types.js где прописал константы для type редюсера, чтоб не ошибиться в названии</li>
                <li>Создал actions.js - где прописал actions фунции. Теперь я могу диспатчить не объекты, а функции</li>
                <hr/>
                <li>В redux есть проблема асинхронности. Просто прописать ф-цию setTimeout в Reducer нельзя, т.к. не отработает. Нарушается правило вывода state</li>
                <li>Разбирался с Middleware. Установил пакет redux-thunk</li>
            </ul>
        </div>
    </div>
    )
}





function update() {
    // for redux

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

// const store = createStore(rootReducer, 0); // у этого объекта уже есть 3 метода. Но чтоб store работал, нужно передать rootReducer. Но передаем просто как атрибут, а не вызов. 0 - counter

// window.store = store; // проверял в консоли как работают методы редюсера


console.log(addBtn);

// addBtn.addEventListener('click', () => {
// //  store.dispatch( {type: INCREMENT}); // диспатчил объект изначально
//   store.dispatch( increment());
// })

// subBtn.addEventListener('click', () => {
//  // store.dispatch( {type: DECREMENT});
//   store.dispatch( decrement());
// })

// asyncBtn.addEventListener('click', () => {

// })

// подписываемся на изменения, следим за ними. Проверил в консоли что работает
// store.subscribe( () => console.log(store.getState())) 

// store.subscribe( () => {
//   const state = store.getState();   // подписались на изменения, получили state. 
//   console.log(state);
//   counter.textContent = state;      // отрисовываем в шаблоне результат
// })

// store.dispatch( {type: 'INIT__APPLICATION'})


// themeBtn.addEventListener('click', () => {
//   // document.querySelector('.wrapper-theme').classList.toggle('dark');
// })
}

update ();