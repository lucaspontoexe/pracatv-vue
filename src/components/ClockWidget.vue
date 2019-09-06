<template>
  <div class="clock-widget">
    <div class="logo"  v-bind:class="{translated: translateClock}"></div>
    <div class="clock" v-bind:class="{translated: translateClock}">
      <span>{{ time }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import "./variables.scss";
@import "./fonts.scss";

.clock-widget {
  position: absolute;
  left: 102px;
  top: $mainPosition;
  width: 232px;

  background-color: $white;
}

.logo {
  position: relative;
  height: 70px;
  background-color: $white;
}

.clock {
  position: relative;
  height: 45px;
  margin: 0px;
  background-color: $accent;

  transition: height 0.5s ease-out;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  &.translated {
    height: 90px;
  }

  span {
    line-height: 45px;
    font-size: 30px;
    color: $white;
    font-family: "Futura Heavy", "Century Gothic", Arial, Helvetica, sans-serif;
  }
}
</style>

<script>
import EventBus from '../EventBus';

function addZero(number) {
  return number < 10 ? `0${number}` : number;
}

function getTime() {
  const date = new Date();
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}

export default {
  name: 'clock-widget',
  data() {
    return {
      time: '12:34',
      translateClock: false,
    };
  },

  created() {
    setInterval(() => {
      this.time = getTime();
    }, 1000);

    EventBus.$on('WeatherAnimationsBegan', () => { this.translateClock = true; });
    EventBus.$on('WeatherAnimationsEnding', () => { this.translateClock = false; });
  },
};
</script>
