<script setup>
    import { ref } from 'vue';
import { RouterView } from 'vue-router';
  
    const todo = ref('');

</script>


<template>
  <div class="card">
    <div class="card__header">
      <h2 class="card__title">Welcome Back!</h2>
      <div class="input__contianer">
        <input type="text">
        <button><i class='bx bxs-send'></i></button>
      </div>
    </div>

    <div class="card__lists">
      <div class="card__item">
        <div class="item__complete">
          <input type="checkbox" name="complete" id="complete">
        </div>
        <div class="item__content">
          Install NPM packages
        </div>
        <div class="item__actions">
          <button class="item__edit">Edit</button>
          <button class="item__delete">Delete</button>
        </div>
      </div>
    </div>

  </div>

</template>

<style lang="scss">

  .card {
    width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;

    .card__header {
      padding: .5rem 0;

      .input__container {

      }
    }
  }


</style>