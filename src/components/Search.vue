<template>
  <div class="search">
    <autocomplete
    :search="search"
    placeholder="Procurar"
    aria-label="Procurar"
    :get-result-value="getResultValue"
    @submit="onSubmit"
  ></autocomplete>
  </div>
</template>

<script>
// @ is an alias to /src
import Autocomplete from '@trevoreyre/autocomplete-vue'
export default {
  name: 'search',
  components: {
    
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

