<template>
  <div id="app">
    <clock-widget />
    <overlay :something="overlaydata" />
  </div>
</template>

<style>
#app {
  height: 1080px;
}
</style>

<script>
import ClockWidget from './components/ClockWidget.vue';
import Overlay from './components/Overlay.vue';

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
        title: 'test title',
        description: 'descrição',
      },
    };
  },
  sockets: {
    onmessage: message => console.log(JSON.parse(message.data)),
  },
};
</script>
