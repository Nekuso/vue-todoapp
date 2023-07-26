<script setup>
  import { ref } from 'vue';
  import { uid } from 'uid';
  import TodoItem from '../components/TodoItem.vue';
  import TodoCreator from '../components/TodoCreator.vue';

  const todoList = ref([]);

  const addTodo = (todo) => {
    todoList.value.push({
      id: uid(),
      todo,
      isCompleted: null,
      isEditing: null,
    });
  }

</script>


<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">Welcome Back!</h2>
      <TodoCreator @add-todo="addTodo"/>
    </div>
    <div class="todo__lists">
      <p>{{ todo }}</p>
    </div>

  </div>

</template>

<style lang="scss" scoped>

  .card {
    width: 400px;
    height: 650px;
    max-height: 650px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    .card__header {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: .5rem 0;
    }

    .todo__lists {
      display: flex;
      width: 100%;
      height: 100%;
      gap: 1rem;
      padding: .5rem 0;
      background-color: #e9e8e8;
      border-radius: 10px;

    }
  }


</style>