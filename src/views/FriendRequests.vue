<template>
  <div class="friend-requests">
    <autocomplete
      :search="search"
      placeholder="Buscar amigo"
      aria-label="Buscar amigo"
      :get-result-value="getResultValue"
      @submit="handleSubmit"
    ></autocomplete>
    <h3>Pedidos enviados</h3>
    <div class="outgoing request-list"> 
      <friend :friend="request.friend" v-for="request in received" :key="request.id" /> 
    </div>
    <h3>Pedidos recebidos</h3>
    <div class="incoming request-list"> 
      <friend :friend="request.user" v-for="request in sent" :key="request.id" @click.native="accept(request)"/> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Friend from '../components/Friend.vue'
import Autocomplete from '@trevoreyre/autocomplete-vue'
export default {
  name: 'friend-requests',
  components: {
    Friend,
    Autocomplete
  },
  data: () => ({
    friendSearch: [],
    searchResult: null,
    loading: false,
    sent: null,
    received: []
  }),
  methods: {

    accept(request) {
      
      if (confirm("Aceitar pedido?")) {
        this.$http.put("http://localhost:3000/users/" + this.$store.state.userId + "/friend_requests/" + request.id, {},
        () => {
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        })
      }
    },
    handleSubmit(result) {
      if (confirm("adicionar "+result.name+" como amigo?")) {
        this.$http.post("http://localhost:3000/users/" + this.$store.state.userId + "/friend_requests/", {
          friend_id: result.id 
        },
        () => {
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
    search(input){
      return new Promise(resolve => {
        const url = "http://localhost:3000/users/"

        fetch(url)
          .then(response => response.json())
          .then(data => {
            resolve(data.filter((value) => value.id != this.$store.state.userId && value.name.toLowerCase().startsWith(input.toLowerCase())))
          })
      })
    },
    getFriends() {
      this.$http.get("http://localhost:3000/users/" + this.$store.state.userId + "/friend_requests").then(
        success => {
          console.log(success.body)
          this.sent = success.body.incoming
          this.received = success.body.outgoing
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    }
  },
  mounted() {
    this.getFriends()
  },
  watch: {
    getFriends() {
      this.$http.get("http://localhost:3000/users/" + this.$store.state.userId + "/friend_requests").then(
        success => {
          console.log(success.body)
          this.sent = success.body.incoming
          this.received = success.body.outgoing
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    }
  }
}
</script>

<style>
.friend-requests {
  margin: 10px 10px;
}
.request-list {
  display: flex;
}
h3 {
  text-align: center;
  background-color: #92DCE5; 
  padding: 10px 0;
  border-radius: 10px; 
}
</style>

