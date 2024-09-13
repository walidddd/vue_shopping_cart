<template>
  <div class="discount_section">
    <div class="container">
      <div class="row">
        <form action="/cart/" class="discount-code" method="POST">
          <input
            name="Ecommerce_token"
            type="hidden"
            value="54545454545454545"
          />
          <input
            type="text"
            name="user_added_coupon_code"
            placeholder="Your discount code"
            id="discountCode"
          />
          <button class="apply" id="addDiscount">APPLY</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss">
@import "../../assets/sass/helper/fonts";
@import "../../assets/sass//helper/functions";
@import "../../assets/sass/helper/variables";
@import "../../assets/sass/helper/global";
.discount_section .row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  form {
    display: flex;
    gap: 15px;
  }
  button {
    padding: 12.5px 25px;
    background-color: $color_button;
    color: #fff;
    margin-top: 29px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    transition: 0.3s ease;
    border: 1px solid #fff;
    font-weight: 400;
    margin: 0;
  }
  input {
    width: 100%;
    height: 55px;
    border: 0.5px solid #88888894;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 300;
    padding: 0 22px;
    outline: 0;
  }
}
</style>
