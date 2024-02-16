<template>

<!--David Nilsson kör Login formulär-->
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

<div>
    <form class="form-container">
      <h2>Create Account</h2> 
      <input type="text" v-model="username">
      <input type="text" v-model="password"> 
      <input type="text" v-mdel="password">
      <button>Sign up</button>
      <p>Already have an account?</p>
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
}

</script>