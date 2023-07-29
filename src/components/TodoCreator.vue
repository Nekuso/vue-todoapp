<script setup>
import { ref } from "vue";
import { createTodo, toggleCreateMode } from "../utils/todoUtils";

const todoTitle = ref("");
const todoDescription = ref("");

function validation() {
  if (todoTitle.value === "" || todoTitle.value === " ") {
    alert("Please enter a title");
  } else {
    createTodo(todoTitle.value, todoDescription.value);
    toggleCreateMode();
    todoTitle.value = "";
    todoDescription.value = "";
  }
}
</script>

<template>
  <div class="card">
    <div class="card__header">
      <div class="card__title">
        <h2>Create Todo</h2>
        <button
          title="Close"
          @click="
            () => {
              toggleCreateMode();
              todoTitle = '';
              todoDescription = '';
            }
          "
        >
          <i class="bx bx-x"></i>
        </button>
      </div>
      <div class="input__container">
        <input
          v-model="todoTitle"
          type="text"
          class="title__input"
          placeholder="Title"
        />
        <button title="Submit" @click="validation">
          <i class="bx bxs-send"></i>
        </button>
      </div>
    </div>
    <textarea
      v-model="todoDescription"
      class="description__input"
      placeholder="Descripton"
    ></textarea>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 400px;
  height: 350px;
  max-height: 650px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  background-color: #fff;
  animation: fadeIn 0.4s ease;
  gap: 0.5rem;
  z-index: 3;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .card__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      h2 {
        font-size: 1.2rem;
        font-weight: 500;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: none;
        border-radius: 50%;
        background-color: #e9e8e8;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #dcdcdc;
        }

        i {
          font-size: 1.2rem;
          color: #000;
        }
      }
    }

    .input__container {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      width: 100%;

      .title__input {
        width: 100%;
        padding: 0.7rem;
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
        padding: 0.7rem 1.2rem;
        border: none;
        border-radius: 10px;
        background: #282936;
        color: #fff;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: #40424f;
        }

        i {
          font-size: 1rem;
          color: white;
        }
      }
    }
  }

  .description__input {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 1rem;
    background-color: #e9e8e8;
    border-radius: 10px;
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
    padding: 0.7rem;
  }
}
</style>
