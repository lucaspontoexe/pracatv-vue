<template>
  <div id="app">
    <clock-widget />
    <overlay :something="overlaytest" />
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
      overlaytest: {
        isRunning: false,
        title: 'test title',
        description: 'descrição',
      },
    };
  },
};
</script>
