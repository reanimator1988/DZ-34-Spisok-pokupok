import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingItem = ({ item, onEdit, onDelete, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedCaption, setEditedCaption] = useState(item.caption);
    const [editedAmount, setEditedAmount] = useState(item.amount);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(item.id, editedCaption, editedAmount);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="shopping-item-container">
            <div>
                <span className="item-number">Замовлення № {index + 1}.</span>
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={editedCaption}
                            onChange={(e) => setEditedCaption(e.target.value)}
                            placeholder="Назва"
                            className="edit-input"
                        />
                        <input
                            type="number"
                            value={editedAmount}
                            onChange={(e) => setEditedAmount(e.target.value)}
                            placeholder="Кількість"
                            className="edit-input"
                        />
                    </div>
                ) : (
                    <div>
                        <span className="item-caption">Назва товару: {item.caption},</span>
                        <span className="item-amount">Кількість: {item.amount}</span>
                    </div>
                )}
            </div>
            <div>
                <button onClick={handleEdit} className="edit-button">
                    {isEditing ? (
                        <FontAwesomeIcon icon={faEdit} />
                    ) : (
                        <FontAwesomeIcon icon={faEdit} />
                    )}
                </button>
                <button onClick={() => onDelete(item.id)} className="delete-button">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default ShoppingItem;

