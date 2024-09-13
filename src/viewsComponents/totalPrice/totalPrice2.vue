<template>
  <div class="container">
    <div class="order_details">
      <ul>
        <li>
          <span>Order total: </span>
          <span class="total" v-if="totalPrice">{{ totalPrice.decimal }}</span>
          <span class="total" v-else>0</span>
        </li>
      </ul>
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

.order_details {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  ul {
    list-style: none;
    font-size: 18px;
    text-transform: capitalize;
  }
}
</style>
