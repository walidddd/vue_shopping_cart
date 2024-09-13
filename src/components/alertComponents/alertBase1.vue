<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  dataAlert: {
    default: {
      typeAlert: "success",
      message: "dasds ",
    },
  },
  showAlert: { default: false },
});

// Methods
defineEmits(["update:showAlert"]);
</script>
<template>
  <div class="alert-mes" :class="dataAlert.typeAlert" v-if="showAlert">
    <div class="content">
      <div class="content-status">
        <div class="icon" v-if="dataAlert.typeAlert === 'success'">
          <!-- <img src="@/assets/images/icons/success.svg" alt="" srcset="" /> -->
        </div>
        <div class="icon" v-else-if="dataAlert.typeAlert === 'error'">
          <img src="" alt="" srcset="" />
        </div>
        <div class="mes">
          <h4 v-if="dataAlert.typeAlert === 'success'">A success toast!</h4>
          <h4 v-else>A warning toast</h4>
          <p>{{ dataAlert.message }}</p>
        </div>
      </div>
      <div class="close">
        <!-- <button @click="$emit('update:showAlert', false)">
          <svg
            width="15"
            height="15"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2.06641"
              y="0.380859"
              width="46"
              height="3"
              rx="1.5"
              transform="rotate(43.5096 2.06641 0.380859)"
              fill="#202223"
            />
            <rect
              x="0.328125"
              y="33.2441"
              width="46"
              height="3"
              rx="1.5"
              transform="rotate(-46.2793 0.328125 33.2441)"
              fill="#202223"
            />
          </svg>
        </button> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.alert-mes {
  padding: 16px 23px;
  width: 315px;
  border: 1px solid #000;
  border-radius: 5px;
  position: fixed;
  bottom: 40px;
  left: 40px;
  background-color: #fff;
  &.error {
    background-color: #f39191;
  }
  .content {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    .content-status {
      display: flex;
      justify-content: space-between;
      gap: 14px;
    }
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.4;
  }

  // Close
  .close {
    display: flex;
    align-content: center;
    button {
      border: none;
      background-color: #ffffff00;
      width: 15px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
  }

  &.success {
    border-color: #07d09e;
    background-color: #e7fff9;
  }
  &.error {
    border-color: #e3d0ccd9;
    background-color: #ffdcd4cf;
  }
}
</style>
