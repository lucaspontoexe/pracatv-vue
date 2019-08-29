<template>
  <div class="weather-widget">
    <div class="top" v-bind:class="{animated: visible}">
      <div class="icon">
        <img
          src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/04d.png"
          alt="clouds"
          v-bind:class="{animated: visible}"
        />
      </div>
      <div class="temperature">
        <span class="text" v-bind:class="{animated: visible}">{{ temperature }}°</span>
      </div>
    </div>
    <div class="bottom" v-bind:class="{animated: visible}">
      <span>{{ city }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weather-widget',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    temperature: Number,
    city: String,
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    // tem que criar a classe 'leave' se for pra controlar o tempo da animação
    window.setTimeout(() => {
      this.visible = true;
    }, 3000 * this.index);
  },
};
</script>

<style lang="scss">
@import "./variables.scss";
@import "./fonts.scss";
$opaqueblue: rgb(2, 32, 60);

@keyframes fill-to-right {
  0% {
    clip-path: inset(0% 100% 0% 0%);
  }
  100% {
    clip-path: inset(0% 0% 0% 0%);
  }
}

@keyframes unfill-from-right {
  // try to reverse the original
  0% {
    clip-path: inset(0% 0% 0% 0%);
  }
  100% {
    clip-path: inset(0% 100% 0% 0%);
  }
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translate(-20px);
  }
  100% {
    opacity: 1;
    transform: translate(0px);
  }
}

.weather-widget {
  position: absolute;
  left: 102px;
  top: $mainPosition;
  width: 232px;
}

.top {
  position: relative;
  height: 70px;
  clip-path: inset(0% 100% 0% 0%);

  &.animated {
    animation: fill-to-right 0.6s ease-in-out 0s forwards,
      unfill-from-right 0.4s ease-in-out 5s forwards;
  }

  .icon {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: darken($color: $opaqueblue, $amount: 5);

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
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
      font-family: "Futura Light", "Century Gothic", Arial, Helvetica,
        sans-serif;
      font-size: 54px;
    }
  }
  // TODO: change .icon to the actual icon (img tag)
  .icon > img,
  .text {
    &.animated {
      animation: slide-in 0.8s forwards;
    }
  }
}

.bottom {
  position: relative;
  height: 45px;
  background-color: lighten($color: $opaqueblue, $amount: 8);
  margin: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: inset(0% 100% 0% 0%);
  &.animated {
    animation: fill-to-right 0.6s ease-in-out 0.2s forwards,
      unfill-from-right 0.4s ease-in-out 5.2s forwards;
  }

  span {
    position: absolute;
    line-height: 45px;
    color: $white;
    font-family: "Futura Light", "Century Gothic", Arial, Helvetica, sans-serif;

    &.animated {
      animation: slide-in 0.8s forwards;
      animation-delay: 0.2s;
    }
  }
}
</style>
