<template>
  <div class="friends">
    <autocomplete
      :search="search"
      placeholder="Procurar"
      aria-label="Procurar"
      :get-result-value="getResultValue"
      @submit="onSubmit"
    ></autocomplete>
    <friend :friend="friend" v-for="friend in friends" :key="friend.id"/> 
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
    friend: null,
    friendSearch: []
  }),
  methods: {
    handleSubimit(result) {
      if (confirm("adicionar "+result.name+" como amigo?")) {
        this.$http.post("http://localhost:3000/users/" + this.$globals.userId + "/friend_requests/", {
          friend_id: result.id 
        },
        success => {
          alert("Convite de amizade enviado.")
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        })
      }
    },
    getResultValue(result) {
      return result.name
    },
    search(input) {
      this.$http.get("http://localhost:3000/users/").then(
        success => {
          this.friendSearch = success.body.filter((value) => value.name.toLowerCase().startsWith(input.toLowerCase()))
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    },
    getFriends() {
      this.$http.get("http://localhost:3000/users/" + this.$globals.userId + "/friends").then(
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
    this.$http.get("http://localhost:3000/users/").then(
      success => {
        this.friendSearch = success.body
      }, failure => {
        console.log(failure)
        alert("Falha ao contato do backend")
      }
    )
  }
}
</script>

<style>
  .friends {
    display: flex;
    margin: 10px 10px;
  }
</style>

