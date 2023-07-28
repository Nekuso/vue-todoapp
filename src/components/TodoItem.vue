<script setup>
import { deleteTodo, completeTodo } from "../utils/todoUtils";
defineProps(["todoItem"]);
</script>

<template>
  <div class="todo__item">
    <div class="todo__item__complete">
      <input
        v-model="todoItem.isCompleted"
        type="checkbox"
        @click="completeTodo(todoItem.id)"
      />
    </div>
    <div class="todo__item__content">
      <h2>{{ todoItem.todoTitle }}</h2>
      <p>
        {{ todoItem.todoDescription }}
      </p>
    </div>
    <div class="todo__item__actions">
      <button @click="deleteTodo(todoItem.id)">
        <i class="bx bx-trash"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.todo__item {
  width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 0.7rem 0;

  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  transition: all 0.3s ease-in-out;

  .todo__item__complete {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 2;

    input[type="checkbox"] {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      border: 1px solid #282936;
      background: #fff;
      cursor: pointer;
      accent-color: #ffffff;
      transition: all 0.3s ease-in-out;
    }
  }

  .todo__item__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: 2;
    grid-column-end: 6;
    // background: blue;

    h2 {
      font-size: 1rem;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    p {
      width: 100%;
      font-size: 0.8rem;
      font-weight: 400;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .todo__item__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-row-start: 1;
    grid-column-start: 6;

    grid-row-end: 2;
    grid-column-end: 7;

    button {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      //   border: 1px solid #282936;
      background: #fff;
      cursor: pointer;
      margin: 0.5rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      i {
        font-size: 1.2rem;
        color: #282936;
      }

      &:hover {
        background: #282936;
        i {
          color: #fff;
        }
      }
    }
  }
}

.todo__item:hover {
  background: black;

  .todo__item__complete {
    input[type="checkbox"] {
      border: 1px solid #fff;
    }

    input[type="checkbox"]:checked {
      background: #fff;
    }
  }

  .todo__item__actions {
    button {
      background: #fff;
      i {
        color: #282936;
      }
    }
  }

  .todo__item__content {
    h2 {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
}
</style>
