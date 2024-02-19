<template>

<!--David Nilsson kör Login formulär-->

<!--Jag vill även lägga till ikoner för username & password-->

<div>
  <form class="form-container">
   <h2>Login</h2>
   <input type="text" v-model="username">
   <input type="text" v-model="password">
   <input type="checkbox">
   <p>Forgot password?</p>
   <button>Login</button>
   <p>Don't have an account?</p>
   <p>Register</p>
 </form>
</div>

<!--Denna ska endast visas om användaren inte har ett konto.-->
<!--Login formuläret försvinner då, och när användaren tryckt på Login igen, då kommer man tillbaka till Login sidans-->
<!--Username & Password ska ha villkor. Dvs x antal bokstäver, stora/små bokstäver-->
<!--Om villkoren ej uppfylls, ska det bli rödmarkerat. Grönt om allt uppfylls-->

<div>
    <form class="form-container">
      <h2>Create Account</h2>
      <input type="text" v-model="username">
      <input type="text" v-model="password">
      <input type="text" v-model="password">
      <button>Sign up</button>
      <p>Already have an account? Login</p>
    </form>
</div>


</template>

<script>

export default{

    data(){
        return{
        username: "",
        password: ""
        }
    }
    // Jag kommer använda computed() för att kolla igenom villkoren.
    // En v-if på Register formuläret.
}

</script>

<style>

</style>
