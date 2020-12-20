import React from 'react';

export const ReduxPage = () => (
    <div className="jumbotron">
    <div className="container">
        <h3>Разбирался с Redux. Для себя вынес основное: Redux - State Manager для js приложений</h3>
        <p>Redux нужен для упращения работы с приложением</p>
        <ul>
            <li className="lead">Redux хранит состояние в дереве объектов, внутри единого store. Единственная возможность изменить это состояние - отправить Action </li>
            <li className="lead">Action -  объект который описывает действие, отвечает на вопрос - что мы хотим изменить в состоянии. Добавляет порядок в происходящие изменения. Т.к. это объект, мы его можем залогировать и отслеживать, как меняется состояние, и как оно влияет на компоненты </li>
            <li className="lead">Action попадает в Reducer</li>
            <li className="lead">Reducer -  функция, в которой описано как состояние должно быть изменено. Как мы хотим изменить state</li>
            <hr/>
            <span className="lead">Есть 3 принципа Redux:</span>
            <li>в Redux есть единственный источник правды, единый Store который всегда содержит актуальные данные</li>
            <li>State - только для чтения. Нельзя менять его напрямую, только через Action</li>
            <li>Изменения делаются только при помощи чистых функций. Принимают в качестве аргумента старое состояние и возвращают обновленное, т.е. новый объект</li>
            <hr/>
            <span className="lead">Action:</span>
            <li>Action - источник новых данных в Store. Состоит из типа и информации. Payload</li>
            <li>тип Action - строковое значение, обычно выносят в const</li>
            <li>тип Action нужен, чтоб Reducer понимал какой Action к нему пришел</li>
            <li>Payload будет применен в зависимости от Action</li>
            <span className="lead">Reducer:</span>
            <li>в Reducer описываем разные изменения поведения Store</li>
            <li>Reducer - функция, которая определяет как должен меняться State, в зависимости от Action</li>
            <li>Reducer - это чистые функции которые вычисляют след состояние, и возвращают этот новый объект состояния</li>
            <span className="lead">Store:</span>
            <li>Store объединяет Action и Reducer. Хранит состояние приложения</li>
            <li>Store дает доступ к State через ф-ию getState(). И менять State через ф-ию dispatch()</li>
            <li>В dispatch() мы кладем Action с типом с payload и дальше диспатчим Action который потом попадет в Reducer</li>
            <li>Store может регистрировать подписчиков через ф-ию subscribe()</li>
            <hr/>
            <h3>Flow. Как работает Redux, движение данных в Redux</h3>
            <li>Вызываем dispatch() из Store и передаем в нее Action</li>
            <li>Redux вызывает переданные в него Reducer</li>
            <li>Store отправляет в Reducer 2 аргумента - текущее состояние(объект) и Action. Reducer возвращает новый объект с новым состоянием</li>
            <li>Redux Store сохраняет весь объект который вернулся из Reducer</li>
        </ul>
    </div>
    </div>
)