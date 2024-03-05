<template>
    <div>
      <h1 class="bounce-in" style="color: #A0BC59">{{ message }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Kommer snart'
      }
    }
  }
  </script>
  
  <style scoped>
  .bounce-in {
    animation: bounce-in 1s ease-out;
  }
  
  @keyframes bounce-in {
    0% {
      transform: translateY(-200%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>