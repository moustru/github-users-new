<template>
  <div class="card">
    <div class="card-photo">
      <img :src="card.avatar_url" alt="User Avatar" />
    </div>
    <div class="card-info">
      <div class="card-info-name">{{ card.login }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface UserCard {
  login: string;
  avatar_url: string;
  url: string;
}

defineProps(["card"]);
</script>
