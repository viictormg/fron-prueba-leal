import { defineStore } from "pinia";

// export const useStore = defineStore("store", {
//   state: () => ({ count: 0 }),
//   getters: {
//     double: state => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

export const useStoreCar = defineStore("car", {
  state: () => ({ car: <any>[], total: 0 }),
  getters: {},
  actions: {
    addCar(product: any) {
      this.car.push(product);
      this.total += product.price
    },
  },
});
