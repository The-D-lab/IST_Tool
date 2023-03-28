import { defineStore } from 'pinia';

interface State {
    currentPage: number | 0;
    itemsPerPage: number |10,
    totalItems: number | 0,
  }

export const usePaginationStore = defineStore({
    id: 'pagination',
    state: () => ({
      currentPage: 0,
      itemsPerPage: 10,
      totalItems: 0,
    }),
    getters: {
        getNextPage(): number | null{
            this.currentPage += 1;          
            return this.currentPage
        }
    },
    actions: {
        setCurrentPage(page: number) {
            this.currentPage = page;
        }
    },
  });