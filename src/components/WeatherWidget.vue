<template>
  <div class="weather-widget">
      <weather-item
        v-for="(item, index) in this.cities"
        v-on:weatherAnimationsEnded="reset"
        v-bind:key="index"
        v-bind="item"
        :index="index"
        />
  </div>
</template>

<script>
import sleep from '../timeout';
import store from '../store';
import WeatherItem from './WeatherItem.vue';

export default {
  name: 'weather-widget',
  components: { WeatherItem },
  mounted() {
    store.commit('change', 'eh fogo né');
    console.log(store.state.test);
    this.reset();
  },
  data() {
    return {
      cities: store.state.cities,
    };
  },
  methods: {
    async reset() {
      await sleep(5000);
      this.$children.forEach(child => child.setupAnimation());
    },
  },
};
</script>
