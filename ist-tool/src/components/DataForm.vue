<template>
    <div>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="form.name">
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age" v-model="form.age">
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Date of Birth</label>
          <input type="text" class="form-control" id="dateOfBirth" v-model="form.dateOfBirth">
        </div>
        <div class="form-group">
          <label for="zipCode">ZIP Code</label>
          <input type="text" class="form-control" id="zipCode" v-model="form.zipCode">
        </div>
      </form>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "DataForm",
    data() {
      return {
        form: {
          name: "",
          age: "",
          dateOfBirth: "",
          zipCode: ""
        }
      }
    }
  }
  </script>
  