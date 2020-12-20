import React from 'react';

export const About = () => (
    <div className="jumbotron">
    <div className="container">
        <h1 className="display-5">Тестовое приложение обо всем по немногу </h1>
        <p className="display-5">Приложение можно использовать как чат, как ToDo-шку</p>
        <ul>
            <li className="lead">реализовал подключение и использование библиотек bootstrap, react-router-dom, axios для бекенда</li>
            <li className="lead">реализовал меню и навигацию по нескольким страницам</li>
            <li className="lead">создал компонент ChatForm.js для реализации подобия чата</li>
            <li className="lead">ввод сообщений из пустой строки</li>
            <li className="lead">удаление сообщений, вывод даты сообщения</li>
            <li className="lead">вывод сообщения об ошибке или сообщение об правильности ввода</li>
            <hr />
            <li className="lead">реализовал логику вывода алертов после ввода</li>
            <li className="lead">создал Reducer как стрелочную функцию </li>
            <li className="lead">использую хук <strong>useReducer</strong> - использовал этот редюсер в State </li>
            <li className="lead">создал функции show и hide для алертов, использовал метод dispatch() </li>
            <li className="lead">в контекст Provider - передал ключ value с функциями show, hide и сам state </li>
            <li className="lead">использовал AlertState в компоненте Alert.js - использую контекст, хуком <strong>useContext</strong> </li>
            <li className="lead">для формы использовал хук <strong>useState и useContext</strong> </li>
            <hr />
            <li className="lead">Подключил базу данных, работал с firebase </li>
            <li className="lead">Создал и подключил файл .env.local где указал url к БД firebase</li>
            <li className="lead">В ней также создал и работал с Context,Reduser,State </li>
            <li className="lead"><strong>Основная идея State - обернуть все приложение в State, чтоб дочерние элементы имели доступ до состояния контекста</strong></li>
            <li className="lead">Создал actions для сообщений в БД - Создание, Получение всех сообщений, Удаление, Показать загрузку сообщения </li>
            <li className="lead">Результат: при захоже на Home page - я получаю флаг loading, массив chatform, и функцию fetchMessage. <strong>Использовал хук useEffect</strong> </li>
            <li className="lead">Результат - добавление записи происходит на сервере, если есть проблема с сервером - выдаст сообщение об ошибке</li>
            <li className="lead">Реализовал onRemove - удаление сообщения </li>
            <hr />
            <li className="lead">В планах попробовать реализовать анимацию удаления и вывода сообщений. Сделать билд проекта и использование удаленного хостинка firebase</li>

        </ul>
        <p className="display-5">Есть разные страницы, работа с сервером, динамика. </p>
        <p className="display-5">Я копнул глубже, возможно не совсем то сделал, но сделал намного больше действий, мозг почти взорвался. Но очень интересно, я хочу с этим работать</p>
    </div>
    </div>
)
    