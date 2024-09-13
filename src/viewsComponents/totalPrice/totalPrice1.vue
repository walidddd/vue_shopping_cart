<template>
  <div class="container">
    <div class="total_order">
      <h4>Total for this order incl. VAT</h4>
      <span class="total" v-if="totalPrice">{{ totalPrice.decimal }}</span>
      <span class="total" v-else>0</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    totalPrice: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
/*start total_order*/
.total_order {
  padding-bottom: 26px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    font-size: 18px;

    font-weight: 500;
  }
  .total {
    font-size: 38px;
    font-weight: 400;
  }
}
</style>
