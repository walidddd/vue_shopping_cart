<template>
  <div class="quantity_input">
    <button class="controls minus" type="button" @click="minus()">-</button>
    <div class="form-group">
      <input
        class="child_quantity_input form-control"
        name="CartAdd[0].CartAddVariantAddQty"
        type="number"
        :value="modelValue"
        @change="changeMethod"
        min="1"
      />
    </div>
    <button class="controls plus" type="button" @click="plus()">+</button>
  </div>
  <button
    class="remove_from_cart"
    type="button"
    @click="deleteProduct(product, index)"
  >
    remove
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  product: Object,
});
const emit = defineEmits(["update:modelValue", "changeQuantity"]);

const plus = () => {
  emit("update:modelValue", props.modelValue + 1); // Emit the updated value to the parent
  emit("changeQuantity", { ...props.product, newQ: props.modelValue + 1 });
};
const minus = () => {
  if (props.modelValue > 1) {
    emit("update:modelValue", props.modelValue - 1); // Emit the updated value to the parent
    emit("changeQuantity", { ...props.product, newQ: props.modelValue - 1 });
  }
};

const changeMethod = (e) => {
  emit("update:modelValue", e.target.value); // Emit the updated value to the parent
  emit("changeQuantity", { ...props.product, newQ: e.target.value });
};

const deleteProduct = () => {
  emit("update:modelValue", 0); // Emit the updated value to the parent
  emit("changeQuantity", { ...props.product, newQ: 0 });
};
</script>

<style lang="scss">
.quantity_input {
  display: inline-flex;
  border: 1px solid #000;
  height: 46px;
  border: 1px solid #00000021;
  button {
    display: inline-flex;
    width: 35px;
    font-size: 21px;
    justify-content: center;
    align-items: center;
    border: none;
    color: #1e1e1e;
    padding: 6px 0;
    background-color: #efefef;
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  input {
    text-align: center;
    height: 100%;
    display: inline-flex;
    width: 100px;
    display: flex;
    border: none;
    background-color: #efefef;
    font-size: 18px;
    color: #1e1e1e;
    border: 1px solid #00000021;
    border-top: 0;
    border-bottom: 0;
    outline: 0;
    width: 75px;
  }
}
</style>
