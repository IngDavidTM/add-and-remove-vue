const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      startValue: 0,
      name: '',
      confirmedName: '',
      darkMode: false,
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
    applyStartValue() {
      this.counter = this.startValue;
    },
    setName(lastName, e) {
      this.name = e.target.value + ' ' + lastName;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark', this.darkMode);
    },
    submitForm() {
      alert('Submitted!');
    }
  },
  mounted() {
    if (this.darkMode) {
      document.body.classList.add('dark');
    }
  }
});

app.mount('#app');
