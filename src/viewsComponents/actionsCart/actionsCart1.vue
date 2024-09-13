<template>
  <section class="shopping_cart">
    <div class="container">
      <div class="proceed">
        <p>
          By proceeding to checkout you're agreeing to our
          <a href="http://" class="privacy">Privacy Policy</a>
        </p>
        <a href="/shipping/" class="btn_proceed">Proceed to checkout</a>
      </div>
    </div>
  </section>
</template>
<script setup></script>

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
      /*start total_order*/
      .total_order {
        padding-bottom: 26px;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        justify-content: space-between;
        color: $main_color;
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
