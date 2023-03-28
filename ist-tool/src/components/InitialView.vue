<!-- <template>
    <div>
      <button v-on:click="navigateToClinicalsOnly">Clinicals only</button>
      <button v-on:click="navigateToAIAndClinicals">AI + Clinicals</button>
      <button v-on:click="navigateToAIAndClinicalsAndExplain">AI + Clinicals + Explain</button>
    </div>
  </template>
  
  <script >
  export default {
    methods: {
      navigateToClinicalsOnly() {
        this.$router.push({ name: 'clinicalsOnly' })
      },
      navigateToAIAndClinicals() {
        this.$router.push({ name: 'aiAndClinicals' })
      },
      navigateToAIAndClinicalsAndExplain() {
        this.$router.push({ name: 'aiAndClinicalsAndExplain' })
      },
    },
  };
  </script> -->

  <template>
    <div>
      <button @click="buttonClicked(1)">Button 1</button>
      <button @click="buttonClicked(2)">Button 2</button>
      <button @click="buttonClicked(3)">Button 3</button>
    </div>
  </template>
  

  <script>
export default {
    name: 'MyComponent',
    data() {
        return {}
    },
  methods: {
    buttonClicked(buttonNumber) {
    }
  }
}
</script>

  