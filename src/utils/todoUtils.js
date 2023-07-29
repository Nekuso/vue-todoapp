import { uid } from "uid";
import { ref, computed, reactive } from "vue";

function saveTodo() {
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
}
export const todoList = ref(
  JSON.parse(localStorage.getItem("todoList")) || [
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
  ]
);
export const todoItem = reactive({
  id: "",
  todoTitle: "",
  todoDescription: "",
  isCompleted: false,
});

export const viewMode = ref(false);
export const createMode = ref(false);

export const toggleCreateMode = () => {
  createMode.value = !createMode.value;
};

export const toggleViewMode = () => {
  viewMode.value = !viewMode.value;
};

export const viewTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  todoItem.id = todoList.value[index].id;
  todoItem.todoTitle = todoList.value[index].todoTitle;
  todoItem.todoDescription = todoList.value[index].todoDescription;
  todoItem.isCompleted = todoList.value[index].isCompleted;
  toggleViewMode();
};

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
  todoList.value.unshift(todo);
  return saveTodo();
};

export const updateTodo = (id, todoTitle, todoDescription) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  todoList.value[index].todoTitle = todoTitle;
  todoList.value[index].todoDescription = todoDescription;
  todoList.value[index];
  return saveTodo();
};

export const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  todoList.value.splice(index, 1);
  return saveTodo();
};

export const completeTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id);
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
  return saveTodo();
};
