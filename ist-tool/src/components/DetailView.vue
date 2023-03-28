<template>
    <div class="container">
      <button @click="openFileExplorer">Upload Detail File</button>
      <br/>
      <br/>
      <input type="file" ref="fileInput" @change="uploadExcelFile" style="display:none" accept=".csv, .xls, .xlsx"/>
      <textarea  :style="{ width: width + 'px', height: height + 'px' }" v-if="displayData" v-model="displayData">
        Display patient details
      </textarea>
      <br/>
      <br/>
      <br/>
      <h3> The Prediction of AI </h3> 
      <textarea disabled :style="{ width: width + 'px', height: height + 'px' }"  v-model="aiPredcition">
        Display patient details
      </textarea>
      <br/>
      <br/>
      <br/>
      <h3> To see the explanation click below</h3> 
      <button class="explanation" @click="handleBenignClick">Explanation</button>
      <br/>
      <h3> What is your prediction ?</h3>
      <div class="buttons">
        <button class="benign" @click="handleBenignClick">Benign</button>
        <button class="malignant" @click="handleMalignantClick">Malignant</button>
      </div>
    </div>
  </template>
  
  <script >

  import { useFileStore } from '../store/datasets-files';
  import { writeToExcel } from '../utils/writeExcel';

  export default {
    name: 'DetailView',
    data() {
      return {
        width: 300,
        height: 200,
        displayData: '',
        startTime: 0,
        endTime: 0,
        isTimerStarted: false,
        selectedValue: "",
        aiPredcition : "Prediction: Benign"
      };
    },
    methods: {
      handleBenignClick() {
        this.selectedValue = '0';  
        this.stopTimer();  
      },
      handleMalignantClick() {
        this.selectedValue = '1';          
        this.stopTimer();
      },
      openFileExplorer() {
      this.$refs.fileInput.click()
      },
      uploadExcelFile(event) {
        const reader = new FileReader()
        reader.readAsText(event.target.files[0])
        reader.onload = (e) => {
          const data = e.target.result
          const lines = data.split('\n')
          const headers = lines[0].split(',')
          for (let i = 1; i < lines.length; i++) {
            const line = lines[i].split(',')
            const obj = {}
            for (let j = 0; j < headers.length; j++) {
              obj[headers[j].trim()] = line[j].trim()
            }
            // if (obj.PatientID === useFileStore().getPatientID) {
            //   this.displayData = `PatientID: ${obj.PatientID}\nCenterID: ${obj.CenterID}\nGender: ${obj.Gender}\nAge: ${obj.Age}\nTobacco: ${obj.Tobacco}\nAlcohol: ${obj.Alcohol}\nPerformance_status: ${obj.Performance_status}\nHPV status (0=-, 1=+): ${obj["HPV status (0=-, 1=+)"]}\nSurgery: ${obj.Surgery}\nChemotherapy: ${obj.Chemotherapy}`
            //   this.startTimer();
            //   break
            // }
            this.displayData = `PatientID: ${obj.PatientID}\nCenterID: ${obj.CenterID}\nGender: ${obj.Gender}\nAge: ${obj.Age}\nTobacco: ${obj.Tobacco}\nAlcohol: ${obj.Alcohol}\nPerformance_status: ${obj.Performance_status}\nHPV status (0=-, 1=+): ${obj["HPV status (0=-, 1=+)"]}\nSurgery: ${obj.Surgery}\nChemotherapy: ${obj.Chemotherapy}`
            this.startTimer();
          }
        }
      },
      startTimer() {
        if (this.isTimerStarted) {
          return;
        }
        this.startTime = new Date();
        this.isTimerStarted = true;
        this.timerIntervalId = setInterval(() => {
          this.endTime = new Date();
        }, 1000);
      },
      stopTimer() {
        if (!this.isTimerStarted) {
          return;
        }

        this.endTime = new Date();
        this.isTimerStarted = false;

        const timeDiff = this.endTime - this.startTime;
        // Convert milliseconds to seconds
        const timeTaken = Math.floor(timeDiff / 1000);


        writeToExcel(this.startTime, this.endTime, timeTaken, this.selectedValue );
      },

      readNonImageData(){
      }
    },
    mounted() {
      this.$on('getNonImageData',() => {
        readNonImageData();
      });
    },
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  textarea {
    border: 1px solid grey;
    resize: both;
    overflow: auto;
    padding: 10px;
    background-color: white;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: grey;
    color: white;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .benign {
    margin-right: 10px;
  }
  </style>
  