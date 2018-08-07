import * as ReactDOM from "react-dom";
import Provider from "react-redux/es/components/Provider";
import todoApp from "./reducers";
import React from "react";
import TodoApp from "./components/TodoApp";
import {createStore} from "redux";

const store = createStore(todoApp)

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('root'))



