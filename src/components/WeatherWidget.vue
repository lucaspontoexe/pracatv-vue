<template>
  <div class="weather-widget">
    <weather-item
      v-for="(item, index) in this.currentDisplayingCities"
      v-bind:key="index"
      v-bind="item"
      :index="index"
    />
  </div>
</template>

<script>
import sleep from '../timeout';
import store from '../store';
import EventBus from '../EventBus';
import WeatherItem from './WeatherItem.vue';

export default {
  name: 'weather-widget',
  components: { WeatherItem },
  data() {
    return {
      chunkedCities: this.chunkArray(store.state.cities, 3),
      currentDisplayingCities: store.state.cities,
    };
  },
  async mounted() {
    await store.dispatch('getListFromApi');

    this.reset();
    EventBus.$on('WeatherAnimationsEnded', this.reset);
  },
  methods: {
    async reset() {
      // Seleciona uma parte da array "picotada" pra passar a animação
      // ou recomeça quando tudo já tiver sido apresentado.
      if (this.chunkedCities.length === 0) {
        this.chunkedCities = this.chunkArray(store.state.cities, 3);
      }
      this.currentDisplayingCities = this.chunkedCities.shift();

      await sleep(5000);
      this.$children.forEach(child => child.setupAnimation());
    },
    chunkArray(array, itemsPerChunk) {
      let i; let tempArray;
      const finalArray = [];
      for (i = 0; i < array.length; i += itemsPerChunk) {
        tempArray = array.slice(i, i + itemsPerChunk);
        finalArray.push(tempArray);
      }
      return finalArray;
    },
  },
};
</script>
