<template>
  <div class="messages">
    <div class="message-list" v-if="messages">
      <message :message="message" v-for="message in messages" :key="message.id"/> 
      <new-message v-if="friendId" :receiverId="friendId"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '../components/Message.vue'
import NewMessage from '../components/NewMessage.vue'

export default {
  name: 'messages',
  components: {
    Message,
    NewMessage
  },
  data: () => ({
    messages: [],
    friendId: null
  }),
  methods: {
    getMessages() {
      
      this.$http.get("http://localhost:3000/users/" + this.$store.state.userId + "/messages").then(
        success => {
          console.log(success.body.messages)
          this.messages = success.body.messages.filter((value) => value.sender_id === this.friendId || value.receiver_id === this.friendId)
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    },
  },
  mounted() {
    this.friendId = this.$route.params.id
    this.getMessages()
  }
}
</script>

<style>
.message-list {
  width: 100%;
}
</style>

