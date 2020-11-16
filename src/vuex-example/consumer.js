import { onMounted, computed } from "vue";

import store from "../store";

export default {
  // Using Vuex in COmposition API
  setup() {
    // Selector
    const countries = computed(() => store.state.countries);

    // Lifecycle-triggered action/mutation
    onMounted(() => store.dispatch("load"));

    // User-triggered action/mutation
    const removeItem = (item) => store.commit("removeItem", item);

    // Exposing public data from Composition API
    return { countries, removeItem };
  },
};
