<script setup></script>

<template>
  <template>
    <div class="card">
      <div class="card__header">
        <div class="card__title">
          <h2>Create Todo</h2>
          <!-- close button -->
          <button
            @click="
              () => {
                emit('toggle');
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
          <button @click="validation">
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
</template>

<style></style>
