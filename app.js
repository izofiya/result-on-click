const app = Vue.createApp({
    data() {
      return {
        counter: 0,
      };
    },
    watch: {
      counter() {
          const that = this;
          setTimeout(function() {
            that.counter = 0;
          }, 5000);
      }
    },
    computed: {
      result() {
        if(this.counter < 37) {
          return "Not there yet" + '-' + this.counter;
        }
        if(this.counter > 37) {
          return "Too much!" + '-' + this.counter
        }
        return this.counter;
      }
    },
    methods: {
      add(num) {
        this.counter = this.counter + num;
      },
    }
  });
  
  app.mount('#assignment');