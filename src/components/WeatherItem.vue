<template>
  <div class="weather-item">
    <div class="top"
      v-bind:class="{animated: runningAnimation}"
      v-on:animationend="onAnimationEnd($event)"
      >
      <div class="icon">
        <img
          :src="`https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/${ icon }.png`"
          alt="clouds"
          v-bind:class="{animated: runningAnimation}"
        />
      </div>
      <div class="temperature">
        <span class="text" v-bind:class="{animated: runningAnimation}">{{ temperature }}°</span>
      </div>
    </div>
    <div class="bottom" v-bind:class="{animated: runningAnimation}">
      <span v-bind:class="{animated: runningAnimation}">{{ name }}</span>
    </div>
  </div>
</template>

<script>
import sleep from '../timeout';
import store from '../store';

export default {
  name: 'weather-item',
  props: {
    index: {
      type: Number,
      default: 1,
    },
    temperature: Number,
    name: String,
    icon: String,
  },
  data() {
    return {
      runningAnimation: false,
    };
  },
  methods: {
    async setupAnimation() {
      if (this.index === 0) console.log('WeatherAnimationsBegan');

      // gambiarra: CSS não oferece um jeito de reiniciar uma animação.
      // a Web Animations API não tá ajudando
      this.runningAnimation = false;
      await sleep(5000 * this.index);
      this.runningAnimation = true;
    },

    onAnimationEnd(event) {
      // unfill-from-right é a última animação do item
      if (event.animationName === 'unfill-from-right') {
        // Caso esse seja o último item da lista, reinicia a animação.
        // Permanece desse jeito até eu entender como os eventos em Vue funcionam.
        if ((store.state.cities.length - 1) === this.index) this.$parent.reset();
      }
    },
  },
};
</script>

<style lang="scss">
@import "./variables.scss";
@import "./fonts.scss";
$opaqueblue: rgb(2, 32, 60);
$screenTime: 5s;

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

.weather-item {
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
      unfill-from-right 0.4s ease-in-out ($screenTime + 1.2s) forwards;
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
      unfill-from-right 0.4s ease-in-out ($screenTime + 1s) forwards;
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
