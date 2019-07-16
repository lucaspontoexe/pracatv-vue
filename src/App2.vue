<template>
  <div id="app">
    <clock-widget />
    <overlay :something="overlaydata" />
  </div>
</template>

<style lang="scss">
@import "./components/variables.scss";

#app {
  height: 1080px;
}

:root {
  --accent-color: #{$orange};
  --topbar-width: 860px;
}
</style>

<script>
import ClockWidget from './components/ClockWidget.vue';
import Overlay from './components/Overlay.vue';


function setAccentColor(color) {
  const colorList = {
    yellow: 'rgb(250, 184, 20)',
    orange: 'rgb(255, 127, 0)',
    blue: 'rgb(90, 162, 245)',
  };

  let finalColor;

  if (colorList[color] !== undefined) {
    // hacky way to check for color in object without using iteration
    finalColor = colorList[color];
  } else {
    finalColor = color;
  }

  const root = document.documentElement;
  root.style.setProperty('--accent-color', finalColor);
}

export default {
  name: 'app2',
  components: {
    ClockWidget,
    Overlay,
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
