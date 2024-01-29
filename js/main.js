// recover method createApp from Vue
const { createApp } = Vue;

// creation of the APP
const app = createApp({
  data() {
    return {
      title: {
        mainText: "Primo titolo con Vue.js",
        titleClasses: ["display-3", "text-success", "fw-bold"],
      },
      src: "./img/logo.png",
      name: "",
    };
  },
});

// esecuzione del codice dell'app
app.mount("#app");
