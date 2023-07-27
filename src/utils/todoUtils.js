// make the todo utils
export const createTodo = (id, todoTitle, todoDescription) => {
    return {
        id,
        todoTitle,
        todoDescription,
        completed: false
    }
}
