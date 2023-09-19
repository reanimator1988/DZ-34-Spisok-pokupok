import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addShoppingItem, editShoppingItem, deleteShoppingItem } from './../Actions/ShoppingAction.jsx';
import ShoppingItem from './ShoppingItem.jsx';
import './ShoppingList.scss';

const ShoppingList = ({ shoppingList, addShoppingItem, editShoppingItem, deleteShoppingItem }) => {
    const [caption, setCaption] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleAddItem = () => {
        if (caption && !isNaN(amount) && parseInt(amount) >= 0) {
            addShoppingItem(caption, parseInt(amount));
            setCaption('');
            setAmount('');
            setError('');
        } else {
            setError('Некоректна назва або кількість товару');
        }
    };

    const handleAmountChange = (e) => {
        const inputValue = e.target.value;
        if (/^[0-9]*$/.test(inputValue) || inputValue === '') {
            setAmount(inputValue);
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Назва товару"
                />
                <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Кількість"
                />
                <button onClick={handleAddItem}>Додати</button>
                {error && <p className="error-message">{error}</p>}
            </div>
            <div>
                {shoppingList.map((item, index) => (
                    <ShoppingItem
                        key={item.id}
                        item={item}
                        onEdit={editShoppingItem}
                        onDelete={deleteShoppingItem}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    shoppingList: state.shoppingList,
});

const mapDispatchToProps = {
    addShoppingItem,
    editShoppingItem,
    deleteShoppingItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

