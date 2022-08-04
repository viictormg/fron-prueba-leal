<template>
  <div class="m-4">
    <p class="text-center text-5xl">Mis puntos</p>
    <section>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ name }}</div>
          <p>Puntos actuales: {{ currentPoints }}</p>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </section>

    <section class="flex my-5">
      <div class="flex-1">
        <p class="text-center text-2xl">Historial puntos</p>
        <div v-for="item in history" :key="item.amount">
          <CardHistoryPoint
            :add="item.add"
            :points="item.numerPoints"
            :amount="item.amount"
          />
        </div>
      </div>
      <div class="flex-1">
        <p class="text-center text-2xl">Premios</p>
        <div v-for="item in awards" :key="item.id">
          <CardAward
            @click="redeem(item.id)"
            :name="item.name"
            :points="item.points"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import CardHistoryPoint from "../components/CardHistoryPoint.vue";
import CardAward from "../components/CardAward.vue";

export default defineComponent({
  components: {
    CardHistoryPoint,
    CardAward,
  },
  setup() {
    const history = ref<any>();
    const awards = ref<any>();
    const currentPoints = ref("");
    const name = ref("");

    const getAwards = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/awards");
      const data = await response.json();
      awards.value = data;
    };

    const getHistoryPoints = async () => {
      const response = await fetch(" http://127.0.0.1:8000/api/historyPoints");
      const data = await response.json();
      history.value = data.poins;

      name.value = data.customer.name;
      currentPoints.value = data.customer.currentPoints;
    };

    const redeem = async (idAward: string) => {
      const body = {
        idCustomer: "1d1326a8-12d5-11ed-ab31-9828a64b41f5",
        idAward: idAward,
      };

      const response = await fetch(" http://127.0.0.1:8000/api/redeem", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const responseJson = await response.json();
      alert(responseJson.message);
    };

    onMounted(() => {
      getAwards();
      getHistoryPoints();
    });

    return {
      CardHistoryPoint,
      CardAward,
      history,
      awards,
      currentPoints,
      name,
      redeem,
    };
  },
});
</script>
