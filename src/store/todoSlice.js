import { createSlice } from '@reduxjs/toolkit'

///Initial state for starting
const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
////Creating todo
        saveTodo: (state,action) => {
            state.todoList.push(action.payload)
        },
////Check-uncheck
        setCheck: (state,action) => {
            state.todoList.forEach(el=>{
                if(action.payload === el.id) {
                    if (el.done === true) {
                        el.done = false
                    }
                    else {
                        el.done = true
                    }
                }
            })
        },
////Editing todo
        setName: (state, action) => {
            state.todoList.forEach(el=>{
                if(action.payload.id === el.id) {
                    el.name = action.payload.name
                }
            })
        }
    }
});

export const { saveTodo, setCheck, setName } = todoSlice.actions
export const selectTodoList = state => state.todos.todoList
export default todoSlice.reducer