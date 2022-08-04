<template>
  <div class="w-full md:w-auto">
    <div class="rounded overflow-hidden shadow-xl">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-gray-700 text-base"></p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
          >{{ points }}</span
        >
        <button class="bg-yellow-400 ml-7 p-3 rounded-md">
          Redimir
        </button>
        <i class="fa-solid fa-cart-circle-plus"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
});
</script>
