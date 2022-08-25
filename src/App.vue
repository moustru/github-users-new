<template>
  <div class="content">
    <div class="search">
      <input v-model="login" type="text" placeholder="Поиск..." class="input" />
      <button class="btn" @click="getUsersEvent()">Найти</button>
    </div>

    <div class="results">
      <div v-if="isLoading" class="loader">
        <img src="./assets/loader.gif" alt="Loader" />
      </div>
      <Card v-for="(card, i) in usersList" :key="i" :card="card"></Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "./store/index";
import Card from "./components/Card/Card.vue";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { usersList } = storeToRefs(store);
const { getUsers } = store;

const login = ref("");
const isLoading = ref(false);

const getUsersEvent = async () => {
  isLoading.value = true;

  await getUsers(login.value);

  isLoading.value = false;
};
</script>

<style scoped lang="less">
.content {
  text-align: center;

  > * {
    width: 100%;
  }
}

.input {
  margin-right: 20px;
  padding: 20px;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid #a5a5a5;
}

.btn {
  padding: 20px;
  font-size: 20px;
  color: #fff;
  border: none;
  background-color: #10a65f;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: darken(#10a65f, 5%);
  }
}
</style>
