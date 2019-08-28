<template>
  <div class="weather-widget">
    <div class="top">
      <div class="icon">

      </div>
      <div class="temperature">
        <span class="text">22°</span>
      </div>
    </div>
    <div class="bottom">
      <span>Qualquer cidade</span>
    </div>
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
$opaqueblue: rgb(2, 32, 60);

.weather-widget {
  position: absolute;
  left: 102px;
  top: $mainPosition;
  width: 232px;

  // background-color: $opaqueblue;
}

.top {
  position: relative;
  height: 70px;
  // clip-path: inset(0% 50% 0% 0%);

  .icon {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: darken($color: $opaqueblue, $amount: 5);
  }

  .temperature {
    position: absolute;
    left: 50%;
    top: 0%;
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $opaqueblue;

    .text {
      color: $white;
      font-family: "Futura Light", "Century Gothic", Arial, Helvetica, sans-serif;;
      font-size: 54px;
    }
  }
}

.bottom {
  position: relative;
  height: 45px;
  background-color: lighten($color: $opaqueblue, $amount: 8);
  text-align: center;
  margin: 0px;

  span {
    line-height: 45px;
    color: $white;
    font-family: "Futura Light", "Century Gothic", Arial, Helvetica, sans-serif;
  }
}
</style>
