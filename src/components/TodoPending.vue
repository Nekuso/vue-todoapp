<script setup>
import { todoList } from "../utils/todoUtils";
</script>

<template>
  <div class="pending__items__content">
    {{ todoList }}
  </div>
</template>

<style lang="scss" scoped>
.pending__items__content {
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
