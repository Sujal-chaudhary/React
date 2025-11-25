import { createContext, useContext } from "react";


/* In our context we just add kya values hai hamare pass aur methods we do not define our methods here. */
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
        ,{},{}
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext) /* whenver using useContext we have to give the context to it. */
}

export const Todoprovider  = TodoContext.Provider