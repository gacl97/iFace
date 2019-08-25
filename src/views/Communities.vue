<template>
  <div class="communities">
    <h3 v-if="ownedCommunities.length">Dono</h3>
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
export default {
  name: 'communities',
  components: {
    Community
  },
  data: () => ({
    ownedCommunities: null,
    memberCommunities: null
  }),
  methods: {
    getCommunities() {
      this.$http.get("http://localhost:3000/users/" + this.$globals.userId + "/communities").then(
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

