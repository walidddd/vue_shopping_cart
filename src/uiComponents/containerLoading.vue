<template>
  <div class="container-loading">
    <slot name="containerLoading"></slot>
  </div>
</template>

<style lang="scss">
.container-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff87;
}
</style>
