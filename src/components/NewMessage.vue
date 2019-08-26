<template>
  <div class="new-message">
    <div class="container darker" >
      <img src="../assets/profilepic.png" alt="Avatar" class="right">
      <p><input placeholder="Digite a mensagem" v-on:input="message.content = $event.target.value"></p>
      <v-btn 
        class="button"
        @click="send"
      >Enviar</v-btn>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'new-message',
  components: {
    
  },
  data: () => ({
    message: {
      content: null,
      receiver_id: null
    }
  }),
  props: {
    receiverId: {
      type: Number, 
      required: true
    }
  },
  methods: {

    send() {
      this.$http.post(process.env.VUE_APP_API + "users/" + this.$store.state.userId + "/messages", this.message).then(
        success => {
          console.log(success.body)
          
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    }
  },
  mounted() {
    this.message.receiver_id = this.$props.receiverId
  }
}
</script>

<style scoped>
  /* Chat containers */
.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
  width: 50%;
}

/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
}

/* Clear floats */
.container::after {
  content: "";
  clear: both;
  display: table;
}

/* Style images */
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

/* Style the right image */
.container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}
</style>

