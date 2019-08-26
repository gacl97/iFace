<template>
  <div class="community">
    <img class="profile-pic" v-if="!isNew" alt="Vue logo" src="../assets/logo.png" @click="updateCommunity">
    <img class="profile-pic" v-if="isNew" alt="Add" src="../assets/plus1.png" @click="createCommunity">
    <div class="container">
      <h4><b>{{community.name}}</b></h4> 
      <p>{{community.content}}</p> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'community',
  components: {
    
  },
  methods: {
    createCommunity() {
      this.$router.push({
        name: 'criar-comunidade'
      })
    },
    updateCommunity() {
      if (this.community.owner_id === this.$store.state.userId) {
        this.$router.push({
          name: 'editar-comunidade',
          params: {
            id: this.community.id
          }
        })
      }
    }
  },
  props: {
    community: {
      type: Object, 
      required: true
    },
    isNew: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style>
.profile-pic {
  height: 150px;
  width: 150px;
}

.community {
  /* Add shadows to create the "community" effect */
  padding-top: 16px;
  text-align: center;
  margin: 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background: #FFFCF9;
}

/* On mouse-over, add a deeper shadow */
.community:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the community container */
.container {
  width: 150px;
  padding: 2px 16px;
}
</style>

