import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import shoppingReducer from './Reducers/ShoppingReducer.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import './App.scss';

const store = createStore(shoppingReducer);

const App = () => (
    <Provider store={store}>
        <div>
            <h1>ДЗ 34. Список покупок</h1>
            <div className="app-container">
            <h2 className="app-title">Список покупок:</h2>
            <ShoppingList />
            </div>
        </div>
    </Provider>
);

export default App;


