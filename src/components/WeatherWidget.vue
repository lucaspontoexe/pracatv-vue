<template>
  <div class="weather-widget">
    <div class="top"></div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'weather-widget',
};
</script>

<style lang="scss">
@import "./variables.scss";
@import "./fonts.scss";

.weather-widget {
  position: absolute;
  left: 102px;
  top: $mainPosition;
  width: 232px;

  background-color: $darkblue;
}

.top {
  position: relative;
  height: 70px;
  background-color: lighten($color: $darkblue, $amount: 0.2);
}

.bottom {
  position: relative;
  height: 45px;
  background-color: lighten($color: $darkblue, $amount: 0.3);
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
