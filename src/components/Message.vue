<template>
  <div class="message">
    <div class="container" v-if="message.sender_id !== this.$store.state.userId">
      <img src="../assets/profilepic.png" alt="Avatar">
      <p>{{message.content}}</p>
    </div>
    <div class="container darker" v-if="message.sender_id === this.$store.state.userId">
      <img src="../assets/profilepic.png" alt="Avatar" class="right">
      <p>{{message.content}}</p>
    </div> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'message',
  components: {
    
  },
  props: {
    message: {
      type: Object, 
      required: true
    }
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

