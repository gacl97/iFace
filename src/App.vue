<template>
  <div id="app">
    <div id="login-form" v-if="!userId" @submit="submitLogin">
      <p>
        <label for="login">Login</label>
        <br>
        <input
          id="login"
          v-model="login"
          type="text"
          name="login"
          class="field"
        >
      </p>
      <p>
        <label for="password">Password</label>
        <br>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          class="field"
        >
      </p>
      <p>
        <v-btn 
          class="button"
          @click="submitLogin"
        >Enviar</v-btn>
      </p>
    </div>
    <div id="nav" v-if="userId">
      <router-link to="/">Home</router-link> 
      <router-link to="/perfil">Perfil</router-link>
      <router-link to="/amigos">Amigos</router-link>
      <router-link to="/comunidades">Comunidades</router-link>
      <a href="/" @click="logout">Logout</a>
    </div>
    <div id="body" v-if="userId">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data: () => ({
    userId: null,
    login: "",
    password: ""
  }),
  methods: {
    submitLogin() {
      this.$http.post("http://localhost:3000/login",{login: this.login, password: this.password}).then( 
        success => {
          if (!success.body) {
            console.log("Senha ou login está incorreto.")
          } else {
            console.log(success.body)
            this.userId = success.body.id
          }
        }, failure => {console.log("Falha ao contato do backend")}
      )
    },
    logout() {
      this.userId = null
      this.login = ""
      this.password = ""
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
}
body {
  margin: 0; 
  background-color:#B1EdE8;
}
#app {
  display: flex;
  height: 100%;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#nav {
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
}

#nav a {
  display: block; /*Mostrar na vertical*/
  font-weight: bold;
  color: black; /* Green */
  background-color: #92DCE5;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 0px 0px 3px 0px black;
}

#nav a:hover {
  background-color: #C9ECEF;
}

#nav a.router-link-exact-active {
  background-color:#FFFCF9;
  color: black;
}

#login-form {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-right: 40%;
  margin-left: 40%;
  padding: 10px 20px;
}

label {
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
  padding-left: 5px;
}

.field {
  height: 40px;
  background: transparent;
  font-size: 18px;
  color: #333333;
  line-height: 1.2;
  outline: none;
  border: none;
  border-bottom: 2px solid #666666;
}

.field:focus {
  border-bottom: 2px solid #FF6978;
}


.button {
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  background: #000000;
  position: relative;
  margin-left: 30%;
  margin-right: 30%;
  transition: all 0.3s;
}

.button:hover {
  background: #222222;
}

#body {
  height: 95%;
  width: 83.5%;
  border-radius: 10px;
  background-color: #FFFCF9;
}
</style>
