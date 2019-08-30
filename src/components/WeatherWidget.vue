<template>
  <div class="weather-widget">
      <weather-item
        v-for="(item, index) in this.cities"
        v-bind:key="index"
        v-bind="item"
        :index="index + 1"
        />
  </div>
</template>

<script>
import store from '../store';
import WeatherItem from './WeatherItem.vue';

export default {
  name: 'weather-widget',
  components: { WeatherItem },
  mounted() {
    store.commit('change', 'eh fogo né');
    console.log(store.state.test);
  },
  data() {
    return {
      cities: store.state.cities,
    };
  },
  methods: {
    reset() {
      this.$children.forEach(child => child.setupAnimation());
    },
  },
};
</script>
