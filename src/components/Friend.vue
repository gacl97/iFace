<template>
  <div class="friend">
    <img class="profile-pic" alt="Profile Pic" src="../assets/profilepic.png">
    <div class="container">
      <h4><b>{{friend.name}}</b></h4> 
      <p>{{friend.status}}</p> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'friend',
  components: {
    
  },
  props: {
    friend: {
      type: Object, 
      required: true
    }
  }
}
</script>

<style scoped>
.profile-pic {
  height: 150px;
  width: 150px;
}

.friend {
  /* Add shadows to create the "friend" effect */
  padding-top: 16px;
  text-align: center;
  margin: 0px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background: #FFFCF9;
}

/* On mouse-over, add a deeper shadow */
.friend:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the friend container */
.container {
  width: 150px;
  padding: 2px 16px;
}
</style>

