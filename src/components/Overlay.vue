<template>
  <div class="overlay">
    <div class="imaginary-strip">
      <span>{{ something.title }}</span>
    </div>
    <div class="top-strip" v-bind:class="[something.isRunning ? 'enter' : 'leave']">
      <span class="heading">{{ something.title }}</span>
    </div>
    <div class="thing-for-animation" v-bind:class="[something.isRunning ? 'enter' : 'leave']"></div>
    <div class="middle-strip" v-bind:class="[something.isRunning ? 'enter' : 'leave']"></div>
    <div class="bottom-strip" v-bind:class="[something.isRunning ? 'enter' : 'leave']">
      <span class="description">{{ something.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overlay',
  props: ['something'],

  updated() {
    const element = document.querySelector('.overlay');
    const imaginaryStrip = document.querySelector('.imaginary-strip');
    element.style.setProperty('--topbar-width', `${imaginaryStrip.offsetWidth}px`);
  },

};
</script>


<style lang="scss">
@import "./variables.scss";
@import "./fonts.scss";

@keyframes smallthing {
    0% {
        width: 0px;
        left: 0px;
    }

    25% {
        width: 12px;
        left: 0px;
    }

    50% {
        width: 12px;
        left: var(--topbar-width);
    }

    100% {
        width: 0px;
        left: var(--topbar-width);
    }
}

@keyframes undo-smallthing {
    100% {
        width: 0px;
        left: 0px;
    }

    66% {
        width: 12px;
        left: 0px;
    }

    33% {
        width: 12px;
        left: var(--topbar-width);
    }

    0% {
        width: 0px;
        left: var(--topbar-width);
    }
}


@keyframes fill-topbar {
    0% {
        width: 0px;
    }

    100% {
        width: var(--topbar-width);
    }
}

@keyframes unfill-topbar {
    0% {
        width: var(--topbar-width);
    }

    100% {
        width: 0px;
    }
}

@keyframes fill-to-right {
    0% {
        width: 0px;
    }

    100% {
        width: 1310px;
    }
}

@keyframes unfill-from-right {
    0% {
        width: 1310px;
    }

    100% {
        width: 0px;
    }
}

.overlay {
  --topbar-width: 860px;
  position: absolute;
  top: $mainPosition;
  left: 340px;

  $topbarHeight: 66px;

  /*  TEXT  */

  span {
    // General rules and fallbacks for texts in overlays
    margin-left: 20px;
    margin-right: 20px;
    white-space: nowrap;
    font-family: "Century Gothic", Arial, Helvetica, sans-serif;
  }

  .heading {
    line-height: $topbarHeight;
    font-size: 36pt;
    font-family: "Futura Heavy";
    text-transform: uppercase;
    color: $white;
  }

  .description {
    position: absolute;
    padding-top: 3px;
    line-height: 42px;
    font-size: 24pt;
    font-family: "Futura Light";
    color: lighten($color: $darkblue, $amount: 0.5);
  }

  /*  STRIPS and everything else  */

  .top-strip {
    display: inline-block;
    position: relative;
    overflow: hidden;
    height: $topbarHeight;

    background-color: $darkblue;

    &.enter {
      animation: fill-topbar 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: both;
    }

    &.leave {
      animation: unfill-topbar 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: both;
    }
  }

  .middle-strip {
    position: absolute;
    top: $topbarHeight;
    height: 6px;
    width: 1310px;
    z-index: 1;

    background-color: $accent;

    &.enter {
      animation: fill-to-right 0.4s;
      animation-delay: 0.25s;
      animation-fill-mode: both;
    }

    &.leave {
      animation: unfill-from-right 0.4s;
      animation-delay: 0.8s;
      animation-fill-mode: both;
    }
  }

  .bottom-strip {
    position: relative;
    overflow: hidden;
    height: 45px;
    width: 1310px;

    background-color: $white;

    &.enter {
      animation: fill-to-right 1s;
      animation-delay: 1s;
      animation-fill-mode: both;
    }

    &.leave {
      animation: unfill-from-right 0.4s;
      animation-delay: 0.6s;
      animation-fill-mode: both;
    }
  }

  .thing-for-animation {
    position: absolute;
    height: $topbarHeight;
    width: 12px;
    top: 0px;
    left: 860px;
    background-color: $accent;

    &.enter {
      animation: smallthing 2s;
      animation-fill-mode: both;
    }

    &.leave {
      animation: undo-smallthing 1.51s; //hack
      animation-fill-mode: both;
    }
  }
}

.imaginary-strip {
  display: inline-block;
  position: absolute;
  overflow: hidden;
  bottom: 200px;
  height: 66px;
  visibility: hidden;

  span {
    margin: 20px;
    white-space: nowrap;
    line-height: 66px;
    font-size: 36pt;
    font-family: "Futura Heavy", "Century Gothic", sans-serif;
    text-transform: uppercase;
    color: $white;
  }
}
</style>
