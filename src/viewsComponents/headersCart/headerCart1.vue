<template>
  <section class="shopping_cart">
    <div class="container">
      <div class="title_page">
        <h2>{{ headingText }}</h2>
        <h4 class="length_items" v-if="lengthOfItems">
          {{ lengthOfItems }} items in shopping cart
        </h4>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    headingText: {
      type: String,
      default: "Shopping Cart",
    },
    lengthOfItems: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/helper/fonts";
@import "../../assets/sass//helper/functions";
@import "../../assets/sass/helper/variables";
@import "../../assets/sass/helper/global";
.shopping_cart {
  .container {
    /*start title_page*/
    .title_page {
      color: $main_color;
      h2 {
        font-weight: 400;
        font-size: 36px;
        margin-bottom: 10px;
        @include res-font-size(36px, 36px, 32px, 36px, 36px);
      }
      .length_items {
        font-size: 18px;
        font-weight: 300;
        margin-bottom: 47px;
      }
    }
    ///start proceed
    .proceed {
      display: flex;
      justify-content: space-between;
      padding: 13px 0;
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 300;
      }
      .privacy {
        color: $main_color;
      }
      .btn_proceed {
        @include makeButton(0px, 18px, $color_button, #fff, "default");
        font-size: 18px;
        width: 381px;
        text-align: center;
        padding: 15px 0;
        transition: 0.3s ease-in-out background;

        &:hover {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
}
</style>
