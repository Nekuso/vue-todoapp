import { uid } from "uid";
import { ref } from "vue";

export const todoList = ref([
  {
    id: uid(),
    todoTitle: "Make Breakfast",
    todoDescription: "Make breakfast and eat before going to work",
    isCompleted: false,
  },
  {
    id: uid(),
    todoTitle: "Go to work",
    todoDescription: "Go to work and do some work",
    isCompleted: false,
  },
  {
    id: uid(),
    todoTitle: "Go to gym",
    todoDescription: "Go to gym and do some workout",
    isCompleted: false,
  },
]);
// make the todo utils
export const createTodo = (todoTitle, todoDescription) => {
  const todo = {
    id: uid(),
    todoTitle,
    todoDescription,
    isCompleted: false,
  };
  return todoList.value.unshift(todo);
};
