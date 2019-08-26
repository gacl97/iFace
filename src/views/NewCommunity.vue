<template>
  <div class="new-community">
    <img class="community-pic" alt="Vue logo" src="../assets/logo.png">
    <div v-if="community && editing">
        <p><b>Nome: </b><input :placeholder="community.name" v-on:input="updatedCommunity.name = $event.target.value"></p> 
        <p><b>Descrição: </b><input :placeholder="community.content" v-on:input="updatedCommunity.content = $event.target.value"></p> 
        <v-btn class="button" @click="updateCommunity()">Salvar</v-btn>
    </div>
    <div v-if="!editing">
        <p><b>Nome: </b><input placeholder="" v-on:input="updatedCommunity.name = $event.target.value"></p> 
        <p><b>Descrição: </b><input placeholder="" v-on:input="updatedCommunity.content = $event.target.value"></p> 
        <v-btn class="button" @click="createCommunity()">Salvar</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'new-community',
  components: {
    
  },
  data: () => ({
    community: null,
    updatedCommunity: {
        name: null,
        content: null
    },
    editing: false
  }),
  methods: {
    
    getCommunity() {
      this.$http.get(process.env.VUE_APP_API + "communities/" + this.$route.params.id).then(
        success => {
          this.community = success.body
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    },
    createCommunity() {
      this.$http.post(process.env.VUE_APP_API + "users/"+this.$store.state.userId+"/communities/", this.updatedCommunity).then(
        success => {
          this.$router.push({
            name: 'comunidades'
          })
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    },
    updateCommunity() {
      Object.keys(this.updatedCommunity).forEach((key) => {
        if (this.updatedCommunity[key] == null) {
          delete this.updatedCommunity[key]
        }
      })
      if (Object.keys(this.updatedCommunity).length) {
        this.$http.put(process.env.VUE_APP_API + "users/" + this.$store.state.userId + "/communities/" + this.$route.params.id, this.updatedCommunity).then(
          success => {
            this.$router.push({
              name: 'comunidades'
            })
          }, failure => {
            console.log(failure)
            alert("Falha ao contato do backend")
          }
        )
      } else {
        
      }
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.editing = true
      this.getCommunity()
    }
  }
}
</script>

<style>
.new-community {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.community-pic {
    height: 200px;
    width: 200px;
}
</style>

