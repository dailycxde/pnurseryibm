import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
    tq: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action){
            const Item = state.items.find(item => item.id === action.payload.id);
            console.log(Item)
            if (!Item){
                action.payload.quantity = 1;
                state.items.push(action.payload);
                state.total += action.payload.price;
                state.tq += 1;
            } 
            else{
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items[index].quantity += 1;
                state.total += action.payload.price;
            }
        },

        removeItem(state, action){
            var index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.total -= state.items[index].price * state.items[index].quantity;
                state.tq -= 1;
                state.items.splice(index, 1);
                window.alert("Item removed successfully");
            }
        },

        increment(state, action){
            var index = state.items.findIndex(item => item.id === action.payload.id);
            state.items[index].quantity += 1;
            state.total += action.payload.price;
            console.log("im here");
        },

        decrement(state, action){
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if((state.items[index].quantity-1)<1){
                cartSlice.caseReducers.removeItem(state, action);
            }
            else{
                state.items[index].quantity -= 1;
                state.total -= action.payload.price;
            }

        }
    }
})

export const { addItem, removeItem, increment, decrement } = cartSlice.actions
export default cartSlice.reducer;