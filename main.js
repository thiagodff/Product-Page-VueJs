Vue.component('details-sock', {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `,
});

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
    cart: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="stock" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-show="onSale">On sale!</p>

        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <details-sock :details="details"></details-sock>

        <ul>
          <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          :key="variant.variantId"
          class="color-box"
          :style="{ backgroundColor: variant.variantColor}"
          @mouseover="updateProduct(index)"
        ></div>

        <button
          v-on:click="addToCart"
          :disabled="inventory==cart.length"
          :class="{ disabledButton: inventory==cart.length }"
        >
          Add to Cart
        </button>

        <button
          v-on:click="removeToCart"
          :disabled="inventory==0"
          :class="{ disabledButton: cart.length==0 }"
        >
          Remove to Cart
        </button>
      </div>
    </div>
  `,
  data() {
    return {
      brand: 'Vue Mastery',
      product: 'Socks',
      selectedVariant: 0,
      vuemastery: 'https://www.vuemastery.com/courses/intro-to-vue-js',
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      onSale: true,
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 3,
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0,
        },
      ],
      sizes: ['P', 'M', 'G', 'GG'],
    };
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    removeToCart() {
      if (this.cart.length > 0) {
        this.$emit(
          'remove-to-cart',
          this.variants[this.selectedVariant].variantId
        );
      }
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inventory() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return '$ 2.99';
    },
  },
});

options = {
  el: '#app',
  data: {
    vuemastery: 'https://www.vuemastery.com/courses/intro-to-vue-js',
    premium: true,
    cart: [],
  },
  methods: {
    addToCart(id) {
      this.cart.push(id);
    },
    removeToCart(id) {
      var pos = this.cart.indexOf(id);
      if (pos != -1) {
        var newCart = this.cart.splice(pos, 1);
      }
    },
  },
};

var app = new Vue(options);
