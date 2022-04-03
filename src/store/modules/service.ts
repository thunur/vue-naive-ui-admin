import { defineStore } from 'pinia';
import { store } from '/@/store';
interface ServiceState {
  list: any;
}

export const useServiceStore = defineStore({
  id: 'app-service',
  state: (): ServiceState => ({
    list: {},
  }),
  getters: {
    // 返回service list
    service(): any {
      return this.list;
    },
  },
  actions: {
    setService(service: any) {
      this.list = service;
    },
  },
});

// Need to be used outside the setup
export function useServiceStoreWithOut() {
  return useServiceStore(store);
}
