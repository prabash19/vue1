import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.store([
    state:{
    Products: [
        { name: "apple", price: "300" },
        { name: "orange", price: "400" },
        { name: "mango", price: "500" },
        { name: "kiwi", price: "600" },
      ]
    }
]);
