<template>
  <div id="app">
    <form id="login-form" v-if="!userId" @submit="submitLogin">
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
        <input 
          class="button"
          type="submit"
          value="Enviar"
        >
      </p>
    </form>
    <div id="nav" v-if="userId">
      <router-link to="/">Home</router-link> 
      <router-link to="/perfil">Perfil</router-link>
      <router-link to="/amigos">Amigos</router-link>
      <router-link to="/comunidades">Comunidades</router-link>
    </div>
    <router-view v-if="userId"/>
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
      this.userId = 1;
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
  background-image: radial-gradient(teal,mediumseagreen);
}
#app {
  display: flex;
  height: 100%;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  display: block; /*Mostrar na vertical*/
  font-weight: bold;
  color: white; /* Green */
  background-color: mediumseagreen;
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
}

#nav a:hover {
  background-color: aquamarine;
}

#nav a.router-link-exact-active {
  background-color:aqua;
  color: black;
}

#login-form {
  width: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  /* padding: 42px 55px 45px 55px; */
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
  border-bottom: 2px solid blue;
}

.button {
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 27px;
  background:#333333;
  position: relative;
  margin-left: 30%;
  margin-right: 30%;
  transition: all 0.3s;
}

.button:hover {
  background: gray;
}

</style>
