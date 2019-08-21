<template>
  <div class="friend">
    <img alt="Profile Pic" src="../assets/profilepic.png">
    <div class="name">
        {{friend.name}}
    </div>
    <div class="status">
        {{friend.status}}
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

<style>
  .friend {
    display: inline-block;
  }
</style>

