<template>
  <div id="app">
    <clock-widget />
    <weather-widget />
    <overlay :something="overlaydata" />
  </div>
</template>

<style lang="scss">
@import "./components/variables.scss";

#app {
  height: 1080px;
  background-color: green;
}

:root {
  --accent-color: #{$orange};
}
</style>

<script>
import ClockWidget from './components/ClockWidget.vue';
import Overlay from './components/Overlay.vue';
import WeatherWidget from './components/WeatherWidget.vue';

function setAccentColor(color) {
  const colorList = {
    yellow: 'rgb(250, 184, 20)',
    orange: 'rgb(255, 127, 0)',
    blue: 'rgb(90, 162, 245)',
  };

  const finalColor = colorList[color] || color;
  const root = document.documentElement;
  root.style.setProperty('--accent-color', finalColor);
}

export default {
  name: 'app',
  components: {
    ClockWidget,
    Overlay,
    WeatherWidget,
  },
  data() {
    return {
      overlaydata: {
        isRunning: false,
        title: 'default title',
        description: 'descrição',
      },
    };
  },
  sockets: {
    onmessage: function onmessage(message) {
      const object = JSON.parse(message.data);

      switch (object.event) {
        case 'overlay':
          // this is SPARTA: https://michaelnthiessen.com/this-is-undefined
          Object.assign(this.$data.overlaydata, object.event_data);
          break;

        case 'color':
          setAccentColor(object.event_data.accent_color);
          break;

        default:
          // eslint-disable-next-line
          console.log(object);
          break;
      }
    },
  },
};
</script>
