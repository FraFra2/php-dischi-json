const { createApp } = Vue;

createApp({
  data() {
    return {
      data: [],
    };
  },
  methods: {
    apiCall(url) {
      axios
        .get(url)
        .then((response) => {
          this.data = response.data.Albums.Album;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.apiCall("http://localhost:8888/boolean/php-dischi-json/api.php");
  },
}).mount("#app");
