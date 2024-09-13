<template>
  <div :style="ringStyle" class="lds-ring">
    <div :style="circleStyle"></div>
    <div :style="circleStyle"></div>
    <div :style="circleStyle"></div>
    <div :style="circleStyle"></div>
  </div>
</template>

<script>
export default {
  name: "loadingRing",
  props: {
    ringWidth: {
      type: String,
      default: "15px",
    },
    ringHeight: {
      type: String,
      default: "15px",
    },
    circleBorder: {
      type: String,
      default: "5px",
    },
    circleBorderColor: {
      type: String,
      default: "#000000",
    },
  },
  computed: {
    ringStyle() {
      return {
        width: this.ringWidth,
        height: this.ringHeight,
      };
    },
    circleStyle() {
      return {
        width: `calc(${this.ringWidth} + 16px)`, // Adjust width to include border
        height: `calc(${this.ringHeight} + 16px)`, // Adjust height to include border
        border: `${this.circleBorder} solid #fff`,
        borderRadius: "50%",

        borderColor: `${this.circleBorderColor} transparent transparent transparent`,
      };
    },
  },
};
</script>
<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  position: absolute;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
