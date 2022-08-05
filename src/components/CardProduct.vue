<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
      <p class="text-gray-700 text-base">
        {{ sku }}
      </p>
    </div>
    <div class="flex px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
        >${{ price }}</span
      >
      <i class="fa-solid fa-cart-circle-plus"></i>
      <span>
        <!-- <input
          class="border-gray-500 border-2 mx-3 w-20 rounded-md"
          type="number"
          width="10px"
        /> -->
      </span>
      <button @click="$emit('click')" class="bg-green-600 text-white px-3 py-1 rounded-md">
        Agregar +
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

  emits :["click"],
  props: {
    id: {
      type: String,
      requred: true,
    },
    name: {
      type: String,
      required: true,
    },
    sku: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
  },
});
</script>
