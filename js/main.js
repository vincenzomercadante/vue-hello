// recover method createApp from Vue
const { createApp } = Vue;

// creation of the APP
const app = createApp({
  data() {
    return {
      title: "Primo titolo con Vue.js",
      src: "./img/logo.png",
    };
  },
});

// esecuzione del codice dell'app
app.mount("#app");
