<template>
  <div class="m-4">
    <p class="text-center text-5xl">Mis puntos</p>
    <section class="flex my-5">
      <div class="flex-1">
        <p class="text-center text-2xl">Historial puntos</p>
        <div v-for="item in history" :key="item.amount">
          <CardHistoryPoint :amount="item.amount" />
        </div>
      </div>
      <div class="flex-1">
        <p class="text-center text-2xl">Premios</p>
        <div v-for="item in history" :key="item.amount">
          <CardAward :name="item.amount" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import CardHistoryPoint from "../components/CardHistoryPoint.vue";
import CardAward from "../components/CardAward.vue";

export default defineComponent({
  components: {
    CardHistoryPoint,
    CardAward,
  },
  setup() {
    const history = reactive<any[]>([{ amount: "asfdfd" }]);
    const awards = reactive<any[]>([{ id: "asdfsdf" }, { id: "asdfddd" }]);

    return {
      CardHistoryPoint,
      CardAward,
      history,
      awards,
    };
  },
});
</script>
