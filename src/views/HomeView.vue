<script setup>
    import { ref } from 'vue';
    import TodoItem from '../components/TodoItem.vue';
  
    const todo = ref('asdasd');




</script>


<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">Welcome Back!</h2>
      <div class="input__container">
        <input v-model="todo" type="text">
        <button><i class='bx bxs-send'></i></button>
      </div>
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