<script setup>
import { todoList } from "../utils/todoUtils";
import TodoItem from "./TodoItem.vue";
</script>

<template>
  <div class="all__items__content">
    <TodoItem v-for="(todoItem, index) in todoList" :todoItem="todoItem" :key="todoItem.id" />
  </div>
</template>

<style lang="scss" scoped>
.all__items__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
