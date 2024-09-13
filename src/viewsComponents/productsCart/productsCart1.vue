<template>
  <!--start cart-->
  <!--start table products cart-->
  <section class="table_products" v-if="statusProducts">
    <div class="container">
      <div class="header-products">
        <div class="row_grid_talbe">
          <div
            class="child"
            v-for="label in headerLables"
            :key="label"
            :class="
              label.type === 'Image'
                ? 'img_header'
                : '' || label.type === 'Subtotal'
                ? 'item_header'
                : ''
            "
          >
            {{ label.name }}
          </div>
        </div>
      </div>
      <div class="products_body">
        <!-- Loop through cartProducts -->
        <div
          v-for="(product, index) in cartProducts"
          :key="index"
          class="child_product"
        >
          <div class="row_grid_talbe">
            <!-- IMAGE -->
            <div class="child_img_product">
              <div class="img_product">
                <!-- Bind product image URL -->
                <img
                  :src="product.cartproducts_product_variant_image"
                  class="blur-up ls-is-cached lazyloaded"
                  alt="product"
                />
              </div>
            </div>

            <!-- NAME -->
            <div class="child_item">
              <div class="item">
                <!-- Bind product name and details -->
                <h3 class="title_product">
                  <a :href="'/product/id/' + product.cartproducts_product_id">{{
                    product.cartproducts_product_name
                  }}</a>
                </h3>
                <p>{{ product.cartproducts_product_model }}</p>
                <p>
                  <span
                    v-for="optionValue in product.cartproducts_variant_option_value"
                    :key="optionValue"
                  >
                    {{ optionValue }}
                  </span>
                </p>
                <p
                  class="error"
                  v-if="
                    product?.cartproducts_status?.warning ||
                    product?.cartproducts_status?.failure
                  "
                >
                  {{ product.cartproducts_status.message }}
                </p>
              </div>
            </div>

            <!-- PRICE -->
            <div class="child_price price_product">
              <!-- Bind product price -->
              <span v-if="product.cartproducts_variant_price?.amount">{{
                product.cartproducts_variant_price?.decimal
              }}</span>
              <span v-else>-</span>
            </div>

            <!-- QUANTITY -->
            <div class="child_quantity">
              <component
                :is="quantityComponentName"
                v-model="product.cartproducts_variant_qty_in_cart"
                :product="product"
                @change-quantity="updateProduct(index)"
              ></component>
            </div>

            <!-- SUBTOTAL -->
            <div class="child_price">
              <!-- Calculate and display subtotal -->

              <span v-if="product.cartproducts_variant_total_price > 0">
                {{ product.cartproducts_variant_total_price?.decimal }}
              </span>
              <span v-else>
                {{ product.cartproducts_variant_total_price?.decimal }}
              </span>
            </div>

            <!--start loading for this product--->
            <container-loading v-show="product.loading">
              <template v-slot:containerLoading>
                <loadingRing
                  :ring-width="'16px'"
                  :ring-height="'16px'"
                  circle-border="5px"
                  circle-border-color="rgb(0 0 0 / 67%)"
                ></loadingRing>
              </template>
            </container-loading>
            <!--form post to cart-->
          </div>
        </div>

        <!-- <div class="remove_products">
          <a>Remove all products</a>
        </div> -->
        <div class="pearnt_loading">
          <!--start loading for this product--->
          <!-- <div class="btn loading2">
            <div class="loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>

  <section class="empty" v-else>
    <p>no products in cart</p>
  </section>
</template>

<script>
import containerLoading from "@/uiComponents/containerLoading.vue";

