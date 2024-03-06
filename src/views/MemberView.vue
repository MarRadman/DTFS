<template>
  <div class="form">
    <h2>MEDLEM</h2>
    <form>
      <div class="form-container">
        <label for="username">ANVÄNDARE</label>
        <input type="text" required />
      </div>

      <div class="form-container">
        <label for="password">LÖSENORD</label>
        <input type="password" required />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dessa variabler ska sedan användas som villkor i formuläret.
      username: "",
      password: "",
      terms: false,
    };
  },
  methods: {
    // Härnäst kommer jag skapa funktionalitet i formuläret. Det kommer bli i CREATE ACCOUNT.
  },
};
</script>

<style>
.form {
  /*TODO: Plocka bort detta sen och lägg till detta i style.css */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  min-height: 550px;
  margin: 30px auto;
  padding: 40px;
  border: solid black 1px;
  border-radius: 10px;
  background-color: #f8faf4;
  text-align: center;
}
label {
  text-align: center;
  color: #aaa;
  display: inline-block;
  margin: 20px 0 10px;
  font-size: 1rem;
  letter-spacing: 1;
}
.form-container {
  margin-bottom: 15px;
}
.login-btn {
  width: 100%;
  height: 40px;
  background-color: #a0bc59;
  color: white;
  border: solid black 1px;
  border-radius: 10px;
  margin-top: 10px;
}

input {
  background-color: seashell;
  color: black;
  display: block;
  padding: 5px 3px;
  width: 100%;
}

.register {
  margin-top: 40px;
}
.register-link {
  text-decoration: none;
}

#checkBox_Login {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.terms {
  display: flex;
  justify-content: space-between;
}

.terms p {
  margin-left: 20px;
}
.check {
  max-width: 15px;
  height: auto;
}
</style>
