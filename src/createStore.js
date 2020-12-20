export function createStore(rootReducer, initialState) {  // initialState - начальное состояние, которое мы примим в state
    // использую замыкание, т.к. в нем можем получить приватную переменную
    // для каждого приложеня должен быть свой Reducer - мы его принимаем как параметр. rootReducer на самом деле ф-ия
    let state = rootReducer(initialState, {type: '__INIT__'}) // {} state был задан как пустой объект, но это не всегда начальное состояние, потому делаем более универсально
    const subscribers = [] // массив слушателей

    return {
        // action === {type: 'INCREMENT'}. Это объект у которого есть поле type
        dispatch(action) { // нужно что-то изменить, что-то поменялось. Через action мы меняем наш state в store - с помощью Reducer
            state = rootReducer(state, action)   // 1й пар-р state (пред состояние)
            subscribers.forEach ( sub => sub ()) // нужно уведомить всех слушателей что состояние зименилось
        },
        subscribe(callback) {  // все слушатели, что слушают этот объект, должны что-то поменять. Передаем callback, ф-ия выполниться тогда, когда что-то произойдет
          subscribers.push(callback);
        },
        getState() {
            return state;
        }
    }
}