export default {
  name: "productsCart1",
  emits: ["updateProduct"],
  components: {
    containerLoading,
  },
  props: {
    cartRequestProducts: {
      type: Array,
    },
    statusProducts: {
      type: Boolean,
      default: true,
    },
    quantityComponentName: {
      type: String,
      default: "quantityCounter2",
    },
    headerLables: {
      default: [
        { name: "", type: "Image" },
        { name: "item", type: "Name" },
        { name: "Price", type: "Price" },
        { name: "Quantity", type: "Quantity" },
        { name: "Subtotal", type: "Subtotal" },
      ],
    },
  },
  computed: {
    cartProducts() {
      return this.cartRequestProducts;
    },
  },

  methods: {
    updateProduct(index) {
      this.$emit("updateProduct", index);
    },
  },
  mounted: () => {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/helper/fonts";
@import "../../assets/sass//helper/functions";
@import "../../assets/sass/helper/variables";
@import "../../assets/sass/helper/global";
/*****************start shopping_cart******************************/
.container {
  text-align: left;
}

/************************start table_products*****************************/
.table_products {
  padding: 90px 0;
  padding-bottom: 0;

  .container {
    .row_grid_talbe {
      display: grid;
      grid-template-columns: 4fr 6fr 3fr 5fr 1fr;
      gap: 0px;

      .child {
        padding: 15px 0;
        text-transform: capitalize;
        font-size: 18px;
        color: #888888;
        font-weight: 300;
      }
    }

    /*start product body*/
    .products_body {
      .row_grid_talbe {
        align-items: center;
        width: 100%;
        position: relative;
        &:hover {
          .title_product {
            cursor: pointer;
            color: $active_color;
          }
        }
      }
      .child_product {
        color: $main_color;
        min-height: 221px;
        display: flex;
        /*start child img*/
        .child_img_product {
          .img_product {
            width: 123px;
            height: 123px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
        /*start child_item*/
        .child_item {
          .item {
            width: 70%;
          }
          p {
            margin: 0;
            color: #888888;
            font-weight: 300;
            font-size: 18px;
            margin-bottom: 7px;
            line-height: 1.6;
          }
          .title_product {
            margin-bottom: 7px;
            font-weight: 500;
            font-size: 18px;
            transition: 0.2s ease-in-out color;
            a {
              color: #000000;
              text-decoration: none;
            }
          }
        }
        /***/
        /*start price*/
        .child_price {
          span {
            font-size: 20px;
            font-weight: 400;
          }
        }

        /*******/
        /*start child_quantity*/
        .child_quantity {
          display: flex;
          gap: 18px;
          button {
            background-color: #fff;
            border: none;
            color: #de0000;
            font-weight: 300;
            font-size: 18px;
            text-decoration: underline;
            text-transform: capitalize;
            cursor: pointer;
          }
        }
      }
      /*start remove_products*/
    }
  }
}
/*start media */
@media (max-width: map-get($responsive-screens,"large")) {
  .shopping_cart {
    .container {
      .title_page {
        padding-top: 60px;
      }
      .proceed {
        a {
          width: 330px;
        }
      }
    }
  }

  /*start .table_products*/
  .table_products {
    padding: 70px 0;
    .container .products_body .child_product .child_item .item {
      width: 80%;
    }
  }
}

@media (max-width: 1200px) {
  /*table_products*/
  .table_products {
    .container {
      .row_grid_talbe {
        gap: 20px;
      }
      .header-products {
        .row_grid_talbe {
          .child {
            font-size: 16px;
          }
        }
      }
      .products_body {
        .child_product {
          min-height: 190px;
          .child_img_product .img_product {
            width: 190px;
            height: 190px;
          }
          .child_item {
            .item {
              width: 100%;
              h3 {
                font-size: 16px;
              }
              p {
                font-size: 16px;
              }
            }
          }
          .child_price span {
            font-size: 16px;
          }
          .child_quantity {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            button {
              font-size: 16px;
            }
            .select {
              width: 72px;
              .selected {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  .quantity_input input {
    width: 65px;
  }
  .quantity_input input {
    width: 45px;
  }
}

@media (max-width: map-get($responsive-screens,"miduem")) {
  .table_products .container .row_grid_talbe {
    grid-template-columns: 4fr 5fr 2fr 4fr 1fr;
    gap: 11px;
  }
  .table_products .container {
    .products_body {
      .child_product {
        padding: 20px 0;
        .child_img_product .img_product {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
  .shopping_cart .container {
    .proceed {
      a {
        width: 250px;
      }
    }
  }
}

/*start small*/
@media (max-width: map-get($responsive-screens,"small")) {
  /*start heading page*/
  .shopping_cart {
    .container {
      .title_page {
        .total_order {
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
        }
        .length_items {
          margin-bottom: 25px;
        }
      }
      .proceed {
        padding: 22px 0;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        a {
          width: 100%;
        }
      }
    }
  }

  /*end haeding page*/
  .table_products {
    padding: 61px 0;
    .container {
      .header-products {
        display: none;
        .row_grid_talbe {
          grid-template-columns: 1fr 1fr 1fr;
        }
        .img_header,
        .item_header {
          display: none;
        }
      }
    }
  }

  /*start body product*/
  .table_products .container {
    .row_grid_talbe {
      grid-template-columns: 1fr 2fr;
      grid-column: 2;
      gap: 22px;
      row-gap: 5px;
    }
    .products_body .child_product {
      .child_item .item {
        h3 {
          font-size: 18px;
          font-weight: 500;
        }
        p {
          font-size: 18px;
        }
      }
      .child_price {
        display: none;
      }
      .price_product {
        grid-row: 3;
        display: block;
        grid-column: 2;
        span {
          font-size: 20px;
          font-weight: 400;
        }
      }
      .child_quantity {
        grid-column: 2;
        margin-bottom: 10px;
      }
    }
    .products_body {
      .remove_products {
        text-align: center;
      }
    }
  }
  .table_products .container .products_body .child_product .child_quantity {
    flex-direction: inherit;
    align-items: center;
  }
}

/*strat max width 500px*/
@media (max-width: 500px) {
  .table_products .container .products_body .row_grid_talbe {
    align-items: flex-start;
  }
  .table_products .container .row_grid_talbe {
    gap: 14px;
  }
  .table_products
    .container
    .products_body
    .child_product
    .child_img_product
    .img_product {
    width: 109px;
    height: 109px;
  }
  .table_products .container .products_body .child_product {
    padding: 30px 0;
  }
  .shopping_cart .container .proceed .btn_proceed {
    width: 100%;
  }
}
</style>
