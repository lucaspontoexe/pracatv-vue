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
import WeatherItem from './WeatherItem.vue';

export default {
  name: 'weather-widget',
  components: { WeatherItem },
  data() {
    return {
      cities: [
        {
          name: 'Qualquer Cidade',
          temperature: 20,
        },
        {
          name: 'Tangamandápio',
          temperature: 30,
        },
        {
          name: 'Acapulco',
          temperature: 15,
        },
      ],
    };
  },
};
</script>
