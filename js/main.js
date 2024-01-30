// recover method createApp from Vue
const { createApp } = Vue;

// creation of the APP
const app = createApp({
  data() {
    return {
      title: {
        mainText: "First title with Vue.js",
        titleClasses: ["display-3", "text-success", "fw-bold"],
      },
      src: "logo.png",
      name: "",
    };
  },
});

// app mounting
app.mount("#app");
