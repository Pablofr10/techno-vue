export default {
  data() {
    return {
      loading: true,
      api: null,
    };
  },
  methods: {
    fetchData(url) {
      this.loading = true;
      this.api = null;
      fetch(`http://localhost:3000${url}`)
        .then((res) => res.json())
        .then((j) => {
          this.api = j;
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchData();
  },
};
