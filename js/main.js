const { createApp } = Vue;

createApp({
  data() {
    return {
      data: [], // Album data will be fetched
    };
  },
  methods: {
    apiCall(url) {
      axios
        .get(url)
        .then((response) => {
          // Initialize the 'flipped' property for each album
          this.data = response.data.Albums.Album.map((album) => {
            return {
              ...album,
              flipped: false,
            };
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    toggleFlip(index) {
      this.data[index].flipped = !this.data[index].flipped;
    },
  },
  created() {
    this.apiCall("http://localhost:8888/boolean/php-dischi-json/api.php");
  },
}).mount("#app");
