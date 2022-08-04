<template>
  <div class="m-4">
    <p class="text-center text-5xl">Licores el 100-</p>
    <section>
      <h1 class="my-3">Productos</h1>
      <div v-for="item in products" :key="item.title" class="border-slate-900">
        <CardProduct
          :title="item.title"
          :description="item.description"
          :price="item.price"
        />
      </div>
    </section>
    <section></section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CardProduct from "../components/CardProduct.vue";

export default defineComponent({
  components: {
    CardProduct,
  },
  setup() {
    const products = ref<any>([
      { title: "pollo", description: "lorem", price: 3000 },
      {
        title: "perro",
        price: 3000,
        description:
          " ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam labore ipsum quibusdam quia? Animi saepe ",
      },
      {
        title: "gato",
        price: 3000,
        description:
          "ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam labore ipsum",
      },
      {
        title: "gato",
        price: 3000,
        description:
          "ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam labore ipsum dd",
      },
      {
        title: "gato",
        price: 3000,
        description:
          " ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quisquam labore ipsum",
      },
    ]);

    onMounted(async () => {
      const response = await window.fetch("https://ila.aveonline.co/api/v1/city?page=1&per_page=2", {
        mode: "no-cors",
      })
      .then(res => res.json())


      console.log(response);
    });

    return { products, CardProduct };
  },
});
</script>
