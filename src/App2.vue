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

console.log(this);

function setAccentColor(color) {
  const root = document.documentElement;
  root.style.setProperty('--accent-color', color);
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
          // lembrando que tem que ver o caso do isRunning
          Object.assign(this.$data.overlaydata, object.event_data);
          break;

        case 'color':
          setAccentColor(object.event_data.accent_color);
          break;

        default:
          console.log(object);
          break;
      }
    },
  },
};
</script>
