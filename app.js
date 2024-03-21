const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(lastName, e) {
      this.name = e.target.value + ' ' + lastName;
    },
  },
});

app.mount('#events');
