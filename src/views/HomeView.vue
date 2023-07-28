<script setup>
import { ref } from "vue";
import TodoCreator from "../components/TodoCreator.vue";
import TodoAll from "../components/TodoAll.vue";
import TodoPending from "../components/TodoPending.vue";
import TodoCompleted from "../components/TodoCompleted.vue";

const createMode = ref(false);

function toggleCreateMode() {
  createMode.value = !createMode.value;
}
</script>

<template>
  <div class="wrapper">
    <!-- Modals -->
    <div v-show="createMode" class="overlay">
      <TodoCreator @toggle="toggleCreateMode" />
    </div>

    <main>
      <div class="content__header">
        <h2>Welcome Back!</h2>
        <button class="learn-more" @click="toggleCreateMode">
          <span class="circle" aria-hidden="true">
            <i class="bx bx-plus icon arrow"></i>
          </span>
          <span class="button-text">Create</span>
        </button>
      </div>

      <div class="content__categories">
        <div class="all__items category">
          <h2>All Todos</h2>
          <TodoAll />
        </div>
        <div class="pending__items category">
          <h2>Pendings</h2>
          <TodoPending />
        </div>
        <div class="completed__items category">
          <h2>Completed</h2>
          <TodoCompleted />
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
    z-index: 2;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  main {
    width: 700px;
    height: 700px;
    // background: purple;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    .content__header {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        vertical-align: middle;
        text-decoration: none;
        background: transparent;
        padding: 0;
        font-size: inherit;
        font-family: inherit;

        &.learn-more {
          width: 10rem;
          height: auto;

          .circle {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: relative;
            display: block;
            margin: 0;
            width: 3rem;
            height: 3rem;
            background: #282936;
            border-radius: 1.625rem;

            .icon {
              transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto;
              background: #fff;

              &.arrow {
                transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
                left: 0.625rem;
                width: 1.125rem;
                height: 0.125rem;
                background: none;

                &::before {
                  position: absolute;
                  content: "";
                  top: -0.29rem;
                  right: 0.0625rem;
                  width: 0.625rem;
                  height: 0.625rem;
                  border-top: 0.125rem solid #fff;
                  border-right: 0.125rem solid #fff;
                  transform: rotate(45deg);
                }
              }
            }
          }

          .button-text {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 0.75rem 0;
            margin: 0 0 0 1.85rem;
            color: #282936;
            font-weight: 700;
            line-height: 1.6;
            text-align: center;
            text-transform: uppercase;
          }

          &:hover {
            .circle {
              width: 100%;

              .icon.arrow {
                background: #fff;
                transform: translate(1rem, 0);
              }
            }

            .button-text {
              color: #fff;
            }
          }
        }
      }
    }

    .content__categories {
      width: 100%;
      height: 100%;
      // background: #c5c5c5;
      border-radius: 1rem;
      display: grid;

      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

      gap: 10px;

      .category {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 1rem;
        padding: 1.6rem;
        gap: 1rem;
        border: 1px solid #282936;
        background-color: #ffffff;
      }
      .all__items {
        grid-row-start: 1;
        grid-column-start: 1;

        grid-row-end: 5;
        grid-column-end: 4;
      }
      .pending__items {
        grid-row-start: 1;
        grid-column-start: 4;

        grid-row-end: 3;
        grid-column-end: 6;
      }
      .completed__items {
        grid-row-start: 3;
        grid-column-start: 4;

        grid-row-end: 5;
        grid-column-end: 6;
      }
    }
  }
}
</style>
