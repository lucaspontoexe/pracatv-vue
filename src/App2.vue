<template>
<div id="app">
    <clock-widget/>
    <overlay title="crime ocorre" description="nada acontece feijoada"/>
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
};
</script>
