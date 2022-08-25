import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainStore = defineStore("main", () => {
  const usersList = ref([]);

  const getUsers = async (query: string) => {
    try {
      const { data } = await axios.get("https://api.github.com/search/users", {
        params: {
          q: query,
        },
      });

      usersList.value = data.items;
    } catch {
      console.log("Oops!");
    }
  };

  return {
    usersList,
    getUsers,
  };
});
