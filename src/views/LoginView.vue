<template>
  
  <h1>Test Formulär </h1>
  
  <div class="form">
   <h2>LOGIN</h2>
   <form>
      <div class="form-container">
       <label for="username">USERNAME</label>
       <input type="text"  required>
      </div>
  
      <div class="form-container">
      <label for="password">PASSWORD</label>
      <input type="password"  required>
      </div>
  
      <div>  <!--Kommer ej göra nånting, ska mest föreställa "riktigt" formulär-->
       <input type="checkbox">
       <label>Remember me</label>
      </div>
  
      <button class="login-btn">LOGIN</button> <!--Denna knapp ska ta oss till HomeView.-->
      <p class="register">New here? Please <a href="#" class="register-link"><strong>Register</strong></a></p>
      
   </form>
  
  </div>
  
  <!--CREATE ACCOUNT ska endast dyka upp när använder trycker på 'Register'-->
  <!--När användaren fyllt i sin information och tryckt på SIGN UP. Ska använderaren skickas tillbaka till LOGIN-->
  
  <div class="form">
      <h2>CREATE ACCOUNT</h2>
      <form>
          <div class="form-container">
              <label for="username">CHOOSE A USERNAME</label>
              <input type="text"  v-model="username" required>
          </div>
  
          <div class="form-container">
              <label for="password">CHOOSE A PASSWORD</label>
              <input type="text" v-model="password" required>
          </div>
          <div class="form-container">
              <label for="password">TYPE PASSWORD AGAIN</label>
              <input type="password" required>
          </div>
  
          <div class="terms">
              <input id="check" type="checkbox" v-model="terms">
              <p>ACCEPT TERMS</p>
          </div>
          
          <button class="login-btn">SIGN UP</button>
  
  
          <!--Kollar av om v-model fungerar-->
          <p> Username: {{ username }}</p>
          <p>Password: {{ password }}</p>
          <p>Kolla terms: {{ terms }}</p>
        
      </form>
  </div>
  
  </template>
  
  <script>
  
   export default{
      data(){
          return{    // Dessa variabler ska sedan användas som villkor i formuläret. 
              username: "",
              password: "",
              terms: false
          }
      },
      methods: { // Härnäst kommer jag skapa funktionalitet i formuläret. Det kommer bli i CREATE ACCOUNT. 
  
      }
  }
  
  </script>
  
  <style>
  
  .form{
  
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
      background-color: #F8FAF4;
      text-align: center;
  }
  label{
      text-align: center;
      color: #aaa;    
      display: inline-block;
      margin: 20px 0 10px;
      font-size: 1rem;
      letter-spacing: 1;
  }
  .form-container{
      margin-bottom: 15px;
  
  }
  .login-btn{
      width: 100%;
      height: 40px;
      background-color: #A0BC59;
      color: white;
      border: solid black 1px;
      border-radius: 10px;
      margin-top: 10px;
  }
  
  input{
      background-color: seashell;
      color: black;
      display: block;
      padding: 5px 3px;
      width: 100%;
      
  }
  
  .register{
      margin-top: 40px;
  }
  .register-link{
    text-decoration: none;
  }
  
  .terms{
      display: flex;
      justify-content: space-between;
  }
  
  .terms p {
   
      margin-left: 20px;
  }
  #check{
      max-width: 15px;
      height: auto;
  }
  </style>