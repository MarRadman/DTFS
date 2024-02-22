<template>
  
  <h1>Test Formulär </h1>
  
  <div v-if="!switchForm" class="form">
   <h2>LOGIN</h2>
   <form>
      <div class="form-container">
       <label for="username">USERNAME</label>
       <input type="text"  required>
      </div>
  
      <div class="form-container">
      <label for="password">PASSWORD</label>
      <input type="text"  required>
      </div>
  
      <button @click="login" class="login-btn">LOGIN</button> <!--Denna knapp ska ta oss till HomeView.-->
      <p class="register">NEW HERE?  <a href="#" @click="switchForm = true" class="register-link"><strong>REGISTER</strong></a></p>
  
   </form>
  
  </div>
  
  <!--CREATE ACCOUNT ska endast dyka upp när använder trycker på 'Register'-->
  <!--När användaren fyllt i sin information och tryckt på SIGN UP. Ska användaren skickas tillbaka till LOGIN-->
  
  <div v-if="switchForm" class="form">
      <h2>CREATE ACCOUNT</h2>
      <form @submit="submitForm">
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
              <input type="text" v-model="confirmPassword" required>
          </div>
  
          <div class="terms">
              <input id="check" type="checkbox" v-model="terms">
              <p>ACCEPT TERMS</p>
          </div>
          
          <button class="login-btn" >SIGN UP</button>
  
          <div v-if="showErrorMessage" class="error-message">
            <p>* You need to type in 10 letters in Username</p>
            <p>* You need to type in 10 letters in Password</p>
            <p>* In upper and lowercase</p>
            <p>* And you also need to fill in the checkbox to confirm the terms</p>
            <button @click="hideBtn">GOT IT</button>
          </div>
  
      </form>
  </div>
  
  </template>
  
  <script>
  
   export default{
  
      data(){
          return{    // Dessa variabler ska sedan användas som villkor i formuläret. 
              username: "",
              password: "",
              confirmPassword: "",
              terms: false,
              switchForm: false,
              showErrorMessage: false,
          }
      },
  
      computed: {    // Jag sätter olika villkor för vad använder måste fylla i för att formuläret ska vara godkänt.
        lowerCase() {
          return /[a-z]/.test(this.password) 
        },
        upperCase(){
          return /[A-Z]/.test(this.password) 
        },
        
        isFormValid() {
          if(this.username.length >= 10 &&
          this.password.length >= 10 &&
          this.lowerCase &&
          this.upperCase &&
          this.terms &&
          this.password === this.confirmPassword){
            return true;
          }else{
            return false;
          }
  
        }
      },
  
      methods: { // Jag vill att när man uppfyllt alla krav och trycker på Sign Up knappen, ska man gå tillbaka till Login. 
                // Samt tömma fälten så inte all text ligger kvar.
        submitForm(){
          if(this.isFormValid){
            console.log('Det går att registrera.', this.isFormValid)
            alert('Registerar konto...')
  
            setTimeout(()=> {
              this.switchForm = false;
            
              this.username = "",
              this.password = "",
              this.terms = false,
              this.confirmPassword = ""
              
            },3000)
            
          }else{
            this.showErrorMessage = true 
            this.username = "";
            this.password = "";
            this.confirmPassword = "";
            this.terms = false; 
          }
   
        },
        hideBtn(){  // Enda som händer här är att när man trycker på knappen så försvinner 
          this.showErrorMessage = false;
        }
  
        
        // Skapa en timeout på typ 1.5 sekund, för att låta användaren hinna reagera vad det är som händer när man trycker på registera. Vill inte få det uppkastat direkt på sig.
        // Kanske en animation för att få en smooth övergång.
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
      border-bottom: solid black 1px;
      border-radius: 10px;
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(199,226,145,1) 0%, rgba(160,188,89,0.79) 100%, rgba(0,212,255,1) 100%);
      text-align: center;
      box-shadow: 10px 5px 5px rgb(86, 82, 82);
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
      background-color: #A0BC59;
      width: 100%;
      height: 40px;
      color: white;
      cursor: pointer;
      border: solid black 1px;
      border-radius: 10px;
      margin-top: 10px;
      transition: background-color 0.3s ease;
  }
  
  .login-btn:hover{
    background-color: green;
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
    color: green;
    font-style: italic;
    margin-left: 10px;
    
  }
  
  .terms{
      display: flex;
      justify-content: space-between;
  }
  
  .terms p {
   
      margin-left: 20px;
      margin-top: 5px;
      padding-top: 5px;
  }
  #check{
      max-width: 15px;
      height: auto;
  }
  .btn-green{
    background-color: green;
  }
  .btn-red{
    background-color: yellow;
  }
  
  .error-message{
    max-width: 300px;
    padding: 20px;
    border: solid #ff3333 .5px;
    border-bottom-right-radius: 80px 80px;
    background-color: seashell;
    margin-top: 20px;
    text-align: center;
  }
  .error-message p{
   
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
  
  }
  .error-message button{
   color: #ff055d;
   padding: 0.8em 1.7em;
   background-color: transparent;
   border-radius: .3em;
   position: relative;
   overflow: hidden;
   cursor: pointer;
   transition: .5s;
   font-weight: 400;
   font-size: 17px;
   border: 1px solid;
   font-family: inherit;
   text-transform: uppercase; 
   box-shadow: 7px 3px 1px rgb(86, 82, 82);
  }
  
  .error-message button:hover{
    background-color: #dcd6d8;
    border-color: #ff055d;
  }
  
  </style>