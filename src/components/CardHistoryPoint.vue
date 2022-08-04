<template>
  <div class="w-full md:w-auto">
    <div class="rounded overflow-hidden shadow-xl">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Puntos: {{points}}</div>
        <p class="text-gray-700 text-base">
          valor compra: {{amount}} 
        </p>
        <p v-if="add">Ganados</p>
        <p v-else>Redimidos</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        
        <i class="fa-solid fa-cart-circle-plus"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    amount: {
      type: String,
      required: true,
    },
    points : {
      type : Number,
      required : true
    },
    add : {
      type: Boolean,
      required: true
    }
  },
});
</script>
