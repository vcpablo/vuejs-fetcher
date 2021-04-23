<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div class="alert alert-danger" v-else-if="error">
      {{ error }}
    </div>
    <slot v-else :data="data" />
  </div>
</template>

<script>
export default {
  name: "Fetcher",
  props: {
    apiMethod: {
      type: Function,
      required: true,
    },
    params: {
      type: Object,
      default: () => {},
    },
    updater: {
      type: Function,
      default: (previous, current) => current,
    },
    initialValue: {
      type: [String, Array, Object],
      default: null,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
      data: this.initialState,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { apiMethod, params } = this;
      this.loading = true;

      try {
        const { data } = await apiMethod(params);
        this.data = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
