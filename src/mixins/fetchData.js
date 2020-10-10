export default {
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  methods: {
    fetchData(url) {
      console.log(url);
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
        .then((res) => res.json())
        .then((j) => {
          setTimeout(() => {
            this.api = j;
            this.loading = false;
          }, 1500);
        });
    },
  },
  created() {
    this.fetchData();
  },
};
