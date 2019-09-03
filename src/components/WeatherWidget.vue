<template>
  <div class="weather-widget">
    <weather-item
      v-for="(item, index) in this.cities"
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
      dammit: this.chunkArray(store.state.cities, 3),
      cities: store.state.cities,
    };
  },
  mounted() {
    // store.commit('change', 'eh fogo né');
    // console.log(store.state.test);

    this.reset();
  },
  methods: {
    async reset() {
      // goto next chunk
      await sleep(5000);
      this.$children.forEach(child => child.setupAnimation());
    },
    chunkArray(array, itemsPerChunk) {
      // bendito seja o stack overflow.txt
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
