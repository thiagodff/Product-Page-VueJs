options = {
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    selectedVariant: 0,
    vuemastery: 'https://www.vuemastery.com/courses/intro-to-vue-js',
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
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
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    removeToCart() {
      if (this.cart > 0) {
        this.cart -= 1;
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
  },
};

var app = new Vue(options);
