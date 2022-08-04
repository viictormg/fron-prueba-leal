<template>
  <div class="m-4">
    <p class="text-center text-5xl">Tienda barrotes</p>
    <section>
      <h1 class="my-3">Productos</h1>
      <div class="flex">
        <div class="" v-for="item in products" :key="item.id">
          <CardProduct
            @click="store.addCar(item)"
            :name="item.name"
            :sku="item.sky"
            :price="item.price"
          />
        </div>
        <div class="mx-4">
          <!-- <h1 class="text-center text-xl">Carrito</h1> -->
          <div class="flex">
            <span class="text-right mt-2 text-xl">Total: {{ total }}</span>
            <div class="flex flex-row-reverse">
              <button class="bg-yellow-400 ml-7 p-3 rounded-md" @click="buy">
                Finalizar compra
              </button>
            </div>
          </div>
          <ol v-for="item in car" :key="item">
            <li>{{ item.name }}</li>
          </ol>
        </div>
      </div>
    </section>
    <section></section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import CardProduct from "../components/CardProduct.vue";
import { useStoreCar } from "../store/useStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    CardProduct,
  },
  setup() {
    const store = useStoreCar();
    const { car, total } = storeToRefs(store);
    const products = ref<any>();

    onMounted(async () => {
      const response = await fetch("http://127.0.0.1:4001/api/product");
      const data = await response.json();
      products.value = data;
    });

    const buy = async () => {
      const body = {
        idCustomer: "1d1326a8-12d5-11ed-ab31-9828a64b41f5",
        products: car.value.map((p: any) => {
          return {
            id: p.id,
            quantity: 1,
          };
        }),
      };

      const response = await fetch("http://127.0.0.1:4001/api/sale", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const responseJson = await response.json();
      alert(responseJson.message);

      
      store.$dispose
    };

    return { products, CardProduct, store, car, total, buy };
  },
});
</script>
