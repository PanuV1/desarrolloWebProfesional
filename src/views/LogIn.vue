<template>
  <div class="container">
    <div id="data">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entedr email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="pass" name="pass" type="number" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button @click="login" class="btn btn-primary mt-2">Submit</button>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";
import router from "@/router";

  export default {
    data(){
      return {
        email: '',
        pass: 0,
        isKeepLogin: false
      }
    },
    methods:{
      login(){
        let array = [];
        array = [this.email, this.pass, this.isKeepLogin]
        if(this.email === 'admin' && this.pass === 12345 && this.isKeepLogin === false){
          localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6ImFkbWluIiwicm9sbCI6IjEiLCJpc0tlZXBMb2dpbiI6ZmFsc2UsImlhdCI6MTUxNjIzOTAyMn0.H2Nc9cXoj7A2XSL-g00KVhxCqd0zjpvM8dx1sNA92b0')
          console.log(array)
          router.push({
            name: 'about'
          })
        } if(this.email === 'admin' && this.pass === 12345 && this.isKeepLogin === true){
          localStorage.setItem('jwt', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6ImFkbWluIiwicm9sbCI6IjEiLCJpc0tlZXBMb2dpbiI6dHJ1ZSwiaWF0IjoxNTE2MjM5MDIyfQ._aeK_KHdNOFOFW0t8KiKFhDUR0yH7S2UJp7VnoT9m4k')
          console.log(array)
        }if(this.email !== 'admin' && this.pass !== 12345){
          alert('Datos incorrectos')
          console.log(array)
        }
      }
    }
  }
</script>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
</style>