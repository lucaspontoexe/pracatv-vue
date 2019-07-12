<template>
  <div class="clock-widget">
    <div class="logo"></div>
    <div class="clock">
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
  background-color: $accent;
  text-align: center;
  margin: 0px;
}

span {
  line-height: 45px;
  font-size: 30px;
  color: $white;
  font-family: "Futura Heavy", "Century Gothic", Arial, Helvetica, sans-serif;
}
</style>

<script>
function addZero(number) {
  return number < 10 ? `0${number}` : number;
}

function getTime() {
  const date = new Date();
  return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
}

export default {
  name: "clock-widget",
  data() {
    return {
      time: "12:34"
    };
  },

  created() {
    setInterval(() => {
      this.time = getTime();
    }, 1000);
  }
};
</script>
