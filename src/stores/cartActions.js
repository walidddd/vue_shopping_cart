import { defineStore } from 'pinia'
import dummyData from "@/dataJson/dummyData";
import { getDataFromPlush, getEcommerce_token, buildCartRequest, getDataCartObject } from "@/functions/helpers.js";
import axios from 'axios'


export const useCartActions = defineStore('cartActions', {
  state: () => {
    return {
      authenticityToken: "",
      href: window.location.href,
      cart: {},
      alerts: []
    }
  },

  actions: {
    // Start actions
    async updateCart(index) {
      try {
        this.cart.cartrequest_products[index].loading = true;
        const productsFormData = buildCartRequest(this.cart.cartrequest_products, this.authenticityToken);
        const { data } = await axios.post(this.href, productsFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        const newCartData = getDataCartObject(data);
        console.log(newCartData)
        this.conditions(newCartData);

        this.updateCartIconTotalQtyOutApp();
        this.updateCartIconTotalPriceOutApp();
      } catch (error) {
        console.log(error)
      }

    },

    updateCartIconTotalQtyOutApp() {
      if (this.cart && this.cart.cartrequest_total_qty) {
        const qtyElement = document.querySelectorAll(".cartrequest_total_qty");
        if (qtyElement.length) {
          qtyElement.forEach(el => {
            el.innerText = this.cart.cartrequest_total_qty
          })
        }
      }
    },

    updateCartIconTotalPriceOutApp() {
      if (this.cart && this.cart.cartrequest_total_qty) {
        const qtyElement = document.querySelectorAll(".cartrequest_total_price");
        if (qtyElement.length) {
          qtyElement.forEach(el => {
            el.innerText = this.cart.cartrequest_total_price.decimal
          })
        }
      }
    },

    // Conditions to this request make any error or no
    conditions(newCartData) {
      if (newCartData?.statusError) {
        this.cart = {
          ...newCartData,
          status: true
        };
        this.pushAlert({
          type: 'error',
          message: newCartData.errors.message
        })
      } else if (newCartData?.emptyCart) {
        this.cart = {
          status: false
        }
      } else {
        this.cart = {
          ...newCartData,
          status: true
        }
      }

      this.addLoadingKays();
    },

    // Start Check on errors
    pushAlert(alertMessage) {
      this.alerts.push(alertMessage);
      setTimeout(() => {
        this.alerts = [];
      }, 10000)
    },

    // This method mount when first load app 
    runCart() {
      const dynamicDataCartPage = getDataFromPlush("cart"),
        authenticityToken = getEcommerce_token();
      if (authenticityToken)
        this.authenticityToken = authenticityToken
      if (dynamicDataCartPage) {
        this.cart = {
          ...dynamicDataCartPage,
          status: true,

        };
        this.addLoadingKays()
      }
      else if (process.env.VUE_APP_TYPE_BUILD === "STOREFRONT") {
        this.cart = {
          status: false,

        };
      } else if (process.env.VUE_APP_TYPE_BUILD === "DEV") {
        this.cart = {
          ...dummyData,
          status: true
        };
        this.addLoadingKays()

      }
    },

    // To add loading key to products
    addLoadingKays() {
      if (this.cart.cartrequest_products) {
        this.cart.cartrequest_products = this.cart.cartrequest_products.map((item) => ({
          ...item,
          loading: false,
        }));
      }
    }

  }
})