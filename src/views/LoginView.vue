<template>
  <h1>Test Formulär</h1>

  <div v-if="!switchForm" class="form">
    <h2>LOGIN</h2>
    <form>
      <div class="form-container">
        <label for="username">USERNAME</label>
        <input type="text" v-model="username" required />
      </div>

      <div class="form-container">
        <label for="password">PASSWORD</label>
        <input type="password" v-model="password" required />
      </div>

      <button @click="login" class="login-btn">LOGIN</button>

      <!--Denna knapp ska ta oss till HomeView.-->
      <p class="register">
        NEW HERE?
        <a href="#" @click="switchForm = true" class="register-link"
          ><strong>REGISTER</strong></a
        >
      </p>

      <div v-if="loginError" class="error-message">
        <p>You must type Username and Password correct.</p>
        <p>Please type in again.</p>
        <button @click="hideBtn">GOT IT</button>
      </div>
    </form>
  </div>

  <!--CREATE ACCOUNT ska endast dyka upp när använder trycker på 'Register'-->
  <!--När användaren fyllt i sin information och tryckt på SIGN UP. Ska användaren skickas tillbaka till LOGIN-->

  <div v-if="switchForm" @submit.prevent="register" class="form">
    <h2>CREATE ACCOUNT</h2>
    <form @submit="submitForm">
      <div class="form-container">
        <label for="username">CHOOSE A USERNAME</label>
        <input type="text" v-model="username" />
      </div>

      <div class="form-container">
        <label for="password">CHOOSE A PASSWORD</label>
        <input type="text" v-model="password" />
      </div>
      <div class="form-container">
        <label for="password">TYPE PASSWORD AGAIN</label>
        <input type="text" v-model="confirmPassword" />
      </div>

      <div class="terms">
        <input id="check" type="checkbox" v-model="terms" />
        <p>ACCEPT TERMS</p>
      </div>

      <button class="login-btn">SIGN UP</button>

      <div v-if="showErrorMessage" class="error-message">
        <p>* You need to type in 10 letters in Username</p>
        <p>
          * You need to type in 10 letters in Password <br />
          In Upper and Lowercase
        </p>

        <p>* And you also need to fill in the checkbox to confirm the terms</p>
        <button @click="hideBtn">GOT IT</button>
      </div>

      <div v-if="createAcc" class="create-acc">
        <p>Please wait...</p>
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
      confirmPassword: "",
      terms: false,
      switchForm: false,
      showErrorMessage: false,
      loginError: false,
      createAcc: false,
      loginAccess: true,
    };
  },

  methods: {
    // Har gjort om så allting ligger i funktion via methods. Istället kommer det nu vara möjligt att kunna skriva in fel eller inget alls och trycker man då på Sign up, så får man felmeddelandet.
    register() {
      let lowerCase = /[a-z]/.test(this.password);
      let upperCase = /[A-Z]/.test(this.password);

      console.log(
        "Username:",
        this.username + "Password:",
        this.password + "Confirm Password:",
        this.confirmPassword + " Terms:",
        this.terms + " Liten bokstav: ",
        lowerCase,
        upperCase
      );

      if (
        !(this.username.length >= 10) ||
        !(this.password.length >= 10) ||
        !lowerCase ||
        !upperCase ||
        !this.terms ||
        !(this.password === this.confirmPassword)
      ) {
        this.showErrorMessage = true;
      } else {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);

        console.log(
          "Username & password sparas: ",
          this.username,
          this.password
        );

        this.createAcc = true;
        setTimeout(() => {
          (this.switchForm = false), (this.createAcc = false);
          (this.username = ""),
            (this.password = ""),
            (this.confirmPassword = ""),
            (this.terms = false);
        }, 3000);
      }
    },

    hideBtn() {
      this.showErrorMessage = false;
      this.loginError = false;

      if (!this.switchForm) {
        (this.username = ""), (this.password = ""), (this.confirmPassword = "");
      }
    },
    login() {
      if (!this.username && !this.password) {
        return;
      }
      const storedUsername = String(localStorage.getItem("username"));
      const storedPassword = String(localStorage.getItem("password"));

      console.log("Sparat användarnamn:", storedUsername);
      console.log("Sparat lösenord: ", storedPassword);

      if (
        this.username === storedUsername &&
        this.password === storedPassword
      ) {
        alert("Inloggningen lyckades!");
        this.loginAccess = false;
        this.$router.push("/");
      } else {
        this.loginError = true;
      }
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  min-height: 550px;
  margin: 30px auto;
  padding: 40px;
  border-bottom: solid black 1px;
  border-radius: 10px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(199, 226, 145, 1) 0%,
    rgba(160, 188, 89, 0.79) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  text-align: center;
  box-shadow: 10px 5px 5px rgb(86, 82, 82);
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
  background-color: #a0bc59;
  width: 100%;
  height: 40px;
  color: white;
  cursor: pointer;
  border: solid black 1px;
  border-radius: 10px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.login-btn:hover {
  background-color: green;
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
  color: green;
  font-style: italic;
  margin-left: 10px;
}

.terms {
  display: flex;
  justify-content: space-between;
}

.terms p {
  margin-left: 20px;
  margin-top: 5px;
  padding-top: 5px;
}
#check {
  max-width: 15px;
  height: auto;
}

.error-message p {
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
}

.error-message {
  max-width: 300px;
  padding: 20px;
  border: solid #ff3333 0.5px;
  border-bottom-right-radius: 80px 80px;
  background-color: seashell;
  margin-top: 20px;
  text-align: center;
}

.error-message button {
  color: #ff055d;
  padding: 0.8rem 1.7em;
  background-color: transparent;
  border-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  box-shadow: 7px 3px 1px rgb(86, 82, 82);
}

.error-message button:hover {
  background-color: #dcd6d8;
  border-color: #ff055d;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
.create-acc {
  margin-top: 25px;
}
.create-acc p {
  font-size: 1.3rem;
}
</style>
