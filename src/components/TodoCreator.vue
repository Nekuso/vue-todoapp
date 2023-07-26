<script setup>
  import { ref } from 'vue';

  const emit = defineEmits(['add-Todo']);
  const todo = ref('');

  const addTodo = () => {
    emit('add-Todo', todo.value);
  }

</script>

<template>
  <div class="input__container">
    <input v-model="todo" type="text"> 
    <button @click="addTodo"><i class='bx bxs-send'></i></button>
  </div>
</template>

<style lang="scss">

    .input__container {
      display: flex;
      align-items: center;
      gap: .6rem;
      width: 100%;

      input {
        width: 100%;
        padding: .7rem;
        border: none;
        border-radius: 10px;
        outline: none;
        font-size: 1rem;
        background-color: #e9e8e8;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .7rem 1.2rem;
        border: none;
        border-radius: 10px;
        background-color: #1e90ff;
        color: #fff;
        cursor: pointer;
        transition: all .3s ease;

        &:hover {
          background-color: #1877e6;
        }

        i {
          font-size: 1rem;
          color: white;
        }
      }
    }

</style>