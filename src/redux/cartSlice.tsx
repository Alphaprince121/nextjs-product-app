import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
}


interface CartState {
    items: CartItem[];
}


const initialState: CartState = {
    items: [],
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Action to add an item to the cart
        add: (state, action: PayloadAction<CartItem>) => {
            state.items.push(action.payload);
        },
        // Action to remove an item from the cart 
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
