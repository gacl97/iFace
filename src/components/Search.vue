<template>
  <div class="search">
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'search',
  components: {
    
  },
  props: {
    search: {
      type: Function,
      required: true,
    },
    getResultValue: {
      type: Function,
      default: result => result,
    },
  },
  data: () => ({
    text: "",
    objects: null
  }),
  methods: {
    
  }
}
</script>

<style>
  .search {
    display: inline-block;
  }
  
</style>

