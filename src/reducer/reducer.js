import { ADDTOCART, ADD, SUBTRACT } from '../constants/actionTypes';

export const initialItems = [];
export const reducer = (items = initialItems, action) => {
    switch (action.type) {
        case ADD: 
            return items.map(Item => Item.item === action.name ? {item: action.name, quantity: Item.quantity + 1} : Item );
        case SUBTRACT: {
                items = items.map(Item => Item.item === action.name ? {item: action.name, quantity: Item.quantity - 1} : Item );
                return items.filter(Item => Item.quantity >= 1);
            }
        case ADDTOCART:
            const index = items.findIndex(Item => Item.item === action.payload.item);
            if (index === -1) {
                return [...items, action.payload];
            }
        default:
            return items;
    }
}
