const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    reduce(num) {
      this.counter -= num;
    },
    setName(lastName, e) {
      this.name = e.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted!');
    }
  },
});

app.mount('#events');
