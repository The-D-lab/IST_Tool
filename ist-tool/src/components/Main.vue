<!-- <template>
    <div>
      <button @click="goToClinicalOnly">Clinicals Only</button>
      <button @click="goToAIAndClinicals">AI + Clinicals</button>
      <button @click="goToAIAndClinicalAndExplainability">AI + Clinical + Explainability</button>
    </div>
  </template> -->

  <!-- <template>
    <div class="container">
      <div class="buttons">
        <button class="button is-primary is-large" @click="goToClinicalOnly">Clinicals Only</button>
        <button class="button is-primary is-large" @click="goToAIAndClinicals">AI + Clinicals</button>
        <button class="button is-primary is-large" @click="goToAIAndClinicalAndExplainability">AI + Clinical + Explainability</button>
      </div>
    </div>
  </template>

<style>
.container {
 /* background-color: #e7d7d7; */
  /* display: flex; */
  justify-content: center;
  align-items: center; 
  height: 100vh;
}

.buttons {
  margin-top: 50px;
  text-align: center;
}

.button {
  margin: 10px;
  /* background: linear-gradient(to bottom, #ff7f00, #ff5500); */
  box-shadow: 0px 5px 5px #888888;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  height: 80px; 
  width: 200px; 
  font-size: 20px;
}

.button:hover {
  transform: translate(0, -5px); /* lift button on hover */
  box-shadow: 0px 10px 10px #888888; /* stronger 3D effect on hover */
}
</style> -->

<template>
  <div class="container">
    <div class="buttons">
      <button @click="goToClinicalOnly" class="clinical-only-button">Clinical Only</button>
      <button @click="goToAIAndClinicals" class="ai-plus-clinicals-button">AI + Clinicals</button>
      <button @click="goToAIAndClinicalAndExplainability" class="ai-plus-clinical-plus-explainability-button">AI + Clinical + Explainability</button>
    </div>
  </div>
</template>

<script>
   export default {
    name: 'Main',
    created() {
    this.$router.push({path: '/'}).catch(error =>{
        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')) {
        }  
    });
    },
    methods: {
      goToClinicalOnly() {
        if (this.$route.path !== '/app-view') {
          this.$router.push('/app-view')
        }
      },
      goToAIAndClinicals() {
        if (this.$route.path !== '/data-form') {
          this.$router.push('/data-form')
      } 
      },
      goToAIAndClinicalAndExplainability() {
        if (this.$route.path !== '/data-form2') {
          this.$router.push('/data-form2')
      } 
      }
    },
    data() {
    return{
      showDataForm: false,
      showAppView: false
    }
  }
  }
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #313030;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.clinical-only-button,
.ai-plus-clinicals-button,
.ai-plus-clinical-plus-explainability-button {
  padding: 20px 40px;
  margin: 20px;
  font-size: 24px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 0ex;
  box-shadow: 0px 10px 20px rgb(255, 255, 255);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: white;
  color: black;
}

.clinical-only-button:hover,
.ai-plus-clinicals-button:hover,
.ai-plus-clinical-plus-explainability-button:hover {
  transform: translateY(-10px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
}
</style>

  