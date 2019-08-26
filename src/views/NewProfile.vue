<template>
  <div class="new-profile">
    <img class="profile-pic" alt="Profile Pic" src="../assets/profilepic.png">
      <p><b>Login: </b><input placeholder="" v-on:input="updatedProfile.login = $event.target.value"></p>
      <p><b>Senha: </b><input type="password" placeholder="" v-on:input="updatedProfile.password = $event.target.value"></p>
      <p><b>Nome: </b><input placeholder="" v-on:input="updatedProfile.name = $event.target.value"></p> 
      <p><b>Idade: </b><input placeholder="" v-on:input="updatedProfile.age = $event.target.value"></p> 
      <p><b>Telefone: </b><input placeholder="" v-on:input="updatedProfile.phone = $event.target.value"></p> 
      <p><b>Status: </b><input placeholder="" v-on:input="updatedProfile.status = $event.target.value"></p> 
      <v-btn class="button" @click="createProfile()">Salvar</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'new-profile',
  components: {
    
  },
  data: () => ({
    updatedProfile: {
      login: null,
      password: null,
      name: null,
      age: null,
      phone: null,
      status: null,
    },
  }),
  methods: {
    
    createProfile() {

      this.$http.post("http://localhost:3000/users/", this.updatedProfile).then(
        () => {
          this.$router.push({
            name: 'home'
          })
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      ) 
    }
  },
}
</script>

<style>
.new-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.profile-pic {
    height: 200px;
    width: 200px;
}
</style>

