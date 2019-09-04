<template>
  <div class="weather-widget">
    <weather-item
      v-for="(item, index) in this.currentDisplayingCities"
      @weatherAnimationsEnded="reset"
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
  data() {
    return {
      chunkedCities: this.chunkArray(store.state.cities, 3),
      currentDisplayingcities: store.state.cities,
    };
  },
  mounted() {
    this.reset();
  },
  methods: {
    async reset() {
      if (this.chunkedCities.length === 0) {
        this.chunkedCities = this.chunkArray(store.state.cities, 3);
      }
      this.currentDisplayingCities = this.chunkedCities.shift();

      await sleep(5000);
      this.$children.forEach(child => child.setupAnimation());
    },
    chunkArray(array, itemsPerChunk) {
      let i; let temparray;
      const finalArray = [];
      for (i = 0; i < array.length; i += itemsPerChunk) {
        temparray = array.slice(i, i + itemsPerChunk);
        finalArray.push(temparray);
      }
      return finalArray;
    },
  },
};
</script>
