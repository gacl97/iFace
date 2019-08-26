<template>
  <div class="communities">
    <autocomplete
      :search="search"
      placeholder="Buscar comunidade"
      aria-label="Buscar comunidade"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
    ></autocomplete>
    <h3 >Dono</h3>
    <div class="owned-communities">
      <community :community="community" v-for="community in ownedCommunities" :key="community.id"/>
      <community :community="{name: 'Adicionar comunidade', content: ''}" :isNew='true'/> 
    </div>
    <h3 v-if="memberCommunities.length">Membro</h3>
    <div class="member-communities">
      <community :community="community" v-for="community in memberCommunities" :key="community.id"/> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Community from "../components/Community.vue"
import Autocomplete from '@trevoreyre/autocomplete-vue' 
export default {
  name: 'communities',
  components: {
    Community,
    Autocomplete
  },
  data: () => ({
    ownedCommunities: [],
    memberCommunities: [],
    communitySearch: [],
    searchResult: null,
    loading: false
  }),
  methods: {
    handleSubmit(result) {
      
      console.log((result.users.map((user) => user.id) + "," + this.$store.state.userId).split(","))
      if (confirm("Entrar na comunidade "+result.name+"?")) {
        this.$http.put(process.env.VUE_APP_API + "communities/" + result.id, {
          community: {
            user_ids: (result.users.map((user) => user.id) + "," + this.$store.state.userId).split(",")
          }
        },
        () => {

        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        })
      }
    },
    getResultValue(result) {
      return result.name
    },
    search(input){
      return new Promise(resolve => {
        const url = process.env.VUE_APP_API + "communities/"

        fetch(url)
          .then(response => response.json())
          .then(data => {
            resolve(data.filter((value) => value.id != this.$store.state.userId && value.name.toLowerCase().startsWith(input.toLowerCase())))
          })
      })
    },
    getCommunities() {
      this.$http.get(process.env.VUE_APP_API + "users/" + this.$store.state.userId + "/communities").then(
        success => {
          console.log(success)
          this.ownedCommunities = success.body.owner
          this.memberCommunities = success.body.member
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    }
  },
  mounted() {
    this.getCommunities()
  }
}
</script>

<style>
  .communities {
    margin: 50px 10px 0px;
    text-align: center;
  }
  .member-communities, .owned-communities {
    display: flex;
  }
  h3 {
    background-color: #92DCE5; 
    padding: 10px 0;
    border-radius: 10px; 
  }
</style>

