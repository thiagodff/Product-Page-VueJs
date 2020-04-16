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
      },
      {
        variantId: 2235,
        variantColor: 'blue',
      },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
  },
};

var app = new Vue(options);
