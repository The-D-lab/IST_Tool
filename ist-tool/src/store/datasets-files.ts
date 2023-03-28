import { del, set } from '@vue/composition-api';
import { defineStore } from 'pinia';

interface State {
  byDataID: Record<string, File[]>;
  patientId: string | null;
}

/**
 * Store the File objects associated with a given dataset.
 */
export const useFileStore = defineStore('files', {
  state: (): State => ({
    byDataID: {},
    patientId: ''
  }),
  getters: {
    getFiles: (state) => {
      return (dataID: string) => {
        if (dataID in state.byDataID) {
          return state.byDataID[dataID];
        }
        return null;
      };
    },
    getPatientID(): string | null {
      return this.patientId;
    },
  },
  actions: {
    remove(dataID: string) {
      if (dataID in this.byDataID) {
        del(this.byDataID, dataID);
      }
    },
    add(dataID: string, files: File[]) {
      set(this.byDataID, dataID, files);
    },
    setPatientID(name: string) {
      this.patientId = name;
    },
  },
});
