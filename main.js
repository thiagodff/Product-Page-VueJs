options = {
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    vuemastery: 'https://www.vuemastery.com/courses/intro-to-vue-js',
    onSale: true,
    inventory: 10,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg',
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg',
      },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    removeToCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
  },
};

var app = new Vue(options);
