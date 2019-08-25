<template>
  <div class="profile">
    <img class="profile-pic" alt="Profile Pic" src="../assets/profilepic.png">
    <div class="container" v-if="profile && !editing">
        <p><b>Nome: </b>{{profile.name}}</p> 
        <p><b>Idade: </b>{{profile.age}}</p> 
        <p><b>Telefone: </b>{{profile.phone}}</p> 
        <p><b>Status: </b>{{profile.status}}</p> 
        <v-btn class="button" @click="editing=true">Editar</v-btn>
    </div>
    <div class="container" v-if="profile && editing">
        <p><b>Nome: </b><input :placeholder="profile.name" v-on:input="updatedProfile.name = $event.target.value"></p> 
        <p><b>Idade: </b><input :placeholder="profile.age" v-on:input="updatedProfile.age = $event.target.value"></p> 
        <p><b>Telefone: </b><input :placeholder="profile.phone" v-on:input="updatedProfile.phone = $event.target.value"></p> 
        <p><b>Status: </b><input :placeholder="profile.status" v-on:input="updatedProfile.status = $event.target.value"></p> 
        <v-btn class="button" @click="saveProfile()">Salvar</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'profile',
  components: {
    
  },
  data: () => ({
    profile: null,
    updatedProfile: {
        name: null,
        age: null,
        phone: null,
        status: null,
    },
    editing: false
  }),
  methods: {
    getProfile() {
      this.$http.get("http://localhost:3000/users/" + this.$globals.userId).then(
        success => {
          console.log(success)
          this.profile = success.body
        }, failure => {
          console.log(failure)
          alert("Falha ao contato do backend")
        }
      )
    },
    saveProfile() {
      Object.keys(this.updatedProfile).forEach((key) => {
        if (this.updatedProfile[key] == null) {
          delete this.updatedProfile[key]
        }
      })
      this.$http.put("http://localhost:3000/users/" + this.$globals.userId, this.updatedProfile).then(
        success => {
        console.log(success)
        this.editing = false
        this.updatedProfile = {
          name: null,
          age: null,
          phone: null,
          status: null,
        },
        this.profile = success.body
        }, failure => {
        console.log(failure)
        alert("Falha ao contato do backend")
        }
      )
    }
  },
  mounted() {
    this.getProfile()
  }
}
</script>

<style>
.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.profile-pic {
    height: 200px;
    width: 200px;
}
</style>

