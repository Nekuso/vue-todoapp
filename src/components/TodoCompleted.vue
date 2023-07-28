<script setup>
import { completedList } from "../utils/todoUtils";
import TodoItem from "./TodoItem.vue";
</script>

<template>
  <div class="completed__items__content">
    <TodoItem
      v-for="todoItem in completedList"
      :todoItem="todoItem"
      :key="todoItem.id"
    />
  </div>
</template>

<style lang="scss" scoped>
.completed__items__content {
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
