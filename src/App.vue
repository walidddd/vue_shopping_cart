<template>
  <section class="cart_app" v-if="storeCartActions.cart.status">
    <component
      v-for="component in components"
      :is="component.componentName"
      :key="component.componentName"
      :total-price="
        component.typeComponent === 'totalPrice'
          ? storeCartActions.cart.cartrequest_total_price
          : null
      "
      :headingText="
        component.typeComponent === 'headerCart' ? component.headingText : null
      "
      :length-of-items="
        component.typeComponent === 'headerCart'
          ? storeCartActions.cart.cartrequest_total_qty
          : null
      "
      :cart-request-products="
        component.typeComponent === 'products'
          ? storeCartActions.cart.cartrequest_products
          : null
      "
      :status-products="
        component.typeComponent === 'products'
          ? storeCartActions.cart.status
          : null
      "
      :quantity-component-name="
        component.typeComponent === 'products'
          ? component.quantityComponent
          : null
      "
      :data-alert="
        component.typeComponent === 'alert' ? storeCartActions.alerts[0] : null
      "
      :showAlert="storeCartActions.alerts.length"
      @update-product="updateProductMethod"
    />
  </section>
  <section v-else>
    <div class="cart-empty">
      <h3>no products in cart</h3>
    </div>
  </section>
</template>

<script>
const script = document.querySelector("script[name='vue_shopping_cart']");
import { onMounted, ref } from "vue";
import { getDataFromPlush, loadCssFile } from "@/functions/helpers.js";
import { useCartActions } from "@/stores/cartActions.js";

export default {
  name: "App",
  setup() {
    const storeCartActions = useCartActions();
    storeCartActions.runCart();

    const components = ref([
      {
        componentName: "headerCart1",
        headingText: "Shopping Cart",
        typeComponent: "headerCart",
      },
      {
        componentName: "productsCart1",
        typeComponent: "products",
        quantityComponent: "quantityCounter2",
      },
      { componentName: "totalPrice2", typeComponent: "totalPrice" },
      { componentName: "actionsCart1" },
      { componentName: "alertBase1", typeComponent: "alert" },
    ]);

    if (script) {
      components.value = getDataFromPlush("componentsNames");
    }

    loadCssFile();

    onMounted(() => {
      console.log(storeCartActions.cart);
    });
    return {
      components,
      storeCartActions,
    };
  },

  methods: {
    updateProductMethod(index) {
      this.storeCartActions.updateCart(index);
    },
  },
};
</script>

<style lang="scss">
.cart_app {
  padding: 50px 0;
}
</style>
