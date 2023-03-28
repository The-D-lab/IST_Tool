<template>
    <div>
      <h1>Data Form</h1>
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" placeholder="Enter name">
      <br>
      <label for="age">Age:</label>
      <input v-model="age" type="number" id="age" placeholder="Enter age">
      <br>
      <label for="address">Address:</label>
      <input v-model="address" type="text" id="address" placeholder="Enter address">
      <br>
      <button @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        age: '',
        address: '',
      }
    },
    methods: {
      submitForm() {
        // handle form submission here
        this.$router.push({path: '/main'})
      },
    },
  }
  </script>
  