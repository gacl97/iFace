<template>
  <div class="friends">
      <div v-for="friend in friends" :key="friend.id">
        <friend :friend="friend"/> 
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
    getFriends() {
      this.$http.get("http://localhost:3000/users/" + this.$globals.userId + "/friends").then(
        success => {
          console.log(success)
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
    display: flex;
    margin: 10px 10px;
  }
</style>

