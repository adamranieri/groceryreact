import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    budget:100,
    items:[ "eggs", 'milk']

}

const grocerySlice = createSlice({
    name:'Tasks',
    initialState,
    reducers:{   
        
        addItem(state, action){
            state.items.push(action.payload)
        },

        lowerBudget(state){
            if(state.budget > 10){
                state.budget = state.budget -10
            }
        },

        increaseBudget(state){
            state.budget = state.budget + 10
        }

    }
    
})

export const store = configureStore({reducer: grocerySlice.reducer});
export const actions = grocerySlice.actions;