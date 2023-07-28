import { uid } from "uid";
import { ref, computed } from "vue";

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

export const pendingList = ref(
  computed(() => {
    return todoList.value.filter((todo) => !todo.isCompleted);
  })
);

export const completedList = ref(
  computed(() => {
    return todoList.value.filter((todo) => todo.isCompleted);
  })
);

export const createTodo = (todoTitle, todoDescription) => {
  const todo = {
    id: uid(),
    todoTitle,
    todoDescription,
    isCompleted: false,
  };
  return todoList.value.unshift(todo);
};

export const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  return todoList.value.splice(index, 1);
};

export const completeTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  return (todoList.value[index].isCompleted = !todoList.value[index]);
};
