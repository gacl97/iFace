<template>  
  <div class="friends">
    <div class="friend-list">
      <friend :friend="friend" v-for="friend in friends" :key="friend.id" @click.native="viewMessages(friend)"/> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Friend from '../components/Friend.vue'

export default {
  name: 'friends',
  components: {
    Friend
  },
  data: () => ({
    friends: null
  }),
  methods: {
    
    viewMessages(friend) {
      this.$router.push({
        name: 'mensagens',
        params: {
          id: friend.id
        }
      })
    },
    getFriends() {
      this.$http.get(process.env.VUE_APP_API + "users/" + this.$store.state.userId + "/friends").then(
        success => {
          this.friends = success.body
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    }
  },
  mounted() {
    this.getFriends()
  }
}
</script>

<style>
.friends {
  margin: 10px 10px;
}
.friend-list {
  display: flex;
}
</style>

