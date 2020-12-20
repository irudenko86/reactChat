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
            <li className="color-red">Нужно обновить страницу! Нужно сделать так, чтоб DOM отрисовывался раньше, чем логика. Пока не нашел как это сделать. Наверно что-то связано с жизненным циклом</li>
            <li className="color-red">Возможно не работает, потому что я использую нативный js. </li>
            <li className="color-red">Хочу подключить async вывод через middleware</li>
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